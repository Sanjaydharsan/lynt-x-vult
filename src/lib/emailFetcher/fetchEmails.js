'use server';

import { ImapFlow } from 'imapflow';
import { simpleParser } from 'mailparser';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { FormData, Blob } from 'formdata-node';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const uploadDir = path.join(process.cwd(), 'public', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

function sanitizeFolderName(name) {
  return name.replace(/[<>:"/\\|?*]+/g, '').trim();
}

function getProcessedFilePath(folderPath) {
  return path.join(folderPath, '.processed.json');
}

function getProcessedMessages(folderPath) {
  const filePath = getProcessedFilePath(folderPath);
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath));
}

function hasAlreadyProcessed(folderPath, messageId) {
  const data = getProcessedMessages(folderPath);
  return data.some(entry => entry.messageId === messageId);
}

function markAsProcessed(folderPath, meta) {
  const filePath = getProcessedFilePath(folderPath);
  const data = getProcessedMessages(folderPath);
  data.push(meta);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

async function postFormData(endpoint, formData, orgId) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  if (!apiUrl) {
    throw new Error('❌ Environment variable NEXT_PUBLIC_API_URL is not set');
  }

  const res = await fetch(`${apiUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'x-organization-id': orgId.toString(),
    },
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    console.error('Upload failed:', data);
  } else {
    console.log('Upload API response:', data);
  }

  return data;
}
export async function fetchAndUpload({ fromEmail, org_id }) {
 
  console.log("✅ Started Extracting the invoice from unread emails")

  const client = new ImapFlow({
    host: process.env.IMAP_HOST,
    port: Number(process.env.IMAP_PORT),
    secure: true,
    auth: {
      user: process.env.IMAP_USER,
      pass: process.env.IMAP_PASS,
    },
    logger: false,
  });

  await client.connect();
  await client.mailboxOpen('INBOX');

  for await (let message of client.fetch({ seen: false }, { uid: true, source: true })) {
    const parsed = await simpleParser(message.source);
    const messageId = parsed.messageId?.trim();

    const senderEmail = parsed.from?.value?.[0]?.address || '';
    if (
      !messageId ||
      !parsed.attachments?.length ||
      senderEmail.toLowerCase() !== fromEmail.toLowerCase()
    ) {
      continue;
    }

    const subject = parsed.subject || 'No Subject';
    const folderName = sanitizeFolderName(subject);
    const folderPath = path.join(uploadDir, folderName);

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    if (hasAlreadyProcessed(folderPath, messageId)) {
      continue;
    }

    const savedFiles = [];

    for (const attachment of parsed.attachments) {
      const filePath = path.join(folderPath, attachment.filename);
      fs.writeFileSync(filePath, attachment.content);
      savedFiles.push(attachment.filename);
    }

    markAsProcessed(folderPath, {
      messageId,
      from: parsed.from.text,
      subject,
      date: parsed.date || new Date().toISOString(),
    });

    console.log(`Batch Name: ${subject}`);
    console.log(`Files: ${JSON.stringify(savedFiles)}`);

    try {
      const formData = new FormData();
      formData.append('batchName', subject);
      formData.append('method', 'email_synchronization');
      for (const fileName of savedFiles) {
        const filePath = path.join(folderPath, fileName);
        const fileBuffer = fs.readFileSync(filePath);
        const file = new Blob([fileBuffer]);
        formData.append('file', file, fileName);
      }

      await postFormData('/orders-creation', formData, org_id);
    } catch (error) {
      console.error('Error while calling upload API:', error);
    }

    await client.messageFlagsAdd(message.uid, ['\\Seen']);
  }

  await client.logout();
}

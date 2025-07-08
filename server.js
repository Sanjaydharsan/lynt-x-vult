import express from 'express';
import next from 'next';
import cron from 'node-cron';
import { processFTPUploads, processBatches } from './src/jobs/ftpJobs.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Handle unhandled promise rejections and uncaught exceptions
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception thrown:', error);
  process.exit(1);
});

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3001;
const HOST = 'localhost';

const app = next({ dev: true, hostname: HOST, port: PORT });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve static files from public/uploads
  server.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));
  
  // Start the cron job every 5 minutes with better error handling
  try {
    cron.schedule('*/5 * * * *', async () => {
      console.log('⏰ Auto Cron Job Started...');
      try {
        await processFTPUploads();
        await processBatches();
        console.log('✅ Cron Job Completed Successfully');
      } catch (jobError) {
        console.error('🔥 Error in Cron Job:', jobError.message || jobError);
      }
    }, {
      scheduled: true,
      timezone: "America/New_York"
    });
    console.log('📅 Cron job scheduled successfully');
  } catch (cronError) {
    console.error('🔥 Failed to schedule cron job:', cronError);
    
    // Fallback: Run FTP processing once on startup
    console.log('🔄 Running FTP processing once on startup...');
    setTimeout(async () => {
      try {
        await processFTPUploads();
        await processBatches();
        console.log('✅ Startup FTP processing completed');
      } catch (startupError) {
        console.error('🔥 Startup processing error:', startupError.message);
      }
    }, 5000);
  }

  //server.all('*', (req, res) => handle(req, res));
  server.use((req, res) => handle(req, res));

  server.listen(PORT, HOST, () => {
    console.log(`🚀 Server running at http://${HOST}:${PORT}`);
    console.log(`📁 Static files served from: /uploads`);
  });
});

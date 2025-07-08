import { XeroClient } from "xero-node";

export const xero = new XeroClient({
  clientId: process.env.XERO_CLIENT_ID,
  clientSecret: process.env.XERO_CLIENT_SECRET,
  redirectUris: [process.env.NEXT_PUBLIC_XERO_REDIRECT_URI],
  scopes: [
    "openid",
    "profile",
    "email",
    "accounting.transactions",
    "accounting.contacts",
    "accounting.settings",
    "offline_access",
  ],
});

// ✅ Add these missing exports:
export async function loadTokens() {
  const tokenSetJson = JSON.parse(process.env.XERO_TOKEN_SET || "{}");
  if (!tokenSetJson.id_token) {
    throw new Error("Token set is missing or invalid");
  }
  await xero.setTokenSet(tokenSetJson);
}

export async function requireConnection() {
  const connections = await xero.updateTenants();
  if (!connections?.length) {
    throw new Error("No Xero connections available");
  }
}

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

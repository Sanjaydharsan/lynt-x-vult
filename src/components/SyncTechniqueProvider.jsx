"use client";

import { useEffect, useState, useTransition } from "react";
import { useUser } from "@clerk/nextjs";
import { useGetOrganization } from "@/hooks/organization";
import { fetchAndUpload } from "@/lib/emailFetcher/fetchEmails";

export default function SyncTechniqueProvider() {
  const [_, startTransition] = useTransition();
  const { user, isLoaded } = useUser();
  const createdby = user?.id;
  console.log("createdby", createdby);
  const { organization, isLoading, isError } = useGetOrganization(createdby);
  const [fromEmail, setFromEmail] = useState("");
  const [syncMethods, setSyncMethods] = useState([]);

  console.log("organization from hook:", organization);

  const handleSyncXero = async (organizationId) => {
    console.log("Xero sync called", organizationId);
    try {
      const res = await fetch("/api/xero/xero-sync", {
        method: "POST",
        body: JSON.stringify({ organizationId }),
      });
      const data = await res.json();
      console.log("Xero sync result:", data);
    } catch (err) {
      console.error("Xero sync error:", err);
    }
  };

  const handleSyncZoho = async (organizationId) => {
    try {
      const res = await fetch("/api/zoho/zohosync", {
        method: "POST",
        body: JSON.stringify({ organizationId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("Zoho sync result:", data);
    } catch (err) {
      console.error("Zoho sync error:", err);
    }
  };

  //   useEffect(() => {
  //     if (organization && !isLoading && !isError) {
  //       const methods = organization?.syncmethod
  //         ? organization.syncmethod.split(',').map((m) => m.trim())
  //         : [];

  //       const orgId = organization.id;

  //       // Email sync (2 minutes)
  //       if (methods.includes('email_synchronization') && organization.fromemail) {
  //         const run = () => startTransition(() =>
  //           fetchAndUpload({ fromEmail: organization.fromemail, org_id: orgId })
  //         );
  //         run();
  //         const id = setInterval(run, 2 * 60 * 1000);
  //         return () => clearInterval(id);
  //       }

  //       // Xero sync (5 minutes)
  //       if (methods.includes('xero')) {
  //         const run = () => startTransition(() =>
  //           handleSyncXero(orgId)
  //         );
  //         run();
  //         const id = setInterval(run, 5 * 60 * 1000);
  //         return () => clearInterval(id);
  //       }

  //       // Zoho sync (5 minutes)
  //       if (methods.includes('zoho')) {
  //         const run = () => startTransition(() =>
  //           handleSyncZoho(orgId)
  //         );
  //         run();
  //         const id = setInterval(run, 5 * 60 * 1000);
  //         return () => clearInterval(id);
  //       }
  //     }
  //   }, [isLoaded, organization, isLoading, isError]);

  useEffect(() => {
    if (organization && !isLoading && !isError) {
      const orgId = organization.id;
      console.log("Org id:", organization.id);
      console.log("Org id:", orgId);
      // Track all interval IDs
      const intervals = [];

      // Email sync (2 minutes)
      if (organization.fromemail) {
        console.log("Org id1:", orgId);
        const runEmail = () =>
          startTransition(() =>
            fetchAndUpload({ fromEmail: organization.fromemail, org_id: orgId })
          );
        runEmail();
        const emailInterval = setInterval(runEmail, 2 * 60 * 1000);
        intervals.push(emailInterval);
      }

      // Xero sync (5 minutes)
      const runXero = () => startTransition(() => handleSyncXero(orgId));
      runXero();
      const xeroInterval = setInterval(runXero, 4 * 60 * 1000);
      intervals.push(xeroInterval);

      // Zoho sync (5 minutes)
      const runZoho = () => startTransition(() => handleSyncZoho(orgId));
      runZoho();
      const zohoInterval = setInterval(runZoho, 5 * 60 * 1000);
      intervals.push(zohoInterval);

      // Clear all intervals on cleanup
      return () => {
        intervals.forEach(clearInterval);
      };
    }
  }, [isLoaded, organization, isLoading, isError]);

  return null;
}

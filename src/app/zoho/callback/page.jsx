"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

export default function ZohoCallback() {
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {

    const code = searchParams.get("code");
    // const organizationid = localStorage.getItem("tempOrgId");
    const organizationid = localStorage.getItem("tempOrgId") || localStorage.getItem("organizationid");



    if (!code || !organizationid) {
      console.warn("Missing code or organizationid");
      return;
    }

    const exchangeCode = async () => {
      try {
        const response = await axios.post("/api/zoho/exchange-code", {
          code,
          organizationid,
        });

        if (response.status === 200) {
          // router.push("/onboarding?step=4");
          const redirectTo = localStorage.getItem("zohoRedirectTo") || "/onboarding?step=4";
          localStorage.removeItem("zohoRedirectTo");
          router.push(redirectTo);
        } else {
          console.error("Unexpected response:", response.data);
        }
      } catch (err) {
        console.error("Exchange error:", err.response?.data || err.message);
      }
    };

    exchangeCode();
  }, [searchParams, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold">Authorizing with Zoho...</h2>
        <p className="mt-2 text-gray-500">Please wait while we process authentication.</p>
      </div>
    </div>

  );
}

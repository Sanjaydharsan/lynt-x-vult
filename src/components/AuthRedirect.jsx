"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function AuthRedirect() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const orgMemberships = user.organizationMemberships || [];
    const hasOrganization = orgMemberships.length > 0;

    if (!hasOrganization) {
      router.replace("/onboarding");
      return;
    }

    const isAdmin = orgMemberships.some(
      (membership) => membership.role === "org:admin"
    );

    if (isAdmin) {
      router.replace("/dashboard");
    } else {
      router.replace("/dashboard");
    }
  }, [isLoaded, user, router]);

  return null;
}

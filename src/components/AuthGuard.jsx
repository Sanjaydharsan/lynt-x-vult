"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const publicRoutes = [
  "/sign-in",
  "/sign-up",
  "/sign-in/factor-one",
  "/sign-up/continue",
  "/sso-callback",
  "/verify",
  "/reset-password",
  "/reset-password/confirm",
];

export default function AuthGuard({ children }) {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchMemberships = async () => {
      if (user?.getOrganizationMemberships) {
        try {
          const membershipsResponse = await user.getOrganizationMemberships();
          const memberships = Array.isArray(membershipsResponse?.data)
            ? membershipsResponse.data
            : [];

          const isAdminRole = memberships.some((m) => m.role === "org:admin");
          setIsAdmin(isAdminRole);
          // console.log("Memberships:", memberships);
        } catch (error) {
          console.error("Error fetching memberships:", error);
        }
      }
    };

    fetchMemberships();
  }, [user]);

  useEffect(() => {
    if (isLoaded && !isSignedIn && !publicRoutes.includes(pathname)) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, pathname, router]);

  useEffect(() => {
    if (isSignedIn && isAdmin && pathname === "/onboarding") {
      router.push("/");
    }
  }, [isSignedIn, isAdmin, pathname, router]);

  return children;
}

"use client";
 
import { useUser } from "@clerk/nextjs";
import { useEffect, useRef } from "react";
import { get, post } from "@/utils/apiHelper";
import useUserStore from "@/store/userStore";
 
export default function UserSyncProvider({ children }) {
  const { user, isSignedIn, isLoaded } = useUser();
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const prevUserIdRef = useRef(null);
 
  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user || prevUserIdRef.current === user.id) return;
 
    prevUserIdRef.current = user.id;
 
    const syncUser = async () => {
      try {
        const response = await get(`/users/${user.id}`);
        const orgId = response?.organizationid || "";
        const role = response?.role || "";
        const userId = response?.id || user.id;
        const Org_ID = response?.Org_ID || "";
 
        setUserInfo({
          organizationid: orgId,
          user_role: role,
          userid: userId,
          orgid: Org_ID,
        });
      } catch {
        try {
          await post("/clerk/syncuser", { user });
          const synced = await get(`/users/${user.id}`);
 
          const orgId = synced?.organizationid || "";
          const role = synced?.role || "";
          const userId = synced?.id || user.id;
          const Org_ID = synced?.Org_ID || "";
 
          setUserInfo({
            organizationid: orgId,
            user_role: role,
            userid: userId,
            orgid: Org_ID,
          });
        } catch (err) {
          console.error("User sync failed", err);
        }
      }
    };
    syncUser();
  }, [isLoaded, isSignedIn, user]);
 
  return <>{children}</>;
}
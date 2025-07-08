import { create } from "zustand";
 
const useUserStore = create((set) => ({
  organizationid: null,
  userid: null,
  user_role: null,
  orgid: null,
 
  setUserInfo: (data) =>
    set({
      organizationid: data.organizationid || null,
      userid: data.userid || null,
      user_role: data.user_role || null,
      orgid: data.orgid || null,
    }),
 
  clearUserInfo: () =>
    set({
      organizationid: null,
      userid: null,
      user_role: null,
      orgid: null,
    }),
}));
 
export default useUserStore;
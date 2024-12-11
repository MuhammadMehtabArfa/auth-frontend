import { RootState } from "../store";
export const selectUserDetail = (state: RootState) => state?.auth?.user;
export const selectAccessToken = (state: RootState) => state?.auth?.accessToken;


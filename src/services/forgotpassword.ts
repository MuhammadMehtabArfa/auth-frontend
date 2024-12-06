import apiClient from "@/middleware/axios";
export type FPParams = {
    email: string;


}
export const forgotpasswordUser = {
    async forgotpassword(FPData: FPParams) {
        return await apiClient.post(`api/forgot-password`, FPData);
    }
};

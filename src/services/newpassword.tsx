import apiClient from "@/middleware/axios";

export type ResetPasswordParams = {
    rToken: string;
    password: string;

};

export const resetPasswordUser = {
    async resetPassword(resetPasswordData: ResetPasswordParams) {
        return await apiClient.post(`api/reset-password`, resetPasswordData);
    },
};

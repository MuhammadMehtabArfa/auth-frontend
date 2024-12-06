import apiClient from "@/middleware/axios";

export type VerifyOtpParams = {
    email: string;
    otp: string;
};

export const verifyotpUser = {
    async verifyOtp(verifyOtpData: VerifyOtpParams) {
        return await apiClient.post(`api/verify-otp`, verifyOtpData);
    }
};

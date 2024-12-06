import apiClient from "@/middleware/axios";

export type SignUpParams = {
    email: string;
    username: string;
    password: string;
};

export const signupUser = {
    async signUp(signUpData: SignUpParams) {
        return await apiClient.post(`api/sign-up`, signUpData);
    }
};

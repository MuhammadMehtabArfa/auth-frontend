import apiClient from "@/middleware/axios";



export type LoginParams = {
  email: string;
  password: string;
};

export const loginUser = {
  async login(loginData: LoginParams) {
    return await apiClient.post(`api/login`, loginData);
  }
};

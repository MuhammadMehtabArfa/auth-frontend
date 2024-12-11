import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/",
});

// set and removed auth token
export const AXIOS_SET_AUTH_TOKEN = (token: string) => {
    apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const AXIOS_REMOVE_AUTH_TOKEN = () => {
    delete apiClient.defaults.headers.common["Authorization"];
};

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // Logout logic || Refresh Token Logic
                AXIOS_REMOVE_AUTH_TOKEN();
                // logOut();
                // localStorage.removeItem('token');
                // window.location.href = '/login'; 
            } catch (error) {
                console.log(error, ' Error')
                // Handle refresh token error or redirect to login
            }
        }
        return Promise.reject(error);
    }
);
//set authorization headers for all requests
apiClient.defaults.headers.common["Accept"] = "application/json";
apiClient.defaults.headers.common["Content-Type"] = "application/json";
apiClient.interceptors.request.use((config) => {
    if (!config.headers.Authorization) {
        const state = JSON.parse(localStorage.getItem("persist:root") || "")
        const userAuth = JSON.parse(state?.auth || "")
        const token = userAuth?.accessToken || ""

        if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config
})









export default apiClient;
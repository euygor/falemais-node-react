import axios from "axios";

const BASE = "http://localhost:3333";

const axiosInstance = axios.create({
    baseURL: BASE
});

export const api = {
    getFees: async () => {
        const response = await axiosInstance.get(`/values`);
        return response;
    }
}
import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/user"
});

API.interceptors.request.use((req) => {

    const token = localStorage.getItem("token");

    if (token) {
        req.headers.Authorization = token;
    }

    return req;
});

export const getProfile = () => API.get("/profile");

// 👇 ADD THIS
export const updateProfile = (data) =>
    API.put("/profile", data);
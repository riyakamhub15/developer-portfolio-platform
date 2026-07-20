import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

API.interceptors.request.use((req) => {

    const token = localStorage.getItem("token");

    if (token) {
        req.headers.Authorization = token;
    }

    return req;

});

export const getProjects = () => API.get("/");

export const createProject = (data) =>
    API.post("/", data);

export const updateProject = (id, data) =>
    API.put(`/${id}`, data);

export const deleteProject = (id) =>
    API.delete(`/${id}`);

export const getProjectById = (id) =>
    API.get(`/${id}`);
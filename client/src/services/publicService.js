import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const getPortfolio = (username) =>

    API.get(`/${username}`);
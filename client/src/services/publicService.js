import axios from "axios";

const API = axios.create({

    baseURL: "http://localhost:5000/api/portfolio"

});

export const getPortfolio = (username) =>

    API.get(`/${username}`);
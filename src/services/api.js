import axios from "axios";

const api = axios.create({
  baseURL: "https://teste7.flowcash.app/api/",
});

export default api;
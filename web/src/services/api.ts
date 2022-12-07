import React from "react";

import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://localhost:7122"
});

api.interceptors.request.use(async config => {
  const token = getToken();
    if (config.headers){
      config.headers.Authorization = `Bearer ${token}`;
    }
  return config
})



export default api;
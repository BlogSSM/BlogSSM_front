import React from "react";
import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://13.125.225.199:8006/",
};

const client = axios.create(axiosConfig);

export default client;

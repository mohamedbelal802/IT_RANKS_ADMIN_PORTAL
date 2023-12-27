import axios from "axios";

const baseURL = "https://gateway.csp.vaza.dev";
export const api = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": document.dir === "rtl" ? "Arabic" : "American",
  },
});

export const apiForm = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});

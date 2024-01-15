import axios from "axios";

const baseURL = "https://gateway.csp.vaza.dev";
export const api = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": document.dir === "ltr" ? "American" : "Arabic",
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

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 401 && !error.response.data.responseMessage) {
      window.sessionStorage.clear();
      window.location.replace("/signin");
      return;
    }
    throw error;
  }
);

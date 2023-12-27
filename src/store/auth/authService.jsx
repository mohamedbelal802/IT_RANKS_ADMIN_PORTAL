import { api } from "../../utils/api";

const login = async (userData) => {
  const response = await api.post("Login", userData);
  return response.data;
};

const authService = { login };

export default authService;

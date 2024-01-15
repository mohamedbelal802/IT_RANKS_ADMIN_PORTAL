import { api } from "../../utils/api";

const updateQuickAccess = async (iconId, title, systemName) => {
  const response = await api.put("");
  return response.data;
};

const getAllQuickAccess = async () => {
  const response = await api.get();
  return response.data;
};

const quickAccessServices = { updateQuickAccess, getAllQuickAccess };
export default quickAccessServices;

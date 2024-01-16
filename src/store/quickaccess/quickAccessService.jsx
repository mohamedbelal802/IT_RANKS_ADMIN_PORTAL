import { api } from "../../utils/api";

const createQuickAccess = async (title, systemName, icon) => {
  const response = await api.post("/selfservice/quick-access/create", {
    title,
    systemName,
    iconId: icon,
  });
  return response.data;
};
const getAllQuickAccess = async () => {
  const response = await api.get("/selfservice/quick-access/all");
  return response.data;
};
const updateQuickAccess = async (id, icon, title, systemName) => {
  const response = await api.put(
    `/selfservice/quick-access/${id}?title=${title}&systemName=${systemName}&icon=${icon}`
  );
  return response.data;
};
const deleteQuickAccess = async (id) => {
  const response = await api.delete(`/selfservice/quick-access/${id}`);
  return response.data;
};
const quickAccessServices = {
  updateQuickAccess,
  getAllQuickAccess,
  createQuickAccess,
  deleteQuickAccess,
};
export default quickAccessServices;

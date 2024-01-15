import { api } from "../../utils/api";

const getAllAnnouncement = async () => {
  const formData = new FormData();
  formData.append("typeUser", "admin");
  const params = new URLSearchParams(formData);
  const response = await api.get(`/selfservice/announcements/all?${params}`);

  return response.data;
};

const createAnnouncment = async (data) => {
  const response = await api.post("/selfservice/announcements/create", data);
  return response.data;
};

const updateAnnouncement = async (id, data) => {
  const response = await api.put(`selfservice/announcements/${id}`, data);
  return response.data;
};

const deleteAnnouncement = async (id) => {
  const response = await api.delete(`/selfservice/announcements/${id}`);
  return response.data;
};

const announcementService = {
  getAllAnnouncement,
  updateAnnouncement,
  createAnnouncment,
  deleteAnnouncement,
};

export default announcementService;

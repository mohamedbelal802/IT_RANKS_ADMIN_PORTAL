import { api, apiForm } from "../../utils/api";

const getAllNews = async () => {
  const response = await api.get("/selfservice/news/all");
  return response.data;
};

const getNewById = async (id) => {
  const response = await api.get(`/selfservice/news/${id}`);
  return response.data;
};

const createNew = async (data) => {
  const response = await api.post("/selfservice/news/create", data);
  return response.data;
};

const updateNew = async (data, id) => {
  const response = await api.put(`/selfservice/news/${id}`, data);
  return response.data;
};

const deleteNew = async (id) => {
  const response = await api.delete(`/selfservice/news/${id}`);
  return response.data;
};

const newsService = { getAllNews, getNewById, createNew, updateNew, deleteNew };

export default newsService;

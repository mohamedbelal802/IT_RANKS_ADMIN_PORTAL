import { api } from "../../utils/api";

const getAllSocialMedia = async () => {
  const response = await api.get("/selfservice/social-media/all");
  return response.data;
};

const updateSocialMedia = async (title, url, id) => {
  const response = await api.put(
    `/selfservice/social-media/${id}?title=${title}&url=${url}`
  );
  return response.data;
};

const socialMediaService = { getAllSocialMedia, updateSocialMedia };

export default socialMediaService;

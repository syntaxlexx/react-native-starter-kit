import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://picsum.photos/v2",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    ContentType: "application/json",
  },
});

const getImages = (limit = 10) => apiClient.get(`/list?limit=${limit}`);

const imagesApi = {
  getImages,
};

export default imagesApi;

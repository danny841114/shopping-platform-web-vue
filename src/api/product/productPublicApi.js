import apiClient from "../apiClient";

const API_PREFIX = "/api/public/products";

export const productPublicApi = {
  getProducts(size = 12, page = 0, keyword = "") {
    return apiClient.get(API_PREFIX, {
      params: {
        size,
        page,
        keyword,
      },
    });
  },

  getProductById(id) {
    return apiClient.get(`${API_PREFIX}/${id}`);
  },
};

import apiClient from "../apiClient";

const API_PREFIX = "/api/vendor/products";

export const productVendorApi = {
  getProductsByVendor() {
    return apiClient.get(API_PREFIX);
  },

  addProduct(name, description, price, quantity, photo) {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);
    if (photo) {
      formData.append("photo", photo);
    }

    return apiClient.post(API_PREFIX, formData);
  },

  updateProduct(id, name, description, price, quantity, photo, deletePhoto) {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("deletePhoto", deletePhoto);
    if (photo instanceof File && photo.size > 0) {
      formData.append("photo", photo);
    }

    return apiClient.put(`${API_PREFIX}/${id}`, formData);
  },

  deleteProduct(id) {
    return apiClient.delete(`${API_PREFIX}/${id}`);
  },
};

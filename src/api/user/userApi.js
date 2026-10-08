import apiClient from "../apiClient";

const API_PREFIX = "/api/users";

export const userApi = {
  fetchMe() {
    return apiClient.get(`${API_PREFIX}/me`);
  },

  addVendor() {
    return apiClient.post(`${API_PREFIX}/me/vendor-profile`);
  },

  setRole(role) {
    return apiClient.put(`${API_PREFIX}/me/active-role`, { role });
  },
};

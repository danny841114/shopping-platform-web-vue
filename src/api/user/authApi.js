import apiClient from "../apiClient";

const API_PREFIX = "/api/auth";

export const authApi = {
  register(account, password) {
    return apiClient.post(`${API_PREFIX}/register`, { account, password });
  },

  login(account, password) {
    return apiClient.post(`${API_PREFIX}/login`, { account, password });
  },

  logout() {
    return apiClient.post(`${API_PREFIX}/logout`);
  },
};

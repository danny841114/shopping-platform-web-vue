import apiClient from "../apiClient";

const API_PREFIX = "/api/vendor/orders";

export const orderVendorApi = {
  getOrdersByVendor() {
    return apiClient.get(API_PREFIX);
  },
};

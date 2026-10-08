import apiClient from "../apiClient";

const API_PREFIX = "/api/member/cart/items";

export const cartApi = {
  getCartItems() {
    return apiClient.get(API_PREFIX);
  },

  updateCartItemQuantity(cartId, quantity) {
    return apiClient.put(`${API_PREFIX}/${cartId}`, { quantity });
  },

  deleteCartItem(cartId) {
    return apiClient.delete(`${API_PREFIX}/${cartId}`);
  },

  addCartItem(productId, quantity) {
    return apiClient.post(API_PREFIX, { productId, quantity });
  },
};

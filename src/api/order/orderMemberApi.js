import apiClient from "../apiClient";

const API_PREFIX = "/api/member/orders";

export const orderMemberApi = {
  addOrder(
    cartIds,
    vendorId,
    receiverName,
    receiverPhone,
    receiverEmail,
    receiverAddress,
    paymentMethod,
    note,
    shippingFee
  ) {
    return apiClient.post(API_PREFIX, {
      cartIds,
      vendorId,
      receiverName,
      receiverPhone,
      receiverEmail,
      receiverAddress,
      paymentMethod,
      note,
      shippingFee,
    });
  },

  getOrdersByMember() {
    return apiClient.get(API_PREFIX);
  },
};

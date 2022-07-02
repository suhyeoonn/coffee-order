import apiClient from '.'

export default {
  getOrders: (id) =>
    apiClient.get(`/bills/${id}/orders`),
  getOrderDetail: (id, drinkId) =>
    apiClient.get(`/bills/${id}/orders?drinkId=${drinkId}`),
}

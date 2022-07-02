import apiClient from '.'

export default {
  getOrders: (id) =>
    apiClient.get(`/bills/${id}/orders`),
}

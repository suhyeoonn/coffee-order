import apiClient from '.'

export default {
  createBill: (nickname, title, description) =>
    apiClient.post('/bills', {
      nickname,
      title,
      description,
    }),
}

import apiClient from '.'

export default {
  signUp: (nickname, password) =>
    apiClient.post(`/signUp`, {
      nickname,
      password
    }),
  signIn: (nickname, password) =>
    apiClient.post(`/signIn`, {
      nickname,
      password
    }),
}

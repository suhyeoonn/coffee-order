import axios from 'axios'

const getToken = () => localStorage.getItem('token')

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers:
    { 'Authorization': `Bearer ${getToken()}` }

})
export default apiClient

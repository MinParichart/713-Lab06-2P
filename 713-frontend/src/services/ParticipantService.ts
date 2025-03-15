import axios from 'axios'
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getParticipants(pageNo: number, pageSize: number) {
    return apiClient.get('/events/participants?pageNo=' + pageNo + '&pageSize=' + pageSize)
  },

getParticipant(id: number) {
      return apiClient.get(`/events/participants/${id}`)
    },
  }

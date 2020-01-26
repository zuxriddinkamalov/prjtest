import axios from 'axios'

export default {
  profileSave (_, form) {
    return axios.post('api/v1/profile/', { ...form })
  },
}

import axios from 'axios'

export default {
  userSave (_, form) {
    return axios.post('api/v1/user/', { ...form })
  },
}

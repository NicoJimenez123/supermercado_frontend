const axios = require('axios')

const apiBackend = () => {
  const api = axios.create({
    baseURL: `http://${process.env.REACT_APP_BACKEND_IP}`
  })
  return api 
}

export { apiBackend }
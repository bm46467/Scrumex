import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
})

// Auth
export const registerUser = ({ firstName, lastName, email, password }) =>
  api.post('/register', {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  })

export const loginUser = ({ email, password }) =>
  api.post('/login', {
    email,
    password,
  })

export const getUser = () => api.get('/user')

export const logoutUser = () => api.post('/logout')

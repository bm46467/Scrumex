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

// Projects
export const createProject = ({ pmid, projectName, description, endingDate }) =>
  api.post('/projects', {
    pmid,
    projectName,
    description,
    endingDate,
  })

export const getProjects = () => api.get('/projects')

export const getProjectUsers = (projectId) => api.get(`/projects/${projectId}/users`)

export const getAllSprints = (projectId) => api.get(`projects/${projectId}/sprints`)

export const getProject = (projectId) => api.get(`projects/${projectId}`)

export const getAllSprintTasks = (projectId, sprintId) => api.get(`projects/${projectId}/sprints/${sprintId}/tasks`)

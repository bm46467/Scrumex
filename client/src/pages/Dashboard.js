import { Navigate } from 'react-router-dom'

import { useAuth } from '../context'

const Dashboard = () => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/" />

  return <div>Hello {user && user.first_name}</div>
}

export default Dashboard

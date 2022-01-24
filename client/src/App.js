import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'

import { Login, Navbar, Register } from './components'

import {
  Home,
  Dashboard,
  Projects,
  Teams,
  Leaderboard,
  Settings,
} from './pages'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-slate-900 text-gray-100">
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="projects" element={<Projects />} />
              <Route path="teams" element={<Teams />} />
              <Route path="leaderboard" element={<Leaderboard />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App

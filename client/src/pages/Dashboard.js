import { Navigate, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

import { useAuth } from '../context'

import { GiTrophy } from 'react-icons/gi'

import Sidebar from '../components/Sidebar'

import { Projects, Teams, Leaderboard, Settings } from '.'
import { ProjectDetails } from '../pages'

const Dashboard = () => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/" />

  const DashboardContent = () => {
    const { user } = useAuth()

    return (
      <motion.div
        className="lg:ml-[300px] mt-36 md:mt-16 p-8 lg:p-12 border-2 border-indigo-500 mx-4 rounded-xl"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
      >
        <h2 className="text-gray-500 text-3xl">Dashboard</h2>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-8 max-w-[1000px] mx-auto">
          {/* Left */}
          <div className="text-center">
            <p className="text-gray-50 text-2xl font-medium mb-3">
              {user.first_name + ' ' + user.last_name}
            </p>

            <div className="flex items-center justify-center">
              <span className="mr-2 text-gray-400">8 Lvl</span>
              <div className="w-full h-6 bg-indigo-700 rounded-full"></div>
              <span className="ml-2 text-gray-400">9 Lvl</span>
            </div>
            <span className="text-lg text-gray-500">90% Experience</span>

            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex flex-col gap-3">
                <span className="text-gray-100 text-xl font-bold">
                  Trophies
                </span>
                <span className="text-gray-100">12</span>
              </div>
              <GiTrophy className="text-3xl text-yellow-600" />
            </div>
          </div>

          {/* Right */}
          <img
            className="w-full max-w-[300px] mx-auto"
            src="/images/trends.svg"
            alt="Trends"
          />
        </div>

        <div className="flex flex-col justify-center md:flex-row gap-6  mt-16 max-w-[1000px] mx-auto">
          {/* Left */}
          <div className="flex flex-col order-1 md:order-2 items-center justify-center gap-4">
            <p className="text-gray-50 text-2xl font-medium mb-3">
              Your recent tasks
            </p>

            <div className="grid grid-cols-2 gap-8">
              <span className="text-gray-400">Bootstrap Scrumex project</span>{' '}
              <span className="text-green-500">Completed</span>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <span className="text-gray-400">Learn new technologies</span>{' '}
              <span className="text-yellow-600">In progress</span>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <span className="text-gray-400">Task 3</span>{' '}
              <span className="text-green-500">Completed</span>
            </div>
          </div>

          {/* Right */}
          <img
            className="order-2 md:order-1 w-full max-w-[300px] mx-auto md:mx-0 mt-4"
            src="/images/todo_list.svg"
            alt="Trends"
          />
        </div>
      </motion.div>
    )
  }

  return (
    <div>
          <Sidebar />
          <Routes>
            <Route path="/" element={<DashboardContent />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
  )
}

export default Dashboard

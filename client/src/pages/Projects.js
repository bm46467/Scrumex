import { useEffect, useState } from 'react'

import { AiOutlinePlus } from 'react-icons/ai'
import { getProjects } from '../api'
import { ProjectCard } from '../components'

import { CreateProjectModal } from '../components'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const getAllProjects = async () => {
      const { data } = await getProjects()
      setProjects(data)
    }

    getAllProjects()
  }, [])

  return (
    <>
      {openModal && <CreateProjectModal setOpenModal={setOpenModal} />}
      <div className="lg:ml-[300px] mt-36 md:mt-16 p-8 lg:p-12 border-2 border-indigo-500 mx-4 rounded-xl">
        <div className="flex justify-between space-x-1">
          <h2 className="text-gray-500 text-3xl"> Projects </h2>
        </div>

        <div className="flex mt-8">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg cursor-pointer font-semibold transition-all hover:scale-105"
            onClick={() => setOpenModal(true)}
          >
            <AiOutlinePlus className="inline-block text-2xl" /> Create Project
          </button>
        </div>

        <ProjectCard projects={projects} />
      </div>
    </>
  )
}

export default Projects

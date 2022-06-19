import { useEffect, useState } from 'react'
import { getProject, getAllSprints } from '../api'
import { ProjectDetailsItem, Spinner, SprintCardItem } from '../components'
import { useParams } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import CreateSprintModal from '../components/modals/CreateSprintModal'
import AddEmployeeModal from '../components/modals/AddEmployeeModal'
import { motion } from 'framer-motion'
import { useAuth } from '../context'

const ProjectDetails = () => {
  const { projectId } = useParams()
  const [sprints, setSprints] = useState([])
  const [project, setProject] = useState([])
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [openEmployeeModal, setOpenEmployeeModal] = useState(false)

  const { user } = useAuth()

  useEffect(() => {
    const getSpecificProject = async () => {
      const { data } = await getProject(projectId)
      setProject(data)
    }

    const getAllProjectSprints = async () => {
      setLoading(true)
      const { data } = await getAllSprints(projectId)
      setSprints(data)
      setLoading(false)
    }

    getAllProjectSprints()
    getSpecificProject()
  }, [])

  return (
    <>
      {openEmployeeModal && (
        <AddEmployeeModal setOpenEmployeeModal={setOpenEmployeeModal} />
      )}

      {openModal && (
        <CreateSprintModal
          setOpenModal={setOpenModal}
          sprints={sprints}
          setSprints={setSprints}
        />
      )}

      <motion.div
        className="lg:ml-[300px] mt-36 md:mt-16 p-8 lg:p-12 border-2 border-indigo-500 mx-4 rounded-xl"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
      >
        <div className="flex justify-between space-x-1">
          <h2 className="text-gray-500 text-3xl"> Project details </h2>
        </div>

        {user.id === project.pmid && (
          <div className="flex mt-8 mb-6">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg cursor-pointer font-semibold transition-all hover:scale-105"
              onClick={() => setOpenEmployeeModal(true)}
            >
              <AiOutlinePlus className="inline-block text-2xl" /> Add Employee
            </button>
          </div>
        )}

        <div className="box-content border border-4 rounded-lg w-5/6 border-white mt-3 bg-indigo-900 border-indigo-300">
          <ProjectDetailsItem project={project} />

          <p className="mt-6 ml-6 font-sans text-3xl"> Sprints </p>

          {!sprints.length && (
            <p className="text-gray-400 text-xl ml-6 mt-2">
              You have not participated in any sprint yet
            </p>
          )}

          <div className="mx-auto box-content border-0 rounded-lg w-5/6 my-5 px-4 bg-slate-300 flex flex-wrap gap-6">
            {loading ? (
              <div className="p-4">
                <Spinner color="text-indigo-500" />
              </div>
            ) : (
              <>
                {sprints?.map((sprint, idx) => (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <SprintCardItem key={sprint.id} sprint={sprint} idx={idx} />
                  </motion.div>
                ))}
              </>
            )}
          </div>
        </div>

        {user.id === project.pmid && (
          <div className="flex mt-8 mb-6">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg cursor-pointer font-semibold transition-all hover:scale-105"
              onClick={() => setOpenModal(true)}
            >
              <AiOutlinePlus className="inline-block text-2xl" /> Create Sprint
            </button>
          </div>
        )}
      </motion.div>
    </>
  )
}

export default ProjectDetails

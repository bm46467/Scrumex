import { useEffect, useState } from 'react'
import { getProject, getAllSprints } from '../api'
import { ProjectDetailsItem, Spinner, SprintCardItem } from '../components'
import { useParams } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import CreateSprintModal from '../components/modals/CreateSprintModal'

const ProjectDetails = () => {
  const { projectId } = useParams()
  const [sprints, setSprints] = useState([])
  const [project, setProject] = useState([])
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)

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
      {openModal && (
        <CreateSprintModal
          setOpenModal={setOpenModal}
          sprints={sprints}
          setSprints={setSprints}
        />
      )}

      <div className="lg:ml-[300px] mt-36 md:mt-16 p-8 lg:p-12 border-2 border-indigo-500 mx-4 rounded-xl">
        <div className="flex justify-between space-x-1">
          <h2 className="text-gray-500 text-3xl"> Project details </h2>
        </div>

        <div className="flex mt-8 mb-6">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg cursor-pointer font-semibold transition-all hover:scale-105"
            // onClick={() => setOpenModal(true)}
          >
            <AiOutlinePlus className="inline-block text-2xl" /> Add Employee
          </button>
        </div>

        <div className="box-content border border-4 rounded-lg w-5/6 border-white mt-3 bg-indigo-900 border-indigo-300">
          <ProjectDetailsItem project={project} />

          <p className="mt-6 ml-6 font-sans text-3xl"> Sprints </p>

          {!sprints.length && (
            <p className="text-gray-400 text-xl ml-6 mt-2">
              You have not participated in any sprint yet
            </p>
          )}

          <div className="mx-auto box-content border-0 rounded-lg w-5/6 my-5 bg-slate-300 grid grid-cols-3 justify-items-center">
            {loading ? (
              <div className="p-4">
                <Spinner color="text-indigo-500" />
              </div>
            ) : (
              <>
                {sprints?.map((sprint, idx) => (
                  <SprintCardItem key={sprint.id} sprint={sprint} idx={idx} />
                ))}
              </>
            )}
          </div>
        </div>

        <div className="flex mt-8 mb-6">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg cursor-pointer font-semibold transition-all hover:scale-105"
            onClick={() => setOpenModal(true)}
          >
            <AiOutlinePlus className="inline-block text-2xl" /> Create Sprint
          </button>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails

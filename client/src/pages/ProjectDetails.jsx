import { useEffect, useState } from 'react'
import { getProject, getAllSprints } from '../api'
import { ProjectDetailsItem, SprintCardItem } from '../components'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
  const { projectId } = useParams()
  const [sprints, setSprints] = useState([])
  const [project, setProject] = useState([])

  useEffect(() => {
    const getSpecificProject = async () => {
      const { data } = await getProject(projectId)
      setProject(data)
    }

    const getAllProjectSprints = async () => {
      const { data } = await getAllSprints(projectId)
      setSprints(data)
    }

    getAllProjectSprints()
    getSpecificProject()
  }, [])

  return (
    <>
      <div className="lg:ml-[300px] mt-36 md:mt-16 p-8 lg:p-12 border-2 border-indigo-500 mx-4 rounded-xl">
        <div className="flex justify-between space-x-1">
          <h2 className="text-gray-500 text-3xl"> Project details </h2>
        </div>

        <div className="box-content border border-4 rounded-lg w-5/6 border-white mt-3 bg-indigo-900 border-indigo-300">
          <ProjectDetailsItem project={project} />

          <div className="mx-auto box-content border-0 rounded-lg w-5/6 my-5 bg-slate-300 grid grid-cols-3 justify-items-center">
            {sprints.map((sprint) => (
              <SprintCardItem key={sprint.id} sprint={sprint} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails

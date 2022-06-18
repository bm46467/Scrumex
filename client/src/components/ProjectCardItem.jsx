import { BsFillPeopleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProjectUsers } from '../api'

const ProjectCardItem = ({ project }) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getAllUsersFromProject = async () => {
            const { data } = await getProjectUsers(project.id)
            setUsers(data)
        }


        getAllUsersFromProject()
    }, [])

  return (
    <div className='box-content border border-4 rounded-lg w-5/6 border-white mt-3 bg-indigo-900 border-indigo-300'>
       <p className='mt-3 ml-3 font-sans text-xl'> {project.projectName} </p>

       <p className='mt-1 ml-3 font-sans text-sm text-zinc-400'> {project.description} </p>

       <p className='mt-10 ml-3 font-sans text-lg'> Project Manager: John Smith </p>

       <p className='mt-2 ml-3 font-sans text-lg'> Team: Wild Weasels </p>

       <p className='flex flex-row gap-4 mt-2 ml-3 font-sans text-lg'> {users.length} <BsFillPeopleFill className="text-3xl" /> </p>

       <Link to={`/dashboard/projects/${project.id}`}> 
            <button className="btn-primary--filled mx-3 my-4 px-12"> SEE DETAILS </button>
       </Link>
    </div>
  )
}

export default ProjectCardItem
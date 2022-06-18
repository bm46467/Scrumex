import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllSprintTasks } from '../api'

const SprintCardItem = ( {sprint} ) => {
    let { projectId } = useParams()

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getAllTaskFromSprint = async () => {
            const { data } = await getAllSprintTasks(projectId, sprint.id)
            setTasks(data)
        }

        getAllTaskFromSprint()
    }, [])

  return (
        <div className='box-content border-0 rounded-lg w-24 bg-slate-200 my-5 md:w-28 xl:w-52'>
            <p className='mt-1 ml-2 font-sans text-black text-sm lg:text-lg'> Sprint #{sprint.id} </p>

            <p className='mt-1 ml-2 font-sans text-zinc-400 text-sm lg:text-lg'> Start Date: {sprint.startDate} </p>

            <p className='mt-1 ml-2 font-sans text-zinc-400 text-sm lg:text-lg'> End Date: {sprint.stopDate} </p>

            <p className='mt-1 ml-2 font-sans text-zinc-400 text-sm lg:text-lg'> No. Tasks: {tasks.length} </p>

            <Link to={`/dashboard/projects/${projectId}/sprints/${sprint.id}`}> 
                <button className="btn-primary--filled mt-1 my-2 ml-2 px-1 py-2 lg:px-6"> SEE DETAILS </button>
            </Link>
        </div>
  )
}

export default SprintCardItem
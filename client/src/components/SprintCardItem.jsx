import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllSprintTasks } from '../api'

const SprintCardItem = ({ sprint, idx }) => {
  let { projectId } = useParams()

  const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //   const getAllTasksFromSprint = async () => {
  //     const { data } = await getAllSprintTasks(projectId, sprint.id)
  //     // setTasks(data)
  //   }

  //   getAllTasksFromSprint()
  // }, [])

  return (
    <div className="box-content border-0 rounded-lg bg-slate-200 my-5 p-3">
      <p className="mt-1 ml-2 font-sans text-black text-sm lg:text-lg">
        {' '}
        Sprint #{idx + 1}{' '}
      </p>

      <p className="mt-1 ml-2 font-sans text-zinc-400 text-sm lg:text-lg">
        {' '}
        Start Date: {sprint.startDate}{' '}
      </p>

      <p className="mt-1 ml-2 font-sans text-zinc-400 text-sm lg:text-lg">
        {' '}
        End Date: {sprint.stopDate}{' '}
      </p>

      <p className="mt-1 ml-2 font-sans text-zinc-400 text-sm lg:text-lg">
        {' '}
        No. Tasks: {tasks.length}{' '}
      </p>

      <Link to={`/dashboard/projects/${projectId}/sprints/${sprint.id}`}>
        <button className="btn-primary--filled mt-4 my-2 ml-2 px-4 py-2 lg:px-6 text-[14px] md:text-sm">
          {' '}
          SEE DETAILS{' '}
        </button>
      </Link>
    </div>
  )
}

export default SprintCardItem

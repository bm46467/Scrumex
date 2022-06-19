import { useEffect, useState } from 'react'
import { updateStatus, getAllSprintTasks } from '../api'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'

const InProgressTaskItem = ({ task, idx, setInProgressTasks, inProgressTasks, setDoneTasks, doneTasks }) => {

    const { projectId } = useParams()
    const { sprintId } = useParams()
    const [loading, setLoading] = useState(false)

    const ChangeStatus = () => {
        const updateTaskStatus = async () => {
            setLoading(true)
            const { data } = await updateStatus(projectId, sprintId, task.id)
            
            setInProgressTasks(inProgressTasks.filter(t => t.id !== task.id))
            setDoneTasks([...doneTasks, data])
            setLoading(false)
        }

        updateTaskStatus()
    }

  return (
    <>
    { loading ? (
        <div className="p-4">
            <Spinner color="text-indigo-500" />
        </div>
    ) : (
    <div className='mt-4 ml-2'>
        <div className="box-content border-0 rounded-lg bg-slate-200 my-5 p-2">
            <p className="mt-1 ml-2 font-sans text-black text-sm lg:text-xl">
                Task #{idx + 1}
            </p>

            <p className="mt-1 ml-2 font-sans text-zinc-400 text-sm lg:text-lg">
                {task.description}
            </p>

            <button className='btn-primary--filled mt-8 ml-2 px-4 py-2 lg:px-6 text-[14px] md:text-sm'
            onClick={ChangeStatus}>
                MARK AS DONE
            </button>
        </div>
    </div>
    )}
    </>
  )
}

export default InProgressTaskItem
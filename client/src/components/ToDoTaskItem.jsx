import { useEffect, useState } from 'react'
import { updateStatus, getAllSprintTasks, deleteTask, getUser } from '../api'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import { FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useAuth } from '../context'
import Moment from 'react-moment'

export const ToDoTaskItem = ({
  task,
  idx,
  toDoTasks,
  setToDoTasks,
  doneTasks,
  setDoneTasks,
  inProgressTasks,
  setInProgressTasks,
}) => {
  const { projectId } = useParams()
  const { sprintId } = useParams()
  const [loading, setLoading] = useState(false)
  const [taskCreator, setTaskCreator] = useState('')

  const { user } = useAuth()

  useEffect(() => {
    const getTaskUser = async () => {
      const { data } = await getUser(task.user_id)
      setTaskCreator(data.first_name + ' ' + data.last_name)
    }

    getTaskUser()
  }, [])

  const changeInProgress = async () => {
    setLoading(true)
    const { data } = await updateStatus(
      projectId,
      sprintId,
      task.id,
      'in progress'
    )

    setToDoTasks(toDoTasks.filter((t) => t.id !== task.id))
    setInProgressTasks([...inProgressTasks, data])
    toast('Successfully updated your task!')
    setLoading(false)
  }

  const handleDelete = async () => {
    setLoading(true)
    await deleteTask(projectId, sprintId, task.id)
    setToDoTasks(toDoTasks.filter((el) => el.id !== task.id))
    toast('Successfully deleted task!')
    setLoading(false)
  }

  return (
    <>
      {loading ? (
        <div className="p-4">
          <Spinner color="text-indigo-500" />
        </div>
      ) : (
        <div className="mt-4 ml-2">
          <div className="box-content border-0 rounded-lg bg-slate-200 my-5 p-2">
            <div className="flex justify-between">
              <p className="mt-1 ml-2 font-sans text-black text-sm lg:text-xl">
                Task #{idx + 1}
              </p>
              {user.id === task.user_id && (
                <button onClick={handleDelete}>
                  <FaTrash className="text-red-600 text-xl" />
                </button>
              )}
            </div>
            <p className="mt-1 ml-2 font-sans text-zinc-400 text-sm lg:text-lg">
              {task.description}
            </p>
            <p className="mt-1 ml-2 font-sans text-zinc-400 text-sm lg:text-lg">
              Created:{' '}
              <Moment fromNow>{new Date(task.created_at).getTime()}</Moment>
            </p>

            <p className="mt-1 ml-2 font-sans text-zinc-400 text-sm lg:text-lg">
              by {taskCreator}
            </p>

            {user.id === task.user_id && (
              <button
                className="btn-primary--filled from-orange-600 to-orange-600 mt-2 ml-2 px-4 py-2 lg:px-6 text-[14px] md:text-sm"
                onClick={changeInProgress}
              >
                MARK AS "IN PROGRESS"
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ToDoTaskItem

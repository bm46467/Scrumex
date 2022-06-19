import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner, ToDoTaskItem, InProgressTaskItem, DoneTaskItem, ProjectDetailsItem } from '../components'
import { getAllSprintTasks, getProject } from '../api'

const SprintDetails = () => {
    const { projectId } = useParams()
    const { sprintId } = useParams()
    const [tasks, setTasks] = useState([])
    const [project , setProject] = useState([])
    const [loading, setLoading] = useState(false)

    // const toDoTasks = tasks.filter(task => task.status.toLowerCase() === 'to do')
    // const inProgressTasks = tasks.filter(task => task.status.toLowerCase() === 'in progress')
    // const doneTasks = tasks.filter(task => task.status.toLowerCase() === 'done')

    const [toDoTasks, setToDoTasks] = useState([])
    const [inProgressTasks, setInProgressTasks] = useState([])
    const [doneTasks, setDoneTasks] = useState([])

    useEffect(() => {
    //   const getSpecificProjectSprint = async () => {
    //     const { data } = await getSpecificSprint(projectId, sprintId)
    //     setSprint(data)
    //   }

    const getSpecificProject = async () => {
        const { data } = await getProject(projectId)
        setProject(data)
    }
  
    const getAllTaskFromSprint = async () => {
      const { data } = await getAllSprintTasks(projectId, sprintId)
      setTasks(data)

      setToDoTasks(data.filter(task => task.status.toLowerCase() === 'to do'))
      setInProgressTasks(data.filter(task => task.status.toLowerCase() === 'in progress'))
      setDoneTasks(data.filter(task => task.status.toLowerCase() === 'done'))
    }

    // getSpecificProjectSprint()
    getSpecificProject()
    getAllTaskFromSprint() 
    }, [])
  
    return (
    <>
  
        <div className="lg:ml-[300px] mt-36 md:mt-16 p-8 lg:p-12 border-2 border-indigo-500 mx-4 rounded-xl">
          <div className="flex justify-between space-x-1">
            <h2 className="text-gray-500 text-3xl"> Sprint details </h2>
          </div>

  
          <div className="box-content border border-4 rounded-lg w-5/6 border-white mt-3 bg-indigo-900 border-indigo-300">
            <ProjectDetailsItem project={project} />
  
            <p className="mt-6 ml-6 font-sans text-3xl"> Tasks for Sprint #{sprintId} </p>
  
            {!tasks.length && (
              <p className="text-gray-400 text-xl ml-6 mt-2">
                You have not added any tasks to that sprint yet
              </p>
            )}
  
              {loading ? (
                <div className="p-4">
                  <Spinner color="text-indigo-500" />
                </div>
              ) : (
                <div className='flex'>
                <div className="mx-auto box-content border-0 rounded-lg w-1/4 my-5 px-4 bg-slate-300 flex flex-col">
                    <p className="mt-3 ml-2 text-black text-xl font-bold">To Do</p>

                    {toDoTasks?.map((toDoTask, idx) => (
                        <ToDoTaskItem key={toDoTask.id} task={toDoTask} idx={idx} doneTasks={doneTasks} setDoneTasks={setDoneTasks} toDoTasks={toDoTasks} setToDoTasks={setToDoTasks} />
                    ))}
                </div>

                <div className="mx-auto box-content border-0 rounded-lg w-1/4 my-5 px-4 bg-slate-300 flex flex-col">
                    <p className="mt-3 ml-2 text-black text-xl font-bold">In Progress</p>

                    {inProgressTasks?.map((inProgressTask, idx) => (
                        <InProgressTaskItem key={inProgressTask.id} task={inProgressTask} idx={idx} setInProgressTasks={setInProgressTasks} inProgressTasks={inProgressTasks} doneTasks={doneTasks} setDoneTasks={setDoneTasks}  />
                    ))}
                </div>

                <div className="mx-auto box-content border-0 rounded-lg w-1/4 my-5 px-4 bg-slate-300 flex flex-col">
                    <p className="mt-3 ml-2 text-black text-xl font-bold">Done</p>

                    {doneTasks?.map((doneTask, idx) => (
                        <DoneTaskItem key={doneTask.id} task={doneTask} idx={idx} />
                    ))}
                </div>
                </div>
              )}
          </div>
        </div>
    </>
    )
}

export default SprintDetails
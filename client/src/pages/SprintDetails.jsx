import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner, TaskItem } from "../components";

const SprintDetails = () => {
  const { projectId } = useParams();
  const { sprintId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //   const getSpecificProjectSprint = async () => {
    //     const { data } = await getSpecificSprint(projectId, sprintId)
    //     setSprint(data)
    //   }

    const getAllTaskFromSprint = async () => {
      const { data } = await getAllSprintTasks(projectId, sprintId);
      setTasks(data);
    };

    // getSpecificProjectSprint()
    getAllTaskFromSprint();
  }, []);

  return (
    <>
      <div className="lg:ml-[300px] mt-36 md:mt-16 p-8 lg:p-12 border-2 border-indigo-500 mx-4 rounded-xl">
        <div className="flex justify-between space-x-1">
          <h2 className="text-gray-500 text-3xl"> Project details </h2>
        </div>

        <div className="flex mt-8 mb-6">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg cursor-pointer font-semibold transition-all hover:scale-105"
            onClick={() => setOpenEmployeeModal(true)}
          >
            <AiOutlinePlus className="inline-block text-2xl" /> Add Employee
          </button>
        </div>

        <div className="box-content border-2 rounded-lg w-5/6 mt-3 bg-indigo-900 border-indigo-300">
          <ProjectDetailsItem project={project} />

          <p className="mt-6 ml-6 font-sans text-3xl">
            {" "}
            Tasks for sprint #{sprintId}{" "}
          </p>

          {!tasks.length && (
            <p className="text-gray-400 text-xl ml-6 mt-2">
              You have not added any tasks to that sprint yet
            </p>
          )}

          <div className="mx-auto box-content border-0 rounded-lg w-5/6 my-5 px-4 bg-slate-300 flex flex-wrap gap-6">
            {loading ? (
              <div className="p-4">
                <Spinner color="text-indigo-500" />
              </div>
            ) : (
              <>
                {tasks?.map((task, idx) => (
                  <TaskItem key={task.id} task={task} idx={idx} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SprintDetails;

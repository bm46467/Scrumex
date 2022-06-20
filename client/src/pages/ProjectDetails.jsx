import { useEffect, useState } from "react";
import { getProject, getAllSprints, getProjectUsers } from "../api";
import { ProjectDetailsItem, Spinner, SprintCardItem } from "../components";
import { useParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import CreateSprintModal from "../components/modals/CreateSprintModal";
import AddEmployeeModal from "../components/modals/AddEmployeeModal";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [sprints, setSprints] = useState([]);
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openEmployeeModal, setOpenEmployeeModal] = useState(false);

  useEffect(() => {
    const getSpecificProject = async () => {
      const { data } = await getProject(projectId);
      setProject(data);
    };

    const getAllProjectSprints = async () => {
      setLoading(true);
      const { data } = await getAllSprints(projectId);
      setSprints(data);
      setLoading(false);
    };

    getAllProjectSprints();
    getSpecificProject();
  }, []);

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

      <div className="lg:ml-[300px] shadow-lg shadow-indigo-900 mt-36 md:mt-16 p-8 lg:p-12 border-2 border-indigo-500 mx-4 rounded-xl">
        <div className="flex justify-between space-x-1">
          <h2 className="text-gray-200 text-4xl"> Project details </h2>
        </div>

        <div className="flex mt-8 mb-6">
          <button
            className="flex items-center ring-2 ring-slate-800 ring-offset-1 ring-offset-indigo-100/[.55] gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg cursor-pointer font-semibold transition-all hover:scale-105"
            onClick={() => setOpenEmployeeModal(true)}
          >
            <AiOutlinePlus className="inline-block text-2xl" /> Add Employee
          </button>
        </div>

        <div className="box-content shadow-lg shadow-indigo-900 border-4 rounded-lg w-5/6 mt-3 bg-indigo-900 border-indigo-300">
          <ProjectDetailsItem project={project} />

          <p className="mt-6 ml-12 tracking-normal font-sans text-4xl">
            {" "}
            Sprints{" "}
          </p>

          {!sprints.length && (
            <p className="text-gray-400 text-xl ml-6 mt-2">
              You have not participated in any sprint yet
            </p>
          )}

          <div className="mx-auto border-0 rounded-lg w-11/12 py-16 my-6 px-4 bg-slate-300 flex flex-wrap gap-16 justify-center ">
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
            className="flex items-center ring-2 ring-slate-800 ring-offset-1 ring-offset-indigo-100/[.55] gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg cursor-pointer font-semibold transition-all hover:scale-105"
            onClick={() => setOpenModal(true)}
          >
            <AiOutlinePlus className="inline-block text-2xl" /> Create Sprint
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;

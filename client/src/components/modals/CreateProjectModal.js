import { GrFormClose } from 'react-icons/gr'

const CreateProjectModal = ({ setOpenModal }) => {
  return (
    <div className="fixed inset-0 grid place-items-center bg-transparent z-30">
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-900 opacity-75"></div>

      {/* Modal content */}
      <div className="fixed inset-0 max-w-[350px] m-auto p-6 flex flex-col items-center h-min justify-center bg-gray-50 rounded-lg shadow-xl z-40">
        <GrFormClose
          className="absolute p-1 top-1 right-1 text-4xl text-gray-800 cursor-pointer hover:bg-gray-300 rounded-full"
          onClick={() => setOpenModal(false)}
        />
        <h3 className="text-gray-800 font-bold text-3xl mb-6">
          Create a project
        </h3>

        <div className="w-full px-8 flex flex-col gap-4">
          <div className="relative mt-2 w-full">
            <input
              id="projectName"
              name="projectName"
              className="peer w-full h-11 border-b-2 bg-transparent
              border-gray-400
                focus:outline-none focus:border-indigo-600 placeholder-transparent text-gray-800"
              type="text"
              placeholder="Team name"
            />
            <label
              htmlFor="projectName"
              className="form-label peer-placeholder-shown:text-gray-400"
            >
              Project Name
            </label>
          </div>

          <button className="btn-primary--filled mt-6 px-12">Create</button>
        </div>
      </div>
    </div>
  )
}

export default CreateProjectModal

import { useState } from 'react'

import { AiOutlinePlus } from 'react-icons/ai'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { FaUserAlt } from 'react-icons/fa'

import { CreateTeamModal } from '../components'

const TeamDetails = ({ name }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-3 bg-indigo-100 max-w-[1300px] rounded-lg shadow-md shadow-gray-200/20">
      <div>
        <div className="flex gap-3 items-center">
          {open ? (
            <TiArrowSortedUp
              onClick={() => setOpen(!open)}
              className="text-indigo-600 cursor-pointer text-3xl"
            />
          ) : (
            <TiArrowSortedDown
              onClick={() => setOpen(!open)}
              className="text-indigo-600 cursor-pointer text-3xl"
            />
          )}
          {name}
        </div>
      </div>

      {open && (
        <>
          <div className="grid grid-cols-2 gap-3 mt-8 pl-11">
            <div className="flex flex-col gap-3 text-lg text-gray-500 font-regular">
              <div>Department</div>
              <div>Backend development</div>
            </div>
            <div className="flex flex-col gap-3 text-lg text-gray-500 font-regular">
              <div>Sprint duration</div>
              <div>14</div>
            </div>
          </div>

          <div className="mt-10 pl-11">
            <h3 className="text-3xl text-gray-700">Members</h3>

            <div className="flex flex-wrap -pl-11 gap-16 mt-8">
              {['Gregory Grey', 'Cesar Baloon', 'Young Dev', 'John Yellow'].map(
                (member) => (
                  <div
                    key={member}
                    className="flex flex-col items-center gap-2"
                  >
                    <FaUserAlt className="text-4xl text-gray-700" />
                    <span>{member}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const Teams = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleCreateTeam = () => {
    setOpenModal(true)
  }

  return (
    <>
      {openModal && <CreateTeamModal setOpenModal={setOpenModal} />}

      <div className="lg:ml-[300px] mt-36 md:mt-16 p-8 lg:p-12 border-2 border-indigo-500 mx-4 rounded-xl">
        <h2 className="text-gray-500 text-3xl">Teams</h2>

        <div className="flex mt-8">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg cursor-pointer font-semibold transition-all hover:scale-105"
            onClick={handleCreateTeam}
          >
            <AiOutlinePlus className="inline-block text-2xl" /> Create Team
          </button>
        </div>

        <div className="flex flex-col gap-6 mt-8 text-gray-700 font-bold text-2xl">
          {['Team numero uno', 'Team numero duo', 'Team numero tres'].map(
            (name) => (
              <TeamDetails key={name} name={name} />
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Teams

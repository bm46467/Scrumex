import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center md:flex-row gap-6 max-w-[900px] 
    mx-auto mt-8 text-center px-6 py-4 pt-20"
    >
      <div className="flex flex-col items-center gap-6  md:items-start md:w-1/2 md:mt-12">
        <h2
          className="max-w-[300px] text-gray-200 md:max-w-full text-3xl md:text-4xl 
        md:text-left"
        >
          Project management made easier with Scrumex.
        </h2>

        <p className="max-w-[300px] md:max-w-[350px] md:text-[17px] text-md text-gray-600 md:text-left">
          The purpose of Scrumex is to simplify your dream project management.
          Take your work to the next level.
        </p>

        <Link to="/register">
          <button className="btn-primary--filled px-8">Get started</button>
        </Link>
      </div>

      <div className="max-w-[400px] mx-auto">
        <img src="./images/scrum_board.svg" alt="Scrum board" />
      </div>
    </section>
  )
}

export default Hero

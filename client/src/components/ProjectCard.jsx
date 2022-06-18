import ProjectCardItem from './ProjectCardItem'

const ProjectCard = ({ projects }) => {
  return (
    <div className='grid grid-cols-1'>
        {projects.map((project) => (
            <ProjectCardItem key={project.id} project={project} />
        ))}
    </div>
  )
}

export default ProjectCard
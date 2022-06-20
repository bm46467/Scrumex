import ProjectCardItem from "./ProjectCardItem";

const ProjectCard = ({ projects, setProjects }) => {
  return (
    <div className="grid grid-cols-1">
      {projects?.length > 0 ? (
        <>
          {projects?.map((project) => (
            <ProjectCardItem
              key={project.id}
              project={project}
              projects={projects}
              setProjects={setProjects}
            />
          ))}
        </>
      ) : (
        <p className="text-2xl">You have not added any project yet</p>
      )}
    </div>
  );
};

export default ProjectCard;

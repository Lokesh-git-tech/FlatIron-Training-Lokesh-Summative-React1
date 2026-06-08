function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        📁
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>
          <strong>Category:</strong>{" "}
          {project.category}
        </p>

        <p>{project.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
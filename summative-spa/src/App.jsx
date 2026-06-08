import { useState } from "react"
import "./App.css"

import Header from "./components/Header"
import ProjectForm from "./components/ProjectForm"
import SearchBar from "./components/SearchBar"
import ProjectList from "./components/ProjectList"

import projectsData from "./data/projects"

function App() {
  const [projects, setProjects] = useState(projectsData)
  const [searchTerm, setSearchTerm] = useState("")

  function handleAddProject(newProject) {
    setProjects([...projects, newProject])
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <Header />

      <ProjectForm onAddProject={handleAddProject} />

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <ProjectList projects={filteredProjects} />
    </div>
  )
}

export default App
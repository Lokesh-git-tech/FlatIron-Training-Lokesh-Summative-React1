import { useState } from "react"

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (!title || !category || !description) {
      return
    }

    const newProject = {
      id: Date.now(),
      title,
      category,
      description
    }

    onAddProject(newProject)

    setTitle("")
    setCategory("")
    setDescription("")
  }

  return (
    <form
      className="project-form"
      onSubmit={handleSubmit}
    >
      <h2>Add Project</h2>

      <label htmlFor="title">
        Title
      </label>

      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <label htmlFor="category">
        Category
      </label>

      <input
        id="category"
        type="text"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      />

      <label htmlFor="description">
        Description
      </label>

      <textarea
        id="description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <button type="submit">
        Add
      </button>
    </form>
  )
}

export default ProjectForm
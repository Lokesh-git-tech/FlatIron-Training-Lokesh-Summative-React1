import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ProjectForm from "../components/ProjectForm"

describe("ProjectForm", () => {
  test("allows user to type", async () => {
    const user = userEvent.setup()

    render(
      <ProjectForm
        onAddProject={() => {}}
      />
    )

    const titleInput =
      screen.getByLabelText("Title")

    await user.type(
      titleInput,
      "React Portfolio"
    )

    expect(titleInput).toHaveValue(
      "React Portfolio"
    )
  })

  test("submits a project", async () => {
    const user = userEvent.setup()

    const mockFunction = vi.fn()

    render(
      <ProjectForm
        onAddProject={mockFunction}
      />
    )

    await user.type(
      screen.getByLabelText("Title"),
      "New Project"
    )

    await user.type(
      screen.getByLabelText("Category"),
      "Web Development"
    )

    await user.type(
      screen.getByLabelText("Description"),
      "Test Description"
    )

    await user.click(
      screen.getByRole("button", {
        name: /add/i
      })
    )

    expect(mockFunction).toHaveBeenCalled()
  })
})
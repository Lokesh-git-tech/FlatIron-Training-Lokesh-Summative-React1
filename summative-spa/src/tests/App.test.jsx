import { render, screen } from "@testing-library/react"
import App from "../App"

describe("App", () => {
  test("renders page title", () => {
    render(<App />)

    expect(
      screen.getByText(
        /Personal Project Showcase App/i
      )
    ).toBeInTheDocument()
  })

  test("renders initial projects", () => {
    render(<App />)

    expect(
      screen.getByText("Portfolio Website")
    ).toBeInTheDocument()

    expect(
      screen.getByText("Movie Finder")
    ).toBeInTheDocument()
  })
})
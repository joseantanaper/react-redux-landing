import { Icon } from "../../widgets/Icon"
import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
  light,
  dark,
  selectTheme,
  defaultTheme,
  alternativeTheme,
  storeTheme,
} from "./reducer/theme.slice"

interface Props {
  id: string
  type?: string
  css?: string
}

export const ThemeToggler = ({ id, css = "" }: Props) => {
  const currentTheme = useAppSelector(selectTheme)
  document.documentElement.setAttribute("data-bs-theme", currentTheme)

  const dispatch = useAppDispatch()
  const [theme, setTheme] = useState(currentTheme)

  const manageTheme = (theme: string) => {
    console.log("ThemeToggler", "manageTheme", theme)
    document.documentElement.setAttribute("data-bs-theme", theme)
    document
      .querySelectorAll("button[name='app-theme-toggler'] svg[name='bi-sun']")
      .forEach((icon) => {
        icon.setAttribute(
          "style",
          theme !== "dark" ? "display: none;" : "display: inline;",
        )
      })
    document
      .querySelectorAll("button[name='app-theme-toggler'] svg[name='bi-moon']")
      .forEach((icon) => {
        icon.setAttribute(
          "style",
          theme !== "dark" ? "display: inline;" : "display: none;",
        )
      })
  }

  const handleClick = () => {
    const newTheme =
      document.documentElement.getAttribute("data-bs-theme") !== "dark"
        ? "dark"
        : "light"
    dispatch(newTheme !== "dark" ? light() : dark())
    setTheme(newTheme)
  }

  return (
    <>
      <button
        name="app-theme-toggler"
        className="btn"
        type="button"
        onClick={handleClick}
      >
        <Icon
          id="bi-sun"
          extra="app-rotate"
          style={{ display: theme !== "dark" ? "none" : "inline" }}
        />
        <Icon
          id="bi-moon"
          extra="app-rotate"
          style={{ display: theme !== "dark" ? "inline" : "none" }}
        />
      </button>{" "}
    </>
  )
}

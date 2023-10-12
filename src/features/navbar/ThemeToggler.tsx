import { Icon } from "../../widgets/Icon"
import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
  light,
  dark,
  selectTheme,
  DARK,
  storeTheme,
} from "./reducer/theme.slice"

interface Props {
  id: string
  type?: string
  css?: string
}

export const ThemeToggler = ({ id, css = "" }: Props) => {
  const currentTheme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()
  const [theme, setTheme] = useState(currentTheme)
  document.documentElement.setAttribute("data-bs-theme", currentTheme)

  const handleClick = () => {
    const newTheme =
      document.documentElement.getAttribute("data-bs-theme") !== DARK
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
          style={{ display: theme !== DARK ? "none" : "inline" }}
        />
        <Icon
          id="bi-moon"
          extra="app-rotate"
          style={{ display: theme !== DARK ? "inline" : "none" }}
        />
      </button>{" "}
    </>
  )
}

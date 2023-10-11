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
  const dispatch = useAppDispatch()
  const [theme, setTheme] = useState(defaultTheme)

  const handleClick = () => {
    if (document.documentElement.getAttribute("data-bs-theme") !== "dark") {
      dispatch(dark())
      document.documentElement.setAttribute("data-bs-theme", alternativeTheme)
    } else {
      document.documentElement.setAttribute("data-bs-theme", defaultTheme)
      dispatch(light())
    }
  }

  document.documentElement.setAttribute("data-bs-theme", currentTheme)

  return (
    <>
      <button
        name="app-theme-toggler"
        className="btn"
        type="button"
        onClick={handleClick}
      >
        <Icon id="bi-sun" />
      </button>{" "}
    </>
  )
}

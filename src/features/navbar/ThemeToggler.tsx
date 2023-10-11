import { Icon } from "../../widgets/Icon"

interface Props {
  id: string
  iconId: string
  type?: string
  css?: string
}

export const ThemeToggler = ({ id, iconId, css = "" }: Props) => {
  const handleClick = () => {
    alert("Not implemented yet")
  }

  return (
    <button
      name="app-theme-toggler"
      className="btn"
      type="button"
      onClick={handleClick}
    >
      <Icon id="bi-sun" />
    </button>
  )
}

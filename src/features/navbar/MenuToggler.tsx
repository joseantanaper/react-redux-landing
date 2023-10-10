import { Icon } from "../../widgets/Icon"

interface Props {
  id: string
  iconId: string
  type?: string
  css?: string
}

export const MenuToggler = ({
  id,
  iconId,
  type = "navbar-toggler",
  css = "",
}: Props) => {
  return (
    <button
      className={`${type} ${css}`}
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target={`#${id}`}
      aria-controls={`#${id}`}
      aria-label="Toggle navigation"
    >
      <Icon id={iconId} />
    </button>
  )
}

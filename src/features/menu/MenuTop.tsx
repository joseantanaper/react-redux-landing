import { Icon } from "../../widgets/Icon"

interface Props {
  id: string
}

export const MenuTop = ({ id }: Props) => {
  return (
    <div
      className="offcanvas offcanvas-top border-bottom shadow"
      tabIndex={0}
      id={id}
      aria-labelledby={`${id}Label`}
    >
      <div className="offcanvas-header bg-body-tertiary border-bottom shadow-sm">
        <h5 className="offcanvas-title" id={`${id}Label`}>
          Menu Top
        </h5>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-dismiss="offcanvas"
        >
          <Icon id="bi-chevron-bar-down" />
        </button>
      </div>
      <div className="offcanvas-body">Hello. I'm the Top Menu</div>
    </div>
  )
}

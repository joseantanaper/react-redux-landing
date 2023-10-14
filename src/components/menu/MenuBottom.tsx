import { Icon } from '../widgets/Icon'

interface Props {
  id: string
}

export const MenuBottom = ({ id }: Props) => {
  return (
    <div
      className="offcanvas offcanvas-bottom border-top shadow"
      tabIndex={0}
      id={id}
      aria-labelledby={`${id}Label`}
    >
      <div className="offcanvas-header bg-body-tertiary border-bottom shadow-sm">
        <h5 className="offcanvas-title" id={`${id}Label`}>
          Menu Bottom
        </h5>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-dismiss="offcanvas"
        >
          <Icon id="bi-chevron-bar-down" />
        </button>
      </div>
      <div className="offcanvas-body">Hello. I'm the Bottom Menu</div>
    </div>
  )
}

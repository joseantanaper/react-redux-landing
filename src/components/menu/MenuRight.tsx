import { Icon } from '../widgets/Icon'

interface Props {
  id: string
  title: string
}

export const MenuRight = ({ id, title }: Props) => {
  return (
    <div
      className="offcanvas offcanvas-end border-start shadow"
      tabIndex={-1}
      id={id}
      aria-labelledby={`${id}Label`}
    >
      <div className="offcanvas-header bg-body-tertiary border-bottom shadow-sm">
        <h5 className="offcanvas-title" id={`${id}Label`}>
          {title!}
        </h5>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-dismiss="offcanvas"
        >
          <Icon id="bi-chevron-bar-right" />
        </button>
      </div>
      <div className="offcanvas-body mt-5">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            aria-label="Username"
          />
          <button className="btn btn-outline-success" type="submit">
            Fake Login
          </button>
        </div>
      </div>
    </div>
  )
}

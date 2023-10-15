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
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

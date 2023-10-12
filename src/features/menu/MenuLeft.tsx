import { Icon } from "../../widgets/Icon"

interface Props {
  id: string
}

export const MenuLeft = ({ id }: Props) => {
  return (
    <div
      className="offcanvas offcanvas-start border-end shadow"
      tabIndex={-1}
      id={id}
      aria-labelledby={`${id}Label`}
    >
      {/* Header */}
      <div className="offcanvas-header bg-body-tertiary border-bottom shadow-sm">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-dismiss="offcanvas"
        >
          <Icon id="bi-chevron-bar-left" />
        </button>
        <h5 className="offcanvas-title" id={`${id}Label`}>
          Menu Left
        </h5>
      </div>

      {/* Body */}
      <div className="offcanvas-body text-wrap ps-1 pe-1 pt-3">
        <div className="list-group list-group-flush pb-2 pb-3">
          <a
            href="/"
            className="list-group-item list-group-item-action ps-5 border-0"
            aria-current="true"
          >
            <Icon id="bi-file-code-fill" />
            <div className="vr ms-3 me-3"></div>
            Home
          </a>
          <a
            href="/contact/1"
            className="list-group-item list-group-item-action ps-5 border-0"
          >
            <Icon id="bi-file-code-fill" />
            <div className="vr ms-3 me-3"></div>
            Contact 1
          </a>
          <a
            href="/contact/2"
            className="list-group-item list-group-item-action ps-5 border-0"
          >
            <Icon id="bi-file-code-fill" />
            <div className="vr ms-3 me-3"></div>
            Contact 2
          </a>
        </div>

        {/* Accordion 1 */}
        <div className="accordion" id="accordionFlushExample">
          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <Icon id="bi-menu-button-wide-fill" />
                <div className="vr ms-3 me-3"></div>
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse accordion-flush"
              // data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ps-0 pe-0 pt-1 pb-3"></div>
              <div className="list-group list-group-flush pb-2 pb-3">
                <a
                  href="/"
                  className="list-group-item list-group-item-action ps-5 border-0"
                  aria-current="true"
                >
                  <Icon id="bi-file-code-fill" />
                  <div className="vr ms-3 me-3"></div>
                  Home
                </a>
                <a
                  href="/contact/1"
                  className="list-group-item list-group-item-action ps-5 border-0"
                >
                  <Icon id="bi-file-code-fill" />
                  <div className="vr ms-3 me-3"></div>
                  Contact 1
                </a>
                <a
                  href="/contact/2"
                  className="list-group-item list-group-item-action ps-5 border-0"
                >
                  <Icon id="bi-file-code-fill" />
                  <div className="vr ms-3 me-3"></div>
                  Contact 2
                </a>
              </div>
            </div>
          </div>

          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <Icon id="bi-menu-button-wide-fill" />
                <div className="vr ms-3 me-3"></div>
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse accordion-flush"
              // data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ps-0 pe-0 pt-1 pb-3">
                <div className="list-group list-group-flush pb-2 pb-3">
                  <a
                    href="/"
                    className="list-group-item list-group-item-action ps-5 border-0"
                    aria-current="true"
                  >
                    <Icon id="bi-file-code-fill" />
                    <div className="vr ms-3 me-3"></div>
                    Home
                  </a>
                  <a
                    href="/contact/1"
                    className="list-group-item list-group-item-action ps-5 border-0"
                  >
                    <Icon id="bi-file-code-fill" />
                    <div className="vr ms-3 me-3"></div>
                    Contact 1
                  </a>
                  <a
                    href="/contact/2"
                    className="list-group-item list-group-item-action ps-5 border-0"
                  >
                    <Icon id="bi-file-code-fill" />
                    <div className="vr ms-3 me-3"></div>
                    Contact 2
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <Icon id="bi-gear-fill" />
                <div className="vr ms-3 me-3"></div>
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              // data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ps-0 pe-0 pt-1 pb-3">
                <div className="list-group list-group-flush pb-2 pb-3">
                  <a
                    href="/"
                    className="list-group-item list-group-item-action ps-5 border-0"
                    aria-current="true"
                  >
                    <Icon id="bi-file-code-fill" />
                    <div className="vr ms-3 me-3"></div>
                    Home
                  </a>
                  <a
                    href="/contact/1"
                    className="list-group-item list-group-item-action ps-5 border-0"
                  >
                    <Icon id="bi-file-code-fill" />
                    <div className="vr ms-3 me-3"></div>
                    Contact 1
                  </a>
                  <a
                    href="/contact/2"
                    className="list-group-item list-group-item-action ps-5 border-0"
                  >
                    <Icon id="bi-file-code-fill" />
                    <div className="vr ms-3 me-3"></div>
                    Contact 2
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

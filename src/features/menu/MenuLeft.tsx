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
      <div className="offcanvas-body m-0 p-0 text-wrap">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              // data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body m-0 p-0">
                <div className="list-group list-group-flush">
                  <a
                    href="/"
                    className="list-group-item list-group-item-action active"
                    aria-current="true"
                  >
                    Home
                  </a>
                  <a
                    href="/contact/1"
                    className="list-group-item list-group-item-action"
                  >
                    Contact 1
                  </a>
                  <a
                    href="/contact/2"
                    className="list-group-item list-group-item-action"
                  >
                    Contact 2
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              // data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              // data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

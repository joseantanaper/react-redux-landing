import { PageLayout } from '@/components/layout/PageLayout'
import LoremIpsum from 'react-lorem-ipsum'
import { Subnavbar } from '@/components/navbar/Subnavbar'
import { Avatar } from 'react-lorem-ipsum'

const Index = () => {
  const dummy = () => {
    alert('dummy')
  }

  const toolbar = (
    <>
      {/* <div className="vr d-none d-lg-block"></div> */}
      {/* <hr className="text-body-tertiary d-lg-none" /> */}

      <li className="nav-item">
        <a className="nav-link" href="#section1">
          Section 1
        </a>
      </li>
      <li className="nav-item float-end">
        <a className="nav-link" href="#section2">
          Section 2
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#section3">
          Section 3
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#section4">
          Section 4
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#section5">
          Section 5
        </a>
      </li>
    </>
  )

  return (
    <PageLayout
      title="Index"
      subtitle="This is a very long subtitle for testing purposes"
      subnavbar={true}
      toolbar={toolbar}
    >
      <>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col text-justify">
              <h2 id="section1">Section 1</h2>
              <LoremIpsum p={1} />
            </div>
          </div>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col">
              <h2 id="section2">Section 2</h2>
              <div className="container-fluid">
                <div className="row">
                  {[0, 1, 2, 3, 4].map((user, index) => {
                    return (
                      <div key={`div-avatar-${index}`} className="col">
                        <Avatar
                          gender="male"
                          className="avatar rounded-circle app-profile"
                          width="200"
                          height="200"
                          alt="Avatar"
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col text-justify">
              <h2 id="section3">Section 3</h2>
              <LoremIpsum p={8} />
            </div>
          </div>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col">
              <h2 id="section4">Section 4</h2>
              <div className="container-fluid">
                <div className="row">
                  {[0, 1, 2, 3, 4].map((user, index) => {
                    return (
                      <div key={`div-avatar-${index}`} className="col">
                        <Avatar
                          gender="male"
                          className="avatar rounded-circle app-profile"
                          width="200"
                          height="200"
                          alt="Avatar"
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col text-justify">
              <h2 id="section5">Section 5</h2>
              <LoremIpsum p={24} />
            </div>
          </div>
        </div>
      </>
    </PageLayout>
  )
}

export default Index

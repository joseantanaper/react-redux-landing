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
        <a className="nav-link" href="/">
          AAAAA
        </a>
      </li>
      <li className="nav-item float-end">
        <button className="nav-link text-end w-100" onClick={dummy}>
          AHA
        </button>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          BBBBBB
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          CC
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          DDD DD
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
        <div className="container-fluid">
          <div className="row">
            <div className="col text-justify">
              I'm Index.
              <hr />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col text-justify">
              <LoremIpsum p={1} />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {[0, 1, 2, 3, 4].map((user) => {
              return (
                <div className="col">
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
        <div className="container-fluid">
          <div className="row">
            <div className="col text-justify">
              <LoremIpsum p={20} />
            </div>
          </div>
        </div>
      </>
    </PageLayout>
  )
}

export default Index

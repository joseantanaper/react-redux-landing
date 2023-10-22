import { PageLayout } from '@/components/layout/PageLayout'
import LoremIpsum from 'react-lorem-ipsum'
import { Subnavbar } from '@/components/navbar/Subnavbar'

const Index = () => {
  const dummy = () => {
    alert('dummy')
  }
  const toolbar = (
    <ul className="navbar-nav border-start ps-3">
      <li className="nav-item">
        <hr className="text-body-tertiary" />
      </li>

      <li className="nav-item">
        <a className="btn" href="/">
          AAAAA
        </a>
      </li>
      <li className="nav-item">
        <button className="btn" onClick={dummy}>
          AHA
        </button>
      </li>
      <li className="nav-item">
        <a className="btn" href="/">
          AAAAA
        </a>
      </li>
      <li className="nav-item">
        <a className="btn" href="/">
          AAAAA
        </a>
      </li>
      <li className="nav-item">
        <a className="btn" href="/">
          AAAAA
        </a>
      </li>

      <li className="nav-item">
        <br />
      </li>
    </ul>
  )

  return (
    <PageLayout
      title="Index"
      subtitle="This is Index Subtitle"
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
              <LoremIpsum p={10} />
            </div>
          </div>
        </div>
      </>
    </PageLayout>
  )
}

export default Index

import { PageLayout } from '@/components/layout/PageLayout'
import LoremIpsum from 'react-lorem-ipsum'
import { Subnavbar } from '@/components/navbar/Subnavbar'
import { Avatar } from 'react-lorem-ipsum'
import { Icon, IconMap } from '@/components/widgets/Icon'
import { Linko } from '@/components/widgets/Linko'

const Index = () => {
  const dummy = () => {
    alert('dummy')
  }

  const toolbar = (
    <>
      {/* <div className="vr d-none d-lg-block"></div> */}
      {/* <hr className="text-body-tertiary d-lg-none" /> */}

      <li className="nav-item">
        <Linko iconmap={IconMap.Code} label="Section 1" href="#section1" />
      </li>
      <li className="nav-item float-end">
        <Linko iconmap={IconMap.Code} label="Section 2" href="#section2" />
      </li>
      <li className="nav-item">
        <Linko iconmap={IconMap.Code} label="Section 3" href="#section3" />{' '}
      </li>
      <li className="nav-item">
        <Linko iconmap={IconMap.Code} label="Section 4" href="#section4" />{' '}
      </li>
      <li className="nav-item">
        <Linko iconmap={IconMap.Code} label="Section 5" href="#section5" />{' '}
      </li>
      <li className="nav-item">
        <Linko iconmap={IconMap.Code} label="Footer" href="#footer" />{' '}
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

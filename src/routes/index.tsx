import { PageLayout } from '@/components/layout/PageLayout'
import LoremIpsum from 'react-lorem-ipsum'

const Index = () => {
  return (
    <PageLayout title="Index">
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

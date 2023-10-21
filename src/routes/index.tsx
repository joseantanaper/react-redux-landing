import { PageLayout } from '@/components/layout/PageLayout'
import LoremIpsum from 'react-lorem-ipsum'
import { Subnavbar } from '@/components/navbar/Subnavbar'

const Index = () => {
  const title = 'Index'
  const subtitle = 'This is the Index Subtitle'
  return (
    <PageLayout title={title} subtitle={subtitle}>
      <>
        <Subnavbar title={title} subtitle={subtitle} />
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

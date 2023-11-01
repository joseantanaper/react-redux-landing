import { PageLayout, LoaderData } from '@/components/layout/PageLayout'
import { useLoaderData } from 'react-router-dom'

export const Portfolio = () => {
  const loader = useLoaderData() as LoaderData
  return (
    <PageLayout subnavbar={true}>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-justify">
            <p>Hello, I'm Portfolio.</p>
            <hr />
            {JSON.stringify(loader)}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Portfolio

import { PageLayout, LoaderData } from '@/components/layout/PageLayout'
import { useLoaderData } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'

export const Portfolio = () => {
  const loader = useLoaderData() as LoaderData
  return (
    <PageLayout subnavbar={true}>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-justify">
            <h2>
              <Trans>app:portfolio:summaryTitle</Trans>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Trans>app:portfolio:summary</Trans>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Portfolio

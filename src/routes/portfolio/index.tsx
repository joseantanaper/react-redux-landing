import { PageLayout, LoaderData } from '@/components/layout/PageLayout'
import { useLoaderData } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'
import Title from '@/components/widgets/Title'
import { IconMap } from '@/components/widgets/Icon'

export const Portfolio = () => {
  const { t, i18n } = useTranslation()
  const loader = (useLoaderData() as LoaderData) || {}
  const { iconmap } = loader
  return (
    <PageLayout subnavbar={true}>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-justify">
            <Title
              h="h2"
              label={`${t('app:portfolio:summaryTitle')}`}
              iconmap={iconmap}
            />
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

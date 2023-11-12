import { PageLayout, LoaderData } from '@/components/layout/PageLayout'
import { useLoaderData } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'
import Title from '@/components/widgets/Title'
import { IconMap } from '@/components/widgets/Icon'
import { Avataro } from '@/components/widgets/Avataro'
import { ExperienceEntry } from './ExperienceEntry'

export const Portfolio = () => {
  const { t, i18n } = useTranslation()
  const loader = (useLoaderData() as LoaderData) || {}
  const { iconmap } = loader ?? IconMap.Code

  return (
    <PageLayout subnavbar={true}>
      <div className="container-fluid mb-5">
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
          <div className="col-md-8 mb-3">
            <Trans>app:portfolio:summary</Trans>
          </div>
          <div className="col-md-4 text-center">
            <Avataro size="240px" />
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col text-justify">
            <Title
              h="h2"
              label={`${t('app:portfolio:experienceTitle')}`}
              iconmap={iconmap}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ExperienceEntry
              entry="app:portfolio:experience"
              iconmap={iconmap}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Portfolio

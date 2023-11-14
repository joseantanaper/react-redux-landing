import { PageLayout, LoaderData } from '@/components/layout/PageLayout'
import { useLoaderData } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'
import Title from '@/components/widgets/Title'
import { IconMap } from '@/components/widgets/Icon'
import { Avataro } from '@/components/widgets/Avataro'
import { ExperienceList } from './ExperienceList'
import { AcademicList } from './AcademicList'
import { Linko } from '@/components/widgets/Linko'

export const Portfolio = () => {
  const { t, i18n } = useTranslation()
  const loader = (useLoaderData() as LoaderData) || {}
  const { iconmap } = loader ?? IconMap.Code

  const toolbar = (
    <>
      <li className="nav-item">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('app:portfolio:summaryTitle')}`}
          href="#summary"
        />
      </li>
      <li className="nav-item float-end">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('app:portfolio:experienceTitle')}`}
          href="#experience"
        />
      </li>

      <li className="nav-item">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('Footer')}`}
          href="#footer"
        />{' '}
      </li>
    </>
  )

  return (
    <PageLayout subnavbar={true} toolbar={toolbar}>
      {/* Summary */}
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col text-justify">
            <Title
              id="summary"
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

      {/* Experience */}
      <ExperienceList
        title="app:portfolio:experienceTitle"
        entry="app:portfolio:experience"
        iconmap={iconmap}
      />

      {/* Academic Background */}
      <AcademicList
        title="app:portfolio:academicTitle"
        entry="app:portfolio:academic"
        rightLinkLabel="app:site"
        iconmap={iconmap}
      />

      {/* Certification */}
      <AcademicList
        title="app:portfolio:certificationTitle"
        entry="app:portfolio:certification"
        leftLinkIcon={IconMap.Code}
        rightLinkIcon={IconMap.Academic}
        rightLinkLabel="app:portfolio:viewMyCert"
        iconmap={iconmap}
      />
    </PageLayout>
  )
}

export default Portfolio

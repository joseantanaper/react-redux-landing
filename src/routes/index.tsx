import { PageLayout } from '@/components/layout/PageLayout'
import LoremIpsum from 'react-lorem-ipsum'
import { Avatar } from 'react-lorem-ipsum'
import { Icon, IconMap } from '@/components/widgets/Icon'
import { Linko } from '@/components/widgets/Linko'
import { useTranslation, Trans } from 'react-i18next'

const Index = () => {
  const { t } = useTranslation()
  const toolbar = (
    <>
      <li className="nav-item">
        <Linko
          iconmap={IconMap.Code}
          label={`${t('Section')} #1`}
          href="#section1"
        />
      </li>
      <li className="nav-item float-end">
        <Linko
          iconmap={IconMap.Code}
          label={`${t('Section')} #2`}
          href="#section2"
        />
      </li>
      <li className="nav-item">
        <Linko
          iconmap={IconMap.Code}
          label={`${t('Section')} #3`}
          href="#section3"
        />{' '}
      </li>
      <li className="nav-item">
        <Linko
          iconmap={IconMap.Code}
          label={`${t('Section')} #4`}
          href="#section4"
        />{' '}
      </li>
      <li className="nav-item">
        <Linko
          iconmap={IconMap.Code}
          label={`${t('Section')} #5`}
          href="#section5"
        />{' '}
      </li>
      <li className="nav-item">
        <Linko iconmap={IconMap.Code} label={`${t('Footer')}`} href="#footer" />{' '}
      </li>
    </>
  )

  return (
    <PageLayout subnavbar={true} toolbar={toolbar}>
      <>
        <div className="container-fluid mb-5">
          {/* Section 1 */}
          <div className="row">
            <div className="col">
              <h2 id="section1">
                {t('Section')} #1: {t('app:home:navbartitle')}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col fw-light">
              <Trans>{'app:home:navbar'}</Trans>
            </div>
            <div className="col text-center">
              <Icon
                iconmap={IconMap.Hypnotize}
                size={420}
                extra="app-self-rotate"
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col">
              <h2 id="section2">
                {t('Section')} #2: {t('app:home:routetitle')}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col text-end">
              <div className="bg-black text-center rounded-5 p-5">
                <iframe
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/bbwQL_YJCnY?si=qO5WLUJ_W5pxE_IC"
                  title="Arkanoid"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
            <div className="col fw-light">
              <Trans>{'app:home:route'}</Trans>
            </div>
          </div>
          <div className="row mt-5"></div>
        </div>
        {/* Section 3 */}
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col text-justify">
              <h2 id="section3">{t('Section')} #3</h2>
              <LoremIpsum p={4} />
            </div>
          </div>
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

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col">
              <h2 id="section4">{t('Section')} #4</h2>
            </div>
            <div className="row">
              <div className="col">
                <LoremIpsum p={2} />
              </div>
              <div className="col">
                <LoremIpsum p={2} />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col text-justify">
              <h2 id="section5">{t('Section')} #5</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <LoremIpsum p={12} />
            </div>
            <div className="col">
              <LoremIpsum p={12} />
            </div>
            <div className="col">
              <LoremIpsum p={12} />
            </div>
          </div>
        </div>
      </>
    </PageLayout>
  )
}

export default Index

import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import Title from '@/components/widgets/Title'
import { IconMap } from '@/components/widgets/Icon'
import { CarouselItem } from '@components/widgets/Carousel'
import Card from '@/components/widgets/Card'

import aernnova from '@assets/arghos/aernnova.png'
import arghos from '@assets/arghos/arghos.png'
import kh7 from '@assets/arghos/kh7-logo-new.svg'
import seat from '@assets/arghos/seatmartorell.png'
import vw from '@assets/arghos/vwnavarra.png'

import circa from '@assets/omegazeta/1I6A9650web.jpg'
import hostaletsPierola from '@assets/omegazeta/Ajuntament-de-Hostalets-de-Pierola-1-1024x572.jpg'
import blanquerna from '@assets/omegazeta/Biblioteca-Blanquerna-1-1024x572.jpg'
import santVicens from '@assets/omegazeta/Biblioteca-Sant-Vicenç-de-Castellet-1-1024x490.jpg'
import canCaralleu from '@assets/omegazeta/Can-Caralleu-1-1024x536.jpg'
import castellers from '@assets/omegazeta/Edificio-Castellers-de-Gracia-1-1024x490.jpg'
import esparreguera from '@assets/omegazeta/Edificio-de-viviendas-en-Esparreguera-11.jpg'
import manlleu from '@assets/omegazeta/Edificio-La-Vola-Manlleu-1-1024x490.jpg'
import sitges from '@assets/omegazeta/Sitges-1-1024x490.jpg'
import reus from '@assets/omegazeta/Tecnoparc-de-Reus-1-1024x490.jpg'

const omegazetaImages: CarouselItem[] = [
  {
    img: circa,
    title: 'CIRCA, S.A.',
    subtitle: 'Fábrica en Lliçà de Vall (Granollers)',
    link: 'https://panelomegazeta.com/nosotros/',
  },
  {
    img: hostaletsPierola,
    title: 'Hostalets de Pierola',
    subtitle: 'Ajuntament',
    link: 'https://elshostaletsdepierola.cat/',
  },
  {
    img: blanquerna,
    title: 'Biblioteca de la Facultad de Comunicación',
    subtitle: 'Universidad Blanquerna',
    link: 'https://www.interempresas.net/Cerramientos_y_ventanas/Articulos/51438-Panel-Omega-Zeta-una-innovadora-propuesta-en-arquitectura.html',
  },
  {
    img: santVicens,
    title: 'Biblioteca Salvador Vives Casajuana',
    subtitle: 'Sant Vicenç de Castellet',
    link: 'https://bibliotecavirtual.diba.cat/es/sant-vicenc-de-castellet-biblioteca-salvador-vives-casajuana',
  },
  {
    img: canCaralleu,
    title: 'Vivienda Unifamiliar',
    subtitle: 'Can Caralleu (Barcelona)',
  },
  {
    img: castellers,
    title: 'Edificio Castellers de la Vila de Gràcia',
    subtitle: 'Barcelona',
    link: 'https://cvg.cat/',
  },
  {
    img: esparreguera,
    title: 'Edificio de Viviendas',
    subtitle: 'Esparreguera',
  },
  {
    img: manlleu,
    title: 'Edificio La Vola',
    subtitle: 'Manlleu (Osona-Barcelona)',
    link: 'https://www.construible.es/2008/02/03/ecoedificio-de-la-vola',
  },
  {
    img: sitges,
    title: 'Vivienda Unifamiliar',
    subtitle: 'Sitges. Estudio Jon Tugores',
  },
  {
    img: reus,
    title: 'Tecnoparc',
    subtitle: 'Reus',
    link: 'https://www.reus.cat/tecnoparc-reus',
  },
]

const arghosImages = []

interface Experience {
  id: number
  title: string[]
  year: string
  subtitle: string[]
  details: string[]
}

interface Props {
  entry: string
  iconmap?: IconMap
}

export const ExperienceEntry = ({ entry, iconmap }: Props) => {
  const { t, i18n } = useTranslation()

  return (
    <>
      {(
        i18n.t(entry, {
          returnObjects: true,
          defaultValue: [],
        }) as Experience[]
      ).map((item: Experience, experienceIndex) => (
        <div className="row mb-5 ms-5" key={experienceIndex}>
          <div className="col">
            <div className="row">
              <div className="col">
                <Title h="h4" iconmap={iconmap}>
                  {/* Cannot use map directly */}
                  {Object.keys(item.title).map((key: any, index) => (
                    <span
                      key={`title-${experienceIndex}-${index}`}
                      className="border-end pe-3 me-3"
                    >
                      {item.title[key]}
                    </span>
                  ))}
                  <span
                    key={`titlex-${experienceIndex}`}
                    className="text-primary fw-light"
                  >
                    {item.year}
                  </span>
                </Title>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 ps-5">
                <Title
                  h="h6"
                  iconmap={iconmap}
                  className="text-warning-emphasis"
                >
                  {Object.keys(item.subtitle).map((key: any, index) => (
                    <span
                      key={`subtitle-${experienceIndex}-${index}`}
                      className={
                        key < item.subtitle.length - 1
                          ? `border-end pe-3 me-3`
                          : ''
                      }
                    >
                      {item.subtitle[key]}
                    </span>
                  ))}
                </Title>
                <span className="">
                  {Object.keys(item.details).map((key: any, index) => (
                    <div
                      key={`experience-${experienceIndex}-${index}`}
                      className="pb-4"
                    >
                      <Trans>{item.details[key]}</Trans>
                    </div>
                  ))}
                </span>
                {item.id === 1 ? (
                  <div className="row">
                    <div className="col">
                      <Card
                        image={seat}
                        imageClass=""
                        details="app:portfolio:seat"
                        linkedinLink="https://es.linkedin.com/company/seat-sa"
                        moreLink="https://www.seat-mediacenter.es/smc/seat-sa/facilitiespage/martorell-production-facility"
                      />
                    </div>
                    <div className="col">
                      <Card
                        image={vw}
                        imageClass=""
                        details="app:portfolio:vw"
                        linkedinLink="https://es.linkedin.com/company/volkswagen-navarra"
                        moreLink="https://vw-navarra.es/"
                      />
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="col-lg-4">
                {item.id === 0 ? (
                  <Card
                    carouselItems={omegazetaImages}
                    title="CIRCA, S.A."
                    details="CIRCA - Panel Omega Zeta pertenece a la Corporación Omega Zeta, que trabaja en Europa, Asia y África..."
                    linkedinLink="https://www.linkedin.com/company/circa---panel-omega-zeta/about/"
                    moreLink="ttps://panelomegazeta.com/nosotros/"
                  />
                ) : (
                  <>
                    <div className="row">
                      <div className="col">
                        <Card
                          image={arghos}
                          imageClass="p-2"
                          details="app:portfolio:arghos"
                          linkedinLink="https://es.linkedin.com/company/arghos"
                          moreLink="https://www.arghos.es/"
                        />
                      </div>
                      <div className="col">
                        <Card
                          image={aernnova}
                          imageClass="py-4 px-2"
                          details="app:portfolio:aernnova"
                          linkedinLink="https://es.linkedin.com/company/aernnova"
                          moreLink="https://www.aernnova.com/es/"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

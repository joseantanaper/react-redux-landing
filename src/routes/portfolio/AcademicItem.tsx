import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import Title from '@/components/widgets/Title'
import { Icon, IconMap } from '@/components/widgets/Icon'
import uoc from '@assets/uoc/Logo-uoc.png'
import uoh from '@assets/uoh/universityofhelsinki.png'
import microsoft from '@assets/microsoft/microsoft.png'
import uohLogo from '@assets/uoh/uohLogo2.png'
import iet from '@assets/iet/escoladeltreball.png'
import fcc from '@assets/fcc/freecodecamp.png'
import spring from '@assets/spring/spring.png'
import Card from '@/components/widgets/Card'

export interface AcademicEntry {
  title: string
  year: string
  entity: string
  logo: string
  details?: string
  leftLink?: string
  rightLink?: string
}

interface Props {
  academicItem: AcademicEntry
  academicIndex: number
  mode: number
  leftLinkIcon?: IconMap
  leftLinkLabel?: string
  rightLinkIcon?: IconMap
  rightLinkLabel?: string
}

export const AcademicItem = ({
  academicItem,
  academicIndex,
  mode,
  leftLinkIcon,
  rightLinkIcon,
  rightLinkLabel,
}: Props) => {
  const { t, i18n } = useTranslation()
  const entityImage = () => {
    switch (academicItem.logo) {
      case 'uoc':
        return (
          <div style={{ height: '80px' }}>
            <img
              src={uoc}
              alt={`${academicItem.title}`}
              className={`card-img-top bg-white`}
              style={{
                objectFit: 'contain',
                height: '100%',
              }}
            />
          </div>
        )
      case 'iet':
        return (
          <div style={{ height: '80px' }}>
            <img
              src={iet}
              alt={`${academicItem.title}`}
              className={`card-img-top`}
              style={{
                objectFit: 'cover',
                height: '100%',
              }}
            />
          </div>
        )
      case 'uoh':
        return (
          <div style={{ height: '80px' }}>
            <img
              src={uoh}
              alt={`${academicItem.title}`}
              className={`card-img-top`}
              style={{
                objectFit: 'cover',
                height: '100%',
              }}
            />
            <img
              src={uohLogo}
              alt="Logo"
              className="position-absolute end-0 m-1"
              style={{
                width: '120px',
                filter:
                  'drop-shadow(0 0 1px white) drop-shadow(0 0 4px white) drop-shadow(0 0 8px white)',
              }}
            />
          </div>
        )
      case 'fcc':
        return (
          <div style={{ height: '80px' }} className="">
            <img
              src={fcc}
              alt={`${academicItem.title}`}
              className={`card-img-top`}
              style={{
                objectFit: 'cover',
                height: '100%',
              }}
            />
          </div>
        )
      case 'spr':
        return (
          <div style={{ height: '80px' }} className="">
            <img
              src={spring}
              alt={`${academicItem.title}`}
              className={`card-img-top p-2 bg-white`}
              style={{
                objectFit: 'contain',
                height: '100%',
              }}
            />
          </div>
        )
      case 'ms':
        return (
          <div style={{ height: '80px' }}>
            <img
              src={microsoft}
              alt={`${academicItem.title}`}
              className={`card-img-top`}
              style={{
                objectFit: 'cover',
                height: '100%',
              }}
            />
          </div>
        )
      default:
        return uoc
    }
  }
  return mode === 0 ? (
    <>
      <div className="row mb-5" key={`academic-${academicIndex}`}>
        <div className="col">
          <div className="row">
            <div className="col-9">
              <div className="row">
                <div className="col">
                  <Title h="h4" iconmap={IconMap.Academic}>
                    <Trans>{academicItem.title}</Trans>
                    <span
                      key={`titlex-${academicIndex}`}
                      className="text-primary border-start ms-3 ps-3 fw-light"
                    >
                      {academicItem.year}
                    </span>
                  </Title>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Title
                    h="h6"
                    iconmap={IconMap.Business}
                    className="text-warning-emphasis"
                  >
                    {academicItem.entity}
                  </Title>
                </div>
              </div>
              <div className="row">
                <div className="col fw-light">
                  <Trans>{academicItem.details}</Trans>
                </div>
              </div>
            </div>
            <div className="col-3">
              <Card
                key={`academic-${academicIndex}`}
                leftLinkIcon={leftLinkIcon}
                leftLink={academicItem.leftLink}
                rightLinkIcon={rightLinkIcon}
                rightLink={academicItem.rightLink}
                rightLinkLabel={rightLinkLabel}
              >
                {entityImage()}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="col">
        <Card
          key={`academic-${academicIndex}`}
          title={academicItem.title}
          subtitle={academicItem.entity}
          year={academicItem.year}
          details={academicItem.details}
          leftLinkIcon={leftLinkIcon}
          leftLink={academicItem.leftLink}
          rightLinkIcon={rightLinkIcon}
          rightLink={academicItem.rightLink}
          rightLinkLabel={rightLinkLabel}
        >
          {entityImage()}
        </Card>
      </div>
    </>
  )
}

import React from 'react'
import { Carousel, CarouselItem } from '@/components/widgets/Carousel'
import { Icon, IconMap } from '@components/widgets/Icon'
import { useTranslation, Trans } from 'react-i18next'

interface Props {
  carouselItems?: CarouselItem[]
  image?: string
  imageClass?: string
  title?: string
  details: string
  linkedinLink?: string
  moreLink?: string
}

const Card = ({
  carouselItems,
  image,
  imageClass,
  title,
  details,
  linkedinLink,
  moreLink,
}: Props) => {
  const { t, i18n } = useTranslation()
  return (
    <div className="card">
      {carouselItems ? <Carousel carouselItems={carouselItems} /> : null}
      {image ? (
        <img
          src={image}
          alt={`${title}`}
          className={`${imageClass} w-100`}
          style={{ background: 'rgba(0, 0, 0, 0.2)' }}
        />
      ) : null}
      <div className="card-body">
        {title ? <h5 className="card-title">{title}</h5> : null}
        {details ? (
          <p className="card-text text-end fw-light">
            <Trans>{details}</Trans>
          </p>
        ) : null}
        {linkedinLink ? (
          <a
            href={linkedinLink}
            target="_blank"
            className="btn btn-outline-primary float-start"
          >
            <Icon iconmap={IconMap.Portfolio} extra="text-primary" />
          </a>
        ) : null}
        {moreLink ? (
          <a
            href={moreLink}
            target="_blank"
            className="btn btn-outline-primary float-end"
          >
            {t('More')}...
          </a>
        ) : null}
      </div>
    </div>
  )
}

export default Card

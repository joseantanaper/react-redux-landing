import React from 'react'
import { Carousel, CarouselItem } from '@/components/widgets/Carousel'
import { Icon, IconMap } from '@components/widgets/Icon'
import { useTranslation, Trans } from 'react-i18next'
import Title from './Title'
import { ReactNode } from 'react'

import html5 from '@assets/icons/html5.png'
import css3 from '@assets/icons/css3.png'
import js from '@assets/icons/js.png'
import ts from '@assets/icons/ts.png'
import bootstrap from '@assets/icons/bootstrap.png'
import materialize from '@assets/icons/materialize.png'
import react from '@assets/icons/react.png'
import vue from '@assets/icons/vue.png'
import vite from '@assets/icons/vite.png'
import jquery from '@assets/icons/jquerymini.png'
import angular from '@assets/icons/angular.png'

import java from '@assets/icons/java.png'
import spring from '@assets/icons/spring.png'
import nodejs from '@assets/icons/nodejs.png'
import apollo from '@assets/icons/apollo.png'
import rest from '@assets/icons/rest.png'
import graphql from '@assets/icons/graphql.png'

import powerplatform from '@assets/icons/powerplatform.png'
import powerautomate from '@assets/icons/powerautomate.png'
import csharp from '@assets/icons/csharp.png'
import vbnet from '@assets/icons/vbnet.png'

export interface Skill {
  logo: string
  label: string
}

interface Props {
  carouselItems?: CarouselItem[]
  image?: string
  imageClass?: string
  imageHeight?: string
  imageFit?: 'cover' | 'fill' | 'contain' | 'none'
  title?: string
  subtitle?: string
  year?: string
  details?: string
  skills?: Skill[]
  leftLink?: string
  leftLinkIcon?: IconMap
  rightLink?: string
  rightLinkLabel?: string
  rightLinkIcon?: IconMap
  children?: ReactNode
}

const Card = ({
  carouselItems,
  image,
  imageClass,
  imageHeight = '160px',
  imageFit = 'cover',
  title,
  subtitle,
  year,
  details,
  skills,
  leftLink,
  leftLinkIcon = IconMap.Portfolio,
  rightLink,
  rightLinkLabel = 'app:more',
  rightLinkIcon = IconMap.External,
  children,
}: Props) => {
  const { t, i18n } = useTranslation()

  const logo = (skill: Skill) => {
    let icon
    switch (skill.logo) {
      case 'html5':
        icon = html5
        break
      case 'css3':
        icon = css3
        break
      case 'js':
        icon = js
        break
      case 'ts':
        icon = ts
        break
      case 'bootstrap':
        icon = bootstrap
        break
      case 'materialize':
        icon = materialize
        break
      case 'react':
        icon = react
        break
      case 'vue':
        icon = vue
        break
      case 'vite':
        icon = vite
        break
      case 'angular':
        icon = angular
        break
      case 'jquery':
        icon = jquery
        break

      case 'java':
        icon = java
        break
      case 'spring':
        icon = spring
        break
      case 'nodejs':
        icon = nodejs
        break
      case 'graphql':
        icon = graphql
        break
      case 'rest':
        icon = rest
        break

      case 'powerplatform':
        icon = powerplatform
        break
      case 'powerautomate':
        icon = powerautomate
        break
      case 'csharp':
        icon = csharp
        break
      case 'vbnet':
        icon = vbnet
        break
    }
    return (
      <div className="text-center mb-3">
        <img
          src={icon}
          height={26}
          alt={`${skill.label}`}
          className="d-inline-block"
          style={{ filter: 'drop-shadow(0 0 1px white)' }}
        />
        <span className="fw-light small text-secondary d-block">
          {skill.label}
        </span>
      </div>
    )
  }
  return (
    <div className="card mb-4 shadow">
      {carouselItems && <Carousel carouselItems={carouselItems} />}
      {image && (
        <div style={{ height: imageHeight }}>
          <img
            src={image}
            alt={`${title}`}
            className={`card-img-top ${imageClass}`}
            style={{
              objectFit: imageFit,
              height: '100%',
            }}
          />
        </div>
      )}
      {children ? children : null}
      <div className="card-body border-top">
        {title ? (
          <Title h="h5" className="card-title">
            {title}
          </Title>
        ) : null}
        {subtitle && (
          <p className="card-text fw-light">
            <Trans>{subtitle}</Trans>
            <span className="text-primary float-end border-start ms-3 ps-3">
              {year}
            </span>
          </p>
        )}
        {details && (
          <p className="card-text text-end small text-secondary border-top pt-3 fw-light">
            <Trans>{details}</Trans>
          </p>
        )}
        {skills && (
          <div className="row">
            {skills.map((skill) => (
              <div className="col">{logo(skill)}</div>
            ))}
          </div>
        )}
        {leftLink ? (
          <a
            href={leftLink}
            target="_blank"
            className="btn btn-outline-primary float-start"
          >
            <Icon iconmap={leftLinkIcon} extra="text-primary" />
          </a>
        ) : null}
        {rightLink ? (
          <a
            href={rightLink}
            target="_blank"
            className="btn btn-outline-primary float-end"
          >
            <Icon iconmap={rightLinkIcon} extra="text-primary" />
            {rightLinkLabel ? <span>{t(rightLinkLabel)}</span> : ''}
          </a>
        ) : null}
      </div>
    </div>
  )
}

export default Card

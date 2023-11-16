import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Icon, IconMap } from '@/components/widgets/Icon'
import Title from '@/components/widgets/Title'
import { SkillLogo } from '@/components/widgets/SkillLogo'

import Card from '@/components/widgets/Card'
import { CustomBackground } from '../../components/widgets/CustomBackground'

export interface AcademicEntry {
  title: string
  year: string
  entity: string
  logo: string
  details?: string
  skills?: Skill[]
  leftLink?: string
  rightLink?: string
}

export interface Skill {
  logo: string
  label: string
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

  return mode === 0 ? (
    <>
      <div className="row" key={`academic-${academicIndex}`}>
        <div className="col">
          <div className="row border rounded shadow-sm py-3 mb-3">
            <div className="col-9">
              <div className="row">
                <div className="col">
                  <Title h="h4" iconmap={IconMap.Academic}>
                    <Trans>{academicItem.title}</Trans>
                  </Title>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <Title
                    h="h6"
                    iconmap={IconMap.Business}
                    className="text-primary"
                  >
                    <Trans>{academicItem.entity}</Trans>
                    {academicItem.year && (
                      <span className="text-primary border-start ms-3 ps-3 fw-light">
                        {academicItem.year}
                      </span>
                    )}
                  </Title>
                </div>
              </div>

              {academicItem.details && (
                <div className="row">
                  <div className="col">
                    <Trans>{academicItem.details}</Trans>
                  </div>
                </div>
              )}
              {academicItem.skills && (
                <div className="row">
                  {academicItem.skills.map((skill) => (
                    <div className="col">
                      <Card>
                        <SkillLogo
                          logo={skill.logo}
                          label={skill.label}
                          className="me-5 mb-2"
                        />
                      </Card>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="col-3">
              <CustomBackground
                logo={academicItem.logo}
                label={academicItem.title}
              />
              <div className="pt-3">
                {academicItem.leftLink ? (
                  <a
                    href={academicItem.leftLink}
                    target="_blank"
                    className="btn btn-outline-primary float-start"
                  >
                    <Icon iconmap={leftLinkIcon} extra="text-primary" />
                  </a>
                ) : null}
                {academicItem.rightLink ? (
                  <a
                    href={academicItem.rightLink}
                    target="_blank"
                    className="btn btn-outline-primary float-end"
                  >
                    <Icon iconmap={rightLinkIcon} extra="text-primary" />
                    {rightLinkLabel ? <span>{t(rightLinkLabel)}</span> : ''}
                  </a>
                ) : null}
              </div>

              {/* {academicItem.entity && (
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
                )} */}
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
          skills={academicItem.skills}
          leftLinkIcon={leftLinkIcon}
          leftLink={academicItem.leftLink}
          rightLinkIcon={rightLinkIcon}
          rightLink={academicItem.rightLink}
          rightLinkLabel={rightLinkLabel}
        >
          <CustomBackground
            logo={academicItem.logo}
            label={academicItem.title}
          />
        </Card>
      </div>
    </>
  )
}

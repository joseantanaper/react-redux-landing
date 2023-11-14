import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { AcademicItem, AcademicEntry } from './AcademicItem'
import Title from '@/components/widgets/Title'
import { Icon, IconMap } from '@/components/widgets/Icon'
import { Button } from '@/components/widgets/Button'

interface Props {
  title: string
  entry: string
  iconmap?: IconMap
  leftLinkIcon?: IconMap
  leftLinkLabel?: string
  rightLinkIcon?: IconMap
  rightLinkLabel?: string
}

export const AcademicList = ({
  title,
  entry,
  iconmap,
  leftLinkIcon,
  leftLinkLabel,
  rightLinkIcon,
  rightLinkLabel,
}: Props) => {
  const [mode, setMode] = useState(1)
  const { t, i18n } = useTranslation()
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9 text-justify">
            <Title
              id="academic"
              h="h2"
              label={`${t(title)}`}
              iconmap={iconmap}
            ></Title>
          </div>
          <div className="col-3 text-end">
            <div className="btn-group">
              <Button
                className={`btn btn-outline-secondary ${
                  mode === 0 ? 'active' : ''
                }`}
                iconmap={IconMap.List}
                label="List"
                onClick={() => setMode(0)}
              />
              <Button
                className={`btn btn-outline-secondary ${
                  mode === 1 ? 'active' : ''
                }`}
                iconmap={IconMap.Grid}
                label="Grid"
                onClick={() => setMode(1)}
              />
            </div>
          </div>
        </div>
      </div>
      {mode === 0 ? (
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col">
              {(
                i18n.t(entry, {
                  returnObjects: true,
                  defaultValue: [],
                }) as AcademicEntry[]
              ).map((academicItem: AcademicEntry, academicIndex) => (
                <>
                  <AcademicItem
                    academicItem={academicItem}
                    academicIndex={academicIndex}
                    mode={mode}
                    leftLinkIcon={leftLinkIcon}
                    leftLinkLabel={leftLinkLabel}
                    rightLinkIcon={rightLinkIcon}
                    rightLinkLabel={rightLinkLabel}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="row mb-2">
              <div className="col">
                <div className="row row-cols-4">
                  {(
                    i18n.t(entry, {
                      returnObjects: true,
                      defaultValue: [],
                    }) as AcademicEntry[]
                  ).map((academicItem: AcademicEntry, academicIndex) => (
                    <AcademicItem
                      academicItem={academicItem}
                      academicIndex={academicIndex}
                      mode={mode}
                      leftLinkIcon={leftLinkIcon}
                      leftLinkLabel={leftLinkLabel}
                      rightLinkIcon={rightLinkIcon}
                      rightLinkLabel={rightLinkLabel}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

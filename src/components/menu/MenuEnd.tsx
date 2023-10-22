import { useState, useEffect } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import { Menu, MenuProps, MenuPosition } from '@components/menu/elements/Menu'
import { Accordion } from '@components/menu/elements/Accordion'
import { LocaleToggler } from '../toggler/LocaleToggler'
import { t } from 'i18next'

import {
  Locale,
  selectTheme,
  setLocale,
  selectLocale,
  setClockMode,
  selectClockMode,
  ClockMode,
} from '../../app/reducer/app.slice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ThemeToggler, TogglerType, Label } from '../toggler/ThemeToggler'
import { Login } from '../login'

export const MenuEnd = ({ id, title }: MenuProps) => {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector(selectTheme)
  const currentLocale = useAppSelector(selectLocale)
  const currentClockMode = useAppSelector(selectClockMode)
  const [, /*locale*/ applyLocale] = useState(currentLocale)
  const [, /*clockmode*/ applyClockMode] = useState(currentClockMode)

  const clickClockMode = (clockmode: ClockMode) => {
    dispatch(setClockMode(clockmode))
    applyClockMode(clockmode)
  }

  return (
    <Menu id={id} title={title} position={MenuPosition.End}>
      {/* Login */}
      <Login />

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <hr />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Accordion
              id="appearanceSt"
              label={t('Appearance')}
              iconmap={IconMap.Appareance}
              index={0}
            >
              {/* Theme START */}
              <div className="container-fluid m-0 mt-2 ms-2 mb-4">
                <div className="row mb-3">
                  <div className="col">
                    <label className="col-form-label flex-nowrap">
                      Theme Toggler without Label
                    </label>
                  </div>
                  <div className="col">
                    <div className="btn-group float-end">
                      <ThemeToggler currentTheme={currentTheme} />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col flex-wrap">
                    <label className="col-form-label">
                      Theme Toggler with Label
                    </label>
                  </div>
                  <div className="col">
                    <div className="btn-group float-end">
                      <ThemeToggler
                        currentTheme={currentTheme}
                        label={Label.Yes}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label className="col-form-label">
                      Theme Selector without Labels
                    </label>
                  </div>
                  <div className="col">
                    <div className="btn-group float-end">
                      <ThemeToggler
                        currentTheme={currentTheme}
                        togglerType={TogglerType.ButtonSelector}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label className="col-form-label">
                      Theme Selector with Labels
                    </label>
                  </div>
                  <div className="col">
                    <div className="btn-group float-end">
                      <ThemeToggler
                        currentTheme={currentTheme}
                        togglerType={TogglerType.ButtonSelector}
                        label={Label.Yes}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Theme end */}
            </Accordion>

            <Accordion
              id="localeSt"
              label={t('Language')}
              iconmap={IconMap.Locale}
              index={1}
            >
              {/* Locale START */}
              <div className="container-fluid m-0 mt-2 ms-2 mb-4">
                <div className="row mb-3">
                  <div className="col">
                    <label className="col-form-label">{t('Language')}</label>
                  </div>
                  <div className="col">
                    <LocaleToggler />
                  </div>
                </div>
              </div>
              {/* Locale END */}
            </Accordion>

            <Accordion
              id="clockSt"
              label={t('Clock')}
              iconmap={IconMap.Clock}
              index={0}
            >
              {/* Clock START */}
              <div className="container-fluid m-0 mt-2 ms-2 mb-4">
                <div className="row">
                  <div className="col">
                    <label className="col-form-label">{t('Clock Mode')}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="btn-group float-end">
                      <button
                        type="button"
                        className={`btn text-nowrap ${
                          currentClockMode === ClockMode.Short
                            ? 'disabled active'
                            : ''
                        }`}
                        onClick={() => clickClockMode(ClockMode.Short)}
                      >
                        <Icon id="bi-clock" extra="me-1" />
                        <span>hh:mm</span>
                      </button>
                      <button
                        type="button"
                        className={`btn text-nowrap ${
                          currentClockMode === ClockMode.Long
                            ? 'disabled active'
                            : ''
                        }`}
                        onClick={() => clickClockMode(ClockMode.Long)}
                      >
                        <Icon id="bi-clock" extra="me-1" />
                        <span>hh:mm:ss</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Clock END */}
            </Accordion>
          </div>
        </div>
      </div>
    </Menu>
  )
}

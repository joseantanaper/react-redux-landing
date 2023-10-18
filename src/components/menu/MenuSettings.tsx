import { Icon } from '../widgets/Icon'
import { useState } from 'react'
import {
  Theme,
  Locale,
  setTheme,
  selectTheme,
  setLocale,
  selectLocale,
  setClockMode,
  selectClockMode,
  ClockMode,
} from '../../app/reducer/app.slice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ThemeToggler, TogglerType, Label } from '../navbar/ThemeToggler'
import { Login } from '../login'

interface Props {
  id: string
  title: string
}

export const MenuSettings = ({ id, title }: Props) => {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector(selectTheme)
  const currentLocale = useAppSelector(selectLocale)
  const currentClockMode = useAppSelector(selectClockMode)
  const [theme, applyTheme] = useState(currentTheme)
  const [locale, applyLocale] = useState(currentLocale)
  const [clockmode, applyClockMode] = useState(currentClockMode)

  document.documentElement.setAttribute('lang', currentLocale)

  const clickTheme = (theme: Theme) => {
    dispatch(setTheme(theme))
    applyTheme(theme)
  }

  const clickLocale = (locale: Locale) => {
    dispatch(setLocale(locale))
    applyLocale(locale)
    document.documentElement.setAttribute('lang', locale)
  }

  const clickClockMode = (clockmode: ClockMode) => {
    dispatch(setClockMode(clockmode))
    applyClockMode(clockmode)
  }

  return (
    <div
      className="offcanvas offcanvas-end border-start shadow app-settings"
      tabIndex={-1}
      id={id}
      aria-labelledby={`${id}Label`}
    >
      <div className="offcanvas-header bg-body-tertiary border-bottom shadow-sm">
        <h4 className="offcanvas-title" id={`${id}Label`}>
          {title!}
        </h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-dismiss="offcanvas"
        >
          <Icon id="bi-chevron-bar-right" />
        </button>
      </div>

      <div className="offcanvas-body pt-5 pb-5">
        {/* Login */}
        <Login />

        {/* Theme START */}
        <div className="row mb-3">
          <h5 className="mb-4">Theme Configuration</h5>
          <div className="col flex-wrap">
            <label className="col-form-label">
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
            <label className="col-form-label">Theme Toggler with Label</label>
          </div>
          <div className="col">
            <div className="btn-group float-end">
              <ThemeToggler currentTheme={currentTheme} label={Label.Yes} />
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
            <label className="col-form-label">Theme Selector with Labels</label>
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
        {/* Theme end */}
        <hr />
        {/* Locale START */}
        <div className="row mb-3">
          <h5 className="mb-4">Locale Configuration</h5>
          <div className="col">
            <label className="col-form-label">Language</label>
          </div>
          <div className="col">
            <div className="btn-group float-end">
              <button
                type="button"
                className={`btn ${
                  currentLocale === Locale.EN ? 'disabled active' : ''
                }`}
                onClick={() => clickLocale(Locale.EN)}
              >
                <Icon id="bi-translate" extra="me-1" />
                <span>{Locale.EN}</span>
              </button>
              <button
                type="button"
                className={`btn ${
                  currentLocale === Locale.ES ? 'disabled active' : ''
                }`}
                onClick={() => clickLocale(Locale.ES)}
              >
                <Icon id="bi-translate" extra="me-1" />
                <span>{Locale.ES}</span>
              </button>
            </div>
          </div>
        </div>
        {/* Locale END */}
        {/* Clock START */}
        <div className="row">
          <div className="col">
            <label className="col-form-label">Clock Mode</label>
          </div>
          <div className="col">
            <div className="btn-group float-end">
              <button
                type="button"
                className={`btn ${
                  currentClockMode === ClockMode.Short ? 'disabled active' : ''
                }`}
                onClick={() => clickClockMode(ClockMode.Short)}
              >
                <Icon id="bi-clock" extra="me-1" />
                <span>hh:mm</span>
              </button>
              <button
                type="button"
                className={`btn ${
                  currentClockMode === ClockMode.Long ? 'disabled active' : ''
                }`}
                onClick={() => clickClockMode(ClockMode.Long)}
              >
                <Icon id="bi-clock" extra="me-1" />
                <span>hh:mm:ss</span>
              </button>
            </div>
          </div>
        </div>
        {/* Clock END */}
      </div>
    </div>
  )
}

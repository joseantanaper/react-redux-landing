import React from 'react'
import { Icon } from '@/components/widgets/Icon'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'

import { useTranslation } from 'react-i18next'
import { Locale, setLocale, selectLocale } from '@/app/reducer/app.slice'

export const LocaleToggler = () => {
  const dispatch = useAppDispatch()
  const currentLocale = useAppSelector(selectLocale)
  // const [, /*locale*/ applyLocale] = useState(currentLocale)
  const { i18n } = useTranslation()

  const clickLocale = (locale: Locale) => {
    dispatch(setLocale(locale))
    // applyLocale(locale)
    i18n.changeLanguage(locale)
    document.documentElement.setAttribute('lang', locale)
  }

  useEffect(() => {
    document.documentElement.setAttribute('lang', currentLocale)
    i18n.changeLanguage(currentLocale)
  }, [])

  return (
    <>
      <button
        type="button"
        className={`btn text-uppercase  ${
          currentLocale === Locale.EN ? 'disabled active' : ''
        }`}
        onClick={() => clickLocale(Locale.EN)}
      >
        <Icon id="bi-translate" />
        <span>{Locale.EN}</span>
      </button>
      <button
        type="button"
        className={`btn text-uppercase ${
          currentLocale === Locale.ES ? 'disabled active' : ''
        }`}
        onClick={() => clickLocale(Locale.ES)}
      >
        <Icon id="bi-translate" />
        <span>{Locale.ES}</span>
      </button>
    </>
  )
}

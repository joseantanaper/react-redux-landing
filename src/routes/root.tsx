// import logo from "../logo.svg"
// import { Counter } from "../features/menu/Counter"
import { Outlet } from 'react-router-dom'
import Footer from '@/components/layout/Footer'
import { selectLocale } from '@/app/reducer/app.slice'
import { useEffect } from 'react'
import { useAppSelector } from '@/app/hooks'
import { useTranslation } from 'react-i18next'

import { appConfig } from '@config/app.config'
import { Navbar } from '@components/navbar/Navbar'

const Root = () => {
  const currentLocale = useAppSelector(selectLocale)
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.setAttribute('lang', currentLocale)
    i18n.changeLanguage(currentLocale)
  }, [])

  return (
    <>
      <Navbar title={appConfig.title} subtitle={appConfig.subtitle} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root

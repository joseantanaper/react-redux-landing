import i18n from 'i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    lng: 'en',
    resources: {
      en: {
        translations: {
          Home: 'Home',
          Portfolio: 'Portfolio',
          'Todo List': 'Todo List',
          Appearance: 'Appearance',
          Language: 'Language',
          Clock: 'Clock',
          'Clock Mode': 'Clock Mode',
          Welcome: 'Welcome',
          Navigation: 'Navigation',
          Settings: 'Settings',
          'Please, Sign In': 'Please, Sign In',
          'Sign In': 'Sign In',
          'Sign Out': 'Sign Out',
          'To get started, edit <1>src/App.js</1> and save to reload.':
            'To get started, edit <1>src/App.js</1> and save to reload.',
          'Welcome to React': 'Welcome to React and react-i18next',
          welcome: 'Hello <br/> <strong>World</strong>',
        },
      },
      es: {
        translations: {
          Home: 'Inicio',

          'Todo List': 'Lista Tareas',
          Appearance: 'Apariencia',
          Language: 'Idioma',
          Clock: 'Reloj',
          'Clock Mode': 'Modo Reloj',
          Welcome: 'Bienvenido',
          Navigation: 'Navegación',
          Settings: 'Ajustes',
          'Please, Sign In': 'Por favor, inicia sesión',
          'Sign In': 'Entrar',
          'Sign Out': 'Salir',
          'To get started, edit <1>src/App.js</1> and save to reload.':
            'Starte in dem du, <1>src/App.js</1> editierst und speicherst.',
          'Welcome to React': 'Willkommen bei React und react-i18next',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

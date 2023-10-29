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
        app: {
          add: 'Add',
          remove: 'Remove',
          clearall: 'Clear All',
          todo: {
            subtitle: 'The simplest ToDo List app',
            description: `This is a very simple Todo List App based on
            <1>Array</1> and LocalStorage. It includes add, remove, clear all
            and search actions. Tasks are shown in a responsive table.`,
            search: 'Search tasks...',
            content: 'Task content...',
            tasks: 'Tasks',
          },
        },
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
          welcome: 'Hello World',
          Add: 'Add',
        },
      },
      es: {
        app: {
          add: 'Añadir',
          remove: 'Borrar',
          clearall: 'Vaciar todo',
          todo: {
            subtitle: 'La más sencilla aplicación de Lista de Tareas',
            description: `Esta es una sencilla aplicación de Lista de Tareas basada en Arrays y en almacenamiento local.
            Incluye las acciones de añadir, eliminar, vaciar todo y búsqueda. Las tareas se muestran en una 
            tabla con diseño flexible.`,
            search: 'Buscar tareas...',
            content: 'Contenido tarea...',
            tasks: 'Tareas',
          },
        },
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
    ns: ['translations', 'app'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

export const translationEN = {
  app: {
    add: 'Add',
    remove: 'Remove',
    links: 'Links',
    no: 'No',
    confirm: 'Confirm',
    home: {
      title: 'Inicio',
      // subtitle: 'Raíz de este Sitio Web',
      description: `Esto es un Sitio Web de Destino basado en <strong>
      React/Redux</strong> y <strong>Bootstrap</strong> con un montón de
      personalizaciones para adaptarlo a mis propias preferencias. El Sitio está
      estructurado como una <strong>SPA (Aplicación de Una Sola Página)</strong>
      con diversas <strong>rutas</strong>, alguna de las cuales son pequeñas
      <strong>Aplicaciones Demo</strong> que permiten comprobar las capacidades
      de <strong>React/Redux</strong> y de <strong>Bootstrap</strong>.
      De hecho, la idea base detrás de este proyecto es recorrer las capacidades
      de ambos frameworks, comprobarlas, mejorar su implementación con buenas
      prácticas, y disponer así de una buena plantilla para iniciar cualquier
      proyecto web. Espero que os guste!`,
      navbarTitle: 'Barra de Navegación',
      navbar: `La <strong>barra de navegación principal</strong> es fija en la
      parte superior y está compuesta por varios elementos bien diferenciados:
      una <strong>barra de título</strong>; una <strong>barra con los enlaces principales</strong>; diversos
      <strong>widgets</strong> entre los que se encuentran un <strong>selector de idioma</strong>,
      un <strong>contador</strong>, un
      <strong>reloj</strong> y un <strong>selector de tema</strong>; finalmente
      están los botones de apertura de menús que se desplegan
      a izquierda, derecha, arriba y abajo de la pantalla. Estos elementos se
      adaptan al tamaño del dispositivo, y desaparecen si no hay espacio
      suficiente para mostrarlos. A mayor tamaño de pantalla, más "herramientas"
      accesibles de forma inmediata. Pero todas ellas están disponibles para
      cualquier tamaño de pantalla, solo que organizadas de diferente manera.
      Esta es mi manera de entender una barra de navegación: aprovechar el
      tamaño de pantalla para hacer más accesibles un mayor número de elementos,
      pero que estén igualmente disponibles en tamaño pequeño.
      <strong>Se debe poder hacer lo mismo desde un
      monitor que desde un móvil</strong>.`,
      routeTitle: 'Rutas',
      route: `Para la colección de rutas de este Sitio se ha utilizado la
      clásica estructura <strong>routes</strong> del
      <strong>createBrowserRouter</strong> de <strong>React-Router</strong> y su
      método <strong>loader</strong>, que se aprovecha para incorporar atributos
      adicionales como <strong>título</strong>, <strong>subtítulo</strong>,
      <strong>icono</strong> y <strong>descripción</strong>. Estos atributos
      se utilizan en los menús de navegación, en los datos de cabecera de cada
      ruta y también en el pie de página, lo que permite mantener la homogeneidad
      de los datos descriptivos de cada ruta en todas las secciones en donde
      aparezcan.
      `,
      subnavbar: `Debajo`,
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'This is the Portfolio subtitle',
      description: 'This is the Portfolio description and details',
    },
    todo: {
      title: 'ToDo',
      subtitle: 'The simplest ToDo List app',
      description: `This is a very simple Todo List App based on
            <strong>Array</strong> and <strong>LocalStorage</strong>. It
            includes add, remove, clear all and search actions. Tasks are shown
            in a <strong>responsive table</strong>.`,
      search: 'Search tasks...',
      content: 'Task content...',
      tasks: 'Tasks',
      removeAll: 'Remove all',
      removeAllWarning: 'All tasks will be removed. Continue?',
    },
    counter: {
      title: 'Counter',
      subtitle: 'A simple counter application',
      description: 'A simple counter application',
      increment: 'Increment',
      decrement: 'Decrement',
      clear: 'Clear',
      addSync: 'A.Sync',
      addAsync: 'A.Async',
      addIfOdd: 'A.ifOdd',
    },
    playground: {
      lorem: {
        loremTitle: 'Lorem',
        loremSubtitle: 'Lorem Ipsum Content',
        loremDescription: 'This is a Lorem Ipsum random content generator',
      },
    },
  },
  translations: {
    Section: 'Section',
    Footer: 'Footer',
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
}

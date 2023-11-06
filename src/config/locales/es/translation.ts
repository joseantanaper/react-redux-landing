export const translationES = {
  app: {
    add: 'Añadir',
    remove: 'Borrar',
    clearall: 'Vaciar todo',
    links: 'Enlaces',
    home: {
      title: 'Inicio',
      // subtitle: 'Raíz de este Sitio Web',
      description: `Esto es un Sitio Web de Destino basado en <strong>
      React/Redux</strong> y <strong>Bootstrap</strong> con un montón de
      personalizaciones para adaptarlo a mis propias preferencias. El Sitio está
      estructurado como una <strong>SPA (Aplicación de Una Sola Página)</strong>
      con bastantes <strong>rutas</strong>, alguna de las cuales son pequeñas
      <strong>Aplicaciones Demo</strong> con el objetivo de comprobar las
      capacidades de <strong>React/Redux</strong>. Espero que os guste!`,
      navbartitle: 'Barra de Navegación',
      navbar: `La barra de navegación principal es fija en la parte superior y
      está compuesta por varios elementos bien diferenciados: una barra de título;
      una barra con los enlaces principales; diversos widgets entre los que se
      encuentran un selector de idioma, un contador, un reloj y un selector de
      tema; finalmente están los botones de apertura de menús que se desplegan
      a izquierda, derecha, arriba y abajo de la pantalla.`,
      routetitle: 'Rutas',
      route: `Para la colección de rutas de este Sitio se ha utilizado la
      clásica estructura <strong>routes</strong> del
      <strong>createBrowserRouter</strong> de <strong>React-Router</strong> y su
      método <strong>loader</strong> se aprovecha para incorporar atributos
      adicionales como título, subtítulo, icono y descripción. Estos atributos
      se utilizan en los menús de navegación, en los datos de cabecera de cada
      ruta y también en el pie de página, lo que permite mantener la homogeneidad
      de los datos descriptivos de cada ruta en todas las secciones en donde
      aparezcan.`,
      subnavbar: `Debajo`,
      // de idioma,
      //  Algunos menús de
      // navegación solo aparecen si la pantalla es lo suficientemente grande como
      // para que su presencia esté bien acomodada. Si existe espacio suficiente
      // se muestran algunas de las rutas principales de navegación, disponibles en
      // el menú de navegación. Los botones especificados como principales
      // permanecen en todos los tamaños, incluído el dispositivo móvil, a modo de
      // barra principal.<br />
      // Se incluyen algunos widgets genéricos, como un interruptor para cambiar
      // entre tema claro y oscuro, un selector de idioma o un mini contador. Todos
      // estos parámetros se almacenan en el LocalStorage del dispositivo.
      // El botón izquierdo abre el menú de navegación con todas las rutas
      // disponibles, también agrupadas en carpetas para una mejor clasificación.
      // Se ha optado por utilizar la estructura <strong>routes</strong> y su
      // método <strong>loader</strong> para almacenar la colección de rutas con
      // todos los atributos necesarios, como título, subtítulo, descripción,
      // icono, y así poder utilizarla no solo para el manejo del Routing, sino también
      // para mostrar los menús, la barra de navegación e incluso la sección de
      // título de cada página.<br />
      // Se ha creado también una barra de navegación secundaria, que no es global,
      // sino que depende de cada ruta cargada y permite incorporar opciones
      // especiales en cada una de ellas. Esta barra secundaria se combina con un
      // título amplio que, al desplazarse hacia abajo, se fusionan. De ese modo
      // siempre queda a la vista el título de la ruta actual y sus opciones
      // principales. Ambas barras de navegación tienen un leve efecto de
      // transparencia que, además de proporcionar un toque moderno y elegante a la
      // interfaz, aportan mayor sensación de "flotar" sobre el contenido.
      // `,
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'This is the Portfolio subtitle',
      description: 'This is the Portfolio description and details',
    },
    todo: {
      subtitle: 'La más sencilla aplicación de Lista de Tareas',
      description: `Esta es una sencilla aplicación de Lista de Tareas
            basada en <strong>Arrays</strong> y en <strong>almacenamiento
            local</strong>. Incluye las acciones de añadir, eliminar, vaciar
            todo y búsqueda. Las tareas se muestran en una <strong>tabla con
            diseño flexible</strong>.`,
      search: 'Buscar tareas...',
      content: 'Contenido tarea...',
      tasks: 'Tareas',
    },
  },
  translations: {
    Section: 'Sección',
    Footer: 'Pie de Página',
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
}

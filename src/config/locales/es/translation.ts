export const translationES = {
  app: {
    add: 'Añadir',
    remove: 'Eliminar',
    links: 'Enlaces',
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
      layoutTitle: 'Plantilla de Página y Barra de Navegación Secundaria',
      layout: `Las rutas cargan dentro de una <strong>Plantilla de Página</strong> para que
      todas las vistas mantengan un formato homogéneo y, sobretodo, para que
      cualquier cambio de diseño pueda aplicarse de forma extremadamente fácil
      y sencilla.<br />
      La <strong>Plantilla de Página</strong> actual consta de una zona de <strong>título</strong>, que incluye
      <strong>subtitulo</strong> y <strong>descripción</strong> opcionales, y una
      <strong>Barra de Navegación Secundaria</strong>
      que al desplazarse hacia abajo se "adhiere" a la <strong>Barra de Navegación
      Principal</strong>, quedando ambas fijas en la zona superior.
      Esta <strong>Barra de Navegación Secundaria</strong> se define en cada ruta para establecer
      las opciones necesarias en cada vista.<br />
      Un detalle interesante de esta barra es que,
      al desplazarse hacia abajo, el gran titular que aparece en cabecera se
      incorpora a esta barra en un tamaño más compacto, con el objetivo de tener
      siempre a la vista la ruta en la que nos encontramos, junto con las
      opciones y herramientas de la misma. Como no podría ser de otra manera,
      todos estos elementos tiene <strong>diseño adaptable</strong> y se ajustan perfectamente
      al tamaño de pantalla, colapsando en un botón de menú desplegable cuando
      es necesario.`,
      bootstrapTitle: 'Personalización de Bootstrap',
      bootstrap: `La librería para Frontend <strong>Bootstrap</strong> permite la personalización
      a través de sus variables <strong>Sass</strong> y <strong>Css</strong>, y también sobreescribiendo directamente
      algunos atributos Css. Algunos de los ajustes que se han incorporado en este
      proyecto son estos:`,
      bootstrapItems: [
        `Suavizar los <strong>bordes redondeados</strong> para hacerlos algo más <strong>cuadrados</strong>
        y ofrecer una imagen más regular.`,
        `Reajustar los <strong>tamaños</strong> de las barras de navegación, botones, inputs y otros
        elementos.`,
        `Modificar el color de fondo de las <strong>barras de navegación</strong> principales con
        efectos de <strong>transparencia</strong> y <strong>difuminado</strong>.`,
        `Incorporar leves efectos de <strong>sombra</strong> en las cabeceras.`,
        `<strong>Ajustes específicos en diseño adaptable</strong>, como la desaparición de etiquetas
        de texto en botones al reducir el tamaño de pantalla, aparición de scroll
        horizontal en ciertas colecciones de elementos que no caben en pantalla, y
        otros.`,
        `Modificación del color diferencial del <strong>componente acordeón</strong> para homogeneizarlo
        con el resto de componentes.`,
        `Incorporar algunos <strong>efectos leves</strong> de <strong>iluminación</strong> en botones, iconos y texto
        al situar el ratón encima o hacer clic.`,
      ],
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
      summaryTitle: 'Resumen Ejecutivo',
      summary: `Tengo una dilatada experiencia en el <strong>desarrollo de
      aplicaciones industriales y de gestión</strong>, especializado en el 
      <strong>desarrollo de servidores web de tipo SaaS</strong> que explotan
      la información recogida por SCADAs, MES y otros 
      softwares de planta. Me gustan las <strong>UI atractivas, funcionales y bien diseñadas</strong>.
      Entusiasta de los <strong>últimos frameworks</strong> mejor valorados y de integración ágil.
      Me siento cómodo gestionando los proyectos con <strong>metodología Agile</strong>:
      disponer de un producto básico y funcional en un plazo reducido, que incremente sus 
      funcionalidades con ayuda del <strong>feedback del usuario final</strong>, y esto como
      herramienta de <strong>mejora continua</strong>. 
      Apasionado del <strong>código bien organizado</strong> y con un buen balance
      entre <strong>optimización y legibilidad</strong>. También he 
      estado al frente de la <strong>gestión TI</strong>, decidiendo, planificando y ejecutando con éxito los avances tecnológicos
      requeridos para <strong>reducir costes</strong>, reforzar la <strong>seguridad y fiabilidad</strong>,
      y <strong>simplificar la gestión</strong>`,
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
      removeAll: 'Eliminar todas',
      removeAllWarning: 'Se van a eliminar todas las tareas. Continuar?',
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

export const translationEN = {
  app: {
    add: 'Add',
    remove: 'Remove',
    links: 'Links',
    no: 'No',
    confirm: 'Confirm',
    more: 'More',
    site: 'Site',
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
      subtitle: '</>',
      description: 'Information about my professional background',
      viewMyCert: 'View my Certification',

      omegazeta: `<strong>CIRCA - Panel Omega Zeta</strong> pertenece a la
      <strong>Corporación Omega Zeta</strong>, que trabaja en <strong>Europa,
      Asia y África</strong>, desarrollando productos y servicios que favorezcan
      el conocimiento, la salud, el bienestar, el medio ambiente y la innovación
      para mejorar el futuro de las personas, a las que sitúa en
      el centro de toda su actividad.<br />
      La <strong>Corporación Omega Zeta</strong> nace, hace 50 años, de la mano
      de su presidente, <strong>Carlos Fradera Pellicer</strong>, empresario e
      inventor, propietario de <strong>500 patentes internacionales (PCT's)</strong>,
      fruto de la visión de su fundador y de su experiencia personal.`,
      arghos: `Ingeniería, Consultoría y Software.`,
      aernnova: `Diseño, fabricación, mantenimiento y servicios de Aeroestructuras.`,

      summaryTitle: 'Executive Summary',
      summary: `I have an extensive experience in the <strong>development of industrial
      and management applications</strong>, specialized in the <strong>development
      of SaaS-type web servers</strong> that reports the information collected by
      SCADAs, MES and other plant software.<br />
      I like <strong>attractive, functional and well-designed UIs</strong>.
      Enthusiast of the <strong>latest top-rated frameworks</strong> and agile
      integration.
      I feel comfortable managing projects
      with the <strong>Agile methodology</strong>: having a basic and functional
      product in a short time, which increases its functionalities with the help
      of end-user feedback, and this as a way for
      <strong>continuous improvement</strong>.<br />
      Passionate about <strong>well-organized code</strong> with a good balance
      between <strong>optimization and readability</strong>. I have also been at
      the forefront of <strong>IT management</strong>, deciding, planning and
      successfully executing the technological advances required to <strong>reduce
      costs, strengthen security and reliability</strong>, and
      <strong>simplify management</strong>.`,

      experienceTitle: 'Experience',
      experience: [
        {
          title: [
            'Chief Software Development Officer',
            'Full Stack Developer',
            'IT Manager',
          ],
          year: '2015 - 2022',
          subtitle: [
            'Corporación Omega Zeta S.L.',
            'CIRCA, S.A.',
            'New Building Materials Co. Ltd.',
            'Clínica Omega Zeta',
          ],
          details: [
            `Development of custom <strong>OZ-MES</strong> software for both
            <strong>“Panel Omega Zeta”</strong> factories at <strong>“CIRCA, S.A.”</strong>
            y <strong>“New Building Materials Co. Ltd.”</strong>, which manages the full
            manufacturing cycle: planning, formulation, rawmaterials, semi-finished product,
            final product, to expedition.
            Multilingual support with Chinese translation (performed by the users
            themselves from the English translation) for the Nanjing plant.
            Based on the latest technologies of the moment: <strong>HTML/CSS/JS/Bootstrap</strong>
            with <strong>AngularJS</strong> (Frontend), <strong>Java</strong> y 
            <strong>Spring</strong> (Backend), <strong>PostgreSQL</strong> (database engine) y
            <strong>GlassFish/Payara</strong> (Application Server), hosted on 
            <strong>Ubuntu Server</strong>.
            Interface with <strong>NAVISION</strong> for data consolidation in the company's ERP. Source code 
            managed with our <strong>own GitLab server</strong>.
            CAD libraries for the automated reading of data in section planes, 
            such as dimensions and location of bushings and rods. Preparation and delivery of various OZ-MES 
            training courses in English to the productive and technical personnel of the plant in Nanjing.`,

            `Development of other software, derived from <strong>OZ-MES</strong>, to meet the needs of group
            companies: <strong>OZ-Medic</strong>, for cash accounting control; <strong>OZ-ProNET</strong>,
            for room occupancy control, medical agenda and billing (Bufetmedic Expansion S.L.).`,

            `<strong>IT infrastructure optimization</strong>: transition of <strong>VMWare</strong> servers
            in 5 locations and local Data Warehouse to <strong>Microsoft SharePoint Online services</strong>;
            account management migration to <strong>AzureAD/Office 365</strong>; cloud/local backup automation
            with <strong>Microsoft PowerAutomate</strong> and <strong>RClone</strong>; 
            management of <strong>suppliers</strong> and external services.`,
          ],
        },
        {
          title: ['Projects', 'Industrial Software Development'],
          year: '2000 - 2015',
          subtitle: [
            'ARGHOS Engineering, Consulting and Software (AERnnova group)',
            'PYSSA',
          ],
          details: [
            `<strong>SEAT Martorell</strong>: Development of data servers,
            supervision, monitoring and reporting, <strong>PYMAN V8 Web 
            Reporting</strong>, <strong>PYMAN V8 PyArghos</strong>, <strong>FERGAL
            PYMANSRV</strong>.`,
            `<strong>VW Navarra</strong>: Development of <strong>Pyman Web Server</strong>
            servers.`,
            `<strong>KH Lloreda</strong>: palletizing, robot-picking system based
            on <strong>PYMAN</strong>, with automatic pallet labeling 
            system and interface with <strong>MECALUX</strong> warehouse.`,
            `<strong>ENERTRON/VPC (Valencia Power Converters)</strong>: MES 
            system based on <strong>PYMAN</strong> for manufacturing electrical
            cabinets, with automated control system for AGVs and stacker cranes,
            and interface with <strong>CAPTOR</strong> and <strong>SAP</strong>
            systems.`,
          ],
        },
      ],

      academicTitle: 'Academic Background',
      academic: [
        {
          title: 'Technical Engineering in Computer Systems ',
          year: '2015',
          entity: 'Universitat Oberta de Catalunya',
          logo: 'uoc',
          details: `Degree Project: Mobile Device Development - Android<br />
          Itineraries: Computer Technology, Programming, System Administration,
          Object Oriented Programming, Network Management<br />`,
          leftLink: 'https://www.linkedin.com/school/uoc/',
          rightLink: 'https://www.uoc.edu/',
        },
        {
          title: 'Cert.HE Web Application Development',
          year: '2001',
          entity: 'Institut Escola del Treball',
          logo: 'iet',
          details: 'Web Applications Development',
          leftLink:
            'https://www.linkedin.com/school/institut-escola-del-treball/',
          rightLink: 'https://escoladeltreball.org/',
        },
        {
          title: 'Cert.HE Computer System Administration',
          year: '2000',
          entity: 'Institut Escola del Treball',
          logo: 'iet',
          details: 'Network Computer Systems Administration',
          leftLink:
            'https://www.linkedin.com/school/institut-escola-del-treball/',
          rightLink: 'https://escoladeltreball.org/',
        },
      ],

      certificationTitle: 'Licences and Certifications ',
      certification: [
        {
          title: 'Full Stack Open CI/CD',
          year: 'Aug 2023',
          entity: 'University of Helsinki',
          logo: 'uoh',
          details: `Has successfully completed the course's CI/CD part in 1 ECTS credits.`,
          leftLink: 'https://www.helsinki.fi/en',
          rightLink:
            'https://studies.cs.helsinki.fi/stats/api/certificate/fs-cicd/en/ae3753610f55012168f706b8bc05c3e1',
        },
        {
          title: 'Full Stack Open React Native',
          year: 'Jun 2023',
          entity: 'University of Helsinki',
          logo: 'uoh',
          details: `Has successfully completed the course's React Native part in 2 ECTS credits.`,
          leftLink: 'https://www.helsinki.fi/en',
          rightLink:
            'https://studies.cs.helsinki.fi/stats/api/certificate/fs-react-native-2020/en/a6533fa902bfa3748e5cbd0f148ace54',
        },
        {
          title: 'Full Stack GraphQL',
          year: 'Apr 2023',
          entity: 'University of Helsinki',
          logo: 'uoh',
          details: `Has successfully completed the course's GraphQL part in 1 ECTS credits.`,
          leftLink: 'https://www.helsinki.fi/en',
          rightLink:
            'https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/dac5ac6a094bdf74e9240237f9751c19',
        },
        {
          title: 'Full Stack Open 2023',
          year: 'Apr 2023',
          entity: 'University of Helsinki',
          logo: 'uoh',
          details: `This is to certificate that you have successfully completed the 7 ECTS online course with grade 5.`,
          leftLink: 'https://www.helsinki.fi/en',
          rightLink:
            'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/12dff53307ab85fb1f5e5d7e842d9516',
        },
        {
          title: 'Full Stack Open TypeScript',
          year: 'Apr 2023',
          entity: 'University of Helsinki',
          logo: 'uoh',
          details: `Has successfully completed the course's TypeScript part in 1 ECTS credits.`,
          leftLink: 'https://www.helsinki.fi/en',
          rightLink:
            'https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/b81a965d6ab13be10f8b78d708ad9f77',
        },
        {
          title: 'Microsoft Certified: Power Platform App Maker Associate',
          year: 'Feb 2023',
          entity: 'Microsoft',
          logo: 'ms',
          details: `Earning the Power Platform App Maker Associate certification
          validates candidate skills and knowledge to build solutions to simplify,
          automate, and transform tasks and processes for themselves and their
          team where they have deep expertise in the solution domain.`,
          leftLink: 'https://learn.microsoft.com/es-es/credentials/',
          rightLink:
            'https://www.credly.com/badges/e5475702-06a8-4c22-a293-15dcd4ddcf12/',
        },
        {
          title: 'Front End Development Libraries',
          year: 'Jan 2023',
          entity: 'freeCodeCamp',
          logo: 'fcc',
          details: `Developer Certification on January 7, 2023<br />
          representing approximately 300 hours of work`,
          leftLink: 'https://www.freecodecamp.org/',
          rightLink:
            'https://www.freecodecamp.org/certification/fccbff75bbc-30e2-4e2f-8f3e-a414f15c1668/front-end-development-libraries',
        },
        {
          title: 'Javascript Algorithms and Data Structures',
          year: 'Nov 2022',
          entity: 'freeCodeCamp',
          logo: 'fcc',
          details: `Developer Certification on November 22, 2022<br />
          representing approximately 300 hours of work`,
          leftLink: 'https://www.freecodecamp.org/',
          rightLink:
            'https://www.freecodecamp.org/certification/fccbff75bbc-30e2-4e2f-8f3e-a414f15c1668/javascript-algorithms-and-data-structures',
        },
        {
          title: 'Responsive Web Design',
          year: 'Nov 2022',
          entity: 'freeCodeCamp',
          logo: 'fcc',
          details: `Developer Certification on November 10, 2022<br />
          representing approximately 300 hours of work`,
          leftLink: 'https://www.freecodecamp.org/',
          rightLink:
            'https://www.freecodecamp.org/certification/fccbff75bbc-30e2-4e2f-8f3e-a414f15c1668/responsive-web-design',
        },
        {
          title: 'Pivotal Core Spring 5.0.b',
          year: 'Oct 2019',
          entity: 'Spring Latam',
          logo: 'spr',
          details: `Curso online en vivo de 32 horas impartido del 28 de Septiembre al 19 de Octubre de 2019.`,
          leftLink: 'https://www.springla.io/',
          rightLink:
            './src/assets/spring/Certificado_Jose_Antonio_Anacleto.pdf',
        },
      ],
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

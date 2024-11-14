export default {
  global: {
    componenteFormativo: 'Preparación de documentos en Adobe Illustrator',
    descripcionCurso:
      'El componente formativo proporciona una guía para la preparación de documentos en Adobe Illustrator, abarcando la creación y configuración de nuevos archivos, la importación de imágenes, la exportación a diferentes formatos, y el uso de herramientas de corte y sector. También se aborda cómo empaquetar proyectos y crear archivos PDF, destacando la importancia de optimizar los flujos de trabajo para obtener productos finales eficientes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Creación y configuración de un nuevo documento en Adobe Illustrator',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Crear y guardar ajustes prestablecidos de documentos personalizados',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Importación de imágenes a Adobe Illustrator',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Colocación (importación) de archivos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Calco de imagen',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Exportar documentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Opciones de exportación de WebP',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas de sector y corte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Empaquetar proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Creación de un archivo PDF',
            hash: 't_5_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/52410381_CF04_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Preparación de documentos en Adobe Illustrator ',
      referencia:
        'Ende Studio | Diseño Gráfico para Principiantes. (2021). <em>Cómo CREAR un NUEVO DOCUMENTO en Adobe ILLUSTRATOR | ILLUSTRATOR tutorial | PERFIL documento</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Qk1FZMNaflc  ',
    },
  ],
  glosario: [
    {
      termino: 'Archivo PDF',
      significado:
        'formato de archivo que conserva las fuentes, imágenes y composición de los documentos creados en diversas plataformas y aplicaciones. ',
    },
    {
      termino: 'Calco de imagen',
      significado:
        'proceso de vectorización de una imagen de mapa de <em>bits</em>, simplificando o transformando su apariencia. ',
    },
    {
      termino: 'Colocar',
      significado:
        'opción utilizada para importar archivos en Adobe Illustrator, compatible con varios formatos externos. ',
    },
    {
      termino: 'Documento personalizado',
      significado:
        'archivo creado con configuraciones específicas adaptadas a las necesidades del proyecto. ',
    },
    {
      termino: 'Empaquetar',
      significado:
        'proceso que recopila archivos utilizados en un proyecto, incluyendo imágenes y fuentes, para su distribución o intercambio. ',
    },
    {
      termino: 'Enlazar',
      significado:
        'método de importación en el que las imágenes permanecen externas al documento, reduciendo su tamaño. ',
    },
    {
      termino: 'Exportar',
      significado:
        'proceso de guardar un archivo en diversos formatos según su uso, ya sea para impresión o medios digitales. ',
    },
    {
      termino: 'Herramienta de corte',
      significado:
        'herramienta utilizada para dividir objetos o borrar partes de un diseño en Illustrator. ',
    },
    {
      termino: 'Previsualización',
      significado:
        'visualización previa del documento, simulando su apariencia final según el modo seleccionado. ',
    },
    {
      termino: 'WebP',
      significado:
        'formato de imagen moderno que ofrece compresión superior, utilizado principalmente en la web para optimizar la carga de imágenes. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Adobe. (2024). Presentación de la Guía del usuario de Illustrator.',
      link: 'https://helpx.adobe.com/co/illustrator/user-guide.html ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Luis Díaz Carrillo',
          cargo: 'Experto temático',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaludadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

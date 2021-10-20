export default {
  global: {
    componenteFormativo: 'El cierre de ventas',
    descripcionCurso:
      'Un vendedor será bien evaluado si cumple el volumen de ventas esperado por la empresa, y para que suceda, se debe haber formalizado el proceso, el cual se da cuando el cliente acepta formalmente la propuesta comercial y entrega a la empresa la información requerida. Este componente formativo tiene como principal propósito suministrar al aprendiz conceptos prácticos sobre el cierre de ventas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Condiciones comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Precio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de descuentos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cierre de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Cierres de ventas telefónicas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Transacciones comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Documentos comerciales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Los contratos en Colombia',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Sistemas de información',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
  referencias: [
    {
      referencia:
        'Decreto 410 de 1971. Por el cual se expide el Código de Comercio. Marzo 27 de 1971. DO. Nº 33.339. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio_pr027.html#905',
    },
    {
      referencia:
        'Decreto 333 de 2014. Por el cual se reglamenta el artículo 160 del Decreto-ley 19 de 2012: Por el cual se dictan normas para suprimir o reformar regulaciones, procedimientos y trámites innecesarios existentes en la Administración Pública.  Febrero 19 de 2014. DO. Nº 49.069. ',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1848847',
    },
    {
      referencia:
        'Decreto 2242 de 2015. Por el cual se reglamentan las condiciones de expedición e interoperabilidad de la factura electrónica con fines de masificación y control fiscal. Noviembre 24 de 2015. ',
      link: 'https://normativa.archivogeneral.gov.co/decreto-2242-de-2015/',
    },
    {
      referencia:
        'Decreto 358 de 2020. [Ministerio de Hacienda y Crédito Público]. Por el cual se reglamentan los artículos 511,615,616-1,616-2,616-4,617,618, 618-2 Y 771-2 del Estatuto Tributario, 26 de la Ley 962 de 2005 y 183 de la Ley 1607 de 2012. Marzo 05 de 2020. ',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20358%20DEL%2005%20DE%20MARZO%20DE%202020.pdf',
    },
    {
      referencia: 'Imbra. (s. f.). Condiciones Comerciales. ',
      link: 'https://imbrarepuestos.com/condiciones-comerciales/',
    },
    {
      referencia:
        'Kotler, P. y Armstrong, G. (2017). Marketing. Pearson Educación. ',
    },
    {
      referencia:
        'Navarro, M. (2012). Técnicas de Ventas. Red Tercer Milenio. ',
      link:
        'http://www.aliat.org.mx/BibliotecasDigitales/economico_administrativo/Tecnicas_de_venta.pdf',
    },
    {
      referencia:
        'Stanton, W., Etzel, M. y Walker, B. (2007). Fundamentos de Marketing. McGraw-Hill Interamericana. ',
      link:
        'https://mercadeo1marthasandino.files.wordpress.com/2015/02/fundamentos-de-marketing-stanton-14edi.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'es el centro de la estrategia de mercadeo y ventas de una empresa. Representa a la persona o empresa que adquiere los bienes o servicios.',
    },
    {
      termino: 'Competidores',
      significado:
        'empresas que ofrecen productos iguales o similares y, por tanto, se encuentran en el mismo mercado donde la organización desarrolla su actividad comercial.',
    },
    {
      termino: 'Contrato',
      significado:
        'documento que formaliza una operación comercial entre empresas o personas. Tiene validez jurídica y siempre lleva asociado un objeto.',
    },
    {
      termino: 'Factura',
      significado:
        'documento que soporta una venta, relacionando las cantidades, los precios y valores totales a pagar por parte del cliente. Es el soporte formal de la transacción comercial.',
    },
    {
      termino: 'Orden de compra',
      significado:
        'es un documento que soporta la solicitud del cliente para gestionar el pedido. En ella, empresa y cliente aceptan estar de acuerdo en las cantidades y el precio.',
    },
    {
      termino: 'Outbound',
      terminoHtml: '<em>Outbound</em>',
      significado:
        'modelo comercial usado en canales <i>contact center</i> y BPO, donde el contacto es generado por el agente de ventas, es decir, es el vendedor quien realiza la llamada al cliente.',
    },
    {
      termino: 'Portafolio',
      significado:
        'conjunto de bienes y servicios que ofrece una empresa al mercado.',
    },
    {
      termino: 'Valor',
      significado:
        'asignación monetaria que da un cliente a un producto en función de la necesidad que satisface o de la usabilidad que representa.',
    },
    {
      termino: 'Venta',
      significado:
        'transacción comercial donde debe darse una relación gana- gana entre el vendedor y el cliente.',
    },
    {
      termino: 'Venta telefónica',
      significado:
        'tipo de venta a distancia, donde se hace uso de teléfonos o aplicativos informáticos como canal de venta.',
    },
  ],
  complementario: [
    {
      texto: 'Navarro, M. (2012). Técnicas de Ventas. Red Tercer Milenio.',
      tipo: 'Libro digital',
      link:
        'http://www.aliat.org.mx/BibliotecasDigitales/economico_administrativo/Tecnicas_de_venta.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Jaramillo Rojas',
        cargo: 'Experta Temática',
        centro: 'Centro de Comercio - Regional Antioquia',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Sandra Carolina Duran Lopez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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

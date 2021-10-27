<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Transacciones comerciales
    .row.justify-content-end.bg-color21.mb-5
      .col-12
        br
        br
        br
      .col-lg-6.p-4.bg-color4
        br
        br
        p.mb-0.text-white Una transacción comercial es una operación que se lleva a cabo en un mercado legal, donde el vendedor y el cliente acuerdan la adquisición de un producto a cambio de un precio dado; de esta forma, la sumatoria de todas las transacciones que se generan en un mercado dan lugar al comercio. El punto de relevancia en este concepto es que todo lo que se realiza debe estar documentado, porque impacta la contabilidad de la empresa.
        br
        br
      .col-12
        br
        br
        br
    .row.bg-color22.px-5.mb-5
      .col-12.p-5
        p.text-center.mb-5 #[b Para que las transacciones se realicen, se requiere:]
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img36.svg', style="position: relative; width: 1050px;").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10.bg-color12.mb-5
        .row.align-items-center
          .col-lg-6.p-4
            p.text-white.mb-4 #[b Asimismo, las transacciones comerciales tienen algunas características:]
            ul.lista-ul.ms-3
              li 
                i.fas.fa-check(style="color: #05DBF2" width="1px")
                p.mb-0.text-white El mecanismo de intercambio es el dinero.
              li 
                i.fas.fa-check(style="color: #05DBF2" width="1px")
                p.mb-0.text-white Tiene que existir algo por intercambiar, es decir, debe haber un producto sobre el cual se genera la transacción.
              li 
                i.fas.fa-check(style="color: #05DBF2" width="1px")
                p.mb-0.text-white Deben darse en un contexto de legalidad, es decir, están enmarcadas en operaciones formales.
              li 
                i.fas.fa-check(style="color: #05DBF2" width="1px")
                p.mb-0.text-white La transacción se hace visible a nivel contable, lo que implica que puede ser rastreada a nivel financiero.
              li 
                i.fas.fa-check(style="color: #05DBF2" width="1px")
                p.mb-0.text-white Debe existir un documento que soporte la misma.
          .col-lg-6.bg-color23
            br
            br
            br
            br
            br
            br
            br
            br
            br
            br
            br
            br
            br
      .col-10.col-lg-9.mb-5
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img37.svg', style="position: relative; width: 450px;").m-auto
          .col-lg-6
            p #[b Para dar una mejor estructura y alcance, las transacciones comerciales tienen dos clases o modelos:]
            ul.lista-ul.ms-3
              li 
                i.fas.fa-check(style="color: #05DBF2" width="1px")
                p.mb-0 #[b Según la forma en que se hace el pago]: las cuales están asociadas directamente a las condiciones comerciales.
              li 
                i.fas.fa-check(style="color: #05DBF2" width="1px")
                p.mb-0 #[b Según los agentes que intervienen en la misma]: es decir, dependiendo de quiénes intervengan en el proceso.
      .col-lg-10
        p.mb-5 Para una mejor comprensión, se muestra el esquema en la siguiente figura:
        h4.text-center.mb-5 TRANSACCIONES COMERCIALES
      .col-lg-5.px-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/img38.svg')})`}").p-4
              .row
                .col-12.p-4
                  p.text-back.mt-3 #[b Transacciones según la forma en que se realiza el pago.]
                  p Pueden ser:
                  p #[b Crédito]: son aquellas operaciones en las que el pago que realiza el cliente no es inmediato. Acá se recibe el producto por parte de la empresa, sin embargo, el cliente no realiza su pago en ese mismo momento.
                  p #[b Contado]: son aquellas en las cuales la empresa recibe el pago en el mismo momento en que el cliente recibe el producto.
            .tarjeta-flip__contenido.p-4.p-xl-5
              .row
                .col-12.p-4
                  figure.mb-5
                    img(src='@/assets/curso/img40.svg', style="position: relative; width: 80px;").m-auto
                  p.text-white #[b Ejemplo]: cuando un cliente compra en un almacén y decide pagar por cuotas su producto, está realizando una transacción a crédito. Sin embargo, cuando otro cliente ingresa al almacén y cancela inmediatamente su mercancía, la está realizando de contado.
      .col-lg-5.bg-color24
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
      .col-lg-5.bg-color25.order-4.order-lg-3
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
      .col-lg-5.px-0.order-lg-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/img39.svg')})`}").p-4
              .row
                .col-12.p-4
                  p.text-back.mt-3 #[b Transacciones según los agentes que intervienen]
                  p Los agentes representan cada una de las personas o empresas que intervienen en la transacción. Estas pueden ser:
                  p #[b Externas]: son aquellas en las cuales uno de los agentes es la empresa y el otro agente está por fuera de ella.
                  p #[b Internas]: están relacionadas generalmente con conceptos contables, ya que la empresa realiza la operación sin que intervengan agentes externos.
            .tarjeta-flip__contenido.p-4.p-xl-5
              .row
                .col-12.p-4
                  figure.mb-5
                    img(src='@/assets/curso/img41.svg', style="position: relative; width: 80px;").m-auto
                  p.text-white #[b Ejemplo]: cuando una empresa le compra insumos a sus proveedores, está realizando una transacción comercial externa. Si la empresa va a diferir el pago del proveedor, en el sistema de información es una transacción interna, porque, para realizarla, no necesitó del proveedor.
    #t_3_1
    .titulo-segundo
      h2 3.1 Documentos comerciales
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        p Son todos aquellos soportes que quedan para la empresa formalizar las transacciones comerciales. Como se mencionó previamente, siempre las operaciones comerciales están respaldadas en formatos, los cuales sirven de soporte contable, comercial y legal; además tienen como característica, desde el punto de vista de mercadeo, que los datos que contienen son fuente de información fundamental para conocer cómo se comporta un cliente.
        p Tradicionalmente, los soportes se han clasificado en:
        p #[span.txt-deco1 #[b Documentos negociables:]] hacen relación a aquellos que son susceptibles de negociación a través de traspasos, descuentos o endosos en una entidad financiera antes que se venzan.
        p.mb-0 #[span.txt-deco1 #[b Documentos no negociables:]] son aquellos que sirven de soporte para la contabilidad y pueden considerarse de validez jurídica, por tanto, son obligatorios para todas aquellas empresas que operen legalmente.
      .col-lg-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img19.png', style="position: relative; width: 400px;").m-auto
    p #[b Esta clasificación guarda estrecha relación con la perspectiva contable.]
    p.mb-5 A continuación, se listan los principales documentos clasificados como documentos negociables, recordando que suelen usarse de forma frecuente por las empresas en Colombia, dado que facilitan las operaciones comerciales, son de uso diario y pueden ser utilizados como respaldo, debido a que pueden convertirse en medios de pago. Los más usados en el medio son:
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA
        .row.justify-content-center
          .col-10.col-lg-5.mb-4.mb-md-0
            p #[b Cheque]
            p El cheque es un documento a través del cual, quien lo emite y firma (llamado girador), le solicita a su entidad financiera (llamada girado) que le entregue al beneficiario (o tomador) el valor específico referenciado, lo que significa que este soporte representa una forma de pagar sin necesidad de tener efectivo. Para que un cheque sea válido, debe tener: logo del banco, número o consecutivo, la palabra cheque, suma que está representando y la firma de quien lo expide.
            p #[span.txt-deco3 De acuerdo con lo anterior, la mayor ventaja de un cheque es que no se requiere tener gran cantidad de efectivo para saber que se tiene dinero disponible, lo que lleva implícito un concepto de seguridad]. Paralelamente, se tiene como desventaja para el beneficiario que, en caso dado de que el cheque no tenga fondos, no podrá ser cambiado por efectivo. También cabe mencionar que, con el auge de la tecnología y las transacciones en Internet, los cheques han ido perdiendo protagonismo, porque muchas personas y empresas optaron por aplicaciones y transferencias bancarias, lo que, aún así, no demerita la usabilidad de los mismos en ciertos contextos.
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/img20.png', style="width: 450px").m-auto
        .row.justify-content-center
          .col-10.col-lg-5.mb-4.mb-md-0
            p #[b Los pagarés]
            p Son documentos que se firman a favor de un tercero, como respaldo de una acreencia, #[span.txt-deco3 donde quien contrae la deuda (deudor) se compromete a pagar cierta cantidad de dinero en una fecha específica y, usualmente, implicando un pago de una tasa de interés aceptada por el firmante]. Con el auge del crédito, los pagarés han tomado cada vez más fuerza, ya que las entidades formalizan los compromisos de sus clientes a través de este soporte. Las partes que suelen conformar un pagaré son: la palabra pagaré, fecha de vencimiento, nombre de la persona natural o jurídica propietaria del pagaré y a quien debe cancelarse el dinero adeudado, el importe (valor a pagar) y la firma del deudor.
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/img21.png', style="width: 450px").m-auto
        .row.justify-content-center
          .col-10.col-lg-5.mb-4.mb-md-0
            p #[b Las letras de cambio]
            p Las letras de cambio son un soporte de cobro que tiene por fin referenciar un valor a pagar en una fecha determinada. La diferencia con el pagaré es que acá intervienen tres agentes, en vez de dos, como en el caso anterior. En una letra de cambio deben existir: el librador (la empresa que emite la deuda), un librado (quién tiene la obligación de pagar) y el tomador (quien se beneficiará del pago). #[span.txt-deco3 Como característica de este tipo de documento, se tiene que usualmente no implica el pago de tasas de interés, sino el pago del valor adeudado,] lo que quizá haya llevado a que hoy en día no sea tan usado en comparación con los pagarés.
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/img22.png', style="width: 450px").m-auto
    .row.justify-content-center
      .col-lg-10
        p.mb-5 Como se mencionaba previamente, los soportes no negociables son aquellos documentos comerciales que tienen como fin demostrar la validez contable, legal y comercial de una transacción; por lo tanto, constituye el documento que entrega el vendedor al cliente como constancia de que se ha entregado el bien o se ha prestado el servicio (según sea el caso), y la recepción del mismo por parte del comprador se vuelve, a su vez, constancia de aceptación. Los documentos de este tipo más utilizados en el medio son:
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA
        .row.justify-content-center
          .col-10.col-lg-5.mb-4.mb-md-0
            p #[b Las facturas]
            p La factura, podría decirse, es el documento más usado dentro de las transacciones comerciales; allí se detalla, de manera formal, la relación de los productos adquiridos por el cliente, relacionando: datos de quien vende, información básica de quien compra, la relación de la cantidad de bienes/servicios adquiridos y el precio pagado por ellos.
            p La utilidad de la factura es demostrar que en efecto la transacción ha sido realizada y también es soporte tributario (es decir, para constatar qué tipo y cuantía de impuestos se han pagado). En Colombia, para personas jurídicas (empresas), la existencia de la factura es lo que demuestra que efectivamente la operación se ha realizado y, por ello, siempre genera un efecto contable.
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/img23.png', style="width: 450px").m-auto
        .row.justify-content-center
          .col-10.col-lg-5.mb-4.mb-md-0
            p #[b Las facturas electrónicas]
            p En Colombia, la facturación usualmente era un documento físico. Sin embargo, en el año 1995, se le dio la misma validez a la facturación electrónica que a la facturación en papel. En 2005, se dio otro paso, con el Decreto 2242 de 2015, donde se decía que “la factura electrónica podrá expedirse, aceptarse, archivarse, usando cualquier tipo de tecnología disponible, garantizando la autenticidad e integridad desde su expedición y durante todo el tiempo de conservación”. Años más tarde y con el auge de la tecnología, en 2020, a través del Decreto 358, se regulan aspectos en esta materia, estableciendo como obligatorio, para todos aquellos que facturan IVA, el uso de la facturación electrónica.
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/img24.png', style="width: 450px").m-auto
        .row.justify-content-center
          .col-10.col-lg-5.mb-4.mb-md-0
            p #[b Las cotizaciones]
            p Son un documento que entrega una empresa a un cliente para realizar la propuesta económica asociada a un requerimiento. Por tanto, adicionalmente a completar los datos de la organización y el interesado, se relacionan las cantidades, precios unitarios, impuestos y precios totales.
            p Además, se especifica la validez de la misma, es decir, por cuánto tiempo serán reconocidos esos valores para una negociación. Sin embargo, dado que toda cotización no termina en venta, este documento es informativo y no genera registro contable.
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/img25.png', style="width: 450px").m-auto
        .row.justify-content-center
          .col-10.col-lg-5.mb-4.mb-md-0
            p #[b Las órdenes de compra]
            p También conocidas como orden de pedido u orden a cotización, son de suma utilidad, aunque no se utilizan en todas las empresas, dado que, en ocasiones, se omite este documento y se procede a emitir factura. Sin embargo, cuando el producto debe mandarse a producir, a traer de otra zona geográfica, o se debe tramitar con un tercero, es importante la utilización de este documento para formalizar que ya el pedido se encuentra en gestión. Asimismo, en las empresas con procesos muy estructurados o en el sector público, se suelen utilizar este tipo de formatos para generar trazabilidad en las solicitudes de bienes o servicios. Aquí, se deben detallar las especificaciones, cantidad y precio de cada producto solicitado, asimismo, la fecha, el lugar estimado de entrega y la forma de pago.
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/img26.png', style="width: 450px").m-auto
        .row.justify-content-center
          .col-10.col-lg-5.mb-4.mb-md-0
            p #[b Las notas débito y crédito]
            p En términos contables, las notas débito o crédito son documentos comerciales con carácter legal, que constituyen ajustes contables de la empresa con el cliente, ya sea por un error previo o por una variación en las condiciones, lo que en unos casos generará mayores cobros y, en otros, menores. La nota débito es emitida para aumentar un valor a pagar por el cliente sobre una factura emitida previamente, por tanto, esto genera un mayor valor a cobrar en el saldo que esté pendiente.
            p Por su parte, la nota crédito puede, en términos sencillos, entenderse como un saldo a favor del cliente, el cual puede ser consecuencia de una garantía, un producto no entregado o un faltante en cantidades; también se usan para anular una factura.
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/img27.png', style="width: 450px").m-auto
    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.bg-color7.p-4(data-aos="fade-left")
          .col-2
            figure
              img(src='@/assets/curso/img11.svg', style="position: relative; width: 85px;").m-auto
          .col-10
            p.text-white.mb-0 Tenga en cuenta: tanto en la nota débito como en la nota crédito, se debe especificar: los datos completos de la empresa y el cliente, el consecutivo del documento, el concepto que da lugar a la transacción (relacionando detalle, cantidad y precio/valor), el número de la factura que se corrige, la fecha de emisión y, por supuesto, el valor total de la nota.
    separador.mb-5
    #t_3_2
    .titulo-segundo
      h2 3.2 Los contratos en Colombia
    .row.bg-color26.px-5.mb-5
      .col-12
        .row.align-items-center.mb-5
          .col-lg-6.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img43.svg', style="width: 450px").m-auto
          .col-lg-6
            p #[span.txt-deco1 Los contratos son documentos de formalización que aplican cuando se adquiere un bien o servicio que tenga asociados pagos recurrentes o cuando se van a generar relaciones comerciales entre dos agentes.]
            p #[b Tienen como características que:]
            ul.lista-ul.ms-3
              li 
                i.fas.fa-check(style="color: #05DBF2" width="1px")
                p.mb-0 Siempre deben quedar por escrito.
              li 
                i.fas.fa-check(style="color: #05DBF2" width="1px")
                p.mb-0 Deben ser firmados y/o aceptados por cada una de las partes participantes en el mismo.
              li 
                i.fas.fa-check(style="color: #05DBF2" width="1px")
                p.mb-0 Tienen validez jurídica.
              li 
                i.fas.fa-check(style="color: #05DBF2" width="1px")
                p.mb-0 Se realizan de forma consensuada, es decir, debe existir la voluntad de cada una de las partes.
              li 
                i.fas.fa-check(style="color: #05DBF2" width="1px")
                p.mb-0 El objeto del contrato debe ser lícito (legal).
        .row.justify-content-center.mb-5
          .col-10
            .cajon.color-primario.p-4
              p.mb-0 Si bien existen unas consideraciones específicas para cada tipo de contrato, a nivel general, este tipo de documentos se rigen por el Código de Comercio de Colombia y por el Código Civil, ya que dichos Códigos representan el marco jurídico para las operaciones comerciales de las empresas y entre empresas y personas.
        p.mb-5 En este orden de ideas, los tipos de contratos con mayor usabilidad en Colombia son:
        .row.align-items-start
          .col-lg-6.mb-4.mb-lg-0
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Contratos mercantiles")
                .col-12
                  p.mb-0 Es el contrato que hace relación al cumplimiento de un objeto donde cada una de las partes se obliga a cumplir con ciertos requerimientos. Está concebido como un acuerdo de voluntades, es decir, las partes lo celebran porque así lo quieren y los involucrados participan en igualdad de condiciones. Un contrato mercantil implica: considerar un objetivo (para qué se firma), debe tener explícito si tiene monto, plazos y garantías; así como también deben incluirse los datos de las personas que lo celebran y las cláusulas (disposiciones específicas).
              .row(numero="2" titulo="Compra venta mercantil")
                .col-12
                  p Según el Código de Comercio, “es un contrato en que una de las partes se obliga a transmitir la propiedad de una cosa, y la otra, a pagarla en dinero. El dinero que el comprador da por la cosa vendida se llama precio. Cuando el precio consista parte en dinero y parte en otra cosa, se entenderá permuta si la cosa vale más que el dinero, y venta, en el caso contrario”. 
                  p.mb-0 En este tipo de contratos, se deben referenciar: los datos de cada una de las partes que intervienen (comprador y vendedor), el producto en venta, el valor total y las formas de pago.
              .row(numero="3" titulo="Suministro")
                .col-12
                  p Los elementos claves a considerar en un contrato de suministro son: los datos del proveedor y del cliente, la descripción del tipo de servicio o bien a entregar, la frecuencia, lugar, forma de pago y precio asociado, y consideraciones respecto al incumplimiento.
                  p.mb-0 Para dar alcance a este tipo de contrato, se plantea un caso donde una empresa contrata con otra que, cada 15 días, le haga envío del material de papelería. En esta situación, se evidencia la aplicabilidad del contrato de suministro, ya que se tiene el proveedor (empresa que enviará los productos y ejerce el rol de proveedor) y cliente (quién pagará por dichos elementos de oficina).
              .row(numero="4" titulo="Seguros")
                .col-12
                  p Son bastante conocidos y son aquellos en los que una empresa asume todos los riesgos que pueda correr cierto bien que le pertenece a otra persona, y que, en caso de ello, se obliga a indemnizar por los daños. En este escenario, el asegurado (quien adquiere el seguro) cancela un valor a la empresa (asegurador) y relaciona el/los beneficiarios, que son aquellas personas o empresas que, en caso de que se presente la situación de riesgo, reclamarán la indemnización.
                  p.mb-0 Un ejemplo típico se da con los seguros todo riesgo habitacional, donde una empresa de seguros ofrece a sus clientes pagar una suma mensual de dinero, teniendo como objeto la protección ante hurto o incendio de sus bienes, brindando de esta forma respaldo a la familia que lo adquiere; y como constancia de dicho acuerdo, se firma un contrato.
              .row(numero="5" titulo="Depósito")
                .col-12
                  p Según el Artículo 2240 del Código Civil, el contrato de depósito es “un contrato en que una de las partes entrega a la otra una cosa corporal o mueble para que la guarde y la restituya en especie, a voluntad del depositante”. El contrato de depósito debe llevar los datos de: el depositante (quien entrega el bien), el depositario (quien conserva el bien) y el depósito (cosa depositada).
                  p.mb-0 Como ejemplo, se plantea: una empresa recién inaugurada requiere guardar sus insumos, sin embargo, el espacio que arrendaron no es el óptimo para conservarlos, por lo que optaron por suscribir un acuerdo de depósito con una empresa para que les custodie los bienes.
              .row(numero="6" titulo="Leasing")
                .col-12
                  p El leasing es una forma muy utilizada hoy por las empresas y con tendencia creciente en las personas; por tanto, los contratos de leasing cada vez se ven más en el medio. En este tipo de acuerdo, se presenta un documento donde se establece un valor de arriendo con una opción de compra. En este tipo de contrato, se deben relacionar: los datos del arrendatario (quien paga el monto acordado), el arrendador (quien cede los derechos de uso del bien), relacionar las características del bien y especificar montos y condiciones de pago.
                  p.mb-0 El leasing es una forma muy usada por las empresas con los equipos de cómputo de sus colaboradores, suscriben un contrato con una empresa que se los suministre y, en la medida en que las exigencias del negocio lo soliciten, van definiendo cuáles son susceptibles de compra y cuáles seguirán funcionando como un arriendo.
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img44.svg', style="width: 450px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center.bg-color7.p-4(data-aos="fade-left")
          .col-2
            figure
              img(src='@/assets/curso/img11.svg', style="position: relative; width: 85px;").m-auto
          .col-10
            p.text-white.mb-0 Antes de entrar a revisar los aspectos a considerar en el diligenciamiento de un contrato, es importante mencionar que, con el auge de las transacciones digitales, en muchos casos ya no se requiere la impresión de los documentos, ya que este proceso puede realizarse utilizando diferentes canales tecnológicos. Sin embargo, cabe referenciar algunas consideraciones respecto a la firma de contratos impresos.
    .row.align-items-center.mb-5
      .col-lg-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img45.svg', style="width: 550px").m-auto
      .col-lg-6
        p #[b Documentos impresos]: se sugiere sean generados a computador (para mayor claridad) y entregados para firma en dos tenores (es decir, un ejemplar para cada una de las partes). Asimismo, que sean diligenciados en letra negra, referenciando muy bien la fecha en que se celebran y sin dejar espacios en blanco. Es importante realizar la validación sobre si quien firma realmente tiene facultades (poder) para hacerlo. En el caso de personas naturales, quien lo firma es quien está aceptando las condiciones del servicio y, en términos generales, deben ser personas mayores de 18 años. En el caso de personas jurídicas (empresas), debe ser el representante legal (Gerente) o un apoderado (una persona a la cual legalmente se le ha concedido esa autorización).
        p.mb-0 Para #[b documentos no impresos], se debe tener en cuenta que, en Colombia, existen tres tipos de firmas y que, dependiendo del tipo de soporte o de la empresa con la que se realice la transacción, se solicitará una u otra.
    .row.justify-content-center.mb-5
      .col-9.col-lg-4.mb-5.mb-lg-0
        .tarjeta--boton.color-primario.p-3.bg-color27
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/img51.svg', style="width: 175px; position: relative; bottom: 56px;").m-auto
          p(style="bottom:30px;") #[b Firma digital]: utiliza un procedimiento matemático de criptografía, que implica que, para enviarse el documento, se requiera una clave que solo tiene quién generó el mensaje. En Colombia, la firma digital está reglamentada mediante el Decreto 333 de 2014, donde se define que una entidad de certificación debe respaldar la validez de la firma, por tanto, es una firma más segura y confiable.
      .col-9.col-lg-4.mb-5.mb-lg-0
        .tarjeta--boton.color-primario.p-3.bg-color27
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/img52.svg', style="width: 175px; position: relative; bottom: 56px;").m-auto
          p(style="bottom:30px;") #[b Firma electrónica]: es un término que hace relación a la posibilidad de aceptar documentos sin necesidad de que estén impresos, adicionalmente a que no es necesario que estén asociados a una rúbrica, puede ser un código, una contraseña, un dato biométrico, una clave pictográfica.
      .col-9.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-3.bg-color27
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/img53.svg', style="width: 175px; position: relative; bottom: 56px;").m-auto
          p(style="bottom:30px;") #[b Firma escaneada]: es la más simple de todas, es aquella que la mayoría de personas naturales tienen disponible cuando requieren incorporar una firma para enviar asociada a un documento. 
          p.mb-0(style="bottom:30px;") En la mayoría de los casos, es una firma generada a partir de un screenshot (pantallazo) de la firma de la persona. Es importante considerar que esta firma tiene como aspecto positivo su facilidad para incorporar, sin embargo, su desventaja es que no tiene asociación con la seguridad, porque puede ser copiada y usada sin ningún tipo de control.
    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.bg-color7.p-4(data-aos="fade-left")
          .col-2
            figure
              img(src='@/assets/curso/img11.svg', style="position: relative; width: 85px;").m-auto
          .col-10
            p.text-white.mb-0 En el caso de las ventas telefónicas, dependiendo del tipo de producto que se oferte, se podrá dar: una aceptación telefónica que queda grabada y constituye la aceptación del cliente respecto al bien/ servicio; en este caso, la empresa es responsable de enviarle al cliente la documentación que soporta la transacción, aunque no requiere que sea firmada, pues se convierte en informativa. En otros casos, cuando el servicio implica temas financieros, la aceptación también se da por este canal, sin embargo, se envía a una persona, a un lugar acordado con el cliente, para que firme los soportes respectivos.
    separador.mb-5
    #t_3_3
    .titulo-segundo
      h2 3.3 Sistemas de información
    p Son hoy en día la mejor herramienta de trabajo, ya que permiten registrar, almacenar, custodiar y asegurar la consulta de la información. En el caso de los contact center, usualmente, los agentes tienen acceso a los sistemas de tipo CRM (Customer Relationship Management), dado que este tipo de sistemas de información es donde está alojada la información de los clientes.
    p.mb-5 Un CRM permite tener consolidada y organizada la información de los clientes, de tal forma que el Agente de ventas telefónicas pueda revisar el portafolio, hábitos de pago y puntos de contacto; de esta manera, tendrá las herramientas necesarias para realizar una oferta acorde al comportamiento del cliente. En detalle, algunas de las funcionalidades que tiene un sistema tipo CRM son:
    ImagenInfografica.color-secundario
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/img47.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones.p-3(x="33%" y="12%")
        p.mb-0 #[b Vista Única del Cliente]: los CRM permiten integrar la información del cliente integrando ventas, mercadeo y servicio al cliente.
      .tarjeta.color-acento-botones.p-3(x="23.5%" y="36%")
        p.mb-0 #[b Gestión de flujo de ventas]: Permite disponer de diferentes opciones y etapas personalizadas de acuerdo con el modelo comercial de la empresa. Permite disponer de opciones y etapas personalizables de los acuerdos de varios flujos de ventas.
      .tarjeta.color-acento-botones.p-3(x="21.5%" y="67%")
        p.mb-0 #[b Optimización de procesos comerciales]: los CRM utilizan los workflow (flujos de trabajo) para eliminar la necesidad de dedicar tiempo a tareas repetitivas.
      .tarjeta.color-acento-botones.p-3(x="73%" y="13%")
        p.mb-0 #[b Seguridad de la información]: los sistemas CRM tienen protocolos de seguridad que garantizan que la información siempre estará disponible para la empresa.
      .tarjeta.color-acento-botones.p-3(x="81.5%" y="36%")
        p #[b Minería de datos]: los sistemas de administración de clientes, al integrar toda la información de los clientes, permiten realizar agrupaciones para identificar subsegmentos o nichos de clientes y generar campañas de telemercadeo.
      .tarjeta.color-acento-botones.p-3(x="82.5%" y="66.5%")
        p.mb-0 #[b Información en tiempo real]: la ventaja de la mayoría de CRM es que están disponibles para que la información esté disponible en tiempo real. En algunos casos, tienen actualizaciones por horas durante el día, sin embargo, aún en este escenario, el margen frente a la realidad es muy pequeño, por lo que la información sigue siendo confiable.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Condiciones comerciales
    .row.bg-color1.px-5
      .col-12
        .row.justify-content-center
          .col-11
            .cajon.color-primario.p-4.mb-5
              p.mb-0 Las condiciones comerciales, también conocidas como Condiciones Generales de Venta (CGV), son los procedimientos y normas que establece la empresa como parte de la formalización de la transacción comercial y, por tanto, deben ser informadas por el vendedor y aceptadas de forma expresa por el cliente. (Imbra, 2021)
        .row.align-items-center.mb-5
          .col-lg-6.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img2.svg', style="width: 550px").m-auto
          .col-lg-5
            p.mb-4 #[b.txt-deco1 Establecer las condiciones comerciales es sumamente importante dentro de un proceso comercial estructurado, porque:]
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Es sinónimo de transparencia y claridad.
              li 
                i.fas.fa-angle-right
                | Permite dar alcance a lo que se está ofreciendo por parte de la empresa y lo que acepta el cliente.
              li 
                i.fas.fa-angle-right
                | Quedan documentados los compromisos de cada una de las partes.
              li 
                i.fas.fa-angle-right
                | En caso de que se formulen PQR (Peticiones, Quejas, Reclamos), se cuenta con los elementos necesarios para validar si son procedentes o no.
        #t_1_1
        .titulo-segundo
          h2 1.1 Precio
        .row.align-items-start.mb-5
          .col-lg-6
            p.mb-5 En el discurso comercial, a veces el precio se suele confundir con otros dos conceptos que están estrechamente relacionados: el costo y el valor; por ello, se hará una revisión de estas variables.
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Precio")
                .col-12
                  p Desde la perspectiva de mercadeo, el precio es la única variable dentro de la mezcla de mercadeo (marketing mix) que genera ingresos (entradas de dinero) para la empresa. Asimismo, es flexible y dinámico, ya que puede ser modificado en el corto plazo. A su vez, facilita la comparación de alternativas para el cliente, por tanto, tiene impacto psicológico sobre el cliente, ya que este comenzará a realizar asociaciones entre la marca y el precio. 
                  p Desde la perspectiva de las ventas, el precio es aquello que paga el cliente a cambio del producto, es decir, el valor de intercambio formal.
                  p.mb-0 En el sistema financiero, el precio es la tasa de interés o tipo de interés.
              .row(numero="2" titulo="Costo")
                .col-12
                  p.mb-0 El costo representa la cantidad de recursos que se requieren para el producto (para realizarlo si es bien tangible y para prestar el servicio si es un bien intangible).
              .row(numero="3" titulo="Valor")
                .col-12
                  p Es una medida subjetiva individual que asigna el cliente al producto.
                  p.mb-0 El inversionista Buffett (2021) indica que “el precio es lo que se paga, el valor es lo que se obtiene”, con esta famosa frase, se pone explícita la relación, pero, a la vez, diferencia entre un concepto y otro.
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img3.svg', style="width: 450px").m-auto
        .row
          .col-12
            p.mb-0 Con el fin de identificar de forma puntual cómo se pueden aplicar estos tres conceptos, a continuación se plantean los siguientes ejemplos.
    #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel').my-5
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
      .carousel-inner
        .carousel-item.active.bg-color2(data-bs-interval='90000')
          .row.p-5.justify-content-end
            .col-lg-6.me-lg-5.my-lg-5.p-4.bg-color4
              p.text-white #[b EJEMPLO LAPICERO]
              p.text-white.mb-0 Para producir un lapicero se requiere: tinta, un tubo plástico y un clip; eso, a nivel monetario, representa $1.000. Luego, el empresario decide vender este lapicero en $1.500. En un momento dado, alguien pregunta a dos personas diferentes: ¿cuánto estarían dispuestos a dar por el lapicero? La primera persona responde $800, la otra persona informa que requiere tener lapiceros disponibles porque en su empresa se firman muchos documentos, por lo que plantea que daría $3.000. A partir de este caso, se tendrían las siguientes variables:
              br.mt-2
        .carousel-item.bg-color3
          .row.p-5.justify-content-end
            .col-lg-6.me-lg-5.my-lg-5.p-4.bg-color4
              p.text-white #[b EJEMPLO SERVICIO]
              p.text-white Una empresa dedicada a dar conferencias en ventas decide ofrecer una capacitación de 4 horas. Los honorarios del docente, el refrigerio, libreta de apuntes, alquiler del lugar y certificados representan $220.000. Este programa se ofertará en el mercado en $300.000. 
              p.text-white.mb-0 Una persona que requiere fortalecer sus competencias en ventas está dispuesta a pagar $400.000. Sin embargo, una persona que no tiene necesidad de aprender de ventas dice que pagaría $50.000, pues es un tema de cultura general. A continuación, obsérvese el detalle para este ejercicio:
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next
    .row.align-items-center.mb-5
      .col-lg-6
        p.mb-5 Partiendo de los conceptos y los ejemplos expuestos, es importante que se pueda reflexionar sobre estos elementos:
        .row.align-items-start
          .col-2
            figure
              img(src='@/assets/curso/img4.svg', style="width: 50px").m-auto
          .col-10
            p.mb-0 En condiciones normales, #[b el costo será más bajo que el precio], sustentado en que la empresa necesita “ganar” algo por la venta de sus productos. Por tanto, hacer mención al costo y al precio de un producto como si fueran sinónimos es técnicamente un error.
        hr
        .row.align-items-start
          .col-2
            figure
              img(src='@/assets/curso/img5.svg', style="width: 50px").m-auto
          .col-10
            p.mb-0 El #[b valor es subjetivo] y está muy asociado, a la importancia que le da la persona al producto, es decir, si es algo que requiere y que le brinda satisfacción o bienestar, lo valorará muy bien, mientras que si es algo que no requiere o no le ve mayor usabilidad, le asignará un valor nulo o bajo.
        hr
        .row.align-items-start
          .col-2
            figure
              img(src='@/assets/curso/img6.svg', style="width: 50px").m-auto
          .col-10
            p.mb-0 El mercadeo tiene un #[b reto importante] y es lograr que la #[b percepción de valor y precio] tengan valores cercanos, es decir, que las personas/empresas valoren el producto y estén dispuestos a pagar por él lo que la empresa ha asignado. Dicho de otra forma, el cliente adquirirá un producto cuando considere que el balance entre el precio que va a pagar y el valor percibido es “justo”.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img7.svg', style="width: 550px").m-auto
    .row.align-items-center.mb-5
      .col-lg-6.order-2.order-lg-1
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img8.svg', style="width: 550px").m-auto
      .col-lg-6.order-1.order-lg-2
        p Aún cuando el agente de contact center y BPO no es responsable de asignar los precios en una compañía, si verá cómo, en el día a día de su actividad comercial, el precio es una de las objeciones de ventas más utilizadas; por ello, se hace relevante entender otras consideraciones respecto a este tema. 
        p.mb-4 En este orden de ideas, se debe revisar el concepto de políticas de precios, las cuales representan el conjunto de normas o criterios que realiza una empresa para regular y fijar los precios de los productos. Y en este sentido, la primera pregunta a responder es:
        .cajon.color-primario.p-4.mb-5
          p #[b ¿Cómo se determina el precio de un producto?]
          p.mb-0 Existen muchos mecanismos para la asignación del precio. Tradicionalmente, se ha realizado con base en el costo; sin embargo, la competencia, el entorno y las situaciones cambiantes del mercado han llevado a las empresas a explorar otras opciones.
    .row.bg-color5.px-5
      .col-12
        p.my-5 A continuación, se muestran los tres métodos más usados por las empresas para determinar el precio de un producto.
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-4.bg-color6
            figure.mb-5
              img(src='@/assets/curso/img9.svg', style="width: 90px").m-auto
            p #[b Asignación con base en el costo]
            p El método consiste en calcular el costo del producto, posteriormente, se asigna un porcentaje de rentabilidad esperado por la empresa.
          .col-lg-4.bg-color6
            figure.mb-5
              img(src='@/assets/curso/img9.svg', style="width: 90px").m-auto
            p #[b Asignación con base en los precios de la competencia]
            p Con el fin de ser competitivo en el mercado, se establece el precio tomando como referencia el precio del mismo producto (o similar) por parte de otras empresas.
          .col-lg-4.bg-color6
            figure.mb-5
              img(src='@/assets/curso/img9.svg', style="width: 90px").m-auto
            p #[b Asignación con base en el valor percibido]
            p Este método consiste en realizar estudios de mercado para determinar cuál es el valor que estarían dispuestos a pagar los clientes potenciales, y con base en esto, se calcula un promedio de los valores referenciados.
        .row.justify-content-center.mb-5
          .col-lg-10
            .row.align-items-center.bg-color7.p-4(data-aos="fade-left")
              .col-2
                figure
                  img(src='@/assets/curso/img11.svg', style="position: relative; width: 85px;").m-auto
              .col-10
                p.text-white.mb-0 Usualmente, la asignación del precio estará a cargo del proceso de mercadeo, y lo que se sugiere es que para determinarlo se consideren idealmente los tres factores (costos, competencia y valor percibido), o como mínimo dos de ellos. Adicionalmente, tener presente que hay otros elementos externos, como la legislación, la demanda y el comportamiento de la economía, que pueden influenciar la determinación del mismo.
    .row.bg-color8.px-5
      .col-12
        .row.justify-content-center
          .col-lg-10
            p.my-5 Con relación a esta variable, la empresa también puede plantearse diferentes objetivos respecto a cómo quiere que sea percibido su precio, los cuales pueden ser:
            figure.mb-5
              img(src='@/assets/curso/img14.svg', style="position: relative; width: 800px;").m-auto
    .row.bg-color5.px-5.mb-5
      .col-12
        .row.justify-content-center.my-5(data-aos="fade-left")
          .col-lg-5.p-4
            figure.pe-3
              img(src='@/assets/curso/img15.svg', style="width: 450px").m-auto
          .col-lg-5.p-4.bg-color9.d-flex
            .row.align-items-center
              .col-12
                p.text-white #[b Con base en esto, se establecen diferentes tipos de precios:]
                ul.lista-ul
                  li 
                    i.fas.fa-check(style="color: #05DBF2" width="1px")
                    p.mb-0.text-white Altos.
                  li 
                    i.fas.fa-check(style="color: #05DBF2" width="1px")
                    p.mb-0.text-white Medios (a nivel).
                  li 
                    i.fas.fa-check(style="color: #05DBF2" width="1px")
                    p.mb-0.text-white Bajos.
    p #[b A continuación, se referencian algunas consideraciones respecto a esta tipificación:]
    .row.justify-content-center.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/img3.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-white Busca atraer a grupos objetivo. Se presentan cuando: el producto es altamente diferenciado o innovador y el cliente está dispuesto a pagar por esa diferencia.
              p.mb-0.text-white Usualmente, se da cuando son productos de lujo, exclusivos o de tecnología. El objetivo es aumentar la rentabilidad y crear diferenciación en el mercado.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/img4.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-white Se da cuando el producto está haciendo presencia en un mercado altamente competido, aunque solo es posible aplicar si se tiene una muy buena estructura de costos.
              p.mb-0.text-white El objetivo es ganar participación en el mercado, aunque se debe ser cuidadoso, para que el cliente no asocie bajo precio con mala calidad.
              br
      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/img5.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-white Cuando el objetivo es vender, sin generar mayor diferenciación.
              p.mb-0.text-white En este caso, la empresa desea ser una opción considerada dentro del análisis comparativo del consumidor.
              br
              br
              br
    separador.mb-5
    #t_1_2
    .titulo-segundo
      h2 1.2 Tipos de descuentos
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Son disminuciones en los precios de lista (precios de referencia o precios base) que concede la empresa a sus clientes. Dicho en sentido matemático, son porcentajes (%) que establecen las organizaciones, según su estructura de costos, con el objetivo general de generar más ventas. Se realizan como consecuencia de: negociaciones puntuales, necesidad de salir de inventarios, lanzamiento de productos o captación de nuevos clientes o mercados.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 Kotler y Armstrong, 2017
      .col-lg-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img6.png', style="width: 450px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10.bg-color10
        p #[b ¿Cómo se calcula un descuento?] Aplicando una fórmula sencilla, siempre partiendo de dos datos conocidos:
        p El precio base (precio del bien) y el porcentaje de descuento a aplicar.
        p #[b Descuento (D)] = Valor del bien * % de descuento
        p.mb-0 #[b Valor a pagar (Vp)] = Valor del bien - Descuento
    .row.justify-content-center
      .col-lg-8.bg-color12.mb-5(data-aos="fade-right")
        .row.align-items-center
          .col-lg-6.bg-color11.p-4
            figure
              img(src='@/assets/curso/img16.svg', style="width: 450px").m-auto
          .col-lg-6.p-4
            p.text-white Para un mejor entendimiento, se presenta el siguiente ejemplo: 
            p.text-white El precio base (de lista) de un servicio de internet banda ancha es de $50.000 y se establece un descuento del 10 %. ¿Cuál será el precio que el agente de contact center le debe indicar al cliente?
            p.text-white D = $50.000 * 10%
            p.text-white D = $5.000
            p.text-white Vp = $50.000 - $5.000
            p.text-white Vp = $45.000
      .col-lg-9.mb-5#menu1
        p.mb-0 Con base en lo anterior, se establecen, a nivel de mercadeo y ventas, dos tipos de descuentos, los cuales tienen como propósito suministrar, a partir de la variable precio, diferentes herramientas para el logro de los objetivos. La clasificación de los tipos de descuento es:
    .row.justify-content-evenly.mb-5
      .col-3
        a(href="#1A")
          figure.efect1
            img(src="@/assets/curso/img49.svg", style="width:250px").m-auto
      .col-3
        a(href="#2A")
          figure.efect1
            img(src="@/assets/curso/img50.svg", style="width:250px").m-auto
    #1A
    .row.justify-content-center.align-items-start.mb-5
      .col-lg-10
        hr
        p.mb-5 A continuación, un análisis de cada uno de ellos.
        h4.mb-5 #[b.txt-deco2 Descuentos financieros]
      .col-10.col-lg-8
        p.mb-0 Son aquellos que tienen como finalidad obtener el pago del dinero por parte del cliente a la mayor brevedad posible, ya que esto representa para la empresa capital de trabajo, es decir, los recursos con los que debe contar la organización para poder operar (ya sea para producir el bien o prestar el servicio, según sea el caso). Lo anterior, bajo la lógica a menor tiempo de pago, mayor descuento. Los descuentos financieros con mayor usabilidad son:
      .col-2
        a(href="#menu1")
          figure.efect1
            img(src="@/assets/curso/img48.svg", style="width:50px").m-auto
    .row.justify-content-center.mb-5
      .col-7.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-3.bg-color13
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/img18.svg', style="width: 70px").m-auto
          h3 Descuento financiero por pago de contado
          p Es el porcentaje que se concede cuando el cliente realiza pago inmediato o contraentrega.
      .col-7.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-3.bg-color13
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/img19.svg', style="width: 65px").m-auto
          h3 Descuento financiero por pronto pago
          p Consiste en propiciar, a través del estímulo del descuento, que antes que finalice el tiempo negociado con el cliente, este pague la factura.
      .col-7.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-3.bg-color13
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/img20.svg', style="width: 65px").m-auto
          h3 Descuento por pago en efectivo o transferencia
          p Están sustentados en la premisa de maximizar la rentabilidad, ya que al utilizar el sistema financiero, a través de tarjetas, las empresas pagan un porcentaje de comisión al sistema financiero, lo que representa un menor valor neto.
    .row.align-items-center.justify-content-center
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img7.png', style="width: 450px").m-auto
      .col-lg-6
        p.mb-4 Para mayor entendimiento, se muestra un ejemplo de un descuento financiero:
        .row.align-items-start
          .col-2
            figure
              img(src='@/assets/curso/img4.svg', style="width: 50px").m-auto
          .col-10
            p.mb-0 Una empresa envía su pedido por valor de $100.000 y tiene negociado con su cliente que las facturas deben ser canceladas a 90 días.
            hr
          .row.align-items-start
            .col-2
              figure
                img(src='@/assets/curso/img5.svg', style="width: 50px").m-auto
            .col-10
              p.mb-0 Asimismo, establece que si cancela a 60 días, le otorgarán un descuento del 2 %, y si paga a 30 días, le darán un descuento del 4 %.
              hr
          .row.align-items-start
            .col-2
              figure
                img(src='@/assets/curso/img6.svg', style="width: 50px").m-auto
            .col-10
              p.mb-0 Del ejemplo anterior, se observa que, si el cliente paga a 90 días, deberá pagar una factura por valor de $100.000, si la paga a 60 días, el monto es de $98.000, y si paga a 30 días, deberá cancelar $96.000.
    #2A
    separador
    .row.bg-color14.px-5
      .col-12
        .row.justify-content-center.align-items-start.mb-5
          .col-lg-10
            h4.mb-5 #[b.txt-deco2 Descuentos comerciales]
          .col-10.col-lg-8
            p Son el tipo de descuento que tiene como fin, no solo asegurar las mejores condiciones para un cierre de ventas, sino además propender por generar relaciones de largo plazo con el cliente, porque al aplicarlos el cliente percibirá que la empresa lo trata de una forma preferencial.
            p.mb-0 Los descuentos comerciales más usados son (Stanton et al, 2007):
          .col-2
            a(href="#menu1")
              figure.efect1
                img(src="@/assets/curso/img48.svg", style="width:50px").m-auto
        .row.align-items-center.mb-5
          .col-lg-6.mb-4.mb-lg-0
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Descuento por volumen")
                .col-12
                  p.mb-0 Entre más unidades adquiera el cliente, el precio unitario será menor. Acá se estimula que el cliente quiera comprar más unidades.
              .row(numero="2" titulo="Descuento por bonificación de producto")
                .col-12
                  p.mb-0 Si el cliente adquiere determinado producto, se le otorga un descuento si adquiere otro en la misma transacción.
              .row(numero="3" titulo="Bonificación promocional")
                .col-12
                  p.mb-0 Se aplica a los distribuidores como una forma de impulsar que estos participen en programas publicitarios que tengan por fin promocionar la marca o el producto.
              .row(numero="4" titulo="Descuentos estacionales")
                .col-12
                  p.mb-0 Conocidos también como descuentos de temporada, se entregan en épocas en las cuales hay baja rotación del producto.
              .row(numero="5" titulo="Descuentos de canal")
                .col-12
                  p.mb-0 Son aquellos que tienen por fin fidelizar a los distribuidores, por el hecho de que ellos son quienes facilitan mayor acceso al producto.
              .row(numero="6" titulo="Precio de oferta")
                .col-12
                  p.mb-0 Son los porcentajes que aplican las empresas a sus productos para salir de sus inventarios.
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img22.svg', style="width: 450px").m-auto
        .row
          .col-12
            p.mb-5 Algunos ejemplos para aclarar algunos conceptos, son:
        .row.align-items-center
          .col-lg-6
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img23.svg', style="width: 550px").m-auto
          .col-lg-6
            .row.align-items-start
              .col-2
                figure
                  img(src='@/assets/curso/img4.svg', style="width: 50px").m-auto
              .col-10
                p.mb-0 Cuando se le indica al cliente que si adquiere una docena, la unidad tendrá un precio de $10.000 y si adquiere 2 docenas se le dará un descuento del 20 %, se está aplicando un descuento por volumen.
                hr
            .row.align-items-start
              .col-2
                figure
                  img(src='@/assets/curso/img5.svg', style="width: 50px").m-auto
              .col-10
                p.mb-0 Cuando se encuentra que en verano las chaquetas tienen descuentos permanentes, hace relación a descuentos estacionales.
                hr
            .row.align-items-start
              .col-2
                figure
                  img(src='@/assets/curso/img6.svg', style="width: 50px").m-auto
              .col-10
                p.mb-0 Cuando un almacén indica que por cierre de temporada tendrá descuento del 40 % en sus prendas, se está referenciando un precio de oferta.

  
</template>

<script>
export default {
  name: 'Tema1',
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

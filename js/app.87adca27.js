(function(e){function a(a){for(var o,r,c=a[0],l=a[1],d=a[2],s=0,u=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(t.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},i={app:0},t=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"9dc68467","chunk-0206bfa0":"f11b6f00","chunk-04b93936":"c62541c4","chunk-13a6037e":"44cff4ae","chunk-16015154":"97650049","chunk-17977988":"641997dc","chunk-2c06842c":"05b6c567","chunk-2d208d90":"5a1e490b","chunk-2d21d0e2":"c0d12677","chunk-2d22c123":"e595346e","chunk-2e80bb9a":"750487b8","chunk-3145fe0f":"f299dce9","chunk-319206de":"522efa8b","chunk-328f70dd":"860a4c45","chunk-3807499c":"8e1e7827","chunk-3dc647fd":"a0bdb731","chunk-4cdd78c0":"022cbebc","chunk-4fde0a08":"362df545","chunk-515a8379":"bf777deb","chunk-53ccb27e":"48f4f7df","chunk-59974754":"6ab510d2","chunk-766a929b":"2887b61e","chunk-839300a6":"5c489c93","chunk-c796899c":"2872517a","chunk-dbb9869e":"43014c07",comple:"8a1915d1",creditos:"bf3d0e3e",glosario:"0ba38366",intro:"ed8c852c",referencias:"5beeef14",tema1:"c7f45bdb",tema2:"962a462c",tema3:"3dc00e97"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};r[e]?a.push(r[e]):0!==r[e]&&n[e]&&a.push(r[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-319206de":"31d6cfe0","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"0459bc8c","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"002c4af9","chunk-766a929b":"da8224db","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"e2f65924",creditos:"28468235",glosario:"096bdd61",intro:"0e433876",referencias:"e7d3f467",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",i=l.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var d=t[c],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===o||s===i))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],s=d.getAttribute("data-href");if(s===o||s===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||i,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete r[e],m.parentNode.removeChild(m),n(t)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=i[e]=[a,n]}));a.push(o[2]=t);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var u=new Error;d=function(a){s.onerror=s.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,n[1](u)}i[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=s;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},i=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,l=n("2877"),d=Object(l["a"])(c,r,i,!1,null,null,null),s=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"El cierre de ventas",descripcionCurso:"Un vendedor será bien evaluado si cumple el volumen de ventas esperado por la empresa, y para que suceda, se debe haber formalizado el proceso, el cual se da cuando el cliente acepta formalmente la propuesta comercial y entrega a la empresa la información requerida. Este componente formativo tiene como principal propósito suministrar al aprendiz conceptos prácticos sobre el cierre de ventas.",imagenBannerPrincipal:n("ae0a"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Condiciones comerciales",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Precio",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Tipos de descuentos",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Cierre de ventas",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Tipos",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Cierres de ventas telefónicas",hash:"t_2_2"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Transacciones comerciales",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Documentos comerciales",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Los contratos en Colombia",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Sistemas de información",hash:"t_3_3"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Decreto 410 de 1971. Por el cual se expide el Código de Comercio. Marzo 27 de 1971. DO. Nº 33.339. ",link:"http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio_pr027.html#905"},{referencia:"Decreto 333 de 2014. Por el cual se reglamenta el artículo 160 del Decreto-ley 19 de 2012: Por el cual se dictan normas para suprimir o reformar regulaciones, procedimientos y trámites innecesarios existentes en la Administración Pública.  Febrero 19 de 2014. DO. Nº 49.069. ",link:"https://www.suin-juriscol.gov.co/viewDocument.asp?id=1848847"},{referencia:"Decreto 2242 de 2015. Por el cual se reglamentan las condiciones de expedición e interoperabilidad de la factura electrónica con fines de masificación y control fiscal. Noviembre 24 de 2015. ",link:"https://normativa.archivogeneral.gov.co/decreto-2242-de-2015/"},{referencia:"Decreto 358 de 2020. [Ministerio de Hacienda y Crédito Público]. Por el cual se reglamentan los artículos 511,615,616-1,616-2,616-4,617,618, 618-2 Y 771-2 del Estatuto Tributario, 26 de la Ley 962 de 2005 y 183 de la Ley 1607 de 2012. Marzo 05 de 2020. ",link:"https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20358%20DEL%2005%20DE%20MARZO%20DE%202020.pdf"},{referencia:"Imbra. (s. f.). Condiciones Comerciales. ",link:"https://imbrarepuestos.com/condiciones-comerciales/"},{referencia:"Kotler, P. y Armstrong, G. (2017). Marketing. Pearson Educación. "},{referencia:"Navarro, M. (2012). Técnicas de Ventas. Red Tercer Milenio. ",link:"http://www.aliat.org.mx/BibliotecasDigitales/economico_administrativo/Tecnicas_de_venta.pdf"},{referencia:"Stanton, W., Etzel, M. y Walker, B. (2007). Fundamentos de Marketing. McGraw-Hill Interamericana. ",link:"https://mercadeo1marthasandino.files.wordpress.com/2015/02/fundamentos-de-marketing-stanton-14edi.pdf"}],glosario:[{termino:"Cliente",significado:"es el centro de la estrategia de mercadeo y ventas de una empresa. Representa a la persona o empresa que adquiere los bienes o servicios."},{termino:"Competidores",significado:"empresas que ofrecen productos iguales o similares y, por tanto, se encuentran en el mismo mercado donde la organización desarrolla su actividad comercial."},{termino:"Contrato",significado:"documento que formaliza una operación comercial entre empresas o personas. Tiene validez jurídica y siempre lleva asociado un objeto."},{termino:"Factura",significado:"documento que soporta una venta, relacionando las cantidades, los precios y valores totales a pagar por parte del cliente. Es el soporte formal de la transacción comercial."},{termino:"Orden de compra",significado:"es un documento que soporta la solicitud del cliente para gestionar el pedido. En ella, empresa y cliente aceptan estar de acuerdo en las cantidades y el precio."},{termino:"Outbound",terminoHtml:"<em>Outbound</em>",significado:"modelo comercial usado en canales <i>contact center</i> y BPO, donde el contacto es generado por el agente de ventas, es decir, es el vendedor quien realiza la llamada al cliente."},{termino:"Portafolio",significado:"conjunto de bienes y servicios que ofrece una empresa al mercado."},{termino:"Valor",significado:"asignación monetaria que da un cliente a un producto en función de la necesidad que satisface o de la usabilidad que representa."},{termino:"Venta",significado:"transacción comercial donde debe darse una relación gana- gana entre el vendedor y el cliente."},{termino:"Venta telefónica",significado:"tipo de venta a distancia, donde se hace uso de teléfonos o aplicativos informáticos como canal de venta."}],complementario:[{texto:"Navarro, M. (2012). Técnicas de Ventas. Red Tercer Milenio.",tipo:"Libro digital",link:"http://www.aliat.org.mx/BibliotecasDigitales/economico_administrativo/Tecnicas_de_venta.pdf"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Diana Carolina Jaramillo Rojas",cargo:"Experta Temática",centro:"Centro de Comercio - Regional Antioquia"},{nombre:"Adriana López",cargo:"Diseñadora Instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisora Metodológica y Pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Darío González",cargo:"Corrección de estilo",centro:"Centro Agropecuario La Granja - Regional Tolima"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional - Tolima"},{nombre:"Sandra Carolina Duran Lopez",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Carolina Tamayo Lopez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ricardo Vásquez Arroyave",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jhon Jairo Urueta Alvarez",cargo:"Desarrollo Front-End",centro:"Centro de Comercio y Servicios Regional - Tolima"},{nombre:"Andrés Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yenny Patricia Ulloa Villamizar",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:b,store:g["a"],render:function(e){return e(s)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.2.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ae0a:function(e,a,n){e.exports=n.p+"img/banner-princiapal.becd7eb7.svg"},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.203a8ee4.png"}});
//# sourceMappingURL=app.87adca27.js.map
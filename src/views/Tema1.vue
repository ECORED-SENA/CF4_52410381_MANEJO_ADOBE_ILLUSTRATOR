<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Creación y configuración de un nuevo documento en Adobe Illustrator
    
    .row
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        p Cuando se va a crear un documento en Illustrator, lo primero que se debe considerar es el propósito del proyecto a realizar, debido que esto dicta el tipo de documento a preparar y sus características. Si el objetivo del proyecto es la web, seguro ha de requerir un modo de color diferente, como si fuera uno destinado para impresión #[em offset], lo mismo ocurre con el tamaño y las unidades de medida.
        .p-3.mt-4(style="background-color:#FFEACC;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="zoom-in-left" data-aos-duration="650")
              figure
                img(src="@/assets/curso/tema1/1.svg")
            .col(style="place-self:center;" data-aos="fade-up" data-aos-duration="400")
              p.mb-0 Para configurar el nuevo documento se va al menú #[strong Archivo > Nuevo], esto deberá abrir una ventana con el título #[strong Nuevo documento].
        p.mt-4.mb-0 El cuadro de diálogo Nuevo documento ofrece una variedad de opciones para iniciar sus proyectos en Adobe Illustrator. Entre las principales funciones se incluyen:
      .col-lg-7(data-aos="fade-left")
        figure.m-auto.col-12.col-md-9.col-lg-12
          img(src="@/assets/curso/tema1/2.png")

    .row.mt-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema1/3.png")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Crear documentos a partir de plantillas")
            p Selecciona plantillas de Adobe Stock organizadas en diversas categorías como reciente, guardado, móvil, web, impresión, película y video, arte e ilustración, y plantillas gratuitas.
          .row.col-xl-11.m-auto(titulo="Buscar y utilizar plantillas adicionales")
            p Se encarga de analizar la estructura de los datos y que se cumpla con los requisitos del negocio, modelo de negocio o problema. Las actividades a desarrollar, son:
            ul.lista-ul.mb-0.ps-3
              li.d-flex
                i.fas.fa-bezier-curve(style="color:#FF7650;")
                span Mapear diagrama entidad relación a un modelo relacional.
              li.d-flex
                i.fas.fa-bezier-curve(style="color:#FF7650;")
                span Análisis de restricciones de integridad.
              li.d-flex
                i.fas.fa-bezier-curve(style="color:#FF7650;")
                span Validación de requisitos funcionales.
          .row.col-xl-11.m-auto(titulo="Acceso rápido a archivos y plantillas recientes")
            p En la pestaña de componentes recientes, puede acceder rápidamente a archivos, plantillas y otros elementos utilizados recientemente.
          .row.col-xl-11.m-auto(titulo="Acceso a plantillas guardadas")
            p Encuentra rápidamente las plantillas que ha descargado de Adobe Stock en la pestaña Guardados.
          .row.col-xl-11.m-auto(titulo="Crear documentos con ajustes preestablecidos")
            p Usa los ajustes preestablecidos de documento en blanco, disponibles para diversas categorías y dispositivos, y ajusta su configuración, según sus necesidades, antes de abrir el documento.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1 Crear y guardar ajustes prestablecidos de documentos personalizados
    
    p(data-aos="fade-right") Antes de abrir un documento con un ajuste preestablecido, se puede personalizar utilizando las opciones del panel derecho.

    .cont_1_1.mt-4
      .row
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
            h5 Figura 1.
            span Panel derecho
          .cont_1_2.p-4.pt-xl-5.pb-xl-5
            figure(data-aos="zoom-in-up")
              img(src="@/assets/curso/tema1/5.svg" alt="Imagen que presenta las opciones del panel derecho.")
        .col-lg-7(data-aos="fade-left")
          p.fw-bold.mb-0 A. Nombre del documento
          p Asigne un nombre al nuevo documento.
          p.fw-bold.mb-0 B. Configuraciones del ajuste preestablecido
          p Personalice las siguientes opciones para el ajuste preestablecido seleccionado:
          ul.lista-ul.mb-3.ps-3
            li.d-flex.mb-1
              i.fas.fa-bezier-curve(style="color:#FF7650;")
              span #[strong Anchura y altura:] defina el tamaño de la mesa de trabajo y seleccione la unidad de medida en el menú desplegable.
            li.d-flex.mb-1
              i.fas.fa-bezier-curve(style="color:#FF7650;")
              span #[strong Orientación:] elija la orientación del documento, ya sea horizontal o vertical.
            li.d-flex.mb-1
              i.fas.fa-bezier-curve(style="color:#FF7650;")
              span #[strong Mesas de trabajo:] especifique el número de mesas de trabajo que desea en el documento.
            li.d-flex.mb-1
              i.fas.fa-bezier-curve(style="color:#FF7650;")
              span #[strong Sangrado:] establezca el valor de sangrado para cada lado de la mesa de trabajo. Si necesita diferentes valores para cada lado, seleccione la opción correspondiente.
            li.d-flex.mb-1
              i.fas.fa-bezier-curve(style="color:#FF7650;")
              span #[strong Modo de color:] elija el modo de color del documento, ya sea RGB para trabajos digitales o CMYK para proyectos impresos.
            li.d-flex.mb-0
              i.fas.fa-bezier-curve(style="color:#FF7650;")
              span #[strong Efectos de rasterizado:] defina la resolución para los efectos de rasterizado en el documento.
          p.fw-bold.mb-0 C. Modo de previsualización
          p Configure el modo de previsualización predeterminado del documento:
          ul.lista-ul.mb-3.ps-3
            li.d-flex.mb-1
              i.fas.fa-bezier-curve(style="color:#FF7650;")
              span #[strong Por defecto:] muestra la ilustración en vista vectorial a todo color, conservando el suavizado en las curvas al acercar o alejar.
            li.d-flex.mb-1
              i.fas.fa-bezier-curve(style="color:#FF7650;")
              span #[strong Píxel:] presenta una vista previa simulada con apariencia rasterizada, sin alterar el contenido vectorial real.
            li.d-flex.mb-0
              i.fas.fa-bezier-curve(style="color:#FF7650;")
              span #[strong Sobreimpresión:] ofrece una "previsualización de tintas", simulando cómo se verán las fusiones, transparencias y sobreimpresiones en una salida con separación de color.
          p.fw-bold.mb-0 D. Más ajustes
          p.mb-0 Si necesita ajustar aún más el preestablecido, seleccione la opción Más ajustes para acceder a configuraciones adicionales.






      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>

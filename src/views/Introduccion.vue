<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col(style="place-self:center;" data-aos="fade-up" data-aos-duration="400")
        p.mb-0 En este componente formativo se estudian todos los aspectos de la preparación de un documento en Adobe Illustrator, teniendo en cuenta la concepción del proyecto según las necesidades, continuando con el desarrollo del proyecto y la culminación del mismo, con la obtención de un producto final.
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="zoom-in-left" data-aos-duration="650")
        figure
          img(src="@/assets/curso/intro1.svg")
    
    .row.mt-4(data-aos="zoom-in-up" data-aos-duration="1000")
      .pe-lg-0.col-lg-5.d-none.d-lg-block
        figure
          img(src="@/assets/curso/intro2.png")
      .col-lg-7.ps-lg-0
        .h-100.p-4.p-xl-5.ps-xl-4.d-flex.align-content-center.flex-wrap.p-relative(style="background-color:#FFEACC;overflow:hidden;")
          img(src="@/assets/curso/intro3.png" style="position:absolute;max-width:fit-content;right:0;bottom:0;")
          p.mb-0 Por ello se explica cómo preparar un documento de Adobe Illustrator, particularmente la creación y configuración de uno nuevo, teniendo en cuenta su objetivo, mostrando las diversas alternativas de configuración preestablecidas en el #[em software] y las opciones para personalizarla, de acuerdo con lo que se quiere lograr. También se pretende enseñar cómo importar imágenes para ser utilizadas en un proyecto, la forma correcta de exportar documentos de diferentes formatos, algunas herramientas de sector y corte y, finalmente, se dan las pautas para la obtención de un producto final, con la manera de empaquetar un proyecto y la creación de un archivo en PDF.




    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

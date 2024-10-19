<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Empaquetar proyectos
    
    p(data-aos="fade-up") Seleccionando #[strong Archivo > Empaquetar…] es posible recopilar archivos utilizados, incluidas las fuentes tipográficas y las imágenes enlazadas, con el fin de distribuir o compartir el proyecto. Al empaquetar un archivo se origina una carpeta que contiene al documento y todos sus archivos fuente, además, de un pequeño informe del mismo.

    .col-xl-10.m-auto.mt-4
      .cont_5_1.p-4
        .col-xl-8.m-auto
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema5/1.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_5_1 5.1 Creación de un archivo PDF

    .row.mt-4
      .col(style="place-self:center;" data-aos="fade-right")
        p Adobe Illustrator puede crear diferentes tipos de Archivos PDF. Se pueden generar PDF de varias páginas, con capas y compatibles con PDF/X. Los PDF con capas permiten guardar uno de este tipo que podrá utilizar en distintos contextos.
        p.mb-0 Para crear un archivo PDF se selecciona #[strong Archivo > Guardar como o Archivo > Guardar una copia], luego de seleccionar un nombre y ubicación para el archivo, se selecciona el formato PDF y se da clic en #[strong Guardar].
      .col-auto.d-none.d-lg-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5/2.png")
    
    .col-xl-10.m-auto.mt-5
      .cont_5_1.p-4
        .col-xl-10.m-auto
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema5/3.png")
      
      p.mt-5(data-aos="fade-right") En la siguiente ventana de dialogo, es posible seleccionar un tipo de ajuste de entre los preestablecidos en el menú desplegable ubicado en la parte superior de la ventana (en caso que necesite usarlos, en la parte inferior se ubican los ajustes avanzados), luego se da clic en #[strong Guardar PDF].

    .cont_1_1.mt-4
      .col-xl-10.m-auto
        .cont_5_1.p-4
          .col-xl-10.m-auto
            figure(data-aos="zoom-in-up")
              img(src="@/assets/curso/tema5/4.png")


</template>

<script>
export default {
  name: 'Tema5',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Importación de imágenes a Adobe Illustrator
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Adobe Illustrator brinda la opción de importar imágenes vectoriales o de mapas de #[em bits], lo que da la ventaja de comenzar con un gran avance cualquier proyecto de diseño. Este #[em software] identifica los formatos de imágenes más utilizados, además, tiene especial facilidad para importar y exportar documentos con formatos específicos de programas de la misma casa matriz. Esto hace que sea fácil importar y exportar, desde la ventana de diálogo o simplemente copiando y pegando.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1 Colocación (importación) de archivos
    
    .row
      .col-lg-7(data-aos="fade-right")
        p Para importar un archivo, el método principal es #[strong Colocar (Shift + Ctrl + P o Archivo > Colocar…)], aunque es posible, en muchos casos, simplemente copiar imágenes o archivos de otros programas y pegarlos en el proyecto de Adobe Illustrator. Solamente #[strong Colocar] proporciona el máximo nivel de compatibilidad con formatos externos, las opciones de colocación y el color.
        .p-3.mt-4(style="background-color:#FFEACC;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/2.svg")
            .col(style="place-self:center;")
              p.mb-0 El cuadro de diálogo de importación de Adobe Illustrator es una ventana estándar de abrir archivo del sistema operativo que se use, sin embargo, ofrece unas cuantas casillas de selección que permiten configurar la importación.
        p.mt-4.mb-0 Al momento de importar se selecciona la casilla #[strong Enlazar] para crear un enlace al archivo, o se deselecciona para incrustar la imagen en el documento. Es además, altamente recomendable activar la casilla #[strong Mostrar opciones de importación], estas opciones cambian de acuerdo con el tipo de archivo que se está importando.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/3.svg")
    
    .col-xl-10.m-auto.mt-5
      .cont_2_1.p-4
        .col-xl-8.m-auto
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema2/4.svg")
    
    .row.mt-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/5.svg")
      .col-lg-8(data-aos="fade-up")
        p Cuando coloque un gráfico, verá una versión con la resolución de pantalla del archivo en el diseño, de manera que podrá verlo y colocarlo, aunque el archivo del gráfico real puede estar enlazado o incrustado.
        .p-3.mt-4(style="background-color:#EAEBFD;")
          .row
            .col(style="place-self:center;")
              p.mb-0 Una imagen enlazada está presente, pero enlaza a un archivo exterior al documento, por lo que el peso de esta no afecta directamente el peso total del documento. Las imágenes enlazadas pueden modificarse, usando efectos y herramientas de transformación, sin embargo, no pueden modificarse por partes individuales y los cambios que se efectúen por fuera del ilustrador se verán reflejados en la imagen que aparece en el documento.
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/6.svg")
        p.mt-4.mb-0 Las imágenes incrustadas se integran en el documento completamente con su mayor resolución, lo que afecta en gran medida el peso general del archivo del proyecto.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2 Calco de imagen
    
    p(data-aos="fade-left") Es posible vectorizar una imagen de mapa de #[em bits] si por ejemplo se desea que un diseño nuevo se base en una imagen existente. Para eso se usa el comando Calco de imagen que aparece en la barra de control.

    .cont_2_2.mt-5
      .col-xl-10.m-auto
        span.h5.p-1.ps-2.pe-2(style="background-color:#FF7650;") Especificar las opciones de calco
        p.mt-3(data-aos="fade-up") Cuando se selecciona la imagen, las opciones del panel #[strong Calco de imagen] se activan. En la parte superior del panel, se encuentran las opciones básicas de calco. Para acceder a opciones adicionales, haga clic en el triángulo junto a la etiqueta Avanzado, lo que desplegará configuraciones más detalladas.

        .cont_2_1.p-4
          .col-xl-8.m-auto
            figure(data-aos="zoom-in-up")
              img.d-none.d-md-block(src="@/assets/curso/tema2/8.png")
              img.d-md-none(src="@/assets/curso/tema2/9.png")
        
        .mt-5
          span.h5.p-1.ps-2.pe-2(style="background-color:#FF7650;") Ajuste preestablecido
          p.mt-3(data-aos="fade-up") El panel #[strong Calco de imagen] permite seleccionar un ajuste preestablecido para la imagen. Los íconos representan ajustes preestablecidos diseñados para los flujos de trabajo más comunes.

        .cont_2_1.p-4.ps-xl-5.pe-xl-5.mt-4
          figure(data-aos="zoom-in-up")
            img.d-none.d-md-block(src="@/assets/curso/tema2/10.png")
            img.d-md-none(src="@/assets/curso/tema2/11.png")
    
    .row.mt-5.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-3.cont_2_3
          figure.mb-3
            img(src="@/assets/curso/tema2/12.svg")
          .m-auto.mb-3.text-center
            p.fw-bold.mb-0.p-1.ps-2.pe-2 Color automático
          p.mb-0 Crea una imagen posterizada a partir de una foto o una ilustración.
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-3.cont_2_3
          figure.mb-3
            img(src="@/assets/curso/tema2/13.svg")
          .m-auto.mb-3.text-center
            p.fw-bold.mb-0.p-1.ps-2.pe-2 Color alto
          p.mb-0 Crea ilustraciones fotorrealistas de alta fidelidad.
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-3.cont_2_3
          figure.mb-3
            img(src="@/assets/curso/tema2/14.svg")
          .m-auto.mb-3.text-center
            p.fw-bold.mb-0.p-1.ps-2.pe-2 Color bajo
          p.mb-0 Crea ilustraciones fotorrealistas simples.
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-3.cont_2_3
          figure.mb-3
            img(src="@/assets/curso/tema2/15.svg")
          .m-auto.mb-3.text-center
            p.fw-bold.mb-0.p-1.ps-2.pe-2 Escala de grises
          p.mb-0 Calca la ilustración en tonos grises.
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-3.cont_2_3
          figure.mb-3
            img(src="@/assets/curso/tema2/16.svg")
          .m-auto.mb-3.text-center
            p.fw-bold.mb-0.p-1.ps-2.pe-2 Blanco y negro
          p.mb-0 Simplifica la imagen en una ilustración en blanco y negro.
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-3.cont_2_3
          figure.mb-3
            img(src="@/assets/curso/tema2/17.svg")
          .m-auto.mb-3.text-center
            p.fw-bold.mb-0.p-1.ps-2.pe-2 Contornear
          p.mb-0 Reduce la imagen a contornos en negro



</template>

<script>
export default {
  name: 'Tema2',
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

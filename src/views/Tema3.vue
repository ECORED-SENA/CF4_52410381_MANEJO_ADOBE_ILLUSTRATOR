<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Exportar documentos
    
    .row
      .col-lg-8(data-aos="fade-right")
        p Para exportar una imagen desde Adobe Illustrator, se da clic en #[strong Archivo > Exportar], se selecciona una ubicación para el archivo, se le da un nombre, seguidamente se elige un formato en el menú desplegable #[strong Guardar como Tipo] (Windows) o Formato (Mac OS). Hacer clic en #[strong Guardar o Exportar], dependiendo del sistema operativo.
        .row.mt-4
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema3/1.svg")
          .col(style="place-self:center;")
            p.mb-0 De acuerdo con la clase de proyecto, se selecciona el tipo de archivo adecuado para la exportación, así como su resolución y paleta de color.
        .p-4.mt-4.cont_3_1
          p.mb-0 En general para medios impresos, se exporta en formato tipo PDF, el cual conserva la calidad del diseño vectorial, sin embargo, si se busca un peso liviano para ser distribuido digitalmente se utiliza el formato #[strong .jpg]. Es importante tener en cuenta que cada formato tiene sus propias opciones de exportación.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/2.png")
    
    p.mt-4(data-aos="fade-up") La siguiente es una relación de los formatos de archivo a los que permite exportar Adobe Illustrator:

    .cont_3_2.mt-4.pb-4
      .row
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema3/4.svg")
        .col-lg-9(data-aos="fade-up")
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/5.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 Dibujo de AutoCAD 
              p.mb-0 Un archivo CAD es un formato utilizado para diseñar y documentar representaciones técnicas en 2D o 3D. Contiene detalles como dimensiones, geometría y materiales. 
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/6.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 Archivo de intercambio de AutoCAD (DWG y DXF) 
              p.mb-0 Este formato se utiliza para la exportación de dibujos desde AutoCAD o la importación de dibujos desde otras aplicaciones. 
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/7.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 BMP 
              p.mb-0 Es un formato de imagen rasterizada que almacena cada píxel individualmente, ofreciendo alta calidad de imagen sacrificando el peso del archivo. 
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/8.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 Metarchivo mejorado (EMF) 
              p.mb-0 Formato de archivo estándar para guardar gráficos vectoriales creados en AutoCAD. 
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/9.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 JPEG (Joint Photographic Experts Group) 
              p.mb-0 Formato ampliamente utilizado para guardar y visualizar imágenes en internet. Retiene la información del color, pero reduce el tamaño del archivo eliminando datos selectivamente. 
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/10.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 PICT de Macintosh 
              p.mb-0 Formato de imagen desarrollado por Apple que combina gráficos vectoriales y rasterizados. Se caracteriza por su capacidad para almacenar imágenes de alta calidad
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/11.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 Photoshop (PSD) 
              p.mb-0 Permite almacenar imágenes con capas, ajustes y efectos. Soporta alta calidad y complejidad en el diseño, facilitando la edición no destructiva. 
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/12.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 PNG (Portable Network Graphics) 
              p.mb-0 Es un formato utilizado para la compresión sin pérdidas y para la visualización de imágenes en Internet. Conserva la transparencia en imágenes tanto en escala de grises como en RGB
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/13.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 Targa (TGA) 
              p.mb-0 Formato de imagen utilizado principalmente en gráficos y videojuegos que admite compresión sin pérdida y canales alpha para transparencias. 
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/14.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 Formato de texto (TXT) 
              p.mb-0 Utilizado para exportar texto de una ilustración a un archivo de texto.  
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/15.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 SVG (Gráficos vectoriales escalables) 
              p.mb-0 El formato SVG, completamente basado en XML, proporciona numerosas ventajas tanto para desarrolladores como para usuarios. 
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/16.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 TIFF (Tagged-Image File Format) 
              p.mb-0 Formato de imagen de alta calidad que permite compresión sin pérdida y admite múltiples capas y páginas. Es ampliamente utilizado en fotografía y diseño gráfico por su capacidad para conservar detalles y colores. 
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/17.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 Metarchivo de Windows (WMF) 
              p.mb-0 Formato gráfico de Microsoft que almacena imágenes vectoriales y bitmap. Es utilizado principalmente para la interoperabilidad entre aplicaciones de Windows. 
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/18.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 WebP 
              p.mb-0 Formato que ofrece compresión eficiente sin pérdida, permitiendo imágenes de alta calidad en tamaños de archivo más pequeños. Es ampliamente utilizado en la web para mejorar la velocidad de carga y la calidad visual. 
            .tarjeta.p-4.cont_3_3
              figure.mb-2
                img(src="@/assets/curso/tema3/19.svg")
              .m-auto.mb-3.text-center
                p.fw-bold.mb-0.p-1.ps-2.pe-2 PDF 
              p.mb-0 El PDF es un formato universal que mantiene la apariencia de los documentos originales, sin importar la aplicación o plataforma donde se crearon. Es el estándar global para compartir documentos de forma segura y confiable. 
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_1 3.1 Opciones de exportación de WebP
    
    p(data-aos="fade-left") Al exportar ilustraciones en formato WebP, se pueden configurar las siguientes opciones:

    .row.mt-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .cont_1_2.p-4
            figure(data-aos="zoom-in-up")
              img(src="@/assets/curso/tema3/20.svg")
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Sin pérdida") Seleccione esta opción para preservar todos los detalles de la imagen, lo que puede resultar en un archivo de mayor tamaño. 
          p.text-small(numero="2" titulo="Con pérdida") Seleccione esta opción para reducir el tamaño del archivo, aunque esto implicará una pérdida de detalles en la imagen.
          p.text-small(numero="3" titulo="Calidad") Utilice el control deslizante de calidad para ajustar la compresión con pérdida y encontrar el equilibrio adecuado entre los detalles de la imagen y el tamaño del archivo. Un ajuste de mayor calidad preservará más detalles, aunque resultará en archivos de mayor tamaño.
          p.text-small(numero="4" titulo="Resolución") Determina la resolución de la imagen rasterizada.
          p.text-small(numero="5" titulo="Suavizado") Elimina los bordes dentados de la ilustración mediante un sobremuestreo. Si no se selecciona esta opción, los bordes pronunciados del arte lineal se mantendrán al rasterizar la imagen.
          p.text-small(numero="6" titulo="Color de fondo") Esta redacción es más clara y directa, explicando que el color se usa para las áreas de la imagen que son transparentes.
          p.text-small(numero="7" titulo="Incrustar perfil ICC") Crea un documento con gestión de color.
















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

<style lang="sass"></style>

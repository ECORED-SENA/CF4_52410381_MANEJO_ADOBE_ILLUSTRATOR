<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Herramientas de sector y corte
    
    .row
      .col-lg-9(data-aos="fade-up")
        p Las herramientas de #[b Sector] sirven para dividir los diseños en sectores que permiten la exportación para la web, ya sea de tablas HTML o de las imágenes que las contendrían.
        p Las herramientas de #[strong Corte] sirven para dividir objetos o borrar parte de ellos como un todo.
        .p-4(style="background-color:#FEEAD2;")
          .row.mb-3
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/1.svg")
            .col(style="place-self:center;")
              p.mb-0 Para dividir los diseños en imágenes web independientes, se usa la herramienta #[strong Sector (Shift + K)].
          .row.mb-3
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/2.svg")
            .col(style="place-self:center;")
              p.mb-0 Se pueden seleccionar sectores de imágenes web independientes utilizando la herramienta #[strong Seleccionar sector].
          .row.mb-3
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/3.svg")
            .col(style="place-self:center;")
              p.mb-0 Si lo que se quiere es borrar cualquier área de un objeto o un grupo de ellos como un todo, se selecciona la herramienta #[strong Borrador (Shift + E)] y se arrastra sobre el área que se desea borrar.
          .row.mb-3
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/4.svg")
            .col(style="place-self:center;")
              p.mb-0 Para cortar trazados por puntos específicos, se puede hacer con la herramienta #[strong Tijeras (C)].
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/5.svg")
            .col(style="place-self:center;")
              p.mb-0 Se cortan objetos y trazados, haciendo sobre ellos una línea utilizando la herramienta Cuchilla.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/6.png")



</template>

<script>
export default {
  name: 'Tema4',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Preparación de documentos en Adobe Illustrator',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar el conocimiento sobre los procesos de creación, configuración, importación, exportación y herramientas clave en Adobe Illustrator.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el primer paso al crear un nuevo documento en Adobe Illustrator? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Seleccionar las opciones de exportación. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definir la resolución del documento. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Configurar las mesas de trabajo. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar el propósito del proyecto. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué opción permite guardar un archivo de Adobe Illustrator como un PDF? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Archivo > Exportar como PDF. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Archivo > Guardar como PDF. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Archivo > Guardar una copia y seleccionar PDF. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Archivo > Empaquetar como PDF. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué formato de archivo en Adobe Illustrator permite la compresión sin pérdidas y es común para la web? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'JPEG. ', esCorrecta: false },
            { id: 'b', texto: 'PNG. ', esCorrecta: false },
            { id: 'c', texto: 'WebP. ', esCorrecta: true },
            { id: 'd', texto: 'TIFF. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué opción de color es adecuada para proyectos impresos en Adobe Illustrator? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'RGB. ', esCorrecta: false },
            { id: 'b', texto: 'CMYK. ', esCorrecta: true },
            { id: 'c', texto: 'Escala de grises. ', esCorrecta: false },
            { id: 'd', texto: 'Blanco y negro. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué herramienta en Adobe Illustrator se utiliza para dividir diseños en sectores para la web? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Herramienta Sector. ', esCorrecta: true },
            { id: 'b', texto: 'Herramienta Tijeras. ', esCorrecta: false },
            { id: 'c', texto: 'Herramienta Cuchilla. ', esCorrecta: false },
            { id: 'd', texto: 'Herramienta Borrador. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué opción debe activarse al importar una imagen para crear un enlace al archivo original? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Incrustar. ', esCorrecta: false },
            { id: 'b', texto: 'Enlazar. ', esCorrecta: true },
            {
              id: 'c',
              texto: 'Mostrar opciones de importación. ',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Incluir transparencia. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué herramienta en Adobe Illustrator permite borrar áreas específicas de un objeto? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Herramienta Tijeras. ', esCorrecta: false },
            { id: 'b', texto: 'Herramienta Sector. ', esCorrecta: false },
            { id: 'c', texto: 'Herramienta Borrador. ', esCorrecta: true },
            { id: 'd', texto: 'Herramienta Lazo. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué formato de archivo es recomendado para mantener la calidad de un diseño vectorial al exportarlo para impresión? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'PNG. ', esCorrecta: false },
            { id: 'b', texto: 'TIFF. ', esCorrecta: false },
            { id: 'c', texto: 'PDF. ', esCorrecta: true },
            { id: 'd', texto: 'JPEG.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes opciones se encuentra en el panel de Calco de imagen? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Escala de grises. ', esCorrecta: true },
            { id: 'b', texto: 'Degradado radial. ', esCorrecta: false },
            { id: 'c', texto: 'Transparencia automática. ', esCorrecta: false },
            { id: 'd', texto: 'Fusionar capas. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué opción de previsualización en Adobe Illustrator simula la apariencia rasterizada sin alterar el contenido vectorial? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Píxel. ', esCorrecta: true },
            { id: 'b', texto: 'Sobreimpresión. ', esCorrecta: false },
            { id: 'c', texto: 'Vectorial por defecto. ', esCorrecta: false },
            { id: 'd', texto: 'Rasterizado CMYK. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>

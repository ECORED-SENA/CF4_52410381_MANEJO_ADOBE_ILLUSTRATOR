(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"1cf4":function(e,t,a){},"212d":function(e,t,a){"use strict";a("1cf4")},"27ba":function(e,t,a){},3126:function(e,t,a){"use strict";a("ec46")},"41a8":function(e,t,a){e.exports=a.p+"img/pregunta_4.b834e82d.png"},4298:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[t("div",{attrs:{id:"Actividad"}},[t("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},r=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tarjeta--blanca"},[t("div",{staticClass:"row align-items-center mb-4"},[e._m(0),t("div",{staticClass:"col"},[t("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),t("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.cuestionario.introduccion)}})])]),t("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?t("ActividadResultados",{attrs:{respuestas:e.respuestas}}):t("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),t("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled,respuestas:e.respuestas},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-auto"},[t("img",{attrs:{src:a("8da0"),alt:""}})])}],c=(a("14d9"),function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"mb-4 pb-4"},[t("strong",{domProps:{innerHTML:e._s(e.pregunta.texto)}})]),t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"d-none d-md-block col-5"},[t("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),t("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(a,s){return t("div",{key:a.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":s!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":a.correcta,"tarjeta-respuesta--incorrecta":a.incorrecta,"tarjeta-respuesta--disabled":a.disabled},on:{click:function(t){return e.onRespuestaSelected(a)}}},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-auto"},[t("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===a.id?a.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),t("div",{staticClass:"col",domProps:{innerHTML:e._s(a.texto)}})])])})),0)]),e.respuestaSelected.id?[t("hr"),e.respuestaSelected.esCorrecta?t("div",{staticClass:"pt-2"},[t("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):t("div",{staticClass:"pt-2"},[t("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),n=[],d={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:()=>({respuestaSelected:{}}),computed:{opcionesComputed(){if(!this.pregunta.opciones.length)return[];const e=this.respuestaSelected.id;return this.pregunta.opciones.map(t=>({...t,correcta:e===t.id&&t.esCorrecta,incorrecta:e===t.id&&!t.esCorrecta,disabled:!!e}))}},watch:{pregunta(){this.respuestaSelected={}}},methods:{onRespuestaSelected(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},u=d,l=(a("8f8a"),a("2877")),p=Object(l["a"])(u,c,n,!1,null,"3fad6faa",null),m=p.exports,b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tarjeta-avance"},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"d-none d-md-block col"},[t("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[t("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),t("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),t("div",{staticClass:"col-auto"},[e.rtas.correctas!==e.preguntasCount&&e.respuestasLength===e.preguntasCount?t("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(t){return e.$emit("reiniciar")}}},[t("span",[e._v("Volver a intentarlo")])]):e.rtas.correctas===e.preguntasCount?t("div",{staticClass:"py-4"}):9===e.respuestasLength?t("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[t("span",[e._v("Verificar")]),t("i",{staticClass:"fas fa-arrow-right"})]):t("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[t("span",[e._v("Continuar")]),t("i",{staticClass:"fas fa-arrow-right"})])])])])},C=[],g={name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0},respuestas:{type:Array,required:!0}},computed:{avanceWidth(){return(this.preguntaIndex+1)/this.preguntasCount*100+"%"},rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(t=>{t.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e}}},v=g,h=(a("212d"),Object(l["a"])(v,b,C,!1,null,"71aa3d6e",null)),x=h.exports,_=function(){var e=this,t=e._self._c;return t("div",{staticClass:"row align-items-center justify-content-around"},[t("div",{staticClass:"col-5"},[(e.aprobado,t("img",{attrs:{src:a("a46c"),alt:""}}))]),t("div",{staticClass:"col-4"},[t("div",{staticClass:"d-flex align-items-center flex-column"},[t("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[t("h3",[e._v("¡BUEN TRABAJO!")]),t("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[t("h3",[e._v("VUELVE A INTENTARLO")]),t("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],t("hr",{staticClass:"w-100"}),t("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},f=[],j={name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(t=>{t.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e},aprobado(){return this.rtas.porcentaje>=70}}},A=j,y=(a("4d40"),Object(l["a"])(A,_,f,!1,null,"360ec089",null)),S=y.exports,I={name:"Actividad",components:{ActividadPregunta:m,ActividadBarraAvance:x,ActividadResultados:S},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:()=>({intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}),computed:{preguntas(){const{preguntas:e,barajarPreguntas:t}=this.cuestionario;if(!e)return[];const a=t?this.shuffle(e):e;return a.map(e=>({...e,opciones:e.barajarRespuestas?this.shuffle(e.opciones):e.opciones,intentos:this.intentos}))},preguntaSelected(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle(e){let t,a=e.length;while(a>0)t=Math.floor(Math.random()*a),a--,[e[a],e[t]]=[e[t],e[a]];return e},onRrespuestaSelected(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar(){if(this.continuarDisabled=!0,this.respuestaActual.id){const e=this.respuestas.findIndex(e=>e.id===this.preguntaSelected.id);-1===e?this.respuestas.push(this.respuestaActual):this.respuestas[e]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},R=I,H=(a("3126"),Object(l["a"])(R,o,i,!1,null,"e84807d4",null)),P=H.exports,L={name:"ActividadDidactica",components:{Actividad:P},data:()=>({cuestionario:{tema:"Preparación de documentos en Adobe Illustrator",titulo:"Cuestionario",introduccion:"Evaluar el conocimiento sobre los procesos de creación, configuración, importación, exportación y herramientas clave en Adobe Illustrator.",barajarPreguntas:!1,preguntas:[{id:1,texto:"¿Cuál es el primer paso al crear un nuevo documento en Adobe Illustrator? ",imagen:a("4b5d"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Seleccionar las opciones de exportación. ",esCorrecta:!1},{id:"b",texto:"Definir la resolución del documento. ",esCorrecta:!1},{id:"c",texto:"Configurar las mesas de trabajo. ",esCorrecta:!1},{id:"d",texto:"Determinar el propósito del proyecto. ",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"¿Qué opción permite guardar un archivo de Adobe Illustrator como un PDF? ",imagen:a("9738"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Archivo > Exportar como PDF. ",esCorrecta:!1},{id:"b",texto:"Archivo > Guardar como PDF. ",esCorrecta:!1},{id:"c",texto:"Archivo > Guardar una copia y seleccionar PDF. ",esCorrecta:!0},{id:"d",texto:"Archivo > Empaquetar como PDF. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"¿Qué formato de archivo en Adobe Illustrator permite la compresión sin pérdidas y es común para la web? ",imagen:a("5173"),barajarRespuestas:!0,opciones:[{id:"a",texto:"JPEG. ",esCorrecta:!1},{id:"b",texto:"PNG. ",esCorrecta:!1},{id:"c",texto:"WebP. ",esCorrecta:!0},{id:"d",texto:"TIFF. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"¿Qué opción de color es adecuada para proyectos impresos en Adobe Illustrator? ",imagen:a("41a8"),barajarRespuestas:!0,opciones:[{id:"a",texto:"RGB. ",esCorrecta:!1},{id:"b",texto:"CMYK. ",esCorrecta:!0},{id:"c",texto:"Escala de grises. ",esCorrecta:!1},{id:"d",texto:"Blanco y negro. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"¿Qué herramienta en Adobe Illustrator se utiliza para dividir diseños en sectores para la web? ",imagen:a("4b5d"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Herramienta Sector. ",esCorrecta:!0},{id:"b",texto:"Herramienta Tijeras. ",esCorrecta:!1},{id:"c",texto:"Herramienta Cuchilla. ",esCorrecta:!1},{id:"d",texto:"Herramienta Borrador. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"¿Qué opción debe activarse al importar una imagen para crear un enlace al archivo original? ",imagen:a("9738"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Incrustar. ",esCorrecta:!1},{id:"b",texto:"Enlazar. ",esCorrecta:!0},{id:"c",texto:"Mostrar opciones de importación. ",esCorrecta:!1},{id:"d",texto:"Incluir transparencia. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"¿Qué herramienta en Adobe Illustrator permite borrar áreas específicas de un objeto? ",imagen:a("5173"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Herramienta Tijeras. ",esCorrecta:!1},{id:"b",texto:"Herramienta Sector. ",esCorrecta:!1},{id:"c",texto:"Herramienta Borrador. ",esCorrecta:!0},{id:"d",texto:"Herramienta Lazo. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"¿Qué formato de archivo es recomendado para mantener la calidad de un diseño vectorial al exportarlo para impresión? ",imagen:a("41a8"),barajarRespuestas:!0,opciones:[{id:"a",texto:"PNG. ",esCorrecta:!1},{id:"b",texto:"TIFF. ",esCorrecta:!1},{id:"c",texto:"PDF. ",esCorrecta:!0},{id:"d",texto:"JPEG.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"¿Cuál de las siguientes opciones se encuentra en el panel de Calco de imagen? ",imagen:a("4b5d"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Escala de grises. ",esCorrecta:!0},{id:"b",texto:"Degradado radial. ",esCorrecta:!1},{id:"c",texto:"Transparencia automática. ",esCorrecta:!1},{id:"d",texto:"Fusionar capas. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"¿Qué opción de previsualización en Adobe Illustrator simula la apariencia rasterizada sin alterar el contenido vectorial? ",imagen:a("9738"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Píxel. ",esCorrecta:!0},{id:"b",texto:"Sobreimpresión. ",esCorrecta:!1},{id:"c",texto:"Vectorial por defecto. ",esCorrecta:!1},{id:"d",texto:"Rasterizado CMYK. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Excelente! Ha superado la actividad.",mensaje_final_reprobado:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}}),computed:{},methods:{}},w=L,M=Object(l["a"])(w,s,r,!1,null,null,null);t["default"]=M.exports},"4b5d":function(e,t,a){e.exports=a.p+"img/pregunta_1.af78f340.png"},"4d40":function(e,t,a){"use strict";a("27ba")},5173:function(e,t,a){e.exports=a.p+"img/pregunta_3.39dc30e1.png"},5291:function(e,t,a){},"8da0":function(e,t,a){e.exports=a.p+"img/icon-actividad.3d896e1e.svg"},"8f8a":function(e,t,a){"use strict";a("5291")},9738:function(e,t,a){e.exports=a.p+"img/pregunta_2.450e79a9.png"},a46c:function(e,t,a){e.exports=a.p+"img/cuestionario-resultado.a5584db8.svg"},ec46:function(e,t,a){}}]);
//# sourceMappingURL=actividad.3fdff47d.js.map
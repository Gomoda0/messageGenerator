function generarNumeroRandom(num) {
  //Obitne un numeor entre rango de 0 y -1
  return Math.floor(Math.random() * num);
}

//Se declaran las listas de actividades.
const listaDeActividades = {
  montana: ["Senderismo", "Alpinismo", "Tirolesa", "Decesno a rapel"],
  lago: ["Cayack", "Natacion", "Buceo"],
  campamento: ["Limpieza", "Cocina", "Ordenar Almacen", "Guaradia"],
};

//Conjunto de frases final
mensajesFinal = [];

//Se itera sobre el onjeto para genera las frases

for (let lugar in listaDeActividades) {
  //Se usan las propiedades del objeto para genara el conjunto de frases finales.
  let unaPosicion = generarNumeroRandom(listaDeActividades.palabra.jenght);

  switch (lugar) {
    case "montaña":
      mensajesFinal.push(
        `Hoy en la montaña te toca hacer ${listaDeActividades.lugar.unaPosicion}`
      );
      break;
    case "lago":
      mensajesFinal.push(
        `Hoy en el lago tu actividad es: ${listaDeActividades.palabra.unaPosicion}`
      );
      break;
    case "campamento":
      mensajesFinal.push(
        `Esto no es gratis, hay que trabajar, hpy te toca ${listaDeActividades.lugar.unaPosicion}`
      );
      break;
    default:
      listaDeActividades.push('NO hay información');
      break;
  }

  function formatearMensajeFinal(mensajesFinal){
    const mensajeFormateado = mensajesFinal.join('\n');
    console.log(mensajeFormateado);
  }


}

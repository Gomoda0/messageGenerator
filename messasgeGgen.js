function generarNumeroRandom(num) {
  //Obitne un numeor entre rango de 0 y -1
  return Math.floor(Math.random() * num);
}

//Se declaran las listas de actividades.
const listaDeActividades = {
  montana: ['Senderismo', 'Alpinismo', 'Tirolesa', 'Decesno a rapel'],
  lago: ['Cayack', 'Natacion', 'Buceo'],
  campamento: ['Limpieza', 'Cocina', 'Ordenar Almacen', 'Guaradia'],
};

//Conjunto de frases final
let mensajesFinal = [];

//Se itera sobre el objeeto para genera las frases

for (let prop in listaDeActividades) {
  //Se usan las propiedades del objeto para genara el conjunto de frases finales.
  let unaPosicion = generarNumeroRandom(listaDeActividades[prop].length)

  switch (prop) {
    case 'montana':
      mensajesFinal.push(
        `Hoy en la montaña te toca hacer ${listaDeActividades[prop][unaPosicion]}`
      );
      break;
    case 'lago':
      mensajesFinal.push(
        `Hoy en el lago tu actividad es: ${listaDeActividades[prop][unaPosicion]}`
      );
      break;
    case 'campamento':
      mensajesFinal.push(
        `Esto no es gratis, hay que trabajar, hoy te toca ${listaDeActividades[prop][unaPosicion]}`
      );
      break;
    default:
      mensajesFinal.push('NO hay información');

  }
}

function formatearMensajeFinal(x) {
  const mensajeFormateado = mensajesFinal.join('\n');
  console.log(mensajeFormateado);
}

formatearMensajeFinal(mensajesFinal);



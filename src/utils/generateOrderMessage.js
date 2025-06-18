export const generarMensaje = (seleccion, dia) => {
  let mensaje = `Hola, este es mi pedido para el ${dia}:\n`

  for (const [categoria, opcion] of Object.entries(seleccion)) {
    mensaje += `- ${categoria}: ${opcion}\n`
  }

  return `https://wa.me/?text=${encodeURIComponent(mensaje)}`
}

// src/utils/generateOrderMessage.js

export function generarMensaje(selecciones, dia) {
  let mensaje = `Hola, quiero realizar los siguientes pedidos para el ${dia}:\n\n`

  selecciones.forEach((seleccion, index) => {
    mensaje += `Pedido ${index + 1}:\n`
    Object.entries(seleccion).forEach(([categoria, opcion]) => {
      mensaje += `- ${categoria}: ${opcion}\n`
    })
    mensaje += '\n'
  })

  return `https://wa.me/xxxxxxxxxxx?text=${encodeURIComponent(mensaje)}`
}

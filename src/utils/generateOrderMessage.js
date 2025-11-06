// src/utils/generateOrderMessage.js

export function generarMensaje(selecciones, dia) {
  let mensaje = `Hola, quiero realizar los siguientes pedidos para el ${dia}:\n\n`
  const esViernes = dia.toLowerCase() === 'viernes'

  selecciones.forEach((seleccion, index) => {
    mensaje += `Pedido ${index + 1}:\n`

    Object.entries(seleccion).forEach(([categoria, opcion]) => {
      if (esViernes && categoria === 'Opción') {
        // Eliminar prefijo "MENÚ: " o "ESPECIAL: " del texto final
        if (opcion.startsWith('MENÚ: ')) {
          mensaje += `- MENÚ: ${opcion.replace('MENÚ: ', '')}\n`
        } else if (opcion.startsWith('ESPECIAL: ')) {
          mensaje += `- ESPECIAL: ${opcion.replace('ESPECIAL: ', '')}\n`
        } else {
          mensaje += `- ${categoria}: ${opcion}\n`
        }
      } else {
        mensaje += `- ${categoria}: ${opcion}\n`
      }
    })

    mensaje += '\n'
  })

  return `https://wa.me/3336494594?text=${encodeURIComponent(mensaje)}`
}

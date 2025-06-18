const DishSelector = ({ categoria, opciones, seleccionActual, onSeleccionar }) => {
  return (
    <div>
      <h3>{categoria.toUpperCase()}</h3>
      <ul>
        {opciones.map((opcion, index) => (
          <li key={index}>
            <button
              onClick={() => onSeleccionar(opcion)}
              style={{
                fontWeight: seleccionActual === opcion ? 'bold' : 'normal',
                backgroundColor: seleccionActual === opcion ? '#ddd' : 'transparent',
                border: '1px solid #ccc',
                padding: '0.5rem',
                marginBottom: '0.25rem',
                cursor: 'pointer',
              }}
            >
              {opcion}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DishSelector


const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const{nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente')

    if(respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl mx-5">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
          <span className="font-normal normalcase"> {nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Propietario: {' '}
          <span className="font-normal normalcase"> {propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
          <span className="font-normal normalcase"> {email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {' '}
          <span className="font-normal normalcase"> {fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
          <span className="font-normal normalcase"> {sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button
          type = "button"
          onClick={() => setPaciente(paciente)}
          className="bg-indigo-600 py-2 px-10 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
          >Editar</button>

          <button
          type = "button"
          onClick={handleEliminar}
          className="bg-red-600 py-2 px-10 text-white uppercase font-bold hover:bg-red-700 cursor-pointer transition-colors rounded-lg"
          >Eliminar</button>
        </div>
      </div>
  )
}

export default Paciente

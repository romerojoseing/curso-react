import React, {useState, Fragment} from 'react';

const Formulario = () => {

  const [datos, setDatos] = useState({
    nombre: '',
    apellido: ''
  })

  const guardarDatos = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value 
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombre + ' ' + datos.apellido)
  }

  return (
    <Fragment>
      <h2>Componente Formulario</h2>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Nombre"
            type="nombre"
            name="nombre"
            onChange={guardarDatos}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Apellido"
            type="apellido"
            name="apellido"
            onChange={guardarDatos}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary" type="submit">
            Enviar
          </button>
        </div>
      </form>
      <h3>{datos.nombre} - {datos.apellido}</h3>
    </Fragment>
  );
}
 
export default Formulario;
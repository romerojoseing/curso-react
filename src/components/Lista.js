import React, {useState, Fragment} from 'react';

const Lista = () => {

  const [numero, setNumero] = useState([1, 2, 3, 4, 5]);

  const [cambio, setCambio] = useState(6)

  const agregar = () => {
    setCambio(cambio + 1)
    setNumero([...numero, cambio])
  }

  return ( 
    <Fragment>
      <h2>Componente Lista</h2>
      <button onClick={agregar}>Agregar</button>
      {
        numero.map((item, id) => 
          <p key={id}>{id} - {item}</p>
        )
      }
    </Fragment>
   );
}
 
export default Lista;
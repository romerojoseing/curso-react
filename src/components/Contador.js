import React, {useState, Fragment} from 'react';

const Contador = () => {

  const [numero, setNumero] = useState(0);

  const disminuir = () => {
    setNumero(numero - 1)
  }

  return (
    <Fragment>
      <h3>Componente Contador {numero} </h3>
      <button onClick={() => setNumero(numero + 1)}>Aumentar</button>     {/* Se puede hacer de las dos maneras Aumentar o Dismnuir*/}
      <button onClick={disminuir}>Disminuir</button>
    </Fragment>
  );
}
 
export default Contador;
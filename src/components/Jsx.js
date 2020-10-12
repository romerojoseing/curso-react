import React, { Fragment } from 'react';

const Jsx = () => {

  const mensaje = 'Desde React'

  const temperatura = 21;

  return ( 
    <Fragment>
      <h2>Componente Jsx {mensaje}</h2>
      <h3>Frio o Calor? {
          temperatura > 20 ? 'Calor' : 'Frio'
        }</h3>
    </Fragment>
   );
}
 
export default Jsx;

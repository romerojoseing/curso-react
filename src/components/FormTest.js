import React, { Fragment, useState } from 'react';
import { useForm } from "react-hook-form";

const FormTest = () => {

  const { register, errors, handleSubmit } = useForm();

  const [entrada, setEntrada] = useState([])

  const onSubmit = (data, e) => {

    setEntrada([
      ...entrada,
      data
    ])

    e.target.reset();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="titulo"
          ref={register({
            required: { value: true, message: "Ingrese un nombre" },
          })}
          className="form-control my-2"
          placeholder="Ingrese título"
        ></input>
        <span className="text-danger text-small d-block mb-2">
          {errors?.titulo?.message}
        </span>
        <input
          name="descripcion"
          ref={register({
            required: { value: true, message: "Ingrese descripción" },
          })}
          className="form-control my-2"
          placeholder="Ingrese descripción"
        ></input>
        <span className="text-danger text-small d-block mb-2">
          {errors?.descripcion?.message}
        </span>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
      <ul>
        {
          entrada.map((item, id) => 
          <li key={id}>{item.titulo} - {item.descripcion}</li>
          )
        }
      </ul>

    </Fragment>
  );
}
 
export default FormTest;
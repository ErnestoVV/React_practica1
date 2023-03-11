import React from 'react';
import './Body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Body(props){
const boton=()=>{
  return alert("Bienvenido Cliente")
}
return(
      <div className="Body">

        <p>{props.practica1}</p>
        {
          <ol>
          {
          props.datos.map((x,i)=>
            <li key={i}>{x}</li>
          )
          }
          </ol>
        }
        <Button onClick={()=>boton()} variant="danger">Aceptar</Button>
      </div>
    )
}

export default Body;

Body.propTypes={
  practica1:PropTypes.string.isRequired,
  temas:PropTypes.array,
}

Body.defaultProps={
  practica1:"Sean bienvenidos"
}
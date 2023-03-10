

/* ESTRUCTURA QUE RECIBIRA LOS DATOS cada componente lleva su propios  JSX Y SU ESTILO PROPIO es decir un componenente funciona como un molde funtion y el reviw es 
el que netra con informacion diferente y se acopla a la caja y se muestra en pantalla, la informacion entra desde js, y llega a jsx co
complentado con el css. si quiero varias cajas iguales pero son diferente contenido desde js envio varios props con los datos ya ca se reciben y se 
muestran */
import React from "react";
import '../Estilos/Review.css';


function Review(props) {
    return (
        <div className="box-container">
            <p> {props.texto}</p>
            <div className="box-user">
                <img src={require('../images/mom.png')} alt="" className="img-rounder" />
                <div>
                    <h3>{props.nombre}</h3>
                    <p>{props.Cargo}</p>
                </div>
            </div>
        </div>



    );

}
export default Review;
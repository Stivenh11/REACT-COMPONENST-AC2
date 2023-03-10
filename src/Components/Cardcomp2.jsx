


/* ESTRUCTURA VISUAL HTML Y JAVASCRIP */


import React from "react";
import '../Estilos/Cardcomp2.css';



function Cardcomp2(props) {
  return (

    <main className="contendedor">
      <div className="card">
        <section className="card-contenido">
          <div className="caratula">
            <img className="img" src={require(`../imagesc/${props.imagav}`)} alt="" />
          </div>

          <div className=" text">
            <div className="tit">
              <h1 className="tit">{props.titulo1}</h1>
            </div>
            <div className="text-desc">
              
              <p className="text-des">{props.descripcion}</p>

            </div>
            <section className="flex-main">
              <div className="flex-eth">
                <img className="icon-eth" src={require("../imagesc/ethe.png" )}/>
                <p className="ethe"> {props.primervalor}</p>

              </div>
              <div className="flex-day">
                <img className="icon" src={require("../imagesc/clock.png")} alt="" />
                <p className="day">{props.segundovalor}</p>
              </div>
            </section>
          </div>

          <li className="separacion"> </li>


          <section className="flex-f">
            <div>
              <img src={require(`../imagesc/${props.imagavatar}`)} className="avatar" alt="" />
            </div>
            <article className="text-f">
              <div>   <p className="text-des"> {props.creditos}</p></div>
              <div> <p className="text-des-w"> {props.nombre}</p></div>
            </article>
          </section>

        </section>
      </div>
    </main>);
}

export default Cardcomp2;




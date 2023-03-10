
/* DE DONDE INGRESARAN LOS DATOS SI QUIERO VARIAS CAJAS SOLO DESDE ACA LE REENVIO VARIOS REVIEW Y ELLOS LLEGAN A JSX.*/


import './Estilos/Review.css';
import Review from './Components/Review';
import Cardcomp2 from './Components/Cardcomp2';

function App() {
  return (
    <div className="App">
      <Review

        texto="Me gusto la pelicula, porque me recordo mi infancia."
        nombre="Karl Julius"
        Cargo="Jefe de Recursos Humanos" />

      <Review

        texto="Me Parecio muy interesante la trama,  felicito a todo el equipo de produccion"
        nombre="Otoniel Franco"
        Cargo="Jefe de Ventas" />


<div className='Cards-component2 row d-flex justify-content-center'>
  <div className='card1  log col-12 col-lg-4'>
      <Cardcomp2

        titulo1='Matematicas'
        descripcion='Ciencias exactas aplicadas a la vida cotidiana.'
        primervalor='70%'
        segundovalor='5 Horas'
        creditos ='Creation of'
        nombre ='Clinical of Math'
        imagavatar ='avatar1.jpg'
        imagav ='mate.jpg'
        
      />
      </div>
      <div className='card2 log col-12 col-lg-4'>
      <Cardcomp2 
        titulo1='Ciencias Naturales'
        descripcion='El estudio del entorno  planetanario y su ecosistema.'
        primervalor='90%'
        segundovalor='7 Horas'
        creditos ='Creation of'
        nombre ='Clinical of Science'
        imagavatar ='avatar2.jpg'
        imagav ='artes.jpg'
      />
      </div>
      <div className='card3 log col-12 col-lg-4'>
      <Cardcomp2
        titulo1='Artes '
        descripcion='Estudio visual de dinamicas fisicas  intangibles.'
        primervalor='90%'
        segundovalor='0 Horas'
        creditos ='Creation of'
        nombre ='Clinical Art & Culture'
        imagavatar ='avatar3.jpg'
        imagav ='ciencia.jpg'
        
      />
      </div>
      </div>
    </div>
  );
}

export default App;


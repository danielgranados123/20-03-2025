import './App.css'
import Boton from './components/botones/Boton'
import Citas from './components/citas/Citas'
import Progreso from './components/progreso/Progreso'
import Formulario from './components/formulario/Formulario'

function App() {

  return (
    <>
      <h1>¿Cómo ser millonario?</h1>
      <h1>$‿$</h1>
      <br />
      <Boton
      titulo={'Empezar'}/>
      <br />
      <br />
      <Citas
      nombre={'Diviértete.'}
      texto={'"El juego es mucho más divertido cuando intentas hacer más que simplemente ganar dinero."'}
      autor={'Tony Hsieh'}/>
      <br/>
      <br />
      <h3>Estás a pocos pasos de convertirte en el millonario que quieres ser...</h3>
      <Progreso/>
      <br />
      <br />
      <h2>Háblanos de ti...</h2>
      <Formulario
      nombre={'Tu nombre:'}
      correo={'Tu correo:'}
      textoBoton={'Enviar'}
      />

      
    </>
  )
}

export default App

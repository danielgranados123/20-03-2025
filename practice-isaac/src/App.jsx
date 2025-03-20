import './App.css'
import Boton from './components/botones/Boton'
import Citas from './components/citas/Citas'
import Progreso from './components/progreso/Progreso'
import Formulario from './components/formulario/Formulario'
import Acordeon from './components/acordeon/Acordeon'
import Card1 from './components/card1/Card1'
import Boton1 from './components/boton1/Boton1'
import Boton2 from './components/boton2/Boton2'
import Boton3 from './components/boton3/Boton3'
import Popover1 from './components/popover1/Popover1'
import Popover2 from './components/popover2/Popover2'
import Popover3 from './components/popover3/Popover3'

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
      <br />
      <br />
      <h2>Sigue los siguientes pasos:</h2>
      <Acordeon
      nombre1={'Paso #1'}
      nombre2={'Paso #2'}
      nombre3={'Paso #3'}

      texto1={'Ser perseverante'}
      texto2={'Trabajar duro'}
      texto3={'Ser disciplinado'}
      />
      <br />
      <br />
      <Card1
      titulo={'Más info'}
      subtitulo={'Más info plus'}
      texto={'Mucha más info'}
      boton={'Botón'}
      />
      <br />
      <br />
      <Boton1
      texto={'Hola Mundo'}
      />
      <br /><br />
      <Boton2
      texto={'Hola Mundo 2'}
      />
      <br /><br />
      <Boton3
      texto={'Hola Mundo 3'}/>
      <br /><br /><br />
      <Popover1
      a={'1'}
      b={'2'}
      c={'3'}
      />
      <br /><br />
      <Popover2
      a={'a'}
      />
      <br /><br />
      <Popover3
      texto={'Prueba 3'}
      />
    </>
  )
}

export default App

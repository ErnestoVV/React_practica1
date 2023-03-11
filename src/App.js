import './App.css';
import Body from './Components/Body';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  const datos=["Ernesto Vazquez Valdivia",
               "Kevin Garcia Rojas",
               "Estudiantes@gmail.com",
               "Tomas aquino",
               "664531256",];
  return (
    <div className="App">
      <Banner texto="Consultas de Banco"/>
      <Header/>
      <Banner texto="Informacion de clientes"/>
      <Body
        practica1="Datos principales"
        datos={datos}
      />
      <Footer>
        {<p>Gracias por su atencion</p>}
      </Footer> 
    </div>
  );
}
export default App;
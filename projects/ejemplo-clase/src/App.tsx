import Micomponente from "./components/Micomponente";
import Saludo from "./components/Saludo";

function App() {
  return (
    <>
      <Micomponente></Micomponente>
      <h1>Hola Mundo</h1>
      <Micomponente></Micomponente>
      <Saludo nombre="Pepe" apellidos = "Gómez Perez" edad={34}></Saludo>
    </>
  );
}

export default App;

import "./App.css";
import { ColaMusicasPedidas } from "./componets/cola-musicas-pedidas/layaut/ColaMusicasPedidas";
import { MasPedidas } from "./componets/mas-pedidas/layaut/MasPedidas";

function App() {
  return (
    <>
      <main className="main-app">
        <p>MENU LATERAL</p>
        <MasPedidas/>
        <ColaMusicasPedidas />
      </main>
    </>
  );
}

export default App;

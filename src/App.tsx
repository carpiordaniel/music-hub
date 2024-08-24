import "./App.css";
import { ColaMusicasPedidas } from "./layaut/cola-musicas-pedidas/layaut/ColaMusicasPedidas";
import { MasPedidas } from "./layaut/mas-pedidas/layaut/MasPedidas";

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

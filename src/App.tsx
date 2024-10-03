import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Ruteo } from "./app/utilidades/rutas/Ruteo";

function App() {
  return (
    <>
      <div className="Container-fluid">
        <BrowserRouter>
          <Ruteo />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

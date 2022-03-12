import React, {useState} from "react";
//import styles from "./styles.css"

const App = () => {
  const [ValorTemperatura, SetValorTemperatura] = useState(10);
  const [ColorTemperatura, SetColorTemperatura] = useState("cold");

  // const edad = 40;
  // const mensaje = `mi edad es: ${edad}`;
  // alert(mensaje);

  const IncrementarTemperatura = () => {
    if (ValorTemperatura === 30) return;

    const NuevaTemperatura = ValorTemperatura + 1

    if(NuevaTemperatura >= 18) {
      SetColorTemperatura("neutral");

      if(NuevaTemperatura >= 24) {
        SetColorTemperatura("hot");
      }
    }
    
    SetValorTemperatura(NuevaTemperatura);
  }

  const DecrementarTemperatura = () => {
    if (ValorTemperatura === 0) return;

    const NuevaTemperatura = ValorTemperatura - 1

    if(NuevaTemperatura <= 18) {
      SetColorTemperatura("neutral");

      if(NuevaTemperatura <= 12) {
        SetColorTemperatura("cold");
      }
    }

    SetValorTemperatura(NuevaTemperatura);
  }

  return (
    <div className="app-container">
      
      <div className="div.temperature-display-container">        
        {/* <div className="temperature-display hot">{ValorTemperatura}°C</div> */}
        <div className={`temperature-display ${ColorTemperatura}`}>{ValorTemperatura}°C</div>
      </div>

      <div className="button-container">
        {/* <button onClick={() => SetValorTemperatura(ValorTemperatura+1)} >+</button>
        <button onClick={() => SetValorTemperatura(ValorTemperatura-1)} >-</button> */}

        <button onClick={() => IncrementarTemperatura()} >+</button>
        <button onClick={() => DecrementarTemperatura()} >-</button>
      </div>

    </div>
  )
}

export default App;

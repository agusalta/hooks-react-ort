import { useState } from "react";
function Counter() {
  const [contador, setContador] = useState(0);

  const handleContador = () => {
    setContador(contador + 1);
  };

  const handleReset = () => {
    setContador(0);
  };

  return (
    <div className="contador-container">
      <button className="contador-btn" onClick={() => handleContador()}>
        Contador
      </button>
      <button className="contador-btn" onClick={() => handleReset()}>
        Reset
      </button>
      {contador && contador > 10 ? (
        <p className="contador-num">
          <strong className="contador-msg">Bien!</strong>
        </p>
      ) : (
        <p className="contador-num">
          <strong>{contador}</strong>
        </p>
      )}
    </div>
  );
}

export default Counter;

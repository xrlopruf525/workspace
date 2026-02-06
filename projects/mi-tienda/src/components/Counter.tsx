import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleReset = () => setCount(0);

  return (
    <div className="counter-card">
      <h3>Contador de Visitas</h3>
      
      <div className="counter-display">
        {count}
      </div>

      <div className="flex-gap">
        <button className="btn btn-primary" onClick={handleIncrement}>
          +1 Visita
        </button>
        <button className="btn btn-danger" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
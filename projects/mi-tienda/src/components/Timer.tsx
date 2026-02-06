import { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. Montaje: Iniciamos el intervalo
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1); // Functional update!
    }, 1000);

    // 2. Desmontaje: Limpiamos para evitar memory leaks
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Solo se ejecuta al montar

  return (
    <div className="timer-container">
      <h3>Cronómetro</h3>
      <div className="timer-display">
        {seconds} s
      </div>
    </div>
  );
};

export default Timer;
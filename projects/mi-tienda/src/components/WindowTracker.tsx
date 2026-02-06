import { useState, useEffect } from 'react';

const WindowTracker = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    // Suscribirse
    window.addEventListener('resize', handleResize);
    
    // Limpiar (Cleanup) - ¡Importante!
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div className="window-tracker">Ancho: {width}px</div>;
};

export default WindowTracker;
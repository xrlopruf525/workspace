import Alert from './components/Alert';
import ProductCard from './components/ProductCard';
import UserProfile from "./components/UserProfile";
import Counter from './components/Counter';
import Accordion from './components/Accordion';
import Tabs from './components/Tabs';
import Timer from './components/Timer';
import { useState } from 'react';
import UserList from './components/UserList';
import WindowTracker from './components/WindowTracker';


function App() {

    const mockUser = {
    username: "JuanDev",
    email: "juan@example.com",
    avatar: "https://placehold.co/150x150?text=JD",
    role: "admin" as "admin" | "user",
  };
  const tabData = [
    { id: '1', label: 'Inicio', content: 'Contenido principal...' },
    { id: '2', label: 'Detalles', content: 'Especificaciones técnicas...' },
  ];

  const [showTimer, setShowTimer] = useState(true);


  return (
    <>
    <div className="container">
      <h1>Panel de Control</h1>
      
      <section>
        <h2>Sistema de Alertas</h2>
        <Alert type="error" message="Error de conexión" />
        <Alert type="warning" message="Sesión a punto de caducar" showIcon={false} />
      </section>
    </div>

    <div className="grid">
      <ProductCard
        title="Zapatillas Runner X"
        price={89.90}
        image="https://placehold.co/300x200/orange/white?text=Sneakers"
        inStock={true}
        isNew={true}
      />
      <ProductCard
        title="Monitor 4K Ultra"
        price={299.50}
        image="https://placehold.co/300x200/333/white?text=Screen"
        inStock={false}
      />
    </div>

      <section>
        <h2>Perfil de Usuario</h2>
        <UserProfile userData={mockUser} />
      </section>


    <Counter />

    <Accordion title="¿Qué es el estado?">
      <p>El estado es la memoria interna de un componente React.</p>
    </Accordion>


    <div className="container">
      <Tabs items={tabData} />
    </div>


    <section className="text-center mb-2">
      <button className="btn btn-primary" onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Ocultar' : 'Mostrar'} Cronómetro
      </button>
      
      {showTimer && <Timer />}
    </section>

    <UserList />

    <WindowTracker />
    </>
    
  );
}

export default App;
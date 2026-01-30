import Alert from './components/Alert';
import ProductCard from './components/ProductCard';
import UserProfile from "./components/UserProfile";


function App() {

    const mockUser = {
    username: "JuanDev",
    email: "juan@example.com",
    avatar: "https://placehold.co/150x150?text=JD",
    role: "admin" as "admin" | "user",
  };

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

    </>
    
  );
}

export default App;
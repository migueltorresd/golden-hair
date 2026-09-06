import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { count, abrir } = useCart();
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="cabecera">
      <div className="contenedor">
        <a href="#inicio" className="marca">
          <img src="/logo.jpeg" alt="Golden Hair" />
          <span className="marca-txt">
            Golden Hair
            <small>El lujo de un cabello sano</small>
          </span>
        </a>

        <nav className={`menu${menuAbierto ? ' abierto' : ''}`} id="menu" aria-label="Navegación principal">
          <a href="#producto" onClick={() => setMenuAbierto(false)}>El producto</a>
          <a href="#ritual" onClick={() => setMenuAbierto(false)}>Cómo se usa</a>
          <a href="#nosotras" onClick={() => setMenuAbierto(false)}>Quiénes somos</a>
          <a href="#preguntas" onClick={() => setMenuAbierto(false)}>Preguntas</a>
          <a href="#pedido" onClick={() => setMenuAbierto(false)}>Pedidos</a>
        </nav>

        <div className="acciones">
          <button className="btn-carrito" onClick={abrir}>
            Carrito <span className="globo">{count}</span>
          </button>
          <button
            className={`btn-menu${menuAbierto ? ' abierto' : ''}`}
            aria-expanded={menuAbierto}
            aria-controls="menu"
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuAbierto(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}

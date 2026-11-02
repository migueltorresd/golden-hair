import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLang } from '../i18n/LanguageContext';

export default function Header() {
  const { count, abrir } = useCart();
  const { t, alternar } = useLang();
  const h = t.header;
  const [menuAbierto, setMenuAbierto] = useState(false);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="cabecera">
      <div className="contenedor">
        <a href="#inicio" className="marca">
          <img src="/logo.jpeg" alt="Golden Hair" />
          <span className="marca-txt">
            Golden Hair
            <small>{h.lema}</small>
          </span>
        </a>

        <nav className={`menu${menuAbierto ? ' abierto' : ''}`} id="menu" aria-label={h.navAria}>
          <a href="#producto" onClick={cerrarMenu}>{h.nav.producto}</a>
          <a href="#ritual" onClick={cerrarMenu}>{h.nav.ritual}</a>
          <a href="#nosotras" onClick={cerrarMenu}>{h.nav.nosotras}</a>
          <a href="#preguntas" onClick={cerrarMenu}>{h.nav.preguntas}</a>
          <a href="#pedido" onClick={cerrarMenu}>{h.nav.pedido}</a>
        </nav>

        <div className="acciones">
          <button className="btn-idioma" onClick={alternar} aria-label={t.switcher.aria}>
            {t.switcher.label}
          </button>
          <button className="btn-carrito" onClick={abrir}>
            {h.carrito} <span className="globo">{count}</span>
          </button>
          <button
            className={`btn-menu${menuAbierto ? ' abierto' : ''}`}
            aria-expanded={menuAbierto}
            aria-controls="menu"
            aria-label={menuAbierto ? h.cerrarMenu : h.abrirMenu}
            onClick={() => setMenuAbierto(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}

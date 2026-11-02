import { useCart, cop } from '../context/CartContext';
import { useLang } from '../i18n/LanguageContext';

export default function CartDrawer() {
  const { items, abierto, cerrar, total, ENVIO_GRATIS, cambiarCantidad, quitar, urlWa } = useCart();
  const { t } = useLang();
  const c = t.carrito;

  return (
    <>
      <div className={`velo${abierto ? ' abierto' : ''}`} onClick={cerrar} />

      <aside className={`carrito${abierto ? ' abierto' : ''}`} role="dialog" aria-modal="true" aria-label={c.aria}>
        <div className="carrito-cab">
          <h3>{c.titulo}</h3>
          <button className="cerrar" onClick={cerrar} aria-label={c.cerrar}>×</button>
        </div>

        <div className="carrito-cuerpo">
          {items.length === 0 ? (
            <div className="carrito-vacio">{c.vacio}</div>
          ) : (
            items.map(item => (
              <div className="linea-carrito" key={item.key}>
                <img src={item.foto} alt={c.packs[item.key]} />
                <div>
                  <h4>{c.packs[item.key]}</h4>
                  <div className="u">{cop(item.precio)} {c.cadaUno}</div>
                  <div className="cantidad">
                    <button onClick={() => cambiarCantidad(item.key, -1)} aria-label={c.restar}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => cambiarCantidad(item.key, 1)} aria-label={c.sumar}>+</button>
                  </div>
                  <button className="quitar" onClick={() => quitar(item.key)}>{c.quitar}</button>
                </div>
                <div style={{ fontFamily: '"Cinzel",serif', fontWeight: 600, fontSize: '.9rem' }}>
                  {cop(item.precio * item.qty)}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="carrito-pie">
          <div className="total">
            <span className="etq">{c.total}</span>
            <span className="cifra">{cop(total)}</span>
          </div>
          <p className="nota-envio">
            {total >= ENVIO_GRATIS ? c.envioIncluido : c.envioDesde(cop(ENVIO_GRATIS))}
          </p>
          <a className="btn btn-oro btn-bloque" href={urlWa()} target="_blank" rel="noopener noreferrer">
            {c.pedirWa}
          </a>
        </div>
      </aside>
    </>
  );
}

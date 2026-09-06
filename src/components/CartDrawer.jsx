import { useCart, cop } from '../context/CartContext';

export default function CartDrawer() {
  const { items, abierto, cerrar, total, ENVIO_GRATIS, cambiarCantidad, quitar, urlWa } = useCart();

  return (
    <>
      <div className={`velo${abierto ? ' abierto' : ''}`} onClick={cerrar} />

      <aside className={`carrito${abierto ? ' abierto' : ''}`} role="dialog" aria-modal="true" aria-label="Carrito de compras">
        <div className="carrito-cab">
          <h3>Tu carrito</h3>
          <button className="cerrar" onClick={cerrar} aria-label="Cerrar carrito">×</button>
        </div>

        <div className="carrito-cuerpo">
          {items.length === 0 ? (
            <div className="carrito-vacio">Tu carrito está vacío.</div>
          ) : (
            items.map(item => (
              <div className="linea-carrito" key={item.key}>
                <img src={item.foto} alt={item.nombre} />
                <div>
                  <h4>{item.nombre}</h4>
                  <div className="u">{cop(item.precio)} c/u</div>
                  <div className="cantidad">
                    <button onClick={() => cambiarCantidad(item.key, -1)} aria-label="Restar">−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => cambiarCantidad(item.key, 1)} aria-label="Sumar">+</button>
                  </div>
                  <button className="quitar" onClick={() => quitar(item.key)}>Quitar</button>
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
            <span className="etq">Total</span>
            <span className="cifra">{cop(total)}</span>
          </div>
          <p className="nota-envio">
            {total >= ENVIO_GRATIS ? 'Envío gratis incluido.' : `Envío gratis desde ${cop(ENVIO_GRATIS)}.`}
          </p>
          <a className="btn btn-oro btn-bloque" href={urlWa()} target="_blank" rel="noopener noreferrer">
            Pedir por WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}

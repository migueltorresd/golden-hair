import { useState } from 'react';
import { useCart, PACKS, cop } from '../context/CartContext';

export default function Product() {
  const [packKey, setPackKey] = useState('uno');
  const { agregar } = useCart();
  const pack = PACKS[packKey];

  return (
    <section className="seccion producto" id="producto">
      <div className="contenedor">
        <div className="foto">
          <img src="/producto.jpeg" alt="Mascarilla capilar Golden Hair" />
        </div>

        <div>
          <p className="eyebrow">Nuestro producto</p>
          <h2>Mascarilla capilar</h2>
          <p>
            Textura en crema, de absorción rápida y aroma suave. Se aplica de medios a puntas sobre
            el cabello húmedo y se deja actuar quince minutos. Un frasco de 250 g,
            puede usarse de 1 a 3 veces por semana según el estado del cabello.
          </p>

          <div className="precio-fila">
            <span className="precio">{cop(pack.precio)}</span>
            {pack.antes > 0 && (
              <span className="precio-antes">{cop(pack.antes)}</span>
            )}
          </div>

          <div className="presentaciones" role="group" aria-label="Elige la presentación">
            {Object.entries(PACKS).map(([key, p]) => (
              <button
                key={key}
                className={`pack${packKey === key ? ' seleccionado' : ''}`}
                onClick={() => setPackKey(key)}
                aria-pressed={packKey === key}
              >
                <span className="marca-radio" aria-hidden="true" />
                <span className="nombre">
                  {p.unidades === 1 ? '1 frasco de 250 g' : `${p.unidades} frascos`}
                  {p.antes > 0 && (
                    <span className="ahorro">
                      Ahorras {cop(p.antes - p.precio)}{key === 'tres' ? ' · el más pedido' : ''}
                    </span>
                  )}
                </span>
                <span className="valor">{cop(p.precio)}</span>
              </button>
            ))}
          </div>

          <button
            className="btn btn-oro btn-bloque"
            onClick={() => agregar(packKey, '/producto.jpeg')}
          >
            Agregar al carrito
          </button>

          <div className="detalles">
            <details className="detalle">
              <summary>Modo de uso</summary>
              <div className="contenido">
                <p>Sobre el cabello limpio y húmedo, aplica de medios a puntas y evita la raíz. Deja actuar quince minutos y enjuaga con agua fría. Una vez por semana es suficiente.</p>
              </div>
            </details>
            <details className="detalle">
              <summary>Ingredientes</summary>
              <div className="contenido">
                <p>Formulada con ingredientes seleccionados para hidratar y reparar. Libre de sulfatos y parabenos. La lista completa está impresa en la etiqueta de cada frasco.</p>
              </div>
            </details>
            <details className="detalle">
              <summary>Envíos y devoluciones</summary>
              <div className="contenido">
                <p>Solo realizamos envíos en Bogotá. El envío es gratis comprando 3 frascos ($89.000). Aceptamos devoluciones únicamente si el empaque o el producto presenta fallas de fábrica.</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { useCart, PACKS, cop } from '../context/CartContext';
import { useLang } from '../i18n/LanguageContext';

// Nomenclatura INCI: es internacional, por eso no se traduce.
const INGREDIENTES = 'Aqua, Cetrimonium Chloride, Paraffinum Liquidum (Mineral Oil), Cocos Nucifera (Coconut) Oil, Glycerin, Argania Spinosa Kernel Oil, Hydrolyzed Collagen, Hydrolyzed Elastin, Tocopherol, Parfum.';

export default function Product() {
  const [packKey, setPackKey] = useState('uno');
  const { agregar } = useCart();
  const { t } = useLang();
  const p = t.producto;
  const pack = PACKS[packKey];

  return (
    <section className="seccion producto" id="producto">
      <div className="contenedor">
        <div className="foto">
          <img src="/producto.jpeg" alt={p.imgAlt} />
          <div className="ingredientes">
            <h3>{p.ingredientes}</h3>
            <p>{INGREDIENTES}</p>
          </div>
        </div>

        <div>
          <p className="eyebrow">{p.eyebrow}</p>
          <h2>{p.titulo}</h2>
          <p>{p.desc}</p>

          <div className="precio-fila">
            <span className="precio">{cop(pack.precio)}</span>
            {pack.antes > 0 && (
              <span className="precio-antes">{cop(pack.antes)}</span>
            )}
          </div>

          <div className="presentaciones" role="group" aria-label={p.elegirAria}>
            {Object.entries(PACKS).map(([key, pk]) => (
              <button
                key={key}
                className={`pack${packKey === key ? ' seleccionado' : ''}`}
                onClick={() => setPackKey(key)}
                aria-pressed={packKey === key}
              >
                <span className="marca-radio" aria-hidden="true" />
                <span className="nombre">
                  {pk.unidades === 1 ? p.unFrasco : p.variosFrascos(pk.unidades)}
                  {pk.antes > 0 && (
                    <span className="ahorro">
                      {p.ahorras} {cop(pk.antes - pk.precio)}{key === 'tres' ? ` · ${p.masPedido}` : ''}
                    </span>
                  )}
                </span>
                <span className="valor">{cop(pk.precio)}</span>
              </button>
            ))}
          </div>

          <button
            className="btn btn-oro btn-bloque"
            onClick={() => agregar(packKey, '/producto.jpeg')}
          >
            {p.agregar}
          </button>

          <div className="detalles">
            <details className="detalle">
              <summary>{p.modoDeUso}</summary>
              <div className="contenido">
                <ol>
                  {p.pasos.map(paso => <li key={paso}>{paso}</li>)}
                </ol>
              </div>
            </details>
            <details className="detalle">
              <summary>{p.precauciones}</summary>
              <div className="contenido">
                <ul>
                  {p.listaPrecauciones.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </details>
            <details className="detalle">
              <summary>{p.envios}</summary>
              <div className="contenido">
                <p>{p.enviosTexto}</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}

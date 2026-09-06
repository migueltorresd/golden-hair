import { useState } from 'react';

const OrnIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12">
    <path d="M6 0l1.6 4.4L12 6l-4.4 1.6L6 12 4.4 7.6 0 6l4.4-1.6L6 0Z" fill="currentColor" />
  </svg>
);

const opiniones = [
  { estrellas: '★★★★★', texto: 'Lo que más me gustó es que no complica la rutina. Un paso, quince minutos, y el cabello queda suave de verdad.', autora: 'Laura M.', ciudad: 'Bogotá' },
  { estrellas: '★★★★★', texto: 'Tengo el cabello teñido y se me encrespaba muchísimo. Después de tres aplicaciones se nota bastante menos frizz.', autora: 'Daniela R.', ciudad: 'Medellín' },
  { estrellas: '★★★★☆', texto: 'El frasco es hermoso y el olor es suave, nada empalagoso. Le pongo cuatro estrellas solo porque quisiera que viniera más grande.', autora: 'Kelly P.', ciudad: 'Cali' },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const ir = n => setIdx((idx + n + opiniones.length) % opiniones.length);
  const op = opiniones[idx];

  return (
    <section className="seccion opiniones">
      <div className="contenedor">
        <div className="visor">
          <div className="orn" aria-hidden="true"><OrnIcon /></div>

          <div className="opinion-slide">
            <div className="estrellas" aria-label={`${op.estrellas.replace(/☆/g, '').length} de 5 estrellas`}>
              {op.estrellas}
            </div>
            <blockquote>{op.texto}</blockquote>
            <div className="autora">{op.autora}</div>
            <div className="ciudad">{op.ciudad}</div>
          </div>

          <div className="controles">
            <button className="flecha" onClick={() => ir(-1)} aria-label="Opinión anterior">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M15 5 8 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="puntos">
              {opiniones.map((_, i) => (
                <button
                  key={i}
                  className={`punto${i === idx ? ' activo' : ''}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Ir a opinión ${i + 1}`}
                />
              ))}
            </div>
            <button className="flecha" onClick={() => ir(1)} aria-label="Opinión siguiente">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

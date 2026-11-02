import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';

const OrnIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12">
    <path d="M6 0l1.6 4.4L12 6l-4.4 1.6L6 12 4.4 7.6 0 6l4.4-1.6L6 0Z" fill="currentColor" />
  </svg>
);

function Item({ pregunta, respuesta }) {
  const [abierto, setAbierto] = useState(false);
  return (
    <div className="item-faq">
      <h3>
        <button
          className={`disparador${abierto ? ' abierto' : ''}`}
          aria-expanded={abierto}
          onClick={() => setAbierto(v => !v)}
        >
          {pregunta}
          <span className="signo" aria-hidden="true">+</span>
        </button>
      </h3>
      <div className={`respuesta${abierto ? ' abierta' : ''}`}>
        <div className="respuesta-inner"><p>{respuesta}</p></div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLang();

  return (
    <section className="seccion" id="preguntas">
      <div className="contenedor">
        <div className="enc centrado">
          <div className="orn" aria-hidden="true"><OrnIcon /></div>
          <h2>{t.faq.titulo}</h2>
        </div>
        <div className="faq">
          {t.faq.preguntas.map((p, i) => (
            <Item key={i} pregunta={p.q} respuesta={p.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

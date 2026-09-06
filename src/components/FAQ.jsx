import { useState } from 'react';

const OrnIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12">
    <path d="M6 0l1.6 4.4L12 6l-4.4 1.6L6 12 4.4 7.6 0 6l4.4-1.6L6 0Z" fill="currentColor" />
  </svg>
);

const preguntas = [
  { q: '¿Cada cuánto debo usarla?', a: 'Una vez por semana es suficiente para la mayoría. Si tienes el cabello muy dañado o decolorado, puedes usarla dos veces por semana el primer mes y luego bajar a una.' },
  { q: '¿Reemplaza al acondicionador?', a: 'El día que uses la mascarilla, sí: aplícala en lugar del acondicionador. Los demás días sigue con tu rutina normal.' },
  { q: '¿Sirve para cabello teñido o con keratina?', a: 'Sí. No lleva sulfatos ni sal, así que no retira el tratamiento ni acelera la pérdida del tono.' },
  { q: '¿Cuántas veces por semana se puede usar?', a: 'De 1 a 3 veces por semana según el estado del cabello. Si está muy dañado o decolorado, puedes usarla hasta 3 veces la primera semana y luego ajustar.' },
  { q: '¿Cuánto tarda el envío y cómo se paga?', a: 'Solo hacemos envíos en Bogotá. El envío es gratis al comprar 3 frascos ($89.000). Puedes pagar contra entrega o por transferencia.' },
  { q: '¿Aceptan devoluciones?', a: 'Únicamente si el empaque o el producto presenta fallas de fábrica. Si tu pedido llega en mal estado, escríbenos por WhatsApp y lo resolvemos.' },
];

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
  return (
    <section className="seccion" id="preguntas">
      <div className="contenedor">
        <div className="enc centrado">
          <div className="orn" aria-hidden="true"><OrnIcon /></div>
          <h2>Preguntas frecuentes</h2>
        </div>
        <div className="faq">
          {preguntas.map(p => (
            <Item key={p.q} pregunta={p.q} respuesta={p.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

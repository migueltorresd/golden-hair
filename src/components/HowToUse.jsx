const OrnIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12">
    <path d="M6 0l1.6 4.4L12 6l-4.4 1.6L6 12 4.4 7.6 0 6l4.4-1.6L6 0Z" fill="currentColor" />
  </svg>
);

const pasos = [
  { num: 'Paso uno', titulo: 'Lava y escurre', desc: 'Shampoo como siempre y retira el exceso de agua con las manos. En cabello chorreando la mascarilla no agarra.' },
  { num: 'Paso dos', titulo: 'Aplica de medios a puntas', desc: 'Una nuez por sección. Evita la raíz: ahí no hace falta y solo engrasa.' },
  { num: 'Paso tres', titulo: 'Deja actuar quince minutos', desc: 'Peina con los dedos para repartir. Con una toalla tibia encima el resultado mejora.' },
  { num: 'Paso cuatro', titulo: 'Enjuaga con agua fría', desc: 'El agua fría cierra la cutícula y es lo que da el brillo. Seca sin frotar.' },
];

export default function HowToUse() {
  return (
    <section className="seccion ritual" id="ritual">
      <div className="contenedor">
        <div className="enc centrado">
          <div className="orn" aria-hidden="true"><OrnIcon /></div>
          <h2>Cómo se usa</h2>
          <p>Cuatro pasos, una vez por semana. El orden importa más que la cantidad de producto.</p>
        </div>
        <div className="pasos">
          {pasos.map(p => (
            <div className="paso" key={p.num}>
              <div className="num">{p.num}</div>
              <h3>{p.titulo}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

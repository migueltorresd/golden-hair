import { useLang } from '../i18n/LanguageContext';

const OrnIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12">
    <path d="M6 0l1.6 4.4L12 6l-4.4 1.6L6 12 4.4 7.6 0 6l4.4-1.6L6 0Z" fill="currentColor" />
  </svg>
);

export default function HowToUse() {
  const { t } = useLang();

  return (
    <section className="seccion ritual" id="ritual">
      <div className="contenedor">
        <div className="enc centrado">
          <div className="orn" aria-hidden="true"><OrnIcon /></div>
          <h2>{t.ritual.titulo}</h2>
          <p>{t.ritual.bajada}</p>
        </div>
        <div className="pasos">
          {t.ritual.pasos.map(p => (
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

import { useLang } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLang();
  const n = t.nosotras;

  return (
    <section className="seccion historia" id="nosotras">
      <div className="contenedor">
        <div className="retrato">
          <div className="aro" aria-hidden="true" />
          <img src="/retrato.jpeg" alt={n.imgAlt} />
        </div>

        <div className="cuerpo-texto">
          <p className="eyebrow">{n.eyebrow}</p>
          <p className="entrada">{n.entrada}</p>
          {n.parrafos.map(txt => <p key={txt}>{txt}</p>)}
          <div className="firmas">
            {n.firmas.map(f => (
              <div key={f.titulo}><strong>{f.titulo}</strong>{f.desc}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

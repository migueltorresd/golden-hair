import { useLang } from '../i18n/LanguageContext';

export default function Purpose() {
  const { t } = useLang();

  return (
    <section className="seccion proposito" id="proposito">
      <div className="contenedor">
        <div className="dupla">
          {[t.proposito.mision, t.proposito.vision].map(c => (
            <div className="columna" key={c.titulo}>
              <p className="marca-agua">{c.marca}</p>
              <h2>{c.titulo}</h2>
              <div className="filete" aria-hidden="true" />
              <p>{c.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

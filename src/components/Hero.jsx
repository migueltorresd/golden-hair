import { useLang } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="portada" id="inicio">
      <svg className="seda" viewBox="0 0 1440 760" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 118C220 40 430 178 700 128 970 78 1180 8 1440 66V0H0Z" fill="#FFFDF8" />
        <path d="M0 96C240 24 420 156 700 106 980 56 1200 -8 1440 44" fill="none" stroke="#E4CB8A" strokeOpacity=".55" />
        <path d="M0 700C260 640 470 742 720 700 970 658 1210 720 1440 676V760H0Z" fill="#F6EBD6" fillOpacity=".7" />
        <path d="M0 676C260 616 470 718 720 676 970 634 1210 696 1440 652" fill="none" stroke="#E4CB8A" strokeOpacity=".45" />
      </svg>

      <div className="contenedor">
        <div>
          <img src="/emblema.jpeg" alt="Golden Hair" className="emblema" />
          <h1>{h.titulo}</h1>
          <p className="bajada">{h.bajada}</p>
          <div className="ctas">
            <a href="#producto" className="btn btn-oro">{h.comprar}</a>
            <a href="#ritual" className="btn btn-linea">{h.comoSeUsa}</a>
          </div>
          <div className="sellos">
            {h.sellos.map(s => <span key={s}>{s}</span>)}
          </div>
        </div>

        <div className="escena">
          <div className="marco" aria-hidden="true" />
          <img src="/producto-hero.jpeg" alt={h.imgAlt} />
          <div className="gramaje">
            <strong>210 g</strong>
            <span>{h.presentacion}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

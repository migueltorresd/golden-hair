export default function Hero() {
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
          <h1>El lujo de un cabello sano</h1>
          <p className="bajada">
            Una mascarilla capilar que hidrata, repara y controla el frizz. Un solo paso a la semana,
            quince minutos, y el cabello vuelve a sentirse suave y manejable.
          </p>
          <div className="ctas">
            <a href="#producto" className="btn btn-oro">Comprar ahora</a>
            <a href="#ritual" className="btn btn-linea">Cómo se usa</a>
          </div>
          <div className="sellos">
            <span>250 g</span>
            <span>Hecha en Colombia</span>
            <span>Envíos a Bogotá</span>
          </div>
        </div>

        <div className="escena">
          <div className="marco" aria-hidden="true" />
          <img src="/producto-hero.jpeg" alt="Mascarilla capilar Golden Hair 250 g" />
          <div className="gramaje">
            <strong>250 g</strong>
            <span>Presentación</span>
          </div>
        </div>
      </div>
    </section>
  );
}

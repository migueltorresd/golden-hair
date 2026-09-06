export default function Benefits() {
  return (
    <section className="beneficios">
      <div className="contenedor">
        <div className="beneficio">
          <svg width="30" height="34" viewBox="0 0 30 34" fill="none" stroke="#C29A2E" strokeWidth="1.2" aria-hidden="true">
            <path d="M15 3c5.5 6.4 9 11 9 15.2A9 9 0 0 1 6 18.2C6 14 9.5 9.4 15 3Z" strokeLinejoin="round" />
            <path d="M11 19.5a4 4 0 0 0 4 4" strokeLinecap="round" />
          </svg>
          <h3>Hidrata</h3>
          <p>Devuelve agua y suavidad al cabello reseco, sin dejar sensación pesada.</p>
        </div>

        <div className="beneficio">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#C29A2E" strokeWidth="1.2" aria-hidden="true">
            <path d="M17 30c0-9 5-14 12-15 0 8-4 13-12 15Z" strokeLinejoin="round" />
            <path d="M17 30C17 21 12 16 5 15c0 8 4 13 12 15Z" strokeLinejoin="round" />
            <path d="M17 30v-8" strokeLinecap="round" />
          </svg>
          <h3>Repara</h3>
          <p>Trabaja sobre la fibra dañada por el sol, la plancha o el secador.</p>
        </div>

        <div className="beneficio">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#C29A2E" strokeWidth="1.2" aria-hidden="true">
            <path d="M9 28c0-11 4-17 10-22-2 6 0 9 2.5 12S25 24 23 28" strokeLinecap="round" />
            <path d="M15 28c1.5-5 4-7.5 7-9" strokeLinecap="round" />
            <path d="M27 7l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z" strokeLinejoin="round" />
          </svg>
          <h3>Controla el frizz</h3>
          <p>Sella la cutícula y deja el cabello alineado y con aspecto saludable.</p>
        </div>
      </div>
    </section>
  );
}

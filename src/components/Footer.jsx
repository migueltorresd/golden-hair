import { useLang } from '../i18n/LanguageContext';

const ANCLAS_PRODUCTO = ['#producto', '#ritual', '#nosotras', '#proposito'];
const ANCLAS_AYUDA = ['#preguntas', '#pedido', '#pedido'];

export default function Footer() {
  const { t } = useLang();
  const f = t.pie;

  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie-grid">
          <div>
            <img src="/logo-pie.jpeg" alt="Golden Hair" className="emb" />
            <p className="lema">{f.lema}</p>
            <p style={{ color: 'var(--texto-suave)', maxWidth: '32ch' }}>{f.desc}</p>
          </div>

          <div>
            <h4>{f.producto}</h4>
            <ul>
              {f.links.map((txt, i) => <li key={txt}><a href={ANCLAS_PRODUCTO[i]}>{txt}</a></li>)}
            </ul>
          </div>

          <div>
            <h4>{f.ayuda}</h4>
            <ul>
              {f.linksAyuda.map((txt, i) => <li key={txt}><a href={ANCLAS_AYUDA[i]}>{txt}</a></li>)}
            </ul>
          </div>

          <div>
            <h4>{f.escribenos}</h4>
            <ul>
              <li><a href="https://wa.me/573213268940" target="_blank" rel="noopener noreferrer">+57 321 3268940</a></li>
              <li><a href="https://wa.me/573023051729" target="_blank" rel="noopener noreferrer">+57 302 3051729</a></li>
              <li><a href="https://wa.me/573244408888" target="_blank" rel="noopener noreferrer">+57 324 4408888</a></li>
              <li><a href="mailto:goldenhaircolombia@gmail.com">goldenhaircolombia@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <span>© {new Date().getFullYear()} Golden Hair. {f.derechos}</span>
          <span>{f.demo}</span>
        </div>
      </div>
    </footer>
  );
}

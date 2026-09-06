export default function Footer() {
  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie-grid">
          <div>
            <img src="/logo-pie.jpeg" alt="Golden Hair" className="emb" />
            <p className="lema">"El lujo de un cabello sano."</p>
            <p style={{ color: 'var(--texto-suave)', maxWidth: '32ch' }}>
              Cuidado capilar sencillo, hecho en Colombia por estudiantes.
            </p>
          </div>

          <div>
            <h4>Producto</h4>
            <ul>
              <li><a href="#producto">Mascarilla capilar 250 g</a></li>
              <li><a href="#ritual">Cómo se usa</a></li>
              <li><a href="#nosotras">Quiénes somos</a></li>
              <li><a href="#proposito">Misión y visión</a></li>
            </ul>
          </div>

          <div>
            <h4>Ayuda</h4>
            <ul>
              <li><a href="#preguntas">Preguntas frecuentes</a></li>
              <li><a href="#pedido">Envíos y pagos</a></li>
              <li><a href="#pedido">Devoluciones</a></li>
            </ul>
          </div>

          <div>
            <h4>Escríbenos</h4>
            <ul>
              <li><a href="https://wa.me/573213268940" target="_blank" rel="noopener noreferrer">+57 321 3268940</a></li>
              <li><a href="https://wa.me/573023051729" target="_blank" rel="noopener noreferrer">+57 302 3051729</a></li>
              <li><a href="https://wa.me/573244408888" target="_blank" rel="noopener noreferrer">+57 324 4408888</a></li>
              <li><a href="mailto:goldenhaircolombia@gmail.com">goldenhaircolombia@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <span>© {new Date().getFullYear()} Golden Hair. Todos los derechos reservados.</span>
          <span>Sitio de demostración — proyecto escolar</span>
        </div>
      </div>
    </footer>
  );
}

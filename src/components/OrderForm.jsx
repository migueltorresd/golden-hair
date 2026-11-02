import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';

const OrnIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12">
    <path d="M6 0l1.6 4.4L12 6l-4.4 1.6L6 12 4.4 7.6 0 6l4.4-1.6L6 0Z" fill="currentColor" />
  </svg>
);

const WHATSAPP = '573213268940';

export default function OrderForm() {
  const { t } = useLang();
  const p = t.pedido;
  // `presentacion` guarda el índice de la opción, así el select sobrevive al cambio de idioma.
  const [form, setForm] = useState({ nombre: '', tel: '', ciudad: '', presentacion: '', nota: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const validar = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = true;
    if (!/^\d{10}$/.test(form.tel.trim())) e.tel = true;
    if (!form.ciudad.trim()) e.ciudad = true;
    if (form.presentacion === '') e.presentacion = true;
    return e;
  };

  const enviar = e => {
    e.preventDefault();
    const e2 = validar();
    setErrores(e2);
    if (Object.keys(e2).length) return;

    const msg = p.mensaje({ ...form, presentacion: p.opciones[form.presentacion] });
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
    setEnviado(true);
  };

  return (
    <section className="seccion pedido" id="pedido">
      <div className="contenedor">
        <div className="info">
          <div className="orn" style={{ marginLeft: 0 }} aria-hidden="true"><OrnIcon /></div>
          <h2>{p.titulo}</h2>
          <p>{p.bajada}</p>

          <div className="datos-contacto">
            <div>
              <strong>WhatsApp</strong>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">+57 321 3268940</a>
              {' · '}
              <a href="https://wa.me/573023051729" target="_blank" rel="noopener noreferrer">+57 302 3051729</a>
              {' · '}
              <a href="https://wa.me/573244408888" target="_blank" rel="noopener noreferrer">+57 324 4408888</a>
            </div>
            <div>
              <strong>{p.correo}</strong>
              <a href="mailto:goldenhaircolombia@gmail.com">goldenhaircolombia@gmail.com</a>
            </div>
            <div>
              <strong>{p.atencion}</strong>
              {p.horario}
            </div>
          </div>
        </div>

        <div className="formulario">
          {enviado && (
            <div className="exito-msg">
              <strong>{p.exitoTitulo}</strong> {p.exitoTexto}
            </div>
          )}

          <form onSubmit={enviar} noValidate>
            <div className={`campo${errores.nombre ? ' error' : ''}`}>
              <label htmlFor="nombre">{p.nombre}</label>
              <input type="text" id="nombre" value={form.nombre} onChange={set('nombre')} autoComplete="name" />
              <span className="mensaje-error">{p.nombreError}</span>
            </div>

            <div className={`campo${errores.tel ? ' error' : ''}`}>
              <label htmlFor="tel">{p.tel}</label>
              <input type="tel" id="tel" value={form.tel} onChange={set('tel')} inputMode="numeric" placeholder="3001234567" autoComplete="tel" />
              <span className="mensaje-error">{p.telError}</span>
            </div>

            <div className={`campo${errores.ciudad ? ' error' : ''}`}>
              <label htmlFor="ciudad">{p.ciudad}</label>
              <input type="text" id="ciudad" value={form.ciudad} onChange={set('ciudad')} autoComplete="address-level2" />
              <span className="mensaje-error">{p.ciudadError}</span>
            </div>

            <div className={`campo${errores.presentacion ? ' error' : ''}`}>
              <label htmlFor="presentacion">{p.presentacion}</label>
              <select id="presentacion" value={form.presentacion} onChange={set('presentacion')}>
                <option value="">{p.elegir}</option>
                {p.opciones.map((op, i) => <option key={i} value={i}>{op}</option>)}
              </select>
              <span className="mensaje-error">{p.presentacionError}</span>
            </div>

            <div className="campo">
              <label htmlFor="nota">{p.nota}</label>
              <textarea id="nota" value={form.nota} onChange={set('nota')} placeholder={p.notaPlaceholder} />
            </div>

            <button type="submit" className="btn btn-oro btn-bloque">{p.enviar}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

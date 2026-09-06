import { useState } from 'react';

const OrnIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12">
    <path d="M6 0l1.6 4.4L12 6l-4.4 1.6L6 12 4.4 7.6 0 6l4.4-1.6L6 0Z" fill="currentColor" />
  </svg>
);

const WHATSAPP = '573213268940';

export default function OrderForm() {
  const [form, setForm] = useState({ nombre: '', tel: '', ciudad: '', presentacion: '', nota: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const validar = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = true;
    if (!/^\d{10}$/.test(form.tel.trim())) e.tel = true;
    if (!form.ciudad.trim()) e.ciudad = true;
    if (!form.presentacion) e.presentacion = true;
    return e;
  };

  const enviar = e => {
    e.preventDefault();
    const e2 = validar();
    setErrores(e2);
    if (Object.keys(e2).length) return;

    const msg = `Hola, quiero hacer un pedido:%0ANombre: ${form.nombre}%0ACelular: ${form.tel}%0ACiudad: ${form.ciudad}%0APresentación: ${form.presentacion}${form.nota ? `%0ANota: ${form.nota}` : ''}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
    setEnviado(true);
  };

  return (
    <section className="seccion pedido" id="pedido">
      <div className="contenedor">
        <div className="info">
          <div className="orn" style={{ marginLeft: 0 }} aria-hidden="true"><OrnIcon /></div>
          <h2>Haz tu pedido</h2>
          <p>Déjanos tus datos y te confirmamos disponibilidad y envío por WhatsApp el mismo día. También puedes escribirnos directo si prefieres.</p>

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
              <strong>Correo</strong>
              <a href="mailto:goldenhaircolombia@gmail.com">goldenhaircolombia@gmail.com</a>
            </div>
            <div>
              <strong>Atención</strong>
              Bogotá · Lunes a sábado, 8 a.m. a 6 p.m.
            </div>
          </div>
        </div>

        <div className="formulario">
          {enviado && (
            <div className="exito-msg">
              <strong>Pedido enviado.</strong> Te escribimos por WhatsApp en las próximas horas para confirmarlo.
            </div>
          )}

          <form onSubmit={enviar} noValidate>
            <div className={`campo${errores.nombre ? ' error' : ''}`}>
              <label htmlFor="nombre">Nombre completo</label>
              <input type="text" id="nombre" value={form.nombre} onChange={set('nombre')} autoComplete="name" />
              <span className="mensaje-error">Escribe tu nombre para poder contactarte.</span>
            </div>

            <div className={`campo${errores.tel ? ' error' : ''}`}>
              <label htmlFor="tel">Celular (WhatsApp)</label>
              <input type="tel" id="tel" value={form.tel} onChange={set('tel')} inputMode="numeric" placeholder="3001234567" autoComplete="tel" />
              <span className="mensaje-error">Necesitamos un celular de 10 dígitos.</span>
            </div>

            <div className={`campo${errores.ciudad ? ' error' : ''}`}>
              <label htmlFor="ciudad">Ciudad</label>
              <input type="text" id="ciudad" value={form.ciudad} onChange={set('ciudad')} autoComplete="address-level2" />
              <span className="mensaje-error">Dinos a qué ciudad enviamos.</span>
            </div>

            <div className={`campo${errores.presentacion ? ' error' : ''}`}>
              <label htmlFor="presentacion">Presentación</label>
              <select id="presentacion" value={form.presentacion} onChange={set('presentacion')}>
                <option value="">Elige una opción</option>
                <option>1 frasco de 250 g – $32.000</option>
                <option>2 frascos – $60.000 (promoción)</option>
                <option>3 frascos – $89.000 (envío gratis)</option>
                <option>Aún no sé, necesito asesoría</option>
              </select>
              <span className="mensaje-error">Selecciona una presentación.</span>
            </div>

            <div className="campo">
              <label htmlFor="nota">Algo más que debamos saber (opcional)</label>
              <textarea id="nota" value={form.nota} onChange={set('nota')} placeholder="Por ejemplo: tengo el cabello teñido y se me encrespa mucho." />
            </div>

            <button type="submit" className="btn btn-oro btn-bloque">Enviar pedido</button>
          </form>
        </div>
      </div>
    </section>
  );
}

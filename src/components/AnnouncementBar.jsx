import { useState, useEffect } from 'react';

const AVISOS = [
  'Envío gratis desde $89.000 · Solo envíos en Bogotá',
  'Mascarilla capilar 250 g · Hecha en Colombia · Envíos a Bogotá',
  'Libre de sulfatos y parabenos · Tu cabello lo nota desde la primera aplicación',
];

export default function AnnouncementBar() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % AVISOS.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="avisos">
      <div className="contenedor">
        <p className="aviso-texto">{AVISOS[idx]}</p>
      </div>
    </div>
  );
}

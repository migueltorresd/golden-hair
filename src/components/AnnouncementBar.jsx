import { useState, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function AnnouncementBar() {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);
  const avisos = t.avisos;

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % avisos.length), 4000);
    return () => clearInterval(id);
  }, [avisos.length]);

  return (
    <div className="avisos">
      <div className="contenedor">
        <p className="aviso-texto">{avisos[idx]}</p>
      </div>
    </div>
  );
}

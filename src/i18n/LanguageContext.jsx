import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import es from './es';
import en from './en';

const DICCIONARIOS = { es, en };
const CLAVE = 'gh-idioma';

const leerIdioma = () => {
  try {
    const guardado = localStorage.getItem(CLAVE);
    if (guardado in DICCIONARIOS) return guardado;
  } catch { /* storage bloqueado: usamos el idioma por defecto */ }
  return 'es';
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [idioma, setIdioma] = useState(leerIdioma);

  useEffect(() => {
    document.documentElement.lang = DICCIONARIOS[idioma].lang;
    try { localStorage.setItem(CLAVE, idioma); } catch { /* ignorar */ }
  }, [idioma]);

  const alternar = useCallback(() => setIdioma(i => (i === 'es' ? 'en' : 'es')), []);

  return (
    <LanguageContext.Provider value={{ idioma, t: DICCIONARIOS[idioma], alternar }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

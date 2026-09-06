import { createContext, useContext, useState, useCallback } from 'react';

const WHATSAPP = '573213268940';
const ENVIO_GRATIS = 89000;

export const PACKS = {
  uno:  { nombre: 'Mascarilla capilar 250 g', unidades: 1, precio: 32000, antes: 0 },
  dos:  { nombre: 'Mascarilla capilar — 2 frascos', unidades: 2, precio: 60000, antes: 64000 },
  tres: { nombre: 'Mascarilla capilar — 3 frascos', unidades: 3, precio: 89000, antes: 96000 },
};

export const cop = n => '$' + n.toLocaleString('es-CO');

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [abierto, setAbierto] = useState(false);
  const [toast, setToast] = useState('');

  const mostrarToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2800);
  }, []);

  const agregar = useCallback((packKey, foto) => {
    const pack = PACKS[packKey];
    setItems(prev => {
      const idx = prev.findIndex(i => i.key === packKey);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { key: packKey, ...pack, foto, qty: 1 }];
    });
    mostrarToast('Agregado al carrito');
  }, [mostrarToast]);

  const cambiarCantidad = useCallback((key, delta) => {
    setItems(prev => {
      const next = prev.map(i => i.key === key ? { ...i, qty: i.qty + delta } : i)
                       .filter(i => i.qty > 0);
      return next;
    });
  }, []);

  const quitar = useCallback((key) => {
    setItems(prev => prev.filter(i => i.key !== key));
  }, []);

  const total = items.reduce((s, i) => s + i.precio * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  const urlWa = () => {
    if (!items.length) return `https://wa.me/${WHATSAPP}`;
    const lineas = items.map(i => `• ${i.nombre} x${i.qty} = ${cop(i.precio * i.qty)}`).join('%0A');
    const env = total >= ENVIO_GRATIS ? '%0AEnvío gratis incluido.' : '';
    return `https://wa.me/${WHATSAPP}?text=Hola,%20quiero%20pedir:%0A${lineas}%0ATotal:%20${cop(total)}${env}`;
  };

  return (
    <CartContext.Provider value={{
      items, abierto, toast, total, count,
      ENVIO_GRATIS,
      abrir: () => setAbierto(true),
      cerrar: () => setAbierto(false),
      agregar, cambiarCantidad, quitar, urlWa,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

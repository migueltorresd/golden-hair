import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toast } = useCart();
  return (
    <div className={`tostada${toast ? ' visible' : ''}`} role="status" aria-live="polite">
      {toast}
    </div>
  );
}

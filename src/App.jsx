import { CartProvider } from './context/CartContext';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Product from './components/Product';
import HowToUse from './components/HowToUse';
import About from './components/About';
import Purpose from './components/Purpose';
import FAQ from './components/FAQ';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';

function WhatsAppButton() {
  return (
    <a
      className="flotante-wa"
      href="https://wa.me/573213268940"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <svg width="27" height="27" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.33A10 10 0 1 0 12 2Zm5.5 14.1c-.24.66-1.4 1.27-1.93 1.31-.5.05-1.13.07-1.82-.11a15.6 15.6 0 0 1-6.7-5.83c-.5-.8-.83-1.72-.83-2.63 0-.9.47-1.35.65-1.54.17-.19.4-.24.53-.24l.38.01c.12 0 .29-.05.45.35l.62 1.5c.05.11.09.24.02.38l-.24.4-.35.38c-.11.12-.23.25-.1.48.13.24.58.96 1.25 1.55.86.77 1.58 1.01 1.8 1.13.24.12.38.1.52-.06l.74-.86c.16-.19.3-.15.5-.09l1.43.68c.21.1.35.15.4.24.05.09.05.5-.19 1.16Z" />
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AnnouncementBar />
      <Header />
      <main id="inicio">
        <Hero />
        <Benefits />
        <Product />
        <HowToUse />
        <About />
        <Purpose />
        <FAQ />
        <OrderForm />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
      <Toast />
    </CartProvider>
  );
}

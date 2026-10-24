import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catering from './components/Catering';
import About from './components/About';
import Booking from './components/Booking';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (name, portion, price) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(item => item.name === name && item.portion === portion);
      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].qty += 1;
        return newCart;
      } else {
        return [...prevCart, { name, portion, price, qty: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (index, change) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].qty += change;
      if (newCart[index].qty <= 0) {
        newCart.splice(index, 1);
      }
      return newCart;
    });
  };

  const clearCart = () => setCart([]);

  const checkoutWhatsApp = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items before checking out.');
      return;
    }

    let message = "*New Order - Madonna's Kitchen*%0A%0A";
    let subtotal = 0;

    cart.forEach((item, idx) => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;
      message += `${idx + 1}. *${item.name}* (${item.portion}) x ${item.qty} - ₵ ${itemTotal.toFixed(2)}%0A`;
    });

    message += `%0A*Total Amount: ₵ ${subtotal.toFixed(2)}*%0A%0APlease confirm my order and delivery details.`;
    
    const whatsappUrl = `https://wa.me/233207076481?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="antialiased selection:bg-gold-400 selection:text-black">
      <Navbar cartCount={totalCartCount} toggleCart={toggleCart} filterMenu={(cat) => setSelectedCategory(cat)} />
      <Hero />
      <Catering />
      <About />
      <Booking />
      <Menu 
        addToCart={addToCart} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <Gallery />
      <Testimonials />
      <Footer filterMenu={(cat) => setSelectedCategory(cat)} />
      <CartSidebar 
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
        cart={cart} 
        updateQuantity={updateQuantity} 
        clearCart={clearCart} 
        checkoutWhatsApp={checkoutWhatsApp} 
      />
    </div>
  );
}
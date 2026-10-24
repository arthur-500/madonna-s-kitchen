import React from 'react';

export default function CartSidebar({ isOpen, toggleCart, cart, updateQuantity, clearCart, checkoutWhatsApp }) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div onClick={toggleCart} className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"></div>
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cardBg border-l border-zinc-800 flex flex-col justify-between">
          
          {/* Cart Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gold-400/10 text-gold-400 flex items-center justify-center border border-gold-400/25">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <div>
                <h3 className="text-white font-black uppercase text-base tracking-wider">Your Cart</h3>
                <p className="text-xs text-zinc-400">Exact full menu pricing applied</p>
              </div>
            </div>
            <button onClick={toggleCart} className="w-10 h-10 bg-darkBg hover:bg-zinc-800 text-zinc-300 hover:text-gold-400 rounded-xl flex items-center justify-center transition border border-zinc-800">
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          {/* Cart Items Container */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-16 h-16 bg-zinc-900 text-zinc-600 rounded-2xl flex items-center justify-center mx-auto text-2xl border border-zinc-800"><i className="fa-solid fa-basket-shopping"></i></div>
                <p className="text-zinc-400 text-sm font-semibold">Your cart is currently empty.</p>
              </div>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="bg-darkBg p-4 rounded-2xl border border-zinc-800 flex items-center justify-between">
                  <div className="space-y-1">
                    <h5 className="text-white font-bold text-sm">{item.name}</h5>
                    <p className="text-xs text-gold-400 font-semibold">{item.portion} - ₵ {item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-3 pt-2">
                      <button onClick={() => updateQuantity(index, -1)} className="w-7 h-7 bg-cardBg hover:bg-zinc-800 text-zinc-300 rounded-lg flex items-center justify-center border border-zinc-700 text-xs">-</button>
                      <span className="text-xs font-bold text-white">{item.qty}</span>
                      <button onClick={() => updateQuantity(index, 1)} className="w-7 h-7 bg-cardBg hover:bg-zinc-800 text-zinc-300 rounded-lg flex items-center justify-center border border-zinc-700 text-xs">+</button>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <span className="text-sm font-black text-white block">₵ {(item.price * item.qty).toFixed(2)}</span>
                    <button onClick={() => updateQuantity(index, -item.qty)} className="text-zinc-500 hover:text-red-400 text-xs transition"><i className="fa-solid fa-trash"></i></button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer & Checkout */}
          <div className="p-6 border-t border-zinc-800 bg-darkBg space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-zinc-400">
                <span>Subtotal</span>
                <span className="font-bold text-white">₵ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-black text-white pt-2 border-t border-zinc-800">
                <span>Total Amount</span>
                <span className="text-gold-400">₵ {subtotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button onClick={checkoutWhatsApp} className="w-full bg-gold-400 hover:bg-gold-500 text-black font-extrabold py-4 rounded-2xl transition shadow-lg shadow-gold-400/20 flex items-center justify-center space-x-2.5 text-sm uppercase tracking-wider">
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Checkout via WhatsApp</span>
              </button>
              <button onClick={clearCart} className="w-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white font-bold py-3 rounded-2xl transition border border-zinc-800 text-xs uppercase tracking-wider">
                Clear Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
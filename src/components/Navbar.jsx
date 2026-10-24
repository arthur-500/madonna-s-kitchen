import React, { useState } from 'react';

export default function Navbar({ cartCount, toggleCart, filterMenu }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#121215]/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-full h-full text-gold-400 drop-shadow-md">
                <circle cx="60" cy="60" r="52" fill="none" stroke="#27272a" strokeWidth="2"/>
                <circle cx="60" cy="60" r="44" fill="#18181b" stroke="#FFD700" strokeWidth="3"/>
                <circle cx="60" cy="60" r="32" fill="none" stroke="#FFD700" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6"/>
                <path d="M 38 34 L 38 62 M 34 34 L 34 46 C 34 49, 42 49, 42 46 L 42 34 Z" fill="none" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="38" y1="34" x2="38" y2="30" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M 82 32 C 82 32, 86 46, 82 62 C 80 68, 76 68, 76 62 L 76 32 Z" fill="#FFD700" stroke="#FFD700" strokeWidth="1.5"/>
                <circle cx="60" cy="60" r="16" fill="#09090b" stroke="#FFD700" strokeWidth="2"/>
                <text x="60" y="67" fontFamily="'Playfair Display', serif" fontWeight="700" fontSize="20" textAnchor="middle" fill="#FFD700">M</text>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-wider text-white uppercase leading-none">MADONNA'S</span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-gold-400 font-bold uppercase mt-1">KITCHEN</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-3 xl:space-x-5 items-center font-medium text-xs xl:text-sm text-zinc-300">
            <a href="#home" className="hover:text-gold-400 transition whitespace-nowrap">Home</a>
            <a href="#about" className="hover:text-gold-400 transition whitespace-nowrap">About Us</a>
            <a href="#menu" onClick={() => filterMenu('single-plates')} className="hover:text-gold-400 transition whitespace-nowrap">Menu</a>
            <a href="#catering" className="hover:text-gold-400 transition whitespace-nowrap">Our services</a>
            <a href="#booking" className="hover:text-gold-400 transition whitespace-nowrap">Book Appointment</a>
            <a href="#gallery" className="hover:text-gold-400 transition whitespace-nowrap">Gallery</a>
            <a href="#contact" className="hover:text-gold-400 transition whitespace-nowrap">Contact</a>
          </div>

          {/* Right Side: Phone & Cart */}
          <div className="flex items-center space-x-3">
            <a href="tel:+244241645782" className="hidden xl:flex items-center space-x-2 text-zinc-300 hover:text-gold-400 font-semibold text-xs">
              <i className="fa-solid fa-phone text-gold-400"></i>
              <span>+244 24 164 5782</span>
            </a>

            {/* Cart Toggle Button */}
            <button onClick={toggleCart} className="relative bg-zinc-900 hover:bg-zinc-800 text-zinc-200 w-11 h-11 rounded-2xl flex items-center justify-center transition border border-zinc-800 focus:outline-none">
              <i className="fa-solid fa-cart-shopping text-base"></i>
              <span className="absolute -top-1.5 -right-1.5 bg-gold-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">{cartCount}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="bg-zinc-900 hover:bg-zinc-800 text-gold-400 w-11 h-11 rounded-2xl flex items-center justify-center transition border border-zinc-800 focus:outline-none shadow-lg">
                <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      <div id="mobile-menu" className={`fixed inset-x-0 top-0 h-screen bg-[#0b0b0c] backdrop-blur-xl border-b border-zinc-800 px-6 py-8 flex flex-col justify-between z-50 overflow-y-auto ${isMobileMenuOpen ? 'open' : ''}`}>
        <div>
          <div className="flex justify-between items-center pb-6 border-b border-zinc-800 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gold-400/10 text-gold-400 flex items-center justify-center border border-gold-400/20">
                <i className="fa-solid fa-utensils text-sm"></i>
              </div>
              <span className="text-white font-black tracking-wider uppercase text-base">Madonna's Menu</span>
            </div>
            <button onClick={toggleMobileMenu} className="w-11 h-11 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-gold-400 rounded-2xl flex items-center justify-center transition border border-zinc-800 focus:outline-none shadow-md">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          <div className="space-y-2">
            <a href="#home" onClick={toggleMobileMenu} className="flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-zinc-300 hover:text-black hover:bg-gold-400 font-semibold text-sm transition group">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 text-gold-400 group-hover:bg-black group-hover:text-gold-400 flex items-center justify-center transition border border-zinc-800"><i className="fa-solid fa-house text-sm"></i></div>
              <span>Home</span>
            </a>
            <a href="#about" onClick={toggleMobileMenu} className="flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-zinc-300 hover:text-black hover:bg-gold-400 font-semibold text-sm transition group">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 text-gold-400 group-hover:bg-black group-hover:text-gold-400 flex items-center justify-center transition border border-zinc-800"><i className="fa-solid fa-circle-info text-sm"></i></div>
              <span>About Us</span>
            </a>
            <a href="#menu" onClick={toggleMobileMenu} className="flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-zinc-300 hover:text-black hover:bg-gold-400 font-semibold text-sm transition group">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 text-gold-400 group-hover:bg-black group-hover:text-gold-400 flex items-center justify-center transition border border-zinc-800"><i className="fa-solid fa-book-open text-sm"></i></div>
              <span>Our Menu</span>
            </a>
            <a href="#menu" onClick={() => { toggleMobileMenu(); filterMenu('single-plates'); }} className="flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-zinc-300 hover:text-black hover:bg-gold-400 font-semibold text-sm transition group">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 text-gold-400 group-hover:bg-black group-hover:text-gold-400 flex items-center justify-center transition border border-zinc-800"><i className="fa-solid fa-bowl-food text-sm"></i></div>
              <span>Single Plate Foods</span>
            </a>
            <a href="#menu" onClick={() => { toggleMobileMenu(); filterMenu('drinks'); }} className="flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-zinc-300 hover:text-black hover:bg-gold-400 font-semibold text-sm transition group">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 text-gold-400 group-hover:bg-black group-hover:text-gold-400 flex items-center justify-center transition border border-zinc-800"><i className="fa-solid fa-champagne-glasses text-sm"></i></div>
              <span>Drinks & Minerals</span>
            </a>
            <a href="#menu" onClick={() => { toggleMobileMenu(); filterMenu('pastries'); }} className="flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-zinc-300 hover:text-black hover:bg-gold-400 font-semibold text-sm transition group">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 text-gold-400 group-hover:bg-black group-hover:text-gold-400 flex items-center justify-center transition border border-zinc-800"><i className="fa-solid fa-cookie-bite text-sm"></i></div>
              <span>Pastries</span>
            </a>
            <a href="#catering" onClick={toggleMobileMenu} className="flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-zinc-300 hover:text-black hover:bg-gold-400 font-semibold text-sm transition group">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 text-gold-400 group-hover:bg-black group-hover:text-gold-400 flex items-center justify-center transition border border-zinc-800"><i className="fa-solid fa-plate-wheat text-sm"></i></div>
              <span>Catering Services</span>
            </a>
            <a href="#booking" onClick={toggleMobileMenu} className="flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-zinc-300 hover:text-black hover:bg-gold-400 font-semibold text-sm transition group">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 text-gold-400 group-hover:bg-black group-hover:text-gold-400 flex items-center justify-center transition border border-zinc-800"><i className="fa-solid fa-calendar-check text-sm"></i></div>
              <span>Book Appointment</span>
            </a>
            <a href="#gallery" onClick={toggleMobileMenu} className="flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-zinc-300 hover:text-black hover:bg-gold-400 font-semibold text-sm transition group">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 text-gold-400 group-hover:bg-black group-hover:text-gold-400 flex items-center justify-center transition border border-zinc-800"><i className="fa-solid fa-images text-sm"></i></div>
              <span>Photo Gallery</span>
            </a>
            <a href="#testimonials" onClick={toggleMobileMenu} className="flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-zinc-300 hover:text-black hover:bg-gold-400 font-semibold text-sm transition group">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 text-gold-400 group-hover:bg-black group-hover:text-gold-400 flex items-center justify-center transition border border-zinc-800"><i className="fa-solid fa-comments text-sm"></i></div>
              <span>Testimonials</span>
            </a>
            <a href="#contact" onClick={toggleMobileMenu} className="flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-zinc-300 hover:text-black hover:bg-gold-400 font-semibold text-sm transition group">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 text-gold-400 group-hover:bg-black group-hover:text-gold-400 flex items-center justify-center transition border border-zinc-800"><i className="fa-solid fa-headset text-sm"></i></div>
              <span>Contact Us</span>
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800 flex flex-col space-y-4">
          <a href="tel:+244241645782" className="bg-cardBg hover:bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-gold-400 font-bold text-sm flex items-center justify-between transition shadow-md">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gold-400/10 flex items-center justify-center">
                <i className="fa-solid fa-phone text-xs"></i>
              </div>
              <span>+244 24 164 5782</span>
            </div>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
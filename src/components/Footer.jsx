import React from 'react';

export default function Footer({ filterMenu }) {
  return (
    <footer id="contact" className="bg-darkBg text-zinc-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-lg font-black tracking-wider text-white uppercase">MADONNA'S KITCHEN</span>
          </div>
          <p className="text-xs leading-relaxed text-zinc-400">Serving authentic local and continental dishes, delicious snacks, and fresh pastries with fast WhatsApp ordering and premium event catering.</p>
          <div className="flex space-x-3 pt-2">
            <a href="#" className="w-10 h-10 bg-cardBg hover:bg-gold-400 hover:text-black rounded-xl flex items-center justify-center transition border border-zinc-800 text-gold-400"><i className="fa-brands fa-facebook-f text-sm"></i></a>
            <a href="#" className="w-10 h-10 bg-cardBg hover:bg-gold-400 hover:text-black rounded-xl flex items-center justify-center transition border border-zinc-800 text-gold-400"><i className="fa-brands fa-instagram text-sm"></i></a>
            <a href="#" className="w-10 h-10 bg-cardBg hover:bg-gold-400 hover:text-black rounded-xl flex items-center justify-center transition border border-zinc-800 text-gold-400"><i className="fa-brands fa-whatsapp text-sm"></i></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#home" className="hover:text-gold-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-gold-400 transition">About Us</a></li>
            <li><a href="#menu" onClick={() => filterMenu('all')} className="hover:text-gold-400 transition">Our Menu</a></li>
            <li><a href="#menu" onClick={() => filterMenu('single-plates')} className="hover:text-gold-400 transition">Single Plates</a></li>
            <li><a href="#menu" onClick={() => filterMenu('drinks')} className="hover:text-gold-400 transition">Drinks & Minerals</a></li>
            <li><a href="#menu" onClick={() => filterMenu('pastries')} className="hover:text-gold-400 transition">Pastries</a></li>
            <li><a href="#catering" className="hover:text-gold-400 transition">Catering Services</a></li>
            <li><a href="#booking" className="hover:text-gold-400 transition">Book Appointment</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact Info</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start space-x-3">
              <i className="fa-solid fa-location-dot text-gold-400 mt-0.5"></i>
              <span>Accra, Ghana</span>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fa-solid fa-phone text-gold-400"></i>
              <span>+244 24 164 5782</span>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fa-solid fa-envelope text-gold-400"></i>
              <span>orders@madonnaskitchen.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Working Hours</h4>
          <ul className="space-y-2.5 text-xs">
            <li className="flex justify-between py-1 border-b border-zinc-800/60">
              <span>Monday - Sunday:</span>
              <span className="text-white font-semibold">24/7</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500">
        <p>&copy; 2026 Madonna's Kitchen. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Designed for Exceptional Taste & Quality</p>
      </div>
    </footer>
  );
}
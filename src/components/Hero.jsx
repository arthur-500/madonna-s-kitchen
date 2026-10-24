import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "img/background.png",
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 text-left overflow-hidden transition-all duration-500">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide bg-cover bg-center ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(11, 11, 12, 0.5), rgba(11, 11, 12, 0.75)), url('${slide}')` }}
        ></div>
      ))}

      <div className="relative z-10 max-w-3xl mx-0 px-2 text-white my-auto w-full flex flex-col items-start text-left">
        <span className="font-playfair text-gold-400 text-xl sm:text-2xl italic font-normal mb-1 drop-shadow text-left">Welcome to</span>
        
        {/* Adjusted typography scale for a cleaner, high-end professional appearance */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-[1.2] uppercase text-left drop-shadow-md">
          DELICIOUS FOOD.<br />
          <span className="text-gold-400">EXCEPTIONAL SERVICE.</span><br />
          MEMORABLE MOMENTS.
        </h1>
        
        <p className="text-xs sm:text-sm lg:text-base text-zinc-300 mb-8 font-normal max-w-lg text-left leading-relaxed">
          Local and Continental dishes, tasty snacks, and irresistible pastries for every occasion.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-full mb-12 items-center justify-center w-full sm:w-auto">
          <a href="#menu" className="bg-gold-400 hover:bg-gold-500 text-black font-semibold px-7 py-3.5 rounded-2xl shadow-lg shadow-gold-400/10 transition flex items-center justify-center space-x-2 text-xs tracking-wider uppercase w-full sm:w-auto">
            <i className="fa-brands fa-whatsapp text-base"></i>
            <span>ORDER Now</span>
          </a>
          <a href="#menu" className="flex bg-zinc-900/80 hover:bg-zinc-900 text-white border border-gold-400/60 backdrop-blur-md font-semibold px-7 py-3.5 rounded-2xl transition items-center justify-center text-xs tracking-wider uppercase shadow-md w-full sm:w-auto">
            VIEW OUR MENU
          </a>
        </div>

        {/* Feature Badges */}
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-3 w-full bg-black/60 backdrop-blur-md p-4 rounded-3xl border border-zinc-800/80">
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="text-gold-400 text-base"><i className="fa-solid fa-seedling"></i></div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-200">FRESH INGREDIENTS</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="text-gold-400 text-base"><i className="fa-solid fa-mug-hot"></i></div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-200">GREAT TASTE</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="text-gold-400 text-base"><i className="fa-solid fa-heart"></i></div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-200">MADE WITH LOVE</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="text-gold-400 text-base"><i className="fa-solid fa-clock"></i></div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-200">ON TIME, EVERY TIME</span>
          </div>
        </div>
      </div>
    </section>
  );
}
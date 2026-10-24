import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-gold-400/10 rounded-[2.5rem] -rotate-2"></div>
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" alt="Restaurant Interior" className="relative rounded-3xl shadow-xl w-full object-cover h-[350px] sm:h-[450px] border border-zinc-800" />
      </div>
      <div>
        <span className="text-gold-400 font-extrabold text-sm tracking-widest uppercase mb-2 block">Our Heritage</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">About Madonna's Kitchen</h2>
        <p className="text-zinc-300 mb-4 leading-relaxed text-base">Welcome to Madonna's Kitchen, where delicious food meets exceptional service and memorable moments! We specialize in serving authentic local and continental dishes, tasty snacks, and irresistible pastries for every occasion.</p>
        <p className="text-zinc-300 mb-8 leading-relaxed text-base">Whether you are joining us for a cozy indoor family dinner or ordering quick package dispatches straight to your doorstep via WhatsApp, our dedication to exceptional quality shines in every plate.</p>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-cardBg p-6 rounded-3xl border border-zinc-800">
            <h4 className="text-3xl font-black text-gold-400 mb-1">100%</h4>
            <p className="text-sm font-semibold text-zinc-300">Fresh Ingredients</p>
          </div>
          <div className="bg-cardBg p-6 rounded-3xl border border-zinc-800">
            <h4 className="text-3xl font-black text-gold-400 mb-1">Fast</h4>
            <p className="text-sm font-semibold text-zinc-300">WhatsApp Ordering</p>
          </div>
        </div>
      </div>
    </section>
  );
}
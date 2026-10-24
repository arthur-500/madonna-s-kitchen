import React from 'react';

export default function Catering() {
  const items = [
    { icon: "fa-ring", name: "Weddings" },
    { icon: "fa-cake-candles", name: "Birthdays" },
    { icon: "fa-briefcase", name: "Corporate Events" },
    { icon: "fa-champagne-glasses", name: "Parties" },
    { icon: "fa-place-of-worship", name: "Funerals" },
    { icon: "fa-utensils", name: "Private Dinners" },
    { icon: "fa-house", name: "Outdooring" },
    { icon: "fa-star", name: "Special Days" },
  ];

  return (
    <section id="catering" className="bg-cardBg py-16 px-4 sm:px-6 lg:px-8 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-gold-400 font-extrabold text-xs tracking-[0.3em] uppercase mb-2 block">Professional Event Catering</span>
        <h2 className="text-2xl sm:text-4xl font-black text-white mb-10 tracking-tight uppercase">WE CATER FOR</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="bg-darkBg p-5 rounded-2xl border border-zinc-800 flex flex-col items-center justify-center space-y-3 hover:border-gold-400 transition">
              <div className={`text-gold-400 text-xl fa-solid ${item.icon}`}></div>
              <span className="text-xs font-bold uppercase text-zinc-300">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
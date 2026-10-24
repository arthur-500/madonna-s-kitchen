import React from 'react';

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80", title: "Cozy Dining Ambiance" },
    { src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80", title: "Freshly Prepared Platters" },
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80", title: "Exquisite Local Dishes" },
    { src: "img/gizzard spicy sauce.png", title: "Grill & Barbecue Specials" },
    { src: "img/fant fante stew.png", title: "Savory Pastries & Snacks" },
    { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80", title: "Sweet Treats & Cakes" }
  ];

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-gold-400 font-extrabold text-sm tracking-widest uppercase mb-2 block">Visual Feast</span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">Our Kitchen Gallery</h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-base">A glimpse into our restaurant atmosphere, appetizing meals, and happy moments.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="relative overflow-hidden rounded-3xl h-72 border border-zinc-800 group">
            <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
              <span className="text-white font-bold text-sm">{img.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
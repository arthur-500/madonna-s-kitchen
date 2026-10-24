import React, { useState } from 'react';

export default function Menu({ addToCart, selectedCategory, setSelectedCategory }) {
  // Local selections tracking for custom portion sizes
  const [sizes, setSizes] = useState({});

  const handleSizeChange = (id, portion, price) => {
    setSizes({ ...sizes, [id]: { portion, price } });
  };

  const familyPackageItems = [
    { id: 1, name: "Palava sauce", img: "img/palava sauce kontomire.png", badge: "Signature" },
    { id: 2, name: "Chicken wings stew", img: "img/chicken wing stew.png", badge: "Local Special" },
    { id: 3, name: "Cassava fish stew", img: "img/cassava fish stew.png", badge: "Crispy Snack" },
    { id: 4, name: "Red fish stew", img: "img/red fish stew.png", badge: "Traditional" },
    { id: 5, name: "Turkey wings stew", img: "img/turkey wings stew.png", badge: "Popular" },
    { id: 6, name: "Fante Fante", img: "img/fant fante stew.png", badge: "Seafood" },
    { id: 7, name: "Corned Beef vegetable stew", img: "img/corned beef stew.png", badge: "Stew" },
    { id: 8, name: "Beef vegetable stew", img: "img/vegetable beef stew.png", badge: "Hearty" },
    { id: 9, name: "Koobi Salmon egg stew", img: "img/koobi stew.png", badge: "Local Delicacy" },
    { id: 10, name: "Gizzard cabbage stew", img: "img/gizzard spicy sauce.png", badge: "Specialty" },
    { id: 11, name: "Goat meat stew", img: "img/goat meat stew.png", badge: "Premium" },
    { id: 12, name: "Garden eggs stew", img: "img/garden egg stew.png", badge: "Local Favourite" },
    { id: 13, name: "Spicy gizzard sauce", img: "img/gizzard spicy sauce.png", badge: "Spicy" },
    { id: 14, name: "Beans stew/Aboboi", img: "img/beans stew.png", badge: "Healthy" },
    { id: 15, name: "Vegetable Stew Only", img: "img/vegetable only stew.png", badge: "Vegetarian" }
  ];

  const singlePlatesList = [
    { name: "Single Jollof Rice & Chicken", price: 35.00, img: "img/jollof.png" },
    { name: "Single Fried Rice & Chicken", price: 35.00, img: "img/friedrice.png" },
    { name: "Single Waakye & Accompaniments", price: 35.00, img: "img/waakye.png" },
    { name: "Single Banku & Tilapia/Stew", price: 35.00, img: "img/Ampesi.png" },
  ];

  const drinksList = [
    { name: "Mashke", price: 15.00, img: "img/Marshed Kenkey.png" },
    { name: "Straw berry Yogurt", price: 20.00, img: "img/yogot.png" },
    { name: "Vanila Yoghurt", price: 20.00, img: "img/vanilla.png" },
    { name: "Mashke W/peanut", price: 18.00, img: "img/Marshed Kenkey.png" },
    { name: "Mashke W/coconut", price: 20.00, img: "img/Marshed Kenkey.png" },
    { name: "Pepsi (Mineral)", price: 30.00, img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=600&q=80" },
    { name: "Cocacola (Mineral)", price: 30.00, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80" },
    { name: "Mirinda (Mineral)", price: 30.00, img: "img/mirinda.png" },
    { name: "Sprite (Mineral)", price: 30.00, img: "img/sprite.png" },
  ];

  const pastriesList = [
    { name: "Meat Pie", price: 10.00, img: "img/meatpie.png" },
    { name: "Chin Chin", price: 10.00, img: "img/chinchin.png" },
    { name: "Baked Chips", price: 10.00, img: "img/bakedchips.png" },
    { name: "Doughnut", price: 10.00, img: "img/Donot.png" },
    { name: "Cookies", price: 10.00, img: "img/cookies.png" },
  ];

  return (
    <section id="menu" className="bg-cardBg py-20 px-4 sm:px-6 lg:px-8 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-gold-400 font-semibold text-xs tracking-widest uppercase mb-2 block">Our Gastronomy</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-tight">Explore Our Menu Selection</h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-sm">All items are billed in Ghanaian Cedis (₵) at exact standard menu pricing.</p>
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button onClick={() => setSelectedCategory('all')} className={`menu-tab px-6 py-2.5 rounded-2xl text-xs uppercase tracking-wider transition ${selectedCategory === 'all' ? 'bg-gold-400 text-black font-semibold shadow-md' : 'bg-darkBg text-zinc-300 font-medium border border-zinc-800'}`}>Family packages</button>
          <button onClick={() => setSelectedCategory('single-plates')} className={`menu-tab px-6 py-2.5 rounded-2xl text-xs uppercase tracking-wider transition ${selectedCategory === 'single-plates' ? 'bg-gold-400 text-black font-semibold shadow-md' : 'bg-darkBg text-zinc-300 font-medium border border-zinc-800'}`}>Single Plates</button>
          <button onClick={() => setSelectedCategory('drinks')} className={`menu-tab px-6 py-2.5 rounded-2xl text-xs uppercase tracking-wider transition ${selectedCategory === 'drinks' ? 'bg-gold-400 text-black font-semibold shadow-md' : 'bg-darkBg text-zinc-300 font-medium border border-zinc-800'}`}>Drinks & Minerals</button>
          <button onClick={() => setSelectedCategory('pastries')} className={`menu-tab px-6 py-2.5 rounded-2xl text-xs uppercase tracking-wider transition ${selectedCategory === 'pastries' ? 'bg-gold-400 text-black font-semibold shadow-md' : 'bg-darkBg text-zinc-300 font-medium border border-zinc-800'}`}>Pastries</button>
        </div>

        {/* Family Packages / Dishes Section */}
        {(selectedCategory === 'all') && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24">
            {familyPackageItems.map((item) => {
              const currentSelection = sizes[item.id] || { portion: 'Regular', price: 310.00 };
              return (
                <div key={item.id} className="menu-item bg-darkBg rounded-3xl shadow-sm border border-zinc-800 overflow-hidden hover:border-gold-400/50 transition duration-300 flex flex-col justify-between group">
                  <div className="relative overflow-hidden h-48 sm:h-56">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <span className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/80 backdrop-blur-md text-gold-400 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-xl border border-zinc-700">{item.badge}</span>
                  </div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Scaled title font size for a sleek look */}
                      <h4 className="text-sm sm:text-base font-medium text-white mb-3 tracking-wide">{item.name}</h4>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col items-start bg-cardBg p-3 rounded-2xl border border-zinc-800 gap-1">
                        <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-zinc-400">Portion:</span>
                        <select 
                          onChange={(e) => {
                            const val = e.target.value;
                            const price = val === 'Family' ? 530.00 : 310.00;
                            handleSizeChange(item.id, val, price);
                          }}
                          className="bg-darkBg border border-zinc-700 rounded-xl px-3 py-2 text-xs sm:text-sm font-normal text-white focus:outline-none focus:ring-2 focus:ring-gold-400 w-full truncate"
                        >
                          <option value="Regular" className="bg-[#121215] text-zinc-100 py-1">Regular (₵ 310.00)</option>
                          <option value="Family" className="bg-[#121215] text-zinc-100 py-1">Family (₵ 530.00)</option>
                        </select>
                      </div>
                      <button onClick={() => addToCart(item.name, currentSelection.portion, currentSelection.price)} className="w-full bg-gold-400 hover:bg-gold-500 text-black font-semibold py-3 sm:py-3.5 rounded-2xl transition duration-200 shadow-sm flex items-center justify-center space-x-2 text-xs uppercase tracking-wider">
                        <i className="fa-solid fa-plus text-xs"></i>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* SINGLE PLATE FOODS SECTION */}
        {(selectedCategory === 'all' || selectedCategory === 'single-plates') && (
          <div className="mt-12 pt-8">
            <div className="text-center mb-12">
              <span className="text-gold-400 font-semibold text-xs tracking-[0.3em] uppercase mb-2 block">Quick & Affordable</span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight uppercase">Single Plate</h3>
              <p className="text-zinc-400 text-sm mt-2">Enjoy delicious, ready-to-eat single servings at flat standard pricing.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {singlePlatesList.map((item, idx) => (
                <div key={idx} className="menu-item relative bg-gradient-to-br from-[#18181b] via-[#121215] to-[#09090b] rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-zinc-800/80 hover:border-gold-400 transition-all duration-500 flex flex-col justify-between group overflow-hidden">
                  <div className="flex justify-between items-center mb-4 z-10">
                    <span className="bg-gold-400/10 text-gold-400 text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest border border-gold-400/30">Single Plate</span>
                    <span className="text-gold-400 font-semibold text-sm sm:text-base">₵ {item.price.toFixed(2)}</span>
                  </div>
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-2xl my-4 z-10 border border-zinc-800/60">
                    <img src={item.img} alt={item.name} className="relative h-full w-full object-cover group-hover:scale-105 transition-all duration-500" />
                  </div>
                  <div className="pt-4 border-t border-zinc-800/80 z-10 flex flex-col justify-end space-y-4">
                    {/* Refined food title font size */}
                    <h4 className="text-sm sm:text-base font-medium text-white group-hover:text-gold-400 transition-colors tracking-wide">{item.name}</h4>
                    <button onClick={() => addToCart(item.name, 'Single Portion', item.price)} className="w-full bg-gold-400 hover:bg-gold-500 text-black font-semibold py-3.5 rounded-2xl transition shadow-lg flex items-center justify-center space-x-2 text-xs uppercase tracking-wider">
                      <i className="fa-solid fa-plus text-xs"></i>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DRINKS SECTION */}
        {(selectedCategory === 'all' || selectedCategory === 'drinks') && (
          <div className="mt-20 pt-8">
            <div className="text-center mb-12">
              <span className="text-gold-400 font-semibold text-xs tracking-[0.3em] uppercase mb-2 block">Refreshing Selections</span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight uppercase">Drinks & Minerals</h3>
              <p className="text-zinc-400 text-sm mt-2">Explore our ice-cold beverage and mineral lineup crafted to perfection.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {drinksList.map((drink, idx) => (
                <div key={idx} className="menu-item relative bg-gradient-to-br from-[#18181b] via-[#121215] to-[#09090b] rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-zinc-800/80 hover:border-gold-400 transition-all duration-500 flex flex-col justify-between group overflow-hidden">
                  <div className="flex justify-between items-center mb-4 z-10">
                    <span className="bg-gold-400/10 text-gold-400 text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest border border-gold-400/30">Ice Cold</span>
                    <span className="text-gold-400 font-semibold text-sm sm:text-base">₵ {drink.price.toFixed(2)}</span>
                  </div>
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-2xl my-4 z-10 border border-zinc-800/60">
                    <img src={drink.img} alt={drink.name} className="relative h-full w-full object-cover group-hover:scale-105 transition-all duration-500" />
                  </div>
                  <div className="pt-4 border-t border-zinc-800/80 z-10 flex flex-col justify-end space-y-4">
                    {/* Refined drink title font size */}
                    <h4 className="text-sm sm:text-base font-medium text-white group-hover:text-gold-400 transition-colors tracking-wide">{drink.name}</h4>
                    <button onClick={() => addToCart(drink.name, 'Standard', drink.price)} className="w-full bg-gold-400 hover:bg-gold-500 text-black font-semibold py-3.5 rounded-2xl transition shadow-lg flex items-center justify-center space-x-2 text-xs uppercase tracking-wider">
                      <i className="fa-solid fa-plus text-xs"></i>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PASTRIES SECTION */}
        {(selectedCategory === 'all' || selectedCategory === 'pastries') && (
          <div className="mt-20 pt-8">
            <div className="text-center mb-12">
              <span className="text-gold-400 font-semibold text-xs tracking-[0.3em] uppercase mb-2 block">Baked Fresh Daily</span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight uppercase">Irresistible Pastries</h3>
              <p className="text-zinc-400 text-sm mt-2">Treat yourself to our delicious selection of freshly baked pastries and snacks.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {pastriesList.map((pastry, idx) => (
                <div key={idx} className="menu-item relative bg-gradient-to-br from-[#18181b] via-[#121215] to-[#09090b] rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-zinc-800/80 hover:border-gold-400 transition-all duration-500 flex flex-col justify-between group overflow-hidden">
                  <div className="flex justify-between items-center mb-4 z-10">
                    <span className="bg-gold-400/10 text-gold-400 text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest border border-gold-400/30">Freshly Baked</span>
                    <span className="text-gold-400 font-semibold text-sm sm:text-base">₵ {pastry.price.toFixed(2)}</span>
                  </div>
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-2xl my-4 z-10 border border-zinc-800/60">
                    <img src={pastry.img} alt={pastry.name} className="relative h-full w-full object-cover group-hover:scale-105 transition-all duration-500" />
                  </div>
                  <div className="pt-4 border-t border-zinc-800/80 z-10 flex flex-col justify-end space-y-4">
                    {/* Refined pastry title font size */}
                    <h4 className="text-sm sm:text-base font-medium text-white group-hover:text-gold-400 transition-colors tracking-wide">{pastry.name}</h4>
                    <button onClick={() => addToCart(pastry.name, 'Standard', pastry.price)} className="w-full bg-gold-400 hover:bg-gold-500 text-black font-semibold py-3.5 rounded-2xl transition shadow-lg flex items-center justify-center space-x-2 text-xs uppercase tracking-wider">
                      <i className="fa-solid fa-plus text-xs"></i>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
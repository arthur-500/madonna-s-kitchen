import React, { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    datetime: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let msg = `*New Appointment / Reservation Request*%0A%0A`;
    msg += `*Name:* ${formData.name}%0A`;
    msg += `*Phone:* ${formData.phone}%0A`;
    msg += `*Service:* ${formData.service}%0A`;
    msg += `*Date & Time:* ${formData.datetime}%0A`;
    if(formData.notes) {
      msg += `*Notes:* ${formData.notes}%0A`;
    }
    msg += `%0APlease confirm my booking.`;

    const url = `https://wa.me/233207076481?text=${msg}`;
    window.open(url, '_blank');
  };

  return (
    <section id="booking" className="bg-cardBg py-20 px-4 sm:px-6 lg:px-8 border-y border-zinc-800">
      <div className="max-w-3xl mx-auto">
        {/* Refined section header sizing */}
        <div className="text-center mb-12">
          <span className="text-gold-400 font-semibold text-xs tracking-widest uppercase mb-2 block">Reserve Your Spot</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-tight">Book an Appointment or Table</h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-sm">Fill out the form below to reserve your table or schedule catering services.</p>
        </div>

        <div className="bg-darkBg border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-2">Your Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Ama Serwaa" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-cardBg border border-zinc-700 rounded-2xl px-4 py-3.5 text-sm font-normal text-white focus:outline-none focus:ring-2 focus:ring-gold-400" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="e.g. +233 24 000 0000" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-cardBg border border-zinc-700 rounded-2xl px-4 py-3.5 text-sm font-normal text-white focus:outline-none focus:ring-2 focus:ring-gold-400" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-2">Type of Service</label>
                <select 
                  required 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-cardBg border border-zinc-700 rounded-2xl px-4 py-3.5 text-sm font-normal text-white focus:outline-none focus:ring-2 focus:ring-gold-400"
                >
                  {/* Options explicitly styled with dark background & light text for browser legibility */}
                  <option value="" disabled className="bg-[#121215] text-zinc-400">Select a Service</option>
                  <option value="Dine-In Table Reservation" className="bg-[#121215] text-zinc-100 py-2">Dine-In Table Reservation</option>
                  <option value="Private Event Catering" className="bg-[#121215] text-zinc-100 py-2">Private Event Catering</option>
                  <option value="Wedding Catering" className="bg-[#121215] text-zinc-100 py-2">Wedding Catering</option>
                  <option value="Corporate Event Booking" className="bg-[#121215] text-zinc-100 py-2">Corporate Event Booking</option>
                  <option value="Special Party / Outdooring" className="bg-[#121215] text-zinc-100 py-2">Special Party / Outdooring</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-2">Date & Time</label>
                <input 
                  type="datetime-local" 
                  required 
                  value={formData.datetime}
                  onChange={(e) => setFormData({...formData, datetime: e.target.value})}
                  className="w-full bg-cardBg border border-zinc-700 rounded-2xl px-4 py-3.5 text-sm font-normal text-white focus:outline-none focus:ring-2 focus:ring-gold-400" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-2">Additional Notes / Requests</label>
              <textarea 
                rows="4" 
                placeholder="Tell us about guest count, specific food choices, or special arrangements..." 
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full bg-cardBg border border-zinc-700 rounded-2xl px-4 py-3.5 text-sm font-normal text-white focus:outline-none focus:ring-2 focus:ring-gold-400"
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-gold-400 hover:bg-gold-500 text-black font-semibold py-4 rounded-2xl transition duration-200 shadow-lg shadow-gold-400/10 flex items-center justify-center space-x-2.5 text-xs uppercase tracking-wider">
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>Book Now</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
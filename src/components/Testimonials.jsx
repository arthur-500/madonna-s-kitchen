import React from 'react';

export default function Testimonials() {
  const reviews = [
    { quote: "Madonna's Kitchen serves the absolute best local stew dishes in town! The delivery via WhatsApp was super prompt and the food arrived piping hot.", name: "Esi Nelson", role: "Regular Customer", initials: "EN" },
    { quote: "We hired them for our corporate event catering and every single guest was blown away by the quality and flavor of the local dishes. Highly recommended!", name: "Kwame Appiah", role: "Event Coordinator", initials: "KA" },
    { quote: "Their stews and sauce choices are top-notch! I order meat portions regularly for my office meetings. Amazing customer service too.", name: "Akosua Adoma", role: "Corporate Client", initials: "AA" }
  ];

  return (
    <section id="testimonials" className="bg-white text-zinc-900 py-24 px-4 sm:px-6 lg:px-8 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-extrabold text-sm tracking-widest uppercase mb-2 block">Customer Feedback</span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 mb-4 tracking-tight">Testimonials</h2>
          <p className="text-zinc-600 max-w-xl mx-auto text-base">Hear what our wonderful customers have to say about our dishes and service.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex text-gold-500 space-x-1 mb-4 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p className="text-zinc-700 text-sm leading-relaxed mb-6 italic">"{rev.quote}"</p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-zinc-200">
                <div className="w-10 h-10 bg-gold-400/20 text-gold-600 rounded-full flex items-center justify-center font-bold text-sm">{rev.initials}</div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">{rev.name}</h4>
                  <p className="text-zinc-500 text-xs">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
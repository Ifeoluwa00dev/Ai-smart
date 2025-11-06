import React from "react";

const logos = [
  { id: 1, name: "Godrej Properties", img: "https://via.placeholder.com/70x20/f7f7f7/333?text=Logo1" },
  { id: 2, name: "Oberoi Realty", img: "https://via.placeholder.com/70x20/f7f7f7/333?text=Logo2" },
  { id: 3, name: "Architect Hafeez Contractor", img: "https://via.placeholder.com/70x20/f7f7f7/333?text=Logo3" },
  { id: 4, name: "Prestige Group", img: "https://via.placeholder.com/70x20/f7f7f7/333?text=Logo4" },
  { id: 5, name: "Shapoorji Pallonji", img: "https://via.placeholder.com/70x20/f7f7f7/333?text=Logo5" },
  { id: 6, name: "Lodha Group", img: "https://via.placeholder.com/70x20/f7f7f7/333?text=Logo6" },
  { id: 7, name: "DLF", img: "https://via.placeholder.com/70x20/f7f7f7/333?text=Logo7" },
];

const testimonials = [
  {
    id: 1,
    logo: "https://via.placeholder.com/15x15/f7f7f7/333?text=L",
    text: "The Quality And Finish Of Imperial Stones' Marble Exceeded Our Expectations. Their Team Handled Everything — From Selection To Installation — Flawlessly.",
    name: "Ananya Verma",
    role: "Interior Designer",
    company: "Studio Luxe Interiors",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    companyName: "Lodha Group",
  },
  {
    id: 2,
    logo: "https://via.placeholder.com/15x15/f7f7f7/333?text=S",
    text: "Their Italian Marble Collection Added A True Sense Of Grandeur To Our Hotel Project. Excellent Craftsmanship, Timely Delivery, And Professional Support Throughout.",
    name: "Ananya Verma",
    role: "Interior Designer",
    company: "Studio Luxe Interiors",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    companyName: "Shapoorji Pallonji",
  },
  {
    id: 3,
    logo: "https://via.placeholder.com/15x15/f7f7f7/333?text=L",
    text: "Working With IS Marbles Has Always Been Effortless. Their Reliable Service, Genuine Materials, And Attention To Detail Make Them Our Go-To Partner.",
    name: "Ananya Verma",
    role: "Interior Designer",
    company: "Studio Luxe Interiors",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    companyName: "Lodha Group",
  },
];

const Testimonial = () => {
  return (
    <section className="max-w-[1200px] mx-auto my-16 px-5">
      


      {/* Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-[#f9f9f9] rounded-2xl p-7 flex flex-col justify-between shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            <div className="flex items-center justify-between mb-4">
              <img
                src={t.avatar}
                alt="avatar"
                className="w-[42px] h-[42px] rounded-full object-cover"
              />
              <div className="flex items-center justify-center px-2.5 py-1.5 rounded-2xl border-[1.8px] border-[#eee] ml-2.5">
                <img
                  src={t.logo}
                  alt={t.companyName}
                  className="w-[15px] h-auto object-contain mr-2.5"
                />
                <span className="text-sm">{t.companyName}</span>
              </div>
              <div className="relative w-6 h-6 mx-auto">
                <span className="absolute top-[-20px] left-0 text-[60px] font-bold text-[#da4f] leading-none font-serif">
                  "
                </span>
              </div>
            </div>
            
            <p className="text-base leading-relaxed text-[#333] mb-6 font-light">
              "{t.text}"
            </p>
            
            <div className="border-l-[3px] border-[#d3a853] pl-3">
              <strong className="block font-semibold text-[15px] mb-0.5">
                {t.name}
              </strong>
              <span className="block text-[13px] text-[#777]">{t.role}</span>
              <span className="block text-[13px] text-[#777]">{t.company}</span>
            </div>
          </div>
        ))}
      </div>

<h2 className="text-center text-[28px] font-normal text-[#222] mt-7 mb-7">
        Trusted By Leading Architects & Developers
      </h2>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10 mt-10 mx-4 sm:mx-20 lg:mx-[150px] lg:mr-[100px]">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center gap-1 bg-[#f7f7f7] rounded-[40px] px-1.5 py-1.5 font-light text-[#333] text-[15px] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
          >
            <img
              src={logo.img}
              alt={logo.name}
              className="w-[70px] h-5 object-contain block"
            />
            <span>{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
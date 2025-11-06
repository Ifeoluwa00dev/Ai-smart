import React from 'react';

const Packages = () => {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80",
      title: "Imported Marble Collection",
      description: "Explore our exclusive range of luxury marbles sourced from the world's finest quarries.",
      buttonText: "View Collection",
      rotateIcon: "rotate-45"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      title: "Granite & Onyx",
      description: "Premium granite and onyx stones for both aesthetic and durable surfaces.",
      buttonText: "Discover More",
      rotateIcon: "rotate-45",
      topContent: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      title: "Custom Stone Fabrication",
      description: "Tailored cutting, polishing, and finishing to match your design vision.",
      buttonText: "Learn More",
      rotateIcon: "-rotate-45"
    }
  ];

  return (

    <div id='services' className=" bg-[rgb(13,29,44)]">
      {/*heading  */}

      <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl font-bold mb-2 mt-4 bg-amber-400 bg-clip-text text-transparent">
            OUR SERVICES
          </h1>
          <p className="text-xl text-white">
            what we offer
          </p>
        </div>

    <div id='services' className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-16">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative h-[500px] md:h-[400px] lg:h-[500px] rounded-[20px] overflow-hidden cursor-pointer group"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          
          <div className={`absolute ${product.topContent ? 'top-0' : 'bottom-0'} left-0 right-0 p-10 text-white`}>
            <h2 className="text-xl font-light mb-1 tracking-wide">
              {product.title}
            </h2>
            <p className="text-sm leading-tight text-white/85 mb-6 font-light">
              {product.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-7 py-3 border border-white/40 rounded-full text-sm transition-all duration-300 hover:bg-white hover:text-black hover:gap-3.5"
            >
              {product.buttonText}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-4 h-4 ${product.rotateIcon}`}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Packages;
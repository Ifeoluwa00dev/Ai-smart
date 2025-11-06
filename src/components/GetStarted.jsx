import React from "react";
import { FaComments, FaRulerCombined, FaCheckCircle, FaTruck } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaComments />,
    title: "Consultation",
    description: "Share your vision with our experts. We'll guide you through material options, designs, and provide personalized recommendations.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-600",
  },
  {
    id: 2,
    icon: <FaRulerCombined />,
    title: "Measurement & Selection",
    description: "Our team visits your site for precise measurements. Choose from our premium collection with samples and detailed specifications.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-600",
  },
  {
    id: 3,
    icon: <FaCheckCircle />,
    title: "Approval & Fabrication",
    description: "Review and approve designs. Our craftsmen begin custom cutting, polishing, and finishing to exact specifications.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-600",
  },
  {
    id: 4,
    icon: <FaTruck />,
    title: "Delivery & Installation",
    description: "Timely delivery and professional installation by our skilled team. We ensure flawless placement and a perfect finish.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-600",
  },
];

const GetStarted = () => {
  return (
    <section className="py-20 px-5 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            How To Get Started
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            From consultation to installation, we make the process seamless. 
            Here's how we bring your vision to life.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative group"
            >
              {/* Connecting Line (hidden on mobile, shown on desktop between cards) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(100%)] w-8 h-0.5 bg-gray-300 z-0" />
              )}

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-lg shadow-lg">
                  {step.id}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.color} ${step.iconColor} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed flex-grow">
                  {step.description}
                </p>

                {/* Bottom Border Accent */}
                <div className={`mt-6 h-1 w-16 ${step.borderColor} border-t-4 rounded-full`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
              Ready To Transform Your Space?
            </h3>
            <p className="text-gray-600 mb-8 font-light max-w-xl mx-auto">
              Let's discuss your project and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-light text-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-light text-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
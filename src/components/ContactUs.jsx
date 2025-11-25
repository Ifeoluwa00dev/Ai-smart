import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can later connect this with EmailJS or an API endpoint
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Contact AI Smart Flu
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Have questions about AI Smart Flu? Whether it’s support, partnership,
            or general inquiry — we’d love to hear from you. Our team responds
            within 24 hours.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-amber-400" />
              <span>support@aismartflu.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-amber-400" />
              <span>+44 7886 980102</span>
            </div>
            {/* <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Obafemi Awolowo University, Ile-Ife, Nigeria</span>
            </div> */}
          </div>

          <div className="mt-8 flex space-x-4">
          <a
          href="https://whatsapp.com/channel/0029VbBGaIU42DchbyYOnd3c"
          target="_blank"
          className="p-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-6 h-6" alt="WhatsApp" />
          
        </a>
            <a
              href="https://t.me/SmartFlu"
              target="_blank"
              className="p-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                alt="Telegram"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://discord.gg/6eX4tTdX"
              target="_blank"
              className="p-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/906/906361.png"
                alt="Discord"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-[rgb(13,29,44)] rounded-2xl shadow-2xl p-8 backdrop-blur-xl border border-white/10">
          <h3 className="text-2xl font-semibold mb-6 text-amber-400">
            Send us a message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-slate-800 text-white border border-gray-700 focus:border-amber-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-slate-800 text-white border border-gray-700 focus:border-amber-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-300">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 rounded-lg bg-slate-800 text-white border border-gray-700 focus:border-amber-500 outline-none transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-all"
            >
              <Send className="w-5 h-5" />
              {submitted ? "Message Sent ✅" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

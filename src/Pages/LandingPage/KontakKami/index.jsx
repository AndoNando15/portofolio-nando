import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

const KontakKami = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].contact;
  const navT = translations[language].nav;
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const finalMessage = `Halo Nando, saya ingin mendiskusikan sesuatu.\n\n${message}`;
    window.open(`https://wa.me/6285785455575?text=${encodeURIComponent(finalMessage)}`, '_blank');
  };

  return (
    <section id="kontak-kami" className="py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-12 xl:px-24 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Info Side */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-3 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-text-dark flex items-center justify-center lg:justify-start gap-3">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                {t.title}
              </h2>
              <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
                {t.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {/* Contact Items */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <FaPhoneAlt size={16} />
                </div>
                <div>
                  <p className="font-bold text-sm text-text-dark">+62 857-8545-5575</p>
                  <p className="text-xs text-gray-500">Phone</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <p className="font-bold text-sm text-text-dark">andonando158@gmail.com</p>
                  <p className="text-xs text-gray-500">Email</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <FaInstagram size={16} />
                </div>
                <div>
                  <p className="font-bold text-sm text-text-dark">@andonando_15</p>
                  <p className="text-xs text-gray-500">Instagram</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <FaWhatsapp size={16} />
                </div>
                <div>
                  <p className="font-bold text-sm text-text-dark">Direct Chat</p>
                  <p className="text-xs text-gray-500">WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-1/2">
            <div className="glass p-6 rounded-3xl shadow-sm space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-text-dark">{t.quick_msg}</h3>
                <p className="text-xs text-gray-500">
                  {t.quick_msg_desc}
                </p>
              </div>

              <div className="space-y-3">
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.message}
                  className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none min-h-[120px] transition-all"
                />
                <button
                  onClick={handleSend}
                  className="w-full btn-primary py-2.5 md:py-3 text-sm md:text-base font-bold flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
                  {t.send}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontakKami;

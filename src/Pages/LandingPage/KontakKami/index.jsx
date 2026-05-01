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
    <section id="kontak-kami" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Info Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark flex items-center justify-center lg:justify-start gap-3">
                <span className="w-10 h-1 bg-primary rounded-full"></span>
                {t.title}
              </h2>
              <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
                {language === 'en' 
                  ? "Feel free to reach out for collaborations or just to say hi! I'm always open to discussing new projects."
                  : "Jangan ragu untuk menghubungi saya untuk kolaborasi atau sekadar menyapa! Saya selalu terbuka untuk mendiskusikan proyek baru."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Contact Cards */}
              <div className="p-6 rounded-2xl bg-primary/5 space-y-2 border border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <FaPhoneAlt />
                </div>
                <h4 className="font-bold text-text-dark">Phone</h4>
                <p className="text-sm text-gray-600">+62 857-8545-5575</p>
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 space-y-2 border border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <FaEnvelope />
                </div>
                <h4 className="font-bold text-text-dark">Email</h4>
                <p className="text-sm text-gray-600">andonando158@gmail.com</p>
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 space-y-2 border border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <FaInstagram />
                </div>
                <h4 className="font-bold text-text-dark">Instagram</h4>
                <p className="text-sm text-gray-600">@andonando_15</p>
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 space-y-2 border border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <FaWhatsapp />
                </div>
                <h4 className="font-bold text-text-dark">WhatsApp</h4>
                <p className="text-sm text-gray-600">Direct Chat</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-1/2">
            <div className="glass p-8 rounded-3xl shadow-xl space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-text-dark">{language === 'en' ? 'Quick Message' : 'Pesan Cepat'}</h3>
                <p className="text-sm text-gray-500">
                  {language === 'en' ? 'Send a message directly to my WhatsApp' : 'Kirim pesan langsung ke WhatsApp saya'}
                </p>
              </div>

              <div className="space-y-4">
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.message}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none min-h-[160px] transition-all"
                />
                <button
                  onClick={handleSend}
                  className="w-full btn-primary py-4 text-lg font-bold flex items-center justify-center gap-3 group cursor-pointer"
                >
                  <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
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

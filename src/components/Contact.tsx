import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Calendar, Building2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Column */}
              <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-br from-green-600 to-green-700">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Contactez-nous</h2>
                <p className="text-green-100 mb-6 sm:mb-8 text-sm sm:text-base">
                  Prêt à découvrir la différence du nettoyage écologique ? Contactez-nous aujourd'hui 
                  pour une consultation et un devis gratuits.
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-green-500/50 p-2 sm:p-3 rounded-full">
                      <Phone className="text-white h-4 w-4 sm:h-6 sm:w-6" />
                    </div>
                    <span className="text-white text-sm sm:text-base">+33 6 59 12 50 31</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-green-500/50 p-2 sm:p-3 rounded-full">
                      <Mail className="text-white h-4 w-4 sm:h-6 sm:w-6" />
                    </div>
                    <span className="text-white text-sm sm:text-base">masterpropre@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-green-500/50 p-2 sm:p-3 rounded-full">
                      <MapPin className="text-white h-4 w-4 sm:h-6 sm:w-6" />
                    </div>
                    <span className="text-white text-sm sm:text-base">Meudon, 92190</span>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <button className="w-full bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-green-50 transition-all transform hover:scale-105 duration-200 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="font-semibold">Prendre Rendez-vous</span>
                  </button>
                </div>
                <div className="mt-8 sm:mt-12">
                  <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Suivez-nous</h3>
                  <div className="flex space-x-3 sm:space-x-4">
                    <a href="https://www.instagram.com/masterpropre92/" className="bg-green-500/50 p-2 sm:p-3 rounded-full hover:bg-green-400 transition-colors">
                      <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100090419220625" className="bg-green-500/50 p-2 sm:p-3 rounded-full hover:bg-green-400 transition-colors">
                      <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="p-6 sm:p-8 md:p-12 bg-white">
                <div className="h-full flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                    Zones de Service
                  </h3>
                  <div className="space-y-4 sm:space-y-8">
                    <div className="bg-green-50 p-4 sm:p-6 rounded-xl">
                      <h4 className="text-lg sm:text-xl font-semibold text-green-700 mb-2 sm:mb-4">Paris</h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Service dans toute la ville de Paris avec nos solutions de nettoyage écologiques.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 sm:p-6 rounded-xl">
                      <h4 className="text-lg sm:text-xl font-semibold text-green-700 mb-2 sm:mb-4">Hauts-de-Seine</h4>
                      <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                        Nos services de nettoyage premium dans :
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <li className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700 text-sm sm:text-base">Meudon</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700 text-sm sm:text-base">Boulogne-Billancourt</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700 text-sm sm:text-base">Issy-les-Moulineaux</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700 text-sm sm:text-base">Neuilly-sur-Seine</span>
                        </li>
                      </ul>
                      <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 italic">
                        Et les zones environnantes des Hauts-de-Seine
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto pt-6 sm:pt-8">
                    <div className="bg-green-100/50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-xs sm:text-sm text-center">
                        Vous ne savez pas si nous desservons votre zone ? Contactez-nous pour vérifier la disponibilité dans votre région.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

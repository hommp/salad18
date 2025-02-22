import React from "react";
import { Phone, Clock, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#f0f5e9] mr-4">
                <Phone className="h-6 w-6 text-[#9cc90a]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Hubungi Kami
              </h3>
            </div>
            <div className="space-y-2 flex flex-col">
              <a
                href="https://wa.me/6281335688509"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-base hover:text-[#9cc90a] transition duration-300"
              >
                +62 813 3568 8509
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#f0f5e9] mr-4">
                <Clock className="h-6 w-6 text-[#9cc90a]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Jam Buka</h3>
            </div>

            <div className="space-y-2 flex flex-col">
              <p className="text-gray-600 text-base">
                Senin - Sabtu <br /> 09:00 - 21:00
              </p>
              <p className="text-gray-600 text-base">
                Minggu <br /> 09:00 - 17:00
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#f0f5e9] mr-4">
                <MapPin className="h-6 w-6 text-[#9cc90a]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Cabang Beroperasi
              </h3>
            </div>
            <div className="space-y-2 flex flex-col">
              <a
                href="https://maps.google.com/?q=Ponorogo%2C+Jl.+Basuki+Rahmad+No.36%2C+Surodikraman%2C+Ponorogo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-gray-600 text-base hover:text-[#9cc90a] transition duration-300">
                  <span className="text-gray-800 text-base font-semibold">
                    Ponorogo,
                  </span>{" "}
                  Jl. Basuki Rahmad No.36, Surodikraman, Ponorogo
                </p>
              </a>
              <a
                href="https://maps.google.com/?q=Jember%2C+Jl.+Mastrip+No.63%2C+Sumbersari%2C+Jember"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-gray-600 text-base hover:text-[#9cc90a] transition duration-300">
                  <span className="text-gray-800 text-base font-semibold">
                    Jember,
                  </span>{" "}
                  Jl. Mastrip No.63, Sumbersari, Jember (Seberang Fakultas
                  Kedokteran Unej)
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

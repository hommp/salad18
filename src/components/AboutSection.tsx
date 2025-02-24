import React from "react";
import { Heart, Award, Users } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sejarah Usaha</h2>
          <p className="text-gray-600 max-w-3xl mb-4 mx-auto">
            Dimulai sebagai usaha kecil di 2019, Salad 18 telah tumbuh dengan
            mengutamakan kualitas dan inovasi. Dengan resep turun-temurun dan
            buah-buahan segar, kami berkomitmen menyajikan hidangan sehat yang
            memikat.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Dibuat dengan Cinta",
              text: "Setiap mangkuk dibuat dengan hati-hati dan perhatian terhadap detail",
              icon: <Heart className="h-10 w-10 text-[#9cc90a]" />,
            },
            {
              title: "Kualitas Pertama",
              text: "Kami hanya mengambil buah-buahan segar dengan kualitas terbaik",
              icon: <Award className="h-10 w-10 text-[#9cc90a]" />,
            },
            {
              title: "Pelanggan yang Bahagia",
              text: "Ribuan pelanggan yang puas dan terus bertambah",
              icon: <Users className="h-10 w-10 text-[#9cc90a]" />,
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-6">
              <div className="bg-green-50 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-orange-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Misi kami</h3>
              <p className="text-gray-600 mb-4">
                Kami berkomitmen menyediakan hidangan sehat, segar, dan bergizi
                dengan pilihan inovatif. Visi kami adalah menjadi brand healthy
                food yang dikenal secara nasional dan regional.
              </p>
              <p className="text-gray-600">
                Kami terus berinovasi dan berkembang dengan menghadirkan produk
                berkualitas dan pelayanan terbaik untuk Anda.
              </p>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img
                src="about.jpg"
                alt="Fresh fruits"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

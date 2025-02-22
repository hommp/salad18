import React from "react";
import { Product } from "../types";
import { MessageCircle } from "lucide-react";

interface HeroSectionProps {
  products: Product[];
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="hero.jpg"
          alt="Fresh fruits"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          SALAD 18
          <br />
          <span className="text-[#9cc90a]">PONOROGO</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Temukan perpaduan sempurna bahan-bahan segar, dipilih dengan cermat
          dan disiapkan setiap hari untuk gaya hidup sehat Anda.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection("menu")}
            className="bg-[#9cc90a] text-white px-8 py-3 rounded-full transition duration-300 hover:scale-105 shadow-lg cursor-pointer"
          >
            Pesan Sekarang
          </button>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border-2 border-[#fe6704] text-white px-8 py-3 rounded-full transition duration-300 bg-[#fe6704] hover:scale-105 shadow-lg"
          >
            <MessageCircle className="h-6 w-6 mr-2" />
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

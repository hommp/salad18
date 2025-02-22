import React from "react";
import { Facebook, Instagram, Music2 } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-xl">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-center">
            © 2025 Salad 18. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#9cc90a] transition-colors duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#9cc90a] transition-colors duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#9cc90a] transition-colors duration-300"
            >
              <Music2 className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

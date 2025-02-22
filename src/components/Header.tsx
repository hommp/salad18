import React from "react";
import { Menu } from "lucide-react";

interface HeaderProps {
  scrolled: boolean;
  scrollToSection: (sectionId: string) => void;
  openMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  scrolled,
  scrollToSection,
  openMobileMenu,
}) => {
  return (
    <header
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img className="w-14" src="/logo.png" alt="logo" />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {["home", "about", "menu"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`transition-colors duration-300 cursor-pointer ${
                scrolled
                  ? "text-gray-600 hover:text-[#9cc90a]"
                  : "text-white hover:text-[#9cc90a]"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={openMobileMenu}
            className={`transition-colors duration-300 ${
              scrolled ? "text-gray-600" : "text-white"
            }`}
          >
            <Menu className="h-6 w-6 cursor-pointer" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { X } from "lucide-react";

interface MobileSidebarProps {
  mobileMenuOpen: boolean;
  closeMobileMenu: () => void;
  scrollToSection: (sectionId: string) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  mobileMenuOpen,
  closeMobileMenu,
  scrollToSection,
}) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end">
          <button
            onClick={closeMobileMenu}
            className="text-gray-600 focus:outline-none"
          >
            <X className="h-6 w-6 cursor-pointer" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-4">
          {["home", "about", "menu"].map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                closeMobileMenu();
              }}
              className="text-gray-600 hover:text-[#9cc90a] cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>
      {mobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black opacity-50 z-40"
        />
      )}
    </>
  );
};

export default MobileSidebar;

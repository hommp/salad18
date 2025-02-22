import React, { useMemo } from "react";
import { Product } from "../types";
import { CATEGORIES } from "../data/categories";
import ProductCard from "./ProductCard"; // import komponen baru

interface ProductsSectionProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  windowWidth: number;
  products: Product[];
  handleWhatsAppOrder: (productName: string, price: string) => void;
  scrollToSection: (sectionId: string) => void;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  currentPage,
  setCurrentPage,
  windowWidth,
  products,
  handleWhatsAppOrder,
  scrollToSection,
}) => {
  const itemsPerPage = windowWidth < 768 ? 4 : 6;

  const filteredProducts = useMemo(() => {
    let filtered =
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.tags.includes(selectedCategory));
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [selectedCategory, searchTerm, products]);

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="menu" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Menu kami</h2>

      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Cari produk..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 pl-12 border border-gray-200 rounded-full shadow-md focus:outline-none transition duration-300 ease-in-out text-sm"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <svg
              className="w-6 h-6 text-[#9cc90a]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all transform hover:scale-105 cursor-pointer ${
                selectedCategory === category.id
                  ? "bg-[#9cc90a] text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-green-50 shadow-md"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {displayedProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            handleWhatsAppOrder={handleWhatsAppOrder}
          />
        ))}
      </div>

      {filteredProducts.length > itemsPerPage && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from(
            { length: Math.ceil(filteredProducts.length / itemsPerPage) },
            (_, i) => i + 1
          ).map((page) => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                scrollToSection("menu");
              }}
              className={`px-3 py-2 rounded-full transition transform hover:scale-105 cursor-pointer ${
                currentPage === page
                  ? "underline underline-offset-4 decoration-[#9cc90a] text-[#9cc90a] bg-transparent"
                  : "bg-white text-gray-600"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsSection;

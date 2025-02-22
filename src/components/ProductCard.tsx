import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  handleWhatsAppOrder: (productName: string, price: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  handleWhatsAppOrder,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">
          {isExpanded
            ? product.description
            : `${product.description.substring(0, 100)}...`}
        </p>
        <button
          onClick={toggleDescription}
          className="text-sm text-[#9cc90a] mb-4"
        >
          {isExpanded ? "Tutup Deskripsi" : "Lihat Deskripsi Lengkap"}
        </button>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-[#9cc90a]">
            Rp {product.price}
          </span>
          <button
            onClick={() => handleWhatsAppOrder(product.name, product.price)}
            className="bg-[#9cc90a] text-white px-6 py-2 rounded-full transition flex items-center space-x-2 text-sm cursor-pointer"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Pesan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

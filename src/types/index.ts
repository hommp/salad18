export interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: React.FC<{ className?: string }>;
}

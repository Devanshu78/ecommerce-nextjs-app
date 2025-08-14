export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: number;
  brand?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

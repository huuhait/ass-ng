export interface Product {
  id: number;
  categoryId: number;
  name: string;
  price: number;
  sale_price: number;
  description: string;
  image_url: string;
  status: number;
}

export interface Cart {
  product_id: number;
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
}
"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

import { products as initialProducts }
  from "@/data/products";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  seller: string;
  sellerSlug: string;
  category: string;
  rating: number;
  description: string;
};

type ProductContextType = {
  products: Product[];

  addProduct: (
    product: Product
  ) => void;

  deleteProduct: (
    id: number
  ) => void;
};

const ProductContext =
  createContext<ProductContextType | null>(
    null
  );

export function ProductProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] =
    useState(initialProducts);

  const addProduct = (
    product: Product
  ) => {
    setProducts((prev) => [
      ...prev,
      product,
    ]);
  };

  const deleteProduct = (
    id: number
  ) => {
    setProducts((prev) =>
      prev.filter(
        (product) =>
          product.id !== id
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context =
    useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProducts must be used inside ProductProvider"
    );
  }

  return context;
}
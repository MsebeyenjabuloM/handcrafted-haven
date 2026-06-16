"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
// import { products } from "@/data/products";
import {
  useProducts,
} from "@/context/ProductContext";

const categories = [
  "All",
  "Pottery",
  "Textiles",
  "Home Decor",
];

const priceRanges = [
  "All",
  "Under R200",
  "R200-R400",
  "Above R400",
];

export default function ShopPage() {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedPrice, setSelectedPrice] =
    useState("All");

  const filteredProducts = products.filter(
    (product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      let matchesPrice = true;

      if (selectedPrice === "Under R200") {
        matchesPrice = product.price < 200;
      }

      if (selectedPrice === "R200-R400") {
        matchesPrice =
          product.price >= 200 &&
          product.price <= 400;
      }

      if (selectedPrice === "Above R400") {
        matchesPrice = product.price > 400;
      }

      return (
        matchesCategory &&
        matchesSearch &&
        matchesPrice
      );
    }
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Shop Handmade Products
        </h1>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <aside className="md:col-span-1 border rounded-xl p-6 bg-white h-fit">
            <h2 className="text-xl font-semibold mb-4">
              Categories
            </h2>

            <div className="flex flex-col gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                  className={`text-left px-3 py-2 rounded ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <h2 className="text-xl font-semibold mb-4">
              Price Range
            </h2>

            <div className="flex flex-col gap-2">
              {priceRanges.map((price) => (
                <button
                  key={price}
                  onClick={() =>
                    setSelectedPrice(price)
                  }
                  className={`text-left px-3 py-2 rounded ${
                    selectedPrice === price
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {price}
                </button>
              ))}
            </div>
          </aside>

          <section className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  seller={product.seller}
                  rating={product.rating}
                />
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
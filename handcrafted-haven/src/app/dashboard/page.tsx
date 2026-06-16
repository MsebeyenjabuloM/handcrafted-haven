"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";
import Link from "next/link";
import { useState } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();

const [dashboardProducts, setDashboardProducts] =
  useState(products);

  const sellerProducts =
  dashboardProducts.filter(
    (product) =>
      product.sellerSlug ===
      user?.sellerSlug
  );

  

  const handleDelete = (id: number) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmed) return;

  setDashboardProducts(
    dashboardProducts.filter(
      (product) => product.id !== id
    )
  );
};
  
    return (
    <ProtectedRoute>
      <Navbar />

      <main className="min-h-screen p-8 max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-2">
          Seller Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          Manage your handcrafted products and track performance.
        </p>

        <section className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="border rounded-xl p-6 bg-white shadow">
            <h2 className="text-lg font-semibold">
              Products Listed
            </h2>

            <p className="text-3xl font-bold mt-2">
              {sellerProducts.length}
            </p>
          </div>

          <div className="border rounded-xl p-6 bg-white shadow">
            <h2 className="text-lg font-semibold">
              Reviews
            </h2>

            <p className="text-3xl font-bold mt-2">
              12
            </p>
          </div>

          <div className="border rounded-xl p-6 bg-white shadow">
            <h2 className="text-lg font-semibold">
              Average Rating
            </h2>

            <p className="text-3xl font-bold mt-2">
              ⭐ 4.8
            </p>
          </div>

        </section>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold">
            My Products
          </h2>

          <Link
            href="/dashboard/add-product"
            className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
            >
            + Add Product
            </Link>

        </div>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {sellerProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-5 bg-white shadow"
            >
              <h3 className="text-xl font-semibold mb-2">
                {product.name}
              </h3>

              <p className="text-gray-600 mb-3">
                R{product.price}
              </p>

              <div className="flex gap-3">

                
                <Link
                href={`/dashboard/edit-product/${product.id}`}
                className="px-4 py-2 rounded bg-blue-600 text-white"
                >
                Edit
                </Link>

                <button
                onClick={() =>
                    handleDelete(product.id)
                }
                className="px-4 py-2 rounded bg-red-600 text-white"
                >
                Delete
                </button>


              </div>
            </div>
          ))}

        </section>

        {sellerProducts.length === 0 && (
          <div className="border rounded-xl p-8 text-center mt-8">
            <h2 className="text-2xl font-semibold mb-2">
              No Products Yet
            </h2>

            <p className="text-gray-600">
              Add your first handcrafted item.
            </p>
          </div>
        )}

      </main>

      <Footer />
    </ProtectedRoute>
  );
}
"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AddProductPage() {
  const [productName, setProductName] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [imagePreview, setImagePreview] =
  useState("");

  const [submittedProduct, setSubmittedProduct] =
  useState<{
    productName: string;
    price: string;
    category: string;
    description: string;
  } | null>(null);

  const handleImageChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (file) {
    const imageUrl =
      URL.createObjectURL(file);

    setImagePreview(imageUrl);
  }
};

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log({
      productName,
      price,
      category,
      description,
    });

    setSubmittedProduct({
        productName,
        price,
        category,
        description,
        });

    setProductName("");
    setPrice("");
    setCategory("");
    setDescription("");
    setImagePreview("");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8 max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Add New Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-xl shadow"
        >

          <div>
            <label className="block mb-2 font-semibold">
              Product Name
            </label>

            <input
              type="text"
              value={productName}
              onChange={(e) =>
                setProductName(e.target.value)
              }
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Price (R)
            </label>

            <input
              type="number"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value)
              }
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Category
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="w-full border rounded-lg p-3"
              required
            >
              <option value="">
                Select Category
              </option>

              <option value="Pottery">
                Pottery
              </option>

              <option value="Textiles">
                Textiles
              </option>

              <option value="Home Decor">
                Home Decor
              </option>

            </select>
          </div>

          <div>
        
        <label className="block mb-2 font-semibold">
            Product Image
        </label>

        <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border rounded-lg p-3"
        />
        </div>

        {imagePreview && (
        <div>
            <p className="font-semibold mb-2">
            Image Preview
            </p>

            <img
            src={imagePreview}
            alt="Preview"
            className="w-full max-w-md rounded-lg border"
            />
        </div>
        )}

          <div>
            <label className="block mb-2 font-semibold">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              rows={5}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Add Product
          </button>

        </form>

        {submittedProduct && (
  <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-6">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      Product Added Successfully
    </h2>

    <div className="space-y-2">

      <p>
        <strong>Name:</strong>{" "}
        {submittedProduct.productName}
      </p>

      <p>
        <strong>Price:</strong> R
        {submittedProduct.price}
      </p>

      <p>
        <strong>Category:</strong>{" "}
        {submittedProduct.category}
      </p>

      <p>
        <strong>Description:</strong>{" "}
        {submittedProduct.description}
      </p>

    </div>

  </div>
)}

      </main>

      <Footer />
    </>
  );
}
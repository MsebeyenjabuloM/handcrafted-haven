"use client";

import { useState } from "react";
import { products } from "@/data/products";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams } from "next/navigation";

export default function EditProductPage() {
  const params = useParams();

const product = products.find(
  (p) => p.id === Number(params.id)
);

  const [name, setName] = useState(
    product?.name || ""
  );

  const [price, setPrice] = useState(
    product?.price || 0
  );

  const [description, setDescription] =
    useState(
      product?.description || ""
    );

  const [success, setSuccess] =
    useState(false);

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log({
      name,
      price,
      description,
    });

    setSuccess(true);
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="p-8">
          Product not found.
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8 max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Edit Product
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
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Price
            </label>

            <input
              type="number"
              value={price}
              onChange={(e) =>
                setPrice(Number(e.target.value))
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Description
            </label>

            <textarea
              rows={5}
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Save Changes
          </button>
        </form>

        {success && (
          <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg">
            ✅ Product updated successfully!
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}
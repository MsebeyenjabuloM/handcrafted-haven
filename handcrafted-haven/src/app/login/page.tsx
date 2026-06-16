"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    login(email, password);

    router.push("/dashboard");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen flex justify-center items-center p-8">

        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">

          <h1 className="text-3xl font-bold mb-6">
            Seller Login
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            <div>
              <label className="block mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full border p-3 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full border p-3 rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg"
            >
              Login
            </button>

          </form>

        </div>

      </main>

      <Footer />
    </>
  );
}
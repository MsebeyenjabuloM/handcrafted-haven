"use client";

import { useState } from "react";
import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="border-b bg-white">

      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        <h1 className="text-2xl font-bold">
          Handcrafted Haven
        </h1>

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="text-3xl font-bold"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 p-4 border-t bg-white">

          <Link
            href="/"
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            href="/shop"
            onClick={closeMenu}
          >
            Shop
          </Link>

          <Link
            href="/sellers"
            onClick={closeMenu}
          >
            Sellers
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
          >
            About
          </Link>

          {user ? (
            <>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium w-fit">
                Welcome, {user.name}
              </span>

              <Link
                href="/dashboard"
                onClick={closeMenu}
              >
                Dashboard
              </Link>

              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="text-left hover:text-amber-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={closeMenu}
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={closeMenu}
              >
                Register
              </Link>
            </>
          )}

        </div>
      )}

    </nav>
  );
}
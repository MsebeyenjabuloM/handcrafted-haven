import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b bg-white">
      <h1 className="text-2xl font-bold">
        Handcrafted Haven
      </h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/sellers">Sellers</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
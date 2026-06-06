import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { sellers } from "@/data/sellers";
import Link from "next/link";
import Image from "next/image";

export default function SellersPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Meet Our Artisans
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

  {sellers.map((seller) => (
    
    <Link
      key={seller.id}
      href={`/sellers/${seller.slug}`}
    >
      <div className="border p-6 rounded-xl bg-white hover:shadow-lg transition h-full">

      <Image
          src={seller.image}
          alt={seller.name}
          width={400}
          height={250}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <h2 className="text-2xl font-semibold mb-2">
          {seller.name}
        </h2>

        <p className="text-amber-700 mb-2">
          {seller.specialty}
        </p>

        <p className="text-gray-600">
          {seller.bio}
        </p>

      </div>
    </Link>
  ))}

</div>
      </main>

      <Footer />
    </>
  );
}
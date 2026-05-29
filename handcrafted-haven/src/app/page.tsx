import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8 max-w-7xl mx-auto">
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-6">
            Discover Handmade Treasures
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Support local artisans and shop unique handcrafted products.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />  
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
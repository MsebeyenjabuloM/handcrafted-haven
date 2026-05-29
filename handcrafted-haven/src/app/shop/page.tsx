import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">
          Shop Handmade Products
        </h1>

        <section className="grid md:grid-cols-3 gap-6">
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
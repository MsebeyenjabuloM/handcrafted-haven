import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SellersPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Meet Our Artisans
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-6 rounded-xl bg-white">
            <h2 className="text-2xl font-semibold mb-2">
              Sarah's Pottery Studio
            </h2>

            <p className="text-gray-600">
              Handmade ceramic creations inspired by nature.
            </p>
          </div>

          <div className="border p-6 rounded-xl bg-white">
            <h2 className="text-2xl font-semibold mb-2">
              Crafted by Nandi
            </h2>

            <p className="text-gray-600">
              Beautiful woven baskets and textile crafts.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-6">
          About Handcrafted Haven
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl">
          Handcrafted Haven is a marketplace dedicated to
          supporting artisans and connecting customers with
          unique handmade products crafted with care.
        </p>
      </main>

      <Footer />
    </>
  );
}
import { sellers } from "@/data/sellers";
import { products } from "@/data/products";
import Image from "next/image";

type SellerPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SellerPage({
  params,
}: SellerPageProps) {
  const { id } = await params;

  const seller = sellers.find(
    (seller) => seller.slug === id
  );

  if (!seller) {
    return <h1>Seller Not Found</h1>;
  }

  const sellerProducts = products.filter(
    (product) => product.seller === seller.name
  );

  return (
    <main className="max-w-6xl mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <Image
          src={seller.image}
          alt={seller.name}
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {seller.name}
          </h1>

          <p className="text-lg text-gray-600 mb-4">
            {seller.specialty}
          </p>

          <p>{seller.bio}</p>
        </div>
      </div>

      <section>
        <h2 className="text-3xl font-bold mb-6">
          Products
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {sellerProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-4"
            >
              <h3 className="font-semibold">
                {product.name}
              </h3>

              <p>R{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
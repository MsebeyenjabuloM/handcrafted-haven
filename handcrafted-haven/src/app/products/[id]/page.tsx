import { products } from "@/data/products";
import Image from "next/image";
import { reviews } from "@/data/reviews";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  const productReviews = reviews.filter(
  (review) => review.productId === product?.id
);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <main className="max-w-5xl mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-10">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-xl object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-xl mb-4">
            R{product.price}
          </p>

          <p className="text-gray-600 mb-4">
            Seller: {product.seller}
          </p>

          <p className="text-yellow-600 mb-4">
            ★ {product.rating}
          </p>

          <p className="mb-6">
            {product.description}
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Contact Seller
          </button>
          <section className="mt-16">
  <h2 className="text-3xl font-bold mb-6">
    Customer Reviews
  </h2>

  {productReviews.length === 0 ? (
    <p>No reviews yet.</p>
  ) : (
    <div className="space-y-4">
      {productReviews.map((review) => (
        <div
          key={review.id}
          className="border rounded-xl p-4 bg-white"
        >
          <p className="font-semibold">
            {review.user}
          </p>

          <p className="text-yellow-600">
            {"★".repeat(review.rating)}
          </p>

          <p className="text-gray-600 mt-2">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  )}
</section>
        </div>
      </div>
    </main>
  );
}
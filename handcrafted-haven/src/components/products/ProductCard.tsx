import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  seller: string;
  rating: number;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
  seller,
  rating,
}: ProductCardProps) {
  return (
    <div className="border rounded-2xl p-4 bg-white shadow-md hover:shadow-xl transition">
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="rounded-md mb-4 h-100 w-full object-cover"
      />

      <h2 className="text-xl font-semibold mb-2">
        {name}
      </h2>

      <p className="text-gray-600 mb-4">
        R{price}
      </p>

      <Link
  href={`/products/${id}`}
  className="block mt-4 w-full text-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
>
  View Product
</Link>

<Link
  href={
    seller === "Sarah's Pottery Studio"
      ? "/sellers/sarah"
      : seller === "Crafted by Nandi"
      ? "/sellers/nandi"
      : "/sellers/light-and-craft"
  }
  className="text-sm text-blue-600 hover:underline"
>
  Seller: {seller}
</Link>

<p className="text-sm text-yellow-600">
  ★★★★★ {rating}
</p>
    </div>
  );
}
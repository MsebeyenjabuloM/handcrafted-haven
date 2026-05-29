import Image from "next/image";

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({
  name,
  price,
  image,
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

      <button className="mt-4 w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
        View Product
      </button>
    </div>
  );
}
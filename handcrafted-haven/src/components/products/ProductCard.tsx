type ProductCardProps = {
  name: string;
  price: number;
};

export default function ProductCard({
  name,
  price,
}: ProductCardProps) {
  return (
    <div className="border rounded-xl p-4 bg-white">
      <div className="h-48 bg-gray-200 rounded-md mb-4"></div>

      <h2 className="text-xl font-semibold">{name}</h2>

      <p className="text-gray-600">R{price}</p>

      <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
        View Product
      </button>
    </div>
  );
}
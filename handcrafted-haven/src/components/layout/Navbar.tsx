export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <h1 className="text-2xl font-bold">Handcrafted Haven</h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Sellers</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
}
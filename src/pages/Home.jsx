import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">🌿 Eden</h1>
      <p className="mb-6 text-gray-600">Our Digital Garden</p>

      <Link
        to="/faith"
        className="bg-pink-500 text-white px-6 py-2 rounded-full"
      >
        Explorer la Foi ✨
      </Link>
    </div>
  );
}
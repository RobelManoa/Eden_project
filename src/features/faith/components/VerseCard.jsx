export default function VerseCard({ verse }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition">
      <p className="text-gray-700 italic">"{verse.text}"</p>
      <p className="mt-2 text-sm text-gray-500">{verse.reference}</p>
      <span className="text-xs text-pink-500">{verse.category}</span>
    </div>
  );
}
export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="flex gap-2 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-3 py-1 rounded-full ${
            selected === cat ? "bg-pink-500 text-white" : "bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
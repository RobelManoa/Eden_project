export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="filter-group" role="tablist" aria-label="Filtrer les versets">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`filter-pill ${
            selected === cat ? "filter-pill-active" : ""
          }`}
          type="button"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

import { useState } from "react";
import verses from "../data/verses.json";
import VerseCard from "../components/VerseCard";
import CategoryFilter from "../components/CategoryFilter";

export default function FaithPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(verses.map(v => v.category))];

  const filteredVerses =
    selectedCategory === "All"
      ? verses
      : verses.filter(v => v.category === selectedCategory);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bibliothèque de Foi ✨</h1>

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="grid md:grid-cols-3 gap-4">
        {filteredVerses.map(v => (
          <VerseCard key={v.id} verse={v} />
        ))}
      </div>
    </div>
  );
}
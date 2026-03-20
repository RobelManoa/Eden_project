import { useState } from "react";
import verses from "../data/verses.json";
import VerseCard from "../components/VerseCard";
import CategoryFilter from "../components/CategoryFilter";
import Container from "../../../components/ui/Container";

export default function FaithPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(verses.map((verse) => verse.category))];

  const filteredVerses =
    selectedCategory === "All"
      ? verses
      : verses.filter((verse) => verse.category === selectedCategory);

  return (
    <Container>
      <section className="section-header">
        <p className="eyebrow">Module · Bibliothèque de Foi</p>
        <h1>La Parole qui éclaire notre chemin</h1>
        <p className="section-text">
          Une sélection de versets pour nourrir ton âme, trouver la paix dans les 
          moments de doute et puiser la force nécessaire à chaque nouveau projet.
        </p>
      </section>

      {/* Le reste des composants reste inchangé */}
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <section className="verses-grid" aria-label="Liste des versets">
        {filteredVerses.map((verse) => (
          <VerseCard key={verse.id} verse={verse} />
        ))}
      </section>
    </Container>
  );
}

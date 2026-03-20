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
        <p className="eyebrow">Module · Bibliotheque de Foi</p>
        <h1>Des versets pour l&apos;amour, la paix et la force</h1>
        <p className="section-text">
          Les donnees sont chargees depuis un JSON local, filtrees dans React,
          puis affichees dans une grille responsive.
        </p>
      </section>

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

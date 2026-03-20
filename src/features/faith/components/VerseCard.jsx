import Card from "../../../components/ui/Card";

export default function VerseCard({ verse }) {
  return (
    <Card className="verse-card">
      <span className="verse-category">{verse.category}</span>
      <p className="verse-text">&quot;{verse.text}&quot;</p>
      <p className="verse-reference">{verse.reference}</p>
    </Card>
  );
}

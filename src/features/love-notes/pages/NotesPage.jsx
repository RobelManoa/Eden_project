 import notes from "../data/notes.json";
import NoteCard from "../components/NoteCard";
import Container from "../../../components/ui/Container"; 

export default function NotesPage() {
  return (
    <Container className="notes-page">
      <section className="notes-hero">
        <div className="notes-hero-copy">
          <p className="eyebrow">Module · Mots Doux & Pensées</p>
          <h1>Nos éclats de poésie et d'inspiration</h1>
          <p className="section-text">
            Un espace dédié aux mots qui nous touchent, des grands auteurs 
            qui ont chanté l'amour aux pensées qui illuminent notre quotidien.
          </p>
        </div>

        <div className="notes-hero-panel">
          <div className="notes-stat">
            <span className="notes-stat-value">{notes.length}</span>
            <span className="notes-stat-label">Pensées partagées</span>
          </div>
          <div className="notes-stat">
            <span className="notes-stat-value">∞</span>
            <span className="notes-stat-label">Inspiration infinie</span>
          </div>
          <p className="notes-hero-panel-text">
            Chaque carte est un fragment d'éternité, choisie pour résonner 
            avec la douceur de notre histoire dans cet Eden numérique.
          </p>
        </div>
      </section>

      <section className="notes-strip" aria-label="Essence du module">
        <div className="notes-strip-card">
          <strong>L'Âme</strong>
          <span>Romantique, profonde, intemporelle</span>
        </div>
        <div className="notes-strip-card">
          <strong>Le Partage</strong>
          <span>Une bibliothèque de sentiments à parcourir ensemble</span>
        </div>
        <div className="notes-strip-card">
          <strong>La Vision</strong>
          <span>L'élégance des mots au service de notre complicité</span>
        </div>
      </section>

      {/* Le reste de la section masonry reste inchangé */}
      <section className="notes-masonry" aria-label="Galerie de mots doux">
        {notes.map((note, index) => (
          <NoteCard key={note.id} note={note} index={index} />
        ))}
      </section>
    </Container>
  );
}
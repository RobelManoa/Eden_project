export default function NoteCard({ note, index }) {
  const accents = [
    "Pour toi",
    "Souvenir doux",
    "Petit tresor",
    "A relire",
  ];

  return (
    <article className="note-card">
      <div className="note-card-glow" />

      <div className="note-card-content">
        <span className="note-card-tag">{accents[index % accents.length]}</span>
        <p className="note-card-quote">&quot;{note.text}&quot;</p>

        <div className="note-card-meta">
          <span className="note-card-author">— {note.author}</span>
          <time className="note-card-date" dateTime={note.date}>
            {note.date}
          </time>
        </div>
      </div>
    </article>
  );
}

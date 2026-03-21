export default function ResultCard({
  score,
  total,
  accuracy,
  persona,
  history,
  onRestart,
}) {
  const title =
    accuracy >= 80
      ? "Connexion tres fine"
      : accuracy >= 50
        ? "Belle intuition"
        : "Base a renforcer";

  const subtitle =
    persona === "girl"
      ? "Tu as essaye de lire l'univers de la fille."
      : "Tu as essaye de lire l'univers du gars.";

  return (
    <section className="quiz-result-card">
      <p className="quiz-overline">Session terminee</p>
      <h2 className="quiz-result-title">{title}</h2>
      <p className="quiz-result-subtitle">{subtitle}</p>

      <div className="quiz-result-scoreboard">
        <div className="quiz-result-stat">
          <span className="quiz-result-value">{score}</span>
          <span className="quiz-result-label">bonnes reponses</span>
        </div>
        <div className="quiz-result-stat">
          <span className="quiz-result-value">{total}</span>
          <span className="quiz-result-label">manches</span>
        </div>
        <div className="quiz-result-stat">
          <span className="quiz-result-value">{accuracy}%</span>
          <span className="quiz-result-label">precision</span>
        </div>
      </div>

      <div className="quiz-result-history">
        {history.slice(-3).map((entry) => (
          <article key={entry.questionId} className="quiz-result-history-item">
            <span className="quiz-result-history-category">{entry.category}</span>
            <p>{entry.insight}</p>
          </article>
        ))}
      </div>

      <button className="button button-primary" onClick={onRestart} type="button">
        Relancer une session
      </button>
    </section>
  );
}

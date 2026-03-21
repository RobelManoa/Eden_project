import AnswerButton from "./AnswerButton";

export default function QuestionCard({
  question,
  current,
  total,
  persona,
  selectedOptionId,
  onAnswer,
  onNext,
  score,
}) {
  const currentAnswer = question.options.find(
    (option) => option.id === selectedOptionId
  );
  const progress = total ? Math.round(((current + 1) / total) * 100) : 0;

  return (
    <section className="quiz-card">
      <div className="quiz-hud">
        <div>
          <p className="quiz-overline">Simulateur relationnel</p>
          <h2 className="quiz-question-title">{question.question}</h2>
        </div>

        <div className="quiz-hud-stats">
          <span className="quiz-chip">
            {persona === "girl" ? "Reponse pour la fille" : "Reponse pour le gars"}
          </span>
          <span className="quiz-chip">{question.category}</span>
          <span className="quiz-chip">{question.difficulty}</span>
        </div>
      </div>

      <div className="quiz-progress-block">
        <div className="quiz-progress-meta">
          <span>
            Manche {current + 1} / {total}
          </span>
          <span>Score live: {score}</span>
        </div>
        <div className="quiz-progress-track" aria-hidden="true">
          <span className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="quiz-scene">
        <strong>Scene</strong>
        <p>{question.scene}</p>
      </div>

      <div className="quiz-answer-list">
        {question.options.map((option) => (
          <AnswerButton
            key={option.id}
            option={option}
            onSelect={onAnswer}
            selectedOptionId={selectedOptionId}
            disabled={Boolean(selectedOptionId)}
          />
        ))}
      </div>

      {currentAnswer ? (
        <div className="quiz-feedback">
          <p className="quiz-feedback-state">
            {currentAnswer.isCorrect ? "Bonne lecture du moment" : "Pas encore tout a fait ca"}
          </p>
          <p className="quiz-feedback-text">{currentAnswer.insight}</p>
          <button className="button button-primary quiz-next-button" onClick={onNext} type="button">
            {current + 1 === total ? "Voir le resultat" : "Question suivante"}
          </button>
        </div>
      ) : null}
    </section>
  );
}

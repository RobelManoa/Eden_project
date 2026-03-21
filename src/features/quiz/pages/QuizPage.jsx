import Container from "../../../components/ui/Container";
import useQuiz from "../hooks/useQuiz";
import QuestionCard from "../components/QuestionCard";
import ResultCard from "../components/ResultCard";

export default function QuizPage() {
  const {
    persona,
    question,
    current,
    score,
    total,
    finished,
    accuracy,
    selectedOptionId,
    history,
    phase,
    startQuiz,
    handleAnswer,
    goToNextQuestion,
    restartQuiz,
  } = useQuiz();

  return (
    <Container className="quiz-page">
      <section className="quiz-shell">
        <div className="quiz-sidebar">
          <p className="eyebrow">Module · Complicité</p>
          <h1>On se connaît par cœur ?</h1>
          <p className="section-text">
            Parce que l'amour se niche dans les détails, ce petit jeu est là
            pour célébrer tout ce que l'on a appris l'un de l'autre au fil des
            jours.
          </p>

          <div className="quiz-mode-grid">
            <button
              className={`quiz-mode-card ${
                persona === "girl" && phase !== "setup"
                  ? "quiz-mode-card-active"
                  : ""
              }`}
              onClick={() => startQuiz("girl")}
              type="button"
            >
              <span className="quiz-mode-title">
                Dans les pensées de Mirana
              </span>
              <span className="quiz-mode-text">
                Vois si tu maîtrises ses petits secrets, ses chansons favorites
                et ce qui la fait sourire.
              </span>
            </button>

            <button
              className={`quiz-mode-card ${
                persona === "guy" && phase !== "setup"
                  ? "quiz-mode-card-active"
                  : ""
              }`}
              onClick={() => startQuiz("guy")}
              type="button"
            >
              <span className="quiz-mode-title">Dans l'univers de Manoa</span>
              <span className="quiz-mode-text">
                Teste tes connaissances sur ses passions, son rythme et sa
                vision du monde.
              </span>
            </button>
          </div>

          <div className="quiz-sidebar-panel">
            <strong>L'Essentiel d'EDEN</strong>
            <p>
              Ici, il n'y a pas de mauvaise réponse. C'est juste une autre façon
              de se dire : "Je te vois, je t'écoute et je te connais".
            </p>
          </div>
        </div>

        <div className="quiz-stage">
          {phase === "setup" ? (
            <section className="quiz-lobby">
              <p className="quiz-overline">Pret a jouer</p>
              <h2>Selectionne une perspective pour demarrer la session</h2>
              <p>
                Chaque parcours contient plusieurs manches, des situations
                differentes et un feedback pour mieux lire la personne en face.
              </p>
            </section>
          ) : null}

          {phase === "playing" && question ? (
            <QuestionCard
              question={question}
              current={current}
              total={total}
              persona={persona}
              selectedOptionId={selectedOptionId}
              onAnswer={handleAnswer}
              onNext={goToNextQuestion}
              score={score}
            />
          ) : null}

          {finished ? (
            <ResultCard
              score={score}
              total={total}
              accuracy={accuracy}
              persona={persona}
              history={history}
              onRestart={restartQuiz}
            />
          ) : null}
        </div>
      </section>
    </Container>
  );
}

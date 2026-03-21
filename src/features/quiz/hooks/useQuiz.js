import { useState } from "react";
import questions from "../data/questions.json";

export default function useQuiz() {
  const [persona, setPersona] = useState(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState("setup");
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [history, setHistory] = useState([]);

  const activeQuestions = persona
    ? questions.filter((question) => question.persona === persona)
    : [];

  const question = activeQuestions[current] ?? null;
  const finished = phase === "results";

  const startQuiz = (nextPersona) => {
    setPersona(nextPersona);
    setCurrent(0);
    setScore(0);
    setSelectedOptionId(null);
    setHistory([]);
    setPhase("playing");
  };

  const handleAnswer = (optionId) => {
    if (!question || selectedOptionId) {
      return;
    }

    const selectedOption = question.options.find((option) => option.id === optionId);

    if (!selectedOption) {
      return;
    }

    setSelectedOptionId(optionId);

    if (selectedOption.isCorrect) {
      setScore((previous) => previous + 1);
    }

    setHistory((previous) => [
      ...previous,
      {
        questionId: question.id,
        category: question.category,
        question: question.question,
        selectedLabel: selectedOption.label,
        insight: selectedOption.insight,
        isCorrect: selectedOption.isCorrect,
      },
    ]);
  };

  const goToNextQuestion = () => {
    if (!selectedOptionId) {
      return;
    }

    if (current + 1 < activeQuestions.length) {
      setCurrent((previous) => previous + 1);
      setSelectedOptionId(null);
    } else {
      setPhase("results");
    }
  };

  const restartQuiz = () => {
    setPersona(null);
    setCurrent(0);
    setScore(0);
    setSelectedOptionId(null);
    setHistory([]);
    setPhase("setup");
  };

  const accuracy = activeQuestions.length
    ? Math.round((score / activeQuestions.length) * 100)
    : 0;

  return {
    persona,
    phase,
    question,
    current,
    total: activeQuestions.length,
    score,
    finished,
    accuracy,
    selectedOptionId,
    history,
    startQuiz,
    handleAnswer,
    goToNextQuestion,
    restartQuiz,
  };
}

export default function AnswerButton({
  option,
  onSelect,
  selectedOptionId,
  disabled,
}) {
  const isSelected = selectedOptionId === option.id;
  const isLocked = Boolean(selectedOptionId);
  const isCorrect = isLocked && option.isCorrect;
  const isWrong = isLocked && isSelected && !option.isCorrect;

  const className = [
    "quiz-answer",
    isSelected ? "quiz-answer-selected" : "",
    isCorrect ? "quiz-answer-correct" : "",
    isWrong ? "quiz-answer-wrong" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={className}
      onClick={() => onSelect(option.id)}
      disabled={disabled}
      type="button"
    >
      <span className="quiz-answer-badge">{option.id.split("-").pop().toUpperCase()}</span>
      <span className="quiz-answer-label">{option.label}</span>
    </button>
  );
}

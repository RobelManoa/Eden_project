export default function Card({ children, className = "" }) {
  const classes = ["card-surface", className].filter(Boolean).join(" ");

  return <article className={classes}>{children}</article>;
}

export default function Container({ children, className = "" }) {
  const classes = ["container-shell", className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
}

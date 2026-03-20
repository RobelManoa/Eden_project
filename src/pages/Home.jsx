import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

export default function Home() {
  return (
    <Container className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Phase 1 · MVP</p>
        <h1>EDEN, notre jardin digital</h1>
        <p className="hero-text">
          Une application React statique pour rassembler des versets inspires,
          avec une interface claire, douce et evolutive.
        </p>
        <div className="hero-actions">
          <Link to="/faith" className="button button-primary">
            Ouvrir la bibliotheque de foi
          </Link>
          <a href="#vision" className="button button-secondary">
            Voir la vision du projet
          </a>
        </div>
      </div>

      <section id="vision" className="home-panels" aria-label="Vision du projet">
        <article className="panel">
          <h2>Contenu centralise</h2>
          <p>
            Le MVP met en avant les versets bibliques, avec une base solide pour
            accueillir ensuite galerie, poesie et contenus multimedia.
          </p>
        </article>

        <article className="panel">
          <h2>Architecture evolutive</h2>
          <p>
            L&apos;application est organisee par features pour permettre une
            croissance propre, maintenable et agreable a faire evoluer.
          </p>
        </article>

        <article className="panel">
          <h2>Experience responsive</h2>
          <p>
            L&apos;interface s&apos;adapte au mobile comme au desktop avec un
            premier affichage plus intentionnel que la page React par defaut.
          </p>
        </article>
      </section>
    </Container>
  );
}

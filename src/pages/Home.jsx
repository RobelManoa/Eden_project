import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

export default function Home() {
  return (
    <Container className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Bienvenue dans notre jardin</p>
        <h1>EDEN</h1>
        <p className="hero-text">
          L'espace où nos pensées, notre foi et nos souvenirs se rejoignent. 
          Un sanctuaire numérique conçu pour nous, un commit à la fois.
        </p>
        <div className="hero-actions">
          <Link to="/faith" className="button button-primary">
            Parcourir la Parole
          </Link>
          <Link to="/vision" className="button button-secondary">
            L'origine du projet
          </Link>
        </div>
      </div>

      <section className="home-panels" aria-label="Nos espaces">
        <article className="panel">
          <h2>La Source</h2>
          <p>
            Retrouve les versets qui nous fortifient et nous guident 
            chaque jour dans nos projets et notre marche.
          </p>
        </article>

        <article className="panel">
          <h2>L'Inspiration</h2>
          <p>
            Une collection de mots doux et de poésie pour se rappeler 
            la beauté de ce que nous construisons ensemble.
          </p>
        </article>

        <article className="panel">
          <h2>Le Futur</h2>
          <p>
            Bientôt nos musiques, nos photos et nos jeux pour faire 
            grandir ce jardin à notre image.
          </p>
        </article>
      </section>
    </Container>
  );
}
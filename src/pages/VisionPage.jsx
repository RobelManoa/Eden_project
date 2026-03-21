import Container from "../components/ui/Container";

export default function VisionPage() {
  return (
    <Container className="vision-page">
      <section className="section-header">
        <p className="eyebrow">Le Manifeste</p>
        <h1>Pourquoi EDEN ?</h1>
        <p className="section-text">
          Eden n'est pas qu'une simple application ; c'est le point de rencontre 
          entre notre passion pour le code et notre histoire personnelle.
        </p>
      </section>

      <section className="vision-content">
        <article className="vision-card">
          <h3>Un Laboratoire à deux</h3>
          <p>
            C'est notre terrain de jeu pour expérimenter React, le workflow Git pro 
            et l'architecture modulaire. Apprendre ensemble pour 
            devenir de meilleurs développeurs.
          </p>
        </article>

        <article className="vision-card">
          <h3>Une Architecture Saine</h3>
          <p>
            L'application est pensée pour être évolutive. Organisée par "features", 
            elle nous permet d'ajouter des modules (Musique, Quiz, Photos) sans jamais 
            casser ce qui existe déjà.
          </p>
        </article>

        <article className="vision-card">
          <h3>Zéro Contrainte, 100% Plaisir</h3>
          <p>
            En choisissant une structure statique sur GitHub Pages, on s'affranchit 
            des serveurs pour se concentrer sur l'essentiel : l'interface, 
            l'émotion et le partage de nos données locales.
          </p>
        </article>
      </section>
    </Container>
  );
}
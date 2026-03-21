import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

const manifesto = [
  {
    title: "Contexte",
    text: "EDEN est une application web statique developpee dans un cadre personnel et pedagogique. Elle sert a la fois d'espace prive pour un couple et de terrain d'experimentation professionnel.",
  },
  {
    title: "Objectif principal",
    text: "Centraliser des contenus textuels, multimedia et interactifs dans une application moderne, sensible, lisible et evolutive.",
  },
  {
    title: "Objectifs pedagogiques",
    text: "Structurer une application React scalable, pratiquer un workflow Git collaboratif et affiner une experience front-end statique mais qualitative.",
  },
];

const timeline = [
  {
    phase: "Phase 1",
    title: "MVP actuel",
    status: "Actif",
    text: "Bibliotheque de foi, pages de presentation, routing principal et fondation visuelle de l'application.",
  },
  {
    phase: "Phase 2",
    title: "Memoire narrative",
    status: "Prevision",
    text: "Galerie photo, integration YouTube, messages, poesies et experiences plus editoriales.",
  },
  {
    phase: "Phase 3",
    title: "Interactions",
    status: "Prevision",
    text: "Quiz evolue, contenu dynamique et nouvelles mecaniques immersives autour du lien et des souvenirs.",
  },
];

const modules = [
  {
    title: "Bibliotheque de Foi",
    text: "Versets bibliques filtres par categorie avec un rendu dynamique fonde sur des donnees JSON locales.",
  },
  {
    title: "Love Notes",
    text: "Collection de mots doux dans une interface editoriale, premium et chaleureuse.",
  },
  {
    title: "Quiz relationnel",
    text: "Mini simulateur de jeu avec point de vue, score, manches et feedback de lecture emotionnelle.",
  },
  {
    title: "Vision integree",
    text: "Une documentation vivante qui relie intention produit, architecture et feuille de route.",
  },
];

const specCards = [
  {
    title: "Perimetre fonctionnel",
    items: [
      "Application 100% statique",
      "Routing avec React Router",
      "UI moderne et responsive",
      "Layout en grille inspire Pinterest",
    ],
  },
  {
    title: "Contraintes techniques",
    items: [
      "Pas de backend",
      "Pas de base de donnees externe",
      "Donnees locales via JSON",
      "Hebergement cible: GitHub Pages",
    ],
  },
  {
    title: "Criteres de reussite",
    items: [
      "Application fonctionnelle sans backend",
      "Code lisible et maintenable",
      "Structure evolutive",
      "UI fluide et deploiement accessible",
    ],
  },
];

const documentationCards = [
  {
    title: "Architecture modulaire",
    accent: "feature-first",
    text: "Le projet suit une organisation par features, avec separation claire entre pages, composants reutilisables et logique locale.",
  },
  {
    title: "Flux de donnees",
    accent: "json-local",
    text: "JSON local -> import React -> state local -> filtrage ou transformation -> rendu UI.",
  },
  {
    title: "Gestion d'etat",
    accent: "state",
    text: "L'etat reste local et volontairement simple a ce stade, pour garder lisibilite et souplesse d'evolution.",
  },
  {
    title: "Performance",
    accent: "statique",
    text: "Pas d'API externe, faible latence, rendu simple et structure ideale pour une SPA hebergee sur GitHub Pages.",
  },
  {
    title: "Workflow Git",
    accent: "collaboration",
    text: "Branches main, develop et feature/*, developpement isole, Pull Request, review puis merge.",
  },
  {
    title: "Direction UI",
    accent: "ux",
    text: "Minimalisme, douceur, hierarchie lisible, cartes premium, animations subtiles et atmosphere editoriale.",
  },
];

const stack = [
  "React",
  "React Router",
  "JSON statique",
  "Git / GitHub",
  "GitHub Pages",
  "Architecture modulaire",
];

const architectureTree = `src/
├── components/
│   ├── ui/
│   └── layout/
├── features/
│   ├── faith/
│   ├── love-notes/
│   └── quiz/
├── pages/
├── router/
└── App.jsx`;

export default function VisionPage() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <Container className="vision-page">
      <section className="vision-hero reveal-up is-visible">
        <div className="vision-hero-copy">
          <p className="eyebrow">Documentation integree</p>
          <h1>Le cahier des charges et la documentation technique d&apos;EDEN, dans une page vivante.</h1>
          <p className="section-text">
            Une lecture plus complete, plus propre et plus editoriale du projet:
            manifeste, timeline, architecture, modules, stack et methode de
            travail reunis dans une seule experience coherent avec le theme.
          </p>

          <div className="vision-hero-actions">
            <a href="#timeline" className="button button-primary">
              Voir la timeline
            </a>
            <Link to="/notes" className="button button-secondary">
              Voir un module EDEN
            </Link>
          </div>
        </div>

        <div className="vision-hero-panel">
          <div className="vision-stat">
            <span className="vision-stat-value">3</span>
            <span className="vision-stat-label">phases produit</span>
          </div>
          <div className="vision-stat">
            <span className="vision-stat-value">100%</span>
            <span className="vision-stat-label">statique et local</span>
          </div>
          <div className="vision-stat">
            <span className="vision-stat-value">1</span>
            <span className="vision-stat-label">hub de documentation</span>
          </div>
        </div>
      </section>

      <nav className="vision-anchor-nav reveal-up" data-reveal aria-label="Navigation de la documentation">
        <a href="#manifeste">Manifeste</a>
        <a href="#timeline">Timeline</a>
        <a href="#modules">Modules</a>
        <a href="#cahier">Cahier</a>
        <a href="#documentation">Documentation</a>
      </nav>

      <section id="manifeste" className="vision-section">
        <div className="section-header reveal-up" data-reveal>
          <p className="eyebrow">Manifeste</p>
          <h2>Pourquoi ce projet existe</h2>
          <p className="section-text">
            EDEN melange apprentissage technique, narration personnelle et
            construction d&apos;un espace digital intime.
          </p>
        </div>

        <div className="vision-masonry">
          {manifesto.map((card, index) => (
            <article
              key={card.title}
              className="vision-doc-card reveal-up"
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="vision-card-kicker">Intentions</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="timeline" className="vision-section">
        <div className="section-header reveal-up" data-reveal>
          <p className="eyebrow">Roadmap</p>
          <h2>Timeline du projet</h2>
          <p className="section-text">
            Le projet grandit par couches successives, sans perdre sa base
            modulaire ni sa clarte structurelle.
          </p>
        </div>

        <div className="vision-timeline">
          {timeline.map((step, index) => (
            <article
              key={step.phase}
              className="vision-timeline-item reveal-up"
              data-reveal
              style={{ transitionDelay: `${index * 110}ms` }}
            >
              <div className="vision-timeline-marker" aria-hidden="true" />
              <div className="vision-timeline-body">
                <div className="vision-timeline-head">
                  <span className="vision-card-kicker">{step.phase}</span>
                  <span className="vision-status-pill">{step.status}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="modules" className="vision-section">
        <div className="section-header reveal-up" data-reveal>
          <p className="eyebrow">Modules</p>
          <h2>Les experiences deja presentes dans EDEN</h2>
        </div>

        <div className="vision-grid">
          {modules.map((card, index) => (
            <article
              key={card.title}
              className="vision-feature-card reveal-up"
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="cahier" className="vision-section">
        <div className="section-header reveal-up" data-reveal>
          <p className="eyebrow">Cahier des charges</p>
          <h2>Le cadre fonctionnel du projet</h2>
        </div>

        <div className="vision-grid">
          {specCards.map((card, index) => (
            <article
              key={card.title}
              className="vision-spec-card reveal-up"
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="documentation" className="vision-section vision-doc-layout">
        <div className="vision-doc-main">
          <div className="section-header reveal-up" data-reveal>
            <p className="eyebrow">Documentation technique</p>
            <h2>Structure, flux, stack et methode de travail</h2>
            <p className="section-text">
              Une synthese integree des choix techniques deja poses dans le
              projet et de leur logique d&apos;evolution.
            </p>
          </div>

          <div className="vision-masonry">
            {documentationCards.map((card, index) => (
              <article
                key={card.title}
                className="vision-doc-card reveal-up"
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="vision-card-kicker">{card.accent}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="vision-doc-sidebar">
          <article className="vision-aside-card reveal-up" data-reveal>
            <span className="vision-card-kicker">Structure projet</span>
            <pre>{architectureTree}</pre>
          </article>

          <article className="vision-aside-card reveal-up" data-reveal>
            <span className="vision-card-kicker">Stack cible</span>
            <div className="vision-stack-list">
              {stack.map((item) => (
                <span key={item} className="vision-stack-pill">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="vision-aside-card reveal-up" data-reveal>
            <span className="vision-card-kicker">Workflow Git</span>
            <ol className="vision-workflow-list">
              <li>Creation d&apos;une branche `feature/*`</li>
              <li>Developpement isole</li>
              <li>Pull Request</li>
              <li>Review</li>
              <li>Merge vers `develop`</li>
            </ol>
          </article>
        </aside>
      </section>
    </Container>
  );
}

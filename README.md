1. Cahier des Charges Professionnel — Projet EDEN
# 1.1 Contexte

Le projet Eden est une application web statique développée dans un cadre à la fois personnel et pédagogique.
Il vise à simuler un environnement de développement professionnel collaboratif tout en servant de plateforme privée pour un couple.

# 1.2 Objectifs
## Objectif principal

Créer une application web moderne permettant de centraliser :

des contenus textuels (versets bibliques)

des contenus multimédias (prévu Phase 2)

des interactions utilisateur (prévu Phase 3)

## Objectifs pédagogiques

Mise en place d’un workflow Git collaboratif

Structuration d’une application React scalable

Optimisation des performances front-end (SPA statique)

Implémentation d’une UI moderne et responsive

Gestion de données via JSON statique

## 1.3 Périmètre fonctionnel
# Phase 1 — MVP (actuelle)
Module : Bibliothèque de Foi

Affichage de versets bibliques

Filtrage par catégorie :

Amour

Paix

Force

Données stockées dans un fichier JSON

Rendu dynamique via React

Interface utilisateur

Design minimaliste et moderne

Responsive (mobile / desktop)

Layout en grille (type Pinterest)

Navigation

Routing avec React Router

Pages :

Home

Faith

# Phase 2 (prévisionnelle)

Galerie photo narrative

Intégration YouTube (iframe API)

Section messages / poèmes

# Phase 3 (prévisionnelle)

Quiz interactif

Générateur de contenu dynamique (verset du jour)

## 1.4 Contraintes techniques

Application 100% statique

Hébergement : GitHub Pages

Pas de backend

Pas de base de données externe

Données locales (JSON)

## 1.5 Stack technique

| Domaine     | Technologie   |
| ----------- | ------------- |
| Frontend    | React (Vite)  |
| Routing     | React Router  |
| Styling     | Tailwind CSS  |
| Data        | JSON statique |
| Versionning | Git / GitHub  |
| Déploiement | GitHub Pages  |

## 1.6 Architecture

Architecture modulaire basée sur :

séparation par features

composants réutilisables

logique découplée

- Pattern utilisé :

Feature-based architecture (inspiré clean architecture frontend)

## 1.7 Critères de réussite

Application fonctionnelle sans backend

Code lisible et maintenable

Structure évolutive

UI fluide et responsive

Déploiement accessible en ligne

2. Documentation Technique — État Actuel (Phase 1)
## 2.1 Structure du projet

src/
│
├── components/
│   ├── ui/
│   └── layout/
│
├── features/
│   └── faith/
│       ├── components/
│       ├── data/
│       └── pages/
│
├── pages/
├── router/
├── App.jsx
└── main.jsx

## 2.2 Organisation par Feature

Le projet suit une architecture feature-first :

Exemple : faith/

components/ → UI spécifique au module

data/ → JSON local

pages/ → page principale

## 2.3 Gestion des données
# Source
    Fichier local : verses.json

# Structure
{
  "id": number,
  "text": string,
  "reference": string,
  "category": string
}

# Avantages
- Simple
- Rapide
- Aucune dépendance externe
- Idéal pour une app statique

## 2.4 Flux de données
JSON → import → state React → filtrage → rendu UI
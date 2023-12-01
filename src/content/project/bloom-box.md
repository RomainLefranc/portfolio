---
title: Express backend
publishDate: 2019-12-01 00:00:00
img: /portfolio/assets/stock-2.jpg
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  Une API REST d'authentification sécurisée développée avec Express en TypeScript, avec Lucia Auth, Redis, Mongo et Docker

tags:
  - Backend
  - NodeJS
  - Mongo
  # - Typescript
  # - Authentication
  # - Express
  # - REST API
  # - Lucia
  # - Rate Limiting
  # - Docker
  # - Oauth
  # - Swagger
---

## Technologies Utilisées

- **Express.js :** Un framework web Node.js rapide, minimaliste et flexible.
- **TypeScript :** Un langage de programmation qui ajoute des fonctionnalités à JavaScript.
- **Lucia Auth :** Une solution d'authentification simple et sécurisée.
- **Redis :** Une base de données clé-valeur en mémoire, utilisée pour le stockage des sessions et le rate limiting.
- **MongoDB :** Une base de données NoSQL pour la persistance des données.
- **Docker :** Une plateforme de conteneurisation.

## Fonctionnalités

1. **Authentification par Email/Mot de Passe :**

   - Enregistrement d'un nouvel utilisateur avec email et mot de passe.
   - Authentification d'un utilisateur existant.

2. **Authentification par GitHub :**

   - Authentification via le compte GitHub de l'utilisateur.

3. **Gestion des Tokens d'Accès :**

   - Génération de tokens d'accès JWT (JSON Web Token) pour les utilisateurs authentifiés.

4. **Stockage des Sessions avec Redis :**

   - Utilisation de Redis pour stocker de manière sécurisée les sessions utilisateur.

5. **Rate Limiting avec Redis :**

   - Mise en place d'un rate limiting avec Redis pour prévenir les attaques par force brute.

6. **Persistance des Données avec MongoDB :**

   - Stockage durable des informations utilisateur dans une base de données MongoDB.

7. **Endpoints Sécurisés :**
   - Mise en place d'endpoints sécurisés nécessitant une authentification pour y accéder.

## Dockerisation

- **Dockerfile :**

  - Configuration d'un Dockerfile pour encapsuler l'application dans un conteneur Docker.
  - Utilisation de multi-stages pour optimiser la taille de l'image.

- **Docker Compose :**
  - Configuration d'un fichier Docker Compose pour orchestrer l'ensemble de l'application et de ses dépendances (Express, Redis, MongoDB).

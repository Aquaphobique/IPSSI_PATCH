# IPSSI_PATCH

Stack Node/Express + React + PostgreSQL, sécurisée et conteneurisée.

## Démarrage

1. Créez les fichiers .env :
   - backend/.env
   - frontend/.env

2. Installez les deps localement si besoin:
   - cd backend && npm ci
   - cd frontend && npm ci

3. Lancez le backend :
   - cd backend
   - npm install
   - npm run dev

4. Lancez le frontend :
   - cd frontend
   - npm install
   - npm start

5. Priez pour que ça marche :
   - qui vous voulez tant que ça marche

Backend: http://localhost:8000
Frontend: http://localhost:3000

## Environnements

## Environnements

- backend/.env :
  - PORT : port du serveur Express (par défaut 8000)
  - CORS_ORIGIN : origine autorisée (ex: http://localhost:3000)
  - DB_HOST : localhost
  - DB_PORT : 5432
  - DB_NAME : ipssi
  - DB_USER : ipssi_user
  - DB_PASSWORD : supersecret
  - DB_SSL : false (en local)

- frontend/.env :
  - REACT_APP_API_URL=http://localhost:8000


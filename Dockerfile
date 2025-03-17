# Utilisation de l'image Node.js comme base
FROM node:22-slim

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers de l'application
COPY . .

# Installation des dépendances globales (CLI Ionic et Angular)
RUN npm install -g @ionic/cli @angular/cli

# Installation des dépendances nécessaires pour SQLite
RUN npm install cordova-sqlite-storage

# Exposition du port de l'application Ionic
EXPOSE 8100

# Commande pour démarrer l'application Ionic
CMD ["ionic", "serve", "--host", "0.0.0.0", "--disable-host-check"]
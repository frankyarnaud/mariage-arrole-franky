# Site de mariage Arrole & Franky — version premium

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvre ensuite : http://localhost:5173

## Administration RSVP

# Mot de passe par défaut : `mariage2026`

Les confirmations sont stockées dans le navigateur avec `localStorage`.
Tu peux exporter les réponses en CSV depuis l'espace admin.

## Remplacer par vos vraies images

Mets tes vraies photos dans :

```txt
public/images/couple/
```

Noms recommandés :

```txt
couple-principal.jpg
histoire-1.jpg
histoire-2.jpg
galerie-1.jpg
galerie-2.jpg
galerie-3.jpg
```

La photo principale est configurée dans :

```txt
src/data/siteData.js
```

Tu peux modifier :

- la date
- le lieu
- les textes
- les hôtels
- les photos
- les vidéos
- le mot de passe admin

## Vidéos

Place tes vidéos ici :

```txt
public/videos/save-the-date.mp4
public/videos/notre-histoire.mp4
```

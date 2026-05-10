const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const siteConfig = {
  couple: "Arrole & Franky",
  date: "2026-09-05T15:00:00",
  dateLabel: "05 septembre 2026",
  venue: "Palais Bénédictine - Fécamp",
  adminPassword: "mariage2026",
  heroPhoto: asset("images/couple/couple-principal.jpg"),
  background: asset("images/background-wedding.png"),
  quote: "L’amour se construit à deux, mais se célèbre avec ceux qu’on aime.",
  contactEmail: "frankyarnaud146@gmail.com",
  contactPhone: "+33 65 31 33 53",
};

export const replacementGuide = [
  {
    label: "Photo principale des mariés",
    file: "public/images/couple/couple-principal.jpg",
  },
  { label: "Photo histoire 1", file: "public/images/couple/histoire-1.jpg" },
  { label: "Photo histoire 2", file: "public/images/couple/histoire-2.jpg" },
  {
    label: "Photo galerie",
    file: "public/images/couple/galerie-1.jpg à galerie-8.jpg",
  },
  {
    label: "Vidéos",
    file: "public/videos/save.mp4 et public/videos/notre-histoire.mp4",
  },
];

export const videos = [
  {
    title: "Notre histoire",
    file: asset("videos/notre-histoire.mp4"),
  },
  {
    title: "Save the Date",
    file: asset("videos/save.mp4"),
  },
];

export const storyImages = [
  asset("images/couple/histoire-1.jpg"),
  asset("images/couple/histoire-2.jpg"),
];

export const program = [
  {
    title: "Cérémonie Religieuse",
    time: "16h00",
    text: "Paroisse Sainte-Honorine du Val de Seine — 7 Rue Dr Léonard, 76170 Lillebonne.",
    image: asset("images/couple/eglise.jpg"),
  },
  {
    title: "Le Vin d’Honneur",
    time: "18h00",
    text: "Coupes de champagne, photos et premiers instants de célébration au Palais. — 110 Rue Alexandre le Grand, 76400 Fécamp",
    image: asset("images/couple/vino.jpg"),
  },
  {
    title: "Le Dîner de Gala",
    time: "20h00",
    text: "Un dîner élégant, chaleureux et festif autour des mariés. — 110 Rue Alexandre le Grand, 76400 Fécamp",
    image: asset("images/couple/salle.jpg"),
  },
  {
    title: "La Soirée Dansante",
    time: "Jusqu’à l’aube",
    text: "Musique, ambiance et danse pour célébrer l’amour jusqu’au bout de la nuit. — 110 Rue Alexandre le Grand, 76400 Fécamp",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  },
];

export const hotels = [
  {
    category: "Accès direct à pied",
    name: "Hôtel Le Grand Pavois",
    stars: "★★★★",
    address: "15 Quai de la Vicomté",
    distance: "3 min à pied",
    text: "Le plus prestigieux, avec balcons donnant sur le port. Juste à côté du Palais.",
  },
  {
    category: "Accès direct à pied",
    name: "Hôtel Vent d’Ouest",
    stars: "★★★",
    address: "5 Rue Amiral Courbet",
    distance: "5 min à pied",
    text: "Un établissement de charme très calme avec une décoration typique marine.",
  },
  {
    category: "Accès direct à pied",
    name: "Hôtel du Commerce",
    stars: "★★★",
    address: "28 Place Bigot",
    distance: "5 min à pied",
    text: "Une option conviviale et traditionnelle en plein centre-ville.",
  },
  {
    category: "Front de mer",
    name: "Hôtel De La Plage",
    stars: "★★★",
    address: "87 Rue de la Plage",
    distance: "8 min à pied",
    text: "Parfait pour ceux qui veulent admirer les falaises au réveil.",
  },
  {
    category: "Front de mer",
    name: "The Originals Boutique, Hôtel Angleterre",
    stars: "★★★",
    address: "93 Rue de la Plage",
    distance: "10 min à pied",
    text: "Cadre chaleureux avec un pub britannique pour les fins de soirée.",
  },
  {
    category: "Options pratiques",
    name: "Ibis Budget Fécamp",
    stars: "",
    address: "Boulevard Suzanne Clément",
    distance: "5 min en voiture",
    text: "L’option idéale pour un budget maîtrisé sans sacrifier le confort.",
  },
  {
    category: "Options pratiques",
    name: "B&B HOTELS Fécamp",
    stars: "",
    address: "Avenue du Maréchal de Lattre de Tassigny",
    distance: "5 min en voiture",
    text: "Établissement moderne et fonctionnel pour les familles.",
  },
];

export const gallery = [
  asset("images/couple/galerie-1.jpg"),
  asset("images/couple/galerie-2.jpg"),
  asset("images/couple/galerie-3.jpg"),
  asset("images/couple/galerie-4.jpg"),
  asset("images/couple/galerie-5.jpg"),
  asset("images/couple/galerie-6.jpg"),
  asset("images/couple/galerie-7.jpg"),
  asset("images/couple/galerie-8.jpg"),
  asset("images/couple/galerie-9.jpg"),
  asset("images/couple/galerie-10.jpg"),
  asset("images/couple/galerie-11.jpg"),
  asset("images/couple/galerie-12.jpg"),
];

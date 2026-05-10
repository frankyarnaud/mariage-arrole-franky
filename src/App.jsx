import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarHeart,
  Camera,
  Clock,
  Download,
  Heart,
  Hotel,
  Info,
  Lock,
  Mail,
  MapPin,
  Menu,
  Music,
  Navigation,
  PartyPopper,
  Gem,
  Send,
  Sparkles,
  UserRoundCheck,
  X,
} from "lucide-react";
import {
  gallery,
  hotels,
  program,
  replacementGuide,
  siteConfig,
} from "./data/siteData";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSchYMG1nYSY7ovyS4KJnT_I68Y9Max8bSkTah1Jq1jpF35yQQ/viewform";
const GOOGLE_FORM_EMBED_URL = `${GOOGLE_FORM_URL}?embedded=true`;

const nav = [
  ["Accueil", "home"],
  ["Notre histoire", "story"],
  ["Programme", "program"],
  ["Hébergements", "hotels"],
  ["Infos pratiques", "info"],
  ["RSVP", "rsvp"],
  ["Galerie", "gallery"],
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Countdown() {
  const targetDate = new Date(siteConfig.date).getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div>
        <b>{timeLeft.days}</b>
        <span>Jours</span>
      </div>
      <div>
        <b>{timeLeft.hours}</b>
        <span>Heures</span>
      </div>
      <div>
        <b>{timeLeft.minutes}</b>
        <span>Minutes</span>
      </div>
      <div>
        <b>{timeLeft.seconds}</b>
        <span>Secondes</span>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topNotice">
        <div className="topNoticeContent">
          ✨ Réception exclusivement réservée aux adultes • Merci de votre
          compréhension • ✨ Afin que chacun profite pleinement de cette soirée
          élégante, les enfants ne seront malheureusement pas admis durant la
          réception • ✨ Pour votre confort et votre sécurité, nous recommandons
          vivement aux invités souhaitant réserver un hébergement de s’y prendre
          dès maintenant afin d’éviter les indisponibilités et de profiter
          pleinement de la soirée sans avoir à reprendre la route avec la
          fatigue •
        </div>
      </div>

      <header className="header">
        <button className="logo logoLarge" onClick={() => scrollToId("home")}>
          <span>Frarrole</span>
        </button>
        <nav className={open ? "nav open" : "nav"}>
          {nav.map(([label, id]) => (
            <button
              key={id}
              onClick={() => {
                scrollToId(id);
                setOpen(false);
              }}
            >
              {label}
            </button>
          ))}
        </nav>
        <button className="cta" onClick={() => scrollToId("rsvp")}>
          Confirmer ma présence ♡
        </button>
        <button className="mobile" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="heroPhoto">
        <img
          src={siteConfig.heroPhoto}
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?q=80&w=1200&auto=format&fit=crop";
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="heroCenter"
      >
        <div className="eyebrow"></div>
        <Sparkles size={16} />
        <h1 className="singleLineTitle">
          Arrole <span>&</span> Franky
        </h1>
        <p className="subtitle">se disent oui pour la vie</p>
        <div className="goldLine">
          <span>♡</span>
        </div>
        <h2>{siteConfig.dateLabel}</h2>
        <p className="venue">{siteConfig.venue}</p>
        <Countdown />
        <blockquote className="quoteText">“{siteConfig.quote}”</blockquote>
        <div className="quickLinks">
          {[
            ["Notre histoire", "story", Gem],
            ["Programme", "program", CalendarHeart],
            ["Hébergements", "hotels", MapPin],
            ["Infos pratiques", "info", Info],
            ["RSVP", "rsvp", Mail],
          ].map(([label, id, Icon]) => (
            <button key={id} onClick={() => scrollToId(id)}>
              <span>
                <Icon />
              </span>
              <b>{label}</b>
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SectionTitle({ kicker, title, children }) {
  return (
    <div className="sectionTitle">
      <p>{kicker}</p>
      <h2>{title}</h2>
      {children && <div>{children}</div>}
    </div>
  );
}

function Story() {
  return (
    <section id="story" className="section content">
      <SectionTitle kicker="Notre histoire" title="Deux chemins, une promesse">
        <p></p>
      </SectionTitle>
      <div className="storyGrid">
        <div className="glassCard" style={{ padding: "15px" }}>
          <h3
            style={{
              fontSize: "1.1rem",
              textAlign: "center",
              margin: "0 0 10px 0",
            }}
          >
            Arrole & Franky
          </h3>

          <div
            style={{
              fontSize: "0.65rem",
              lineHeight: "1.2",
              textAlign: "justify",
            }}
          >
            <span
              style={{
                display: "block",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Notre Histoire d’Amour ♥️
            </span>

            <div style={{ marginTop: "5px" }}>
              <strong>Le Commencement : Du Malentendu à l’Évidence</strong>
              <br />
              Tout commence en 2013 au Cameroun, sur les bancs d'un cours de
              langue. Entre nous, les débuts sont timides, voire électriques :
              un petit malentendu lors d'un projet commun illustre parfaitement
              le dicton : « l’amour commence parfois par la haine » !
            </div>

            <div style={{ marginTop: "5px" }}>
              La vie nous éloigne un temps, avant de nous réunir à nouveau en
              Italie grâce aux réseaux sociaux. Là, l’évidence s'impose : nos
              valeurs, nos principes et nos rêves s'alignent. Le 23 octobre
              2014, nous décidions de lier nos destins.
            </div>

            <div style={{ marginTop: "5px" }}>
              <strong>Notre Famille : Notre Plus Belle Bénédiction</strong>
              <br />
              Depuis plus de 11 ans, nous avançons sous le regard du Seigneur.
              Notre couple a été magnifié par l'arrivée de nos deux trésors :
              Leo Lewis (4 ans) et Louane Luz (3 mois). Ils sont nos plus
              grandes grâces, le fruit d'un amour construit sur le respect et la
              foi.
            </div>

            <div style={{ marginTop: "5px" }}>
              <strong>Quelques mots de nous...</strong>
              <br />
              <strong>Arrole à son "Amo" :</strong> « Franky, tu es l'homme que
              le Seigneur a façonné pour moi. Compagnon aimant, papa
              exceptionnel et ami loyal, tu es ma grâce divine. Chaque jour, je
              remercie le Ciel de t’avoir mis sur mon chemin. Je t’aime à
              l’infini. »
            </div>

            <div style={{ marginTop: "5px" }}>
              <strong>Franky à son "Amo" :</strong> « Arrole est une femme
              d’exception, dotée d’une foi sincère et d’une douceur infinie. Sa
              présence m’inspire à devenir meilleur chaque jour. C’est avec
              elle, dans l’amour du Christ et la paix, que je souhaite parcourir
              le reste de ma vie. »
            </div>

            <div style={{ marginTop: "5px" }}>
              <strong>Vers le "Oui" Éternel :</strong> Aujourd'hui, c'est main
              dans la main que nous nous apprêtons à nous dire "Oui" dans la
              maison du Seigneur. Nous croyons en l'amour divin et nous avons
              hâte de célébrer ce nouveau chapitre avec vous.
            </div>

            <div
              style={{
                textAlign: "center",
                marginTop: "8px",
                fontWeight: "bold",
              }}
            >
              Que le Seigneur préserve notre amour pour toujours. 🙏🏿♥️
            </div>
          </div>
        </div>

        <img src={`${import.meta.env.BASE_URL}images/couple/histoire-1.jpg`} alt="Notre histoire 1" />
        <img src={`${import.meta.env.BASE_URL}images/couple/histoire-2.jpg`} alt="Notre histoire 2" />
      </div>
    </section>
  );
}

function ThemeDress() {
  return (
    <section className="section content">
      <SectionTitle
        kicker="Thème & Dress Code"
        title="Chic, glamour et élégant"
      >
        <p className="themeText">
          Pour célébrer notre union dans l'éclat et l'harmonie, nous avons
          choisi le thème :<b> Chic, glamour et élégant.</b>
        </p>
        <p>blanc, bleu ciel et or.</p>
        <div className="colorPalette">
          <span className="colorCircle white"></span>
          <span className="colorCircle blue"></span>
          <span className="colorCircle gold"></span>
        </div>
      </SectionTitle>
      <div className="themeBox">
        <Sparkles />
        <p>
          <b>Dress Code :</b> Tenue de soirée élégante. Messieurs, sortez vos
          plus beaux costumes ; Mesdames, brillez dans vos robes préférées. Une
          touche de bleu ciel et or sera la bienvenue !
        </p>
      </div>
    </section>
  );
}

function Program() {
  return (
    <section id="program" className="section content">
      <SectionTitle kicker="Programme" title="La journée du mariage" />
      <div className="programGrid">
        {program.map((p, i) => (
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="programCard"
            key={p.title}
          >
            <img src={p.image} />
            <div>
              <span>{p.time}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Hotels() {
  const groups = [...new Set(hotels.map((h) => h.category))];
  return (
    <section id="hotels" className="section content">
      <SectionTitle kicker="Hébergements" title="Où séjourner ?">
        <p>
          Afin que vous puissiez profiter de la fête en toute sérénité, nous
          avons sélectionné pour vous les meilleurs établissements situés à
          proximité immédiate du Palais Bénédictine. Cette liste n’est toutefois
          pas exhaustive, et vous pourrez trouver de nombreuses autres options
          d'hébergement en ligne selon vos préférences.
        </p>
      </SectionTitle>
      <div className="hotelLayout">
        <div>
          {groups.map((g) => (
            <div key={g} className="hotelGroup">
              <h3>{g}</h3>
              {hotels
                .filter((h) => h.category === g)
                .map((h) => (
                  <article className="hotelCard" key={h.name}>
                    <Hotel />
                    <div>
                      <h4>
                        {h.name} <small>{h.stars}</small>
                      </h4>
                      <p className="address">
                        📍 {h.address} · {h.distance}
                      </p>
                      <p>{h.text}</p>
                    </div>
                  </article>
                ))}
            </div>
          ))}
        </div>
        <div className="mapCard">
          <iframe
            title="Palais Bénédictine"
            src="https://www.google.com/maps?q=Palais%20B%C3%A9n%C3%A9dictine%20F%C3%A9camp&output=embed"
            loading="lazy"
          ></iframe>
          <p>
            <Navigation size={16} /> Carte centrée sur le Palais Bénédictine.
          </p>
        </div>
      </div>
    </section>
  );
}

function InfoSection() {
  return (
    <section id="info" className="section content">
      <SectionTitle
        kicker="Infos pratiques"
        title="Un petit mot pour les parents"
      />
      <div className="infoGrid">
        <div className="childrenNote">
          <Heart />
          <h3>Réception réservée aux adultes</h3>
          <p>
            Nous aimons beaucoup vos enfants, mais nous souhaitons que cette
            soirée soit pour vous une parenthèse de détente absolue. Afin que
            tout le monde puisse profiter pleinement de la fête et danser
            jusqu'au bout de la nuit, la réception est réservée aux adultes.
            Nous vous remercions de votre compréhension et avons hâte de
            célébrer ce moment avec vous !
          </p>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section content">
      <SectionTitle kicker="Photos & vidéos" title="Les mariés en images">
        <p></p>
      </SectionTitle>
      <div className="galleryGrid">
        {gallery.map((src, i) => (
          <img key={i} src={src} />
        ))}
      </div>
      <div className="videoGrid">
        <video
          controls
          className="w-full rounded-3xl shadow-xl"
          poster={`${import.meta.env.BASE_URL}images/couple/galerie-1.jpg`}
        >
          <source src={`${import.meta.env.BASE_URL}videos/save.mp4`} type="video/mp4" />
        </video>

        <video
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full rounded-3xl shadow-xl"
          poster={`${import.meta.env.BASE_URL}images/couple/galerie-2.jpg`}
        >
          <source src={`${import.meta.env.BASE_URL}videos/notre-histoire.mp4`} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

function Rsvp() {
  return (
    <section id="rsvp" className="section content">
      <SectionTitle kicker="RSVP" title="Confirmer votre présence">
        <p>
          Merci de répondre via le formulaire ci-dessous. Vos réponses sont
          automatiquement enregistrées dans Google Sheets.
        </p>
      </SectionTitle>
      <div className="rsvpLayout">
        <div className="rsvpIntro">
          <UserRoundCheck />
          <h3>Votre présence compte énormément</h3>
          <p>
            Le formulaire permet de confirmer votre présence, indiquer si vous
            êtes accompagné(e), proposer du covoiturage et partager vos
            allergies ou informations utiles.
          </p>
          <p>
            <Mail size={16} /> {siteConfig.contactEmail}
          </p>
          <a
            className="formLinkButton"
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Send /> Ouvrir le formulaire RSVP
          </a>
        </div>
        <div className="googleFormCard">
          <iframe
            title="Formulaire RSVP Arrole et Franky"
            src={GOOGLE_FORM_EMBED_URL}
            loading="lazy"
          >
            Chargement du formulaire…
          </iframe>
        </div>
      </div>
    </section>
  );
}

function Admin() {
  return (
    <section className="section content admin">
      <SectionTitle kicker="Administration" title="Gestion des confirmations" />
      <div className="adminBox googleSheetInfo">
        <h3>Les réponses RSVP sont enregistrées dans Google Sheets</h3>
        <p>
          Pour consulter ou exporter les confirmations, ouvre le Google Form,
          puis va dans l’onglet <b>Réponses</b>. Tu peux ensuite cliquer sur
          l’icône Google Sheets pour voir le tableau ou exporter les réponses.
        </p>
        <a
          className="formLinkButton"
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noreferrer"
        >
          Ouvrir le formulaire RSVP
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main style={{ "--bg": `url(${siteConfig.background})` }}>
      <Header />
      <Hero />
      <Story />
      <ThemeDress />
      <Program />
      <Hotels />
      <InfoSection />
      <Rsvp />
      <Gallery />
      <Admin />
      <footer>
        <p>Arrole & Franky</p>
        <span>Avec amour, élégance et gratitude.</span>
      </footer>
    </main>
  );
}

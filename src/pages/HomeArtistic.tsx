import { type CSSProperties, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './HomeArtistic.css';
import logo from '../assets/romana logo png.png';
import heroImage from '../assets/usable/in a shp.jpg';
import mosaicImage from '../assets/usable/tornado like figure.jpg';
import romanWoman from '../assets/usable/fish in the sea.jpg';
import goldenMan from '../assets/usable/good evil in a carriage.jpg';
import pegasusLion from '../assets/usable/tornado like figure.jpg';
import colosseum from '../assets/usable/sink like.jpg';

type Feature = {
  number: string;
  title: string;
  text: string;
};

const features: Feature[] = [
  {
    number: '01',
    title: 'Tiny pieces. Infinite detail.',
    text: 'Romanian mosaic is treated as an object of luxury: precise, intimate, and made to be discovered slowly.',
  },
  {
    number: '02',
    title: 'A heritage palette.',
    text: 'Ivory, deep burgundy and restrained rose tones echo the identity of the mark while giving the imagery room to breathe.',
  },
  {
    number: '03',
    title: 'History, composed.',
    text: 'Ancient figures, architecture and ornament are arranged like fragments of a private European gallery.',
  },
];

const galleryTiles = [
  { title: 'Ancient grace', image: romanWoman },
  { title: 'Myth & movement', image: pegasusLion },
  { title: 'Gilded memory', image: goldenMan },
  { title: 'Roman architecture', image: colosseum },
];


const responsiveCss = `
  @media (max-width: 767px) {
    .romana-opening {
      padding: 0.75rem !important;
    }

    .romana-opening > div {
      width: 100% !important;
      min-height: 0 !important;
      max-height: calc(100dvh - 1.5rem) !important;
      padding: 3rem 1.35rem 2.25rem !important;
      overflow-y: auto !important;
    }

    .romana-opening .introMiniLabel {
      gap: 0.45rem !important;
      font-size: 0.48rem !important;
      letter-spacing: 0.16em !important;
    }

    .romana-opening .introMiniLine {
      width: 18px !important;
    }

    .romana-opening .introEmblem {
      width: 70px !important;
      height: 70px !important;
      margin: 1.5rem 0 1rem !important;
    }

    .romana-opening .introBrand {
      font-size: clamp(3.5rem, 18vw, 5rem) !important;
    }

    .romana-opening .introTagline {
      font-size: 0.9rem !important;
      line-height: 1.55 !important;
    }

    .romana-opening .introDivider {
      width: min(150px, 70vw) !important;
      margin: 1.35rem 0 1.25rem !important;
    }

    .romana-opening .introEnter {
      width: 100% !important;
      min-width: 0 !important;
      min-height: 52px !important;
    }

    .home-artistic-page-header {
      min-height: 100svh !important;
      padding: 1.25rem 1rem !important;
    }

    .home-artistic-header-inner {
      gap: 1rem !important;
      max-width: 100% !important;
    }

    .home-artistic-header-emblem {
      width: 68px !important;
      height: 68px !important;
      padding: 7px !important;
    }

    .home-artistic-header-brand {
      font-size: clamp(3rem, 16vw, 4.6rem) !important;
    }

    .home-artistic-header-tagline {
      margin-top: 0.65rem !important;
      font-size: 0.9rem !important;
    }

    .home-artistic-header-nav {
      gap: 0.7rem !important;
      margin-top: 0.1rem !important;
    }

    .home-artistic-header-nav a {
      padding: 0.55rem 0.25rem !important;
    }

    .home-artistic-header-hint {
      margin-top: 0.7rem !important;
      font-size: 0.5rem !important;
    }

    .home-artistic-page-shell {
      max-width: 100% !important;
      padding: 1.1rem 1rem 2rem !important;
    }

    .home-artistic-hero {
      min-height: auto !important;
      grid-template-columns: 1fr !important;
      gap: 2.5rem !important;
      padding: 1.5rem 0 2.5rem !important;
    }

    .home-artistic-hero-content {
      align-items: flex-start !important;
      gap: 1rem !important;
    }

    .home-artistic-eyebrow {
      font-size: 0.55rem !important;
      letter-spacing: 0.14em !important;
      line-height: 1.5 !important;
    }

    .home-artistic-hero-mark {
      width: 60px !important;
      height: 60px !important;
      padding: 6px !important;
    }

    .home-artistic-title {
      max-width: 100% !important;
      font-size: clamp(2.55rem, 13vw, 4rem) !important;
      line-height: 1 !important;
      letter-spacing: -0.045em !important;
    }

    .home-artistic-description {
      max-width: 100% !important;
      font-size: 0.92rem !important;
      line-height: 1.7 !important;
    }

    .home-artistic-buttons {
      width: 100% !important;
      flex-direction: column !important;
      align-items: stretch !important;
      margin-top: 0.2rem !important;
    }

    .home-artistic-buttons a {
      width: 100% !important;
      box-sizing: border-box !important;
      justify-content: center !important;
      min-height: 50px !important;
    }

    .home-artistic-signature {
      align-items: flex-start !important;
      font-size: 0.55rem !important;
      line-height: 1.5 !important;
      margin-top: 0.4rem !important;
    }

    .home-artistic-hero-visual {
      min-height: 0 !important;
      width: 100% !important;
      padding-right: 0.35rem !important;
    }

    .home-artistic-hero-frame {
      width: 100% !important;
      height: min(118vw, 500px) !important;
      padding: 9px !important;
      box-sizing: border-box !important;
    }

    .home-artistic-hero-image-main {
      top: 9px !important;
      left: 9px !important;
      right: 9px !important;
      bottom: 9px !important;
    }

    .home-artistic-hero-caption {
      left: 1.1rem !important;
      bottom: 1.1rem !important;
    }

    .home-artistic-hero-caption-title {
      font-size: 1.15rem !important;
    }

    .home-artistic-floating-mosaic {
      right: -8px !important;
      bottom: 20px !important;
      width: 115px !important;
      height: 140px !important;
      padding: 5px !important;
    }

    .home-artistic-floating-label {
      left: -8px !important;
      top: 10px !important;
      padding: 0.4rem 0.45rem !important;
      font-size: 0.43rem !important;
    }

    .home-artistic-divider {
      margin: 0.5rem 0 3.5rem !important;
    }

    .home-artistic-intro {
      margin-bottom: 4.5rem !important;
    }

    .home-artistic-intro-grid {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
    }

    .home-artistic-intro-heading {
      font-size: clamp(2.25rem, 11vw, 3.4rem) !important;
      line-height: 1.03 !important;
    }

    .home-artistic-intro-copy {
      max-width: 100% !important;
    }

    .home-artistic-feature {
      margin-bottom: 4.5rem !important;
    }

    .home-artistic-section-heading-row {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 1rem !important;
      margin-bottom: 1.5rem !important;
    }

    .home-artistic-section-heading {
      font-size: clamp(2rem, 9vw, 3rem) !important;
    }

    .home-artistic-section-aside {
      max-width: 100% !important;
      text-align: left !important;
      font-size: 0.82rem !important;
    }

    .home-artistic-feature-grid {
      grid-template-columns: 1fr !important;
    }

    .home-artistic-feature-card {
      min-height: 0 !important;
      padding: 1.5rem !important;
    }

    .home-artistic-feature-top {
      margin-bottom: 2.5rem !important;
    }

    .home-artistic-feature-title {
      max-width: 100% !important;
    }

    .home-artistic-feature-text {
      max-width: 100% !important;
    }

    .home-artistic-story {
      grid-template-columns: 1fr !important;
      gap: 2.5rem !important;
      margin-bottom: 4.5rem !important;
    }

    .home-artistic-story-image-wrap {
      min-height: 0 !important;
      padding: 9px !important;
    }

    .home-artistic-story-image {
      height: min(125vw, 520px) !important;
    }

    .home-artistic-story-image-border {
      inset: 24px !important;
    }

    .home-artistic-story-image-tag {
      bottom: 28px !important;
      padding: 0.55rem 0.7rem !important;
      font-size: 0.5rem !important;
    }

    .home-artistic-story-content {
      max-width: 100% !important;
    }

    .home-artistic-story-heading {
      font-size: clamp(2.3rem, 10.5vw, 3.5rem) !important;
    }

    .home-artistic-story-text {
      font-size: 0.92rem !important;
      line-height: 1.75 !important;
    }

    .home-artistic-story-facts {
      justify-content: space-between !important;
      gap: 0.75rem !important;
      margin: 1.8rem 0 !important;
      padding: 1.15rem 0 !important;
    }

    .home-artistic-gallery {
      margin-bottom: 4.5rem !important;
    }

    .home-artistic-gallery-header {
      align-items: flex-end !important;
      gap: 1rem !important;
    }

    .home-artistic-gallery-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      grid-auto-rows: 190px !important;
      gap: 8px !important;
    }

    .home-artistic-gallery-grid > div:nth-child(2) {
      transform: none !important;
    }

    .home-artistic-gallery-grid > div:nth-child(3) {
      grid-column: span 2 !important;
    }

    .home-artistic-gallery-meta {
      left: 0.7rem !important;
      right: 0.7rem !important;
      bottom: 0.7rem !important;
      gap: 0.5rem !important;
    }

    .home-artistic-gallery-meta strong {
      font-size: 0.78rem !important;
    }

    .home-artistic-cta {
      min-height: 0 !important;
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 2.5rem !important;
      padding: 2.75rem 1.35rem 3rem !important;
    }

    .home-artistic-cta-title {
      font-size: clamp(2.55rem, 12vw, 4rem) !important;
    }

    .home-artistic-cta-text {
      font-size: 0.9rem !important;
      line-height: 1.75 !important;
    }

    .home-artistic-cta-button {
      width: 100% !important;
      box-sizing: border-box !important;
      justify-content: center !important;
      min-height: 50px !important;
    }

    .home-artistic-cta-seal {
      width: 145px !important;
      height: 145px !important;
      align-self: center !important;
    }

    .home-artistic-seal-outer {
      width: 112px !important;
      height: 112px !important;
    }

    .home-artistic-seal-inner {
      width: 82px !important;
      height: 82px !important;
      font-size: 0.65rem !important;
    }

    .home-artistic-footer {
      flex-wrap: wrap !important;
      text-align: center !important;
      line-height: 1.6 !important;
      padding-top: 1.5rem !important;
    }
  }

  @media (max-width: 390px) {
    .home-artistic-gallery-grid {
      grid-template-columns: 1fr !important;
      grid-auto-rows: 240px !important;
    }

    .home-artistic-gallery-grid > div:nth-child(3) {
      grid-column: auto !important;
    }

    .home-artistic-floating-mosaic {
      width: 100px !important;
      height: 122px !important;
    }
  }
`;

export default function HomeArtistic() {
  const [introOpen, setIntroOpen] = useState(false);

  useEffect(() => {
    try {
      const seen = localStorage.getItem('romanaIntroSeen');
      if (!seen) setIntroOpen(true);
    } catch (e) {
      // localStorage may be unavailable in some environments — fail silently
      setIntroOpen(false);
    }
  }, []);

  return (
    <>
      <style>{responsiveCss}
<style>{`
  .home-artistic-scroll-cue {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    margin-top: 0.45rem;
  }

  .home-artistic-scroll-pointer {
    position: relative;
    width: 28px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    animation: homeArtisticPointerFloat 1.8s ease-in-out infinite;
  }

  .home-artistic-scroll-pointer-glow {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(128, 9, 29, 0.42);
    filter: blur(8px);
    animation: homeArtisticPointerGlow 1.8s ease-in-out infinite;
  }

  .home-artistic-scroll-pointer-chevron {
    position: relative;
    width: 11px;
    height: 11px;
    border-right: 2px solid #80091d;
    border-bottom: 2px solid #80091d;
    transform: rotate(45deg) translate(-2px, -2px);
    filter: drop-shadow(0 0 3px rgba(128, 9, 29, 0.75));
  }

  @keyframes homeArtisticPointerFloat {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.55;
    }
    50% {
      transform: translateY(5px);
      opacity: 1;
    }
  }

  @keyframes homeArtisticPointerGlow {
    0%, 100% {
      opacity: 0.25;
      transform: scale(0.75);
    }
    50% {
      opacity: 0.9;
      transform: scale(1.35);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .home-artistic-scroll-pointer,
    .home-artistic-scroll-pointer-glow {
      animation: none;
    }
  }
`}</style>
</style>
      {introOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          style={styles.introOverlay}
          className="romana-opening"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            style={styles.introCard}
          >
            <div style={styles.introTopRule} />

          <div style={styles.introMiniLabel}>
              <span style={styles.introMiniLine} />
              <span>AN ATELIER OF MEMORY</span>
              <span style={styles.introMiniLine} />
            </div>

            <div style={styles.introEmblem} aria-hidden="true">
              <img src={logo} alt="Romana logo" style={styles.logoBadgeLarge} />
            </div>

             {/* <p style={styles.introOverline}>ROMANA MOSAIC</p>*/} 

            <h1 style={styles.introBrand}>Romana</h1>

            <p style={styles.introTagline}>
              from a digital collectable
              <br />
              to a statement piece.
            </p>

            <div style={styles.introDivider} aria-hidden="true">
              <span style={styles.introDividerLine} />
              <i style={styles.introDividerDiamond} />
              <span style={styles.introDividerLine} />
            </div>

            <button
              type="button"
              onClick={() => {
                try {
                  localStorage.setItem('romanaIntroSeen', 'true');
                } catch (e) {
                  /* ignore */
                }
                setIntroOpen(false);
              }}
              style={styles.introEnter}
              aria-label="Enter Romana"
            >
              <span>Enter the collection</span>
              <span style={styles.introEnterArrow}>↗</span>
            </button>

            <p style={styles.introHint}>A story is waiting inside</p>

            <div style={styles.introBottomRule} />
          </motion.div>
        </motion.div>
      )}
      
      {/* FULL-SCREEN PAGE HEADER */}
<header style={styles.pageHeader} className="home-artistic-page-header">
  <div style={styles.headerInner} className="home-artistic-header-inner">
    <div style={styles.headerEmblem} className="home-artistic-header-emblem" aria-hidden="true">
      <img src={logo} alt="Romana logo" style={styles.logoBadgeMedium} />
    </div>

    <div style={styles.headerBrandBlock} className="home-artistic-header-brand-block">
      <p style={styles.headerOverline}>Romanian mosaic</p>
      <h1 style={styles.headerBrand} className="home-artistic-header-brand">Romana</h1>
      <p style={styles.headerTagline} className="home-artistic-header-tagline">
        from a digital collectable
        <br />
        to a statement piece.
      </p>
    </div>

    <nav style={styles.headerNav} className="home-artistic-header-nav" aria-label="Primary">
      <Link to="/about" style={styles.headerNavLink}>
        present
      </Link>
      <span style={styles.headerNavDot}>·</span>
      <Link to="/history" style={styles.headerNavLink}>
        History
      </Link>
    </nav>

    <div style={styles.headerRule} aria-hidden="true">
      <span style={styles.headerRuleLine} />
      <i style={styles.headerRuleDiamond} />
      <span style={styles.headerRuleLine} />
    </div>

    <div className="home-artistic-scroll-cue">
  <p style={styles.headerHint} className="home-artistic-header-hint">Scroll to enter the atelier</p>
  <span className="home-artistic-scroll-pointer" aria-hidden="true">
    <span className="home-artistic-scroll-pointer-glow" />
    <span className="home-artistic-scroll-pointer-chevron" />
  </span>
</div>
  </div>
</header>
      <main style={styles.page} className="home-artistic-page">
      <div style={styles.ambientTexture} aria-hidden="true" />
      <div style={styles.mosaicHalo} aria-hidden="true" />

      <div style={styles.pageShell} className="home-artistic-page-shell">
        {/* HERO */}
        <section style={styles.hero} className="home-artistic-hero">
          <div style={styles.heroContent} className="home-artistic-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={styles.eyebrowRow}
            >
              <span style={styles.eyebrowRule} />
              <span style={styles.eyebrow} className="home-artistic-eyebrow">Roman style mosaic · heritage atelier</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.04 }}
              style={styles.heroMark}
              className="home-artistic-hero-mark"
              aria-label="Romana logo"
            >
              <img src={logo} alt="Romana logo" style={styles.logoBadgeSmall} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              style={styles.title}
              className="home-artistic-title"
            >
            From<em style={styles.titleEmphasis}>Blockchain</em> to Timeless Stone.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.14 }}
              style={styles.description}
              className="home-artistic-description"
            >
              Romana merges Digital Art with Ancient Roman style mosaic.
Handcrafted by master artisans.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={styles.buttonRow}
              className="home-artistic-buttons"
            >
              <Link to="/history" style={styles.primaryButton}>
                Explore the history
                <span style={styles.buttonArrow}>↗</span>
              </Link>
              <Link to="/about" style={styles.secondaryButton}>
                Discover our story
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              style={styles.heroSignature}
              className="home-artistic-signature"
            >
              <span style={styles.signatureLine} />
              <span>Crafted with patience · inspired by antiquity</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            style={styles.heroVisual}
            className="home-artistic-hero-visual"
          >
            <div style={styles.heroFrame} className="home-artistic-hero-frame">
              <div style={styles.frameCornerTopLeft} />
              <div style={styles.frameCornerBottomRight} />

              <div style={styles.heroImageMain} className="home-artistic-hero-image-main">
                <img src={heroImage} alt="Romanian heritage artwork" style={styles.heroImage} />
                <div style={styles.heroImageVeil} />
                <div style={styles.heroCaption} className="home-artistic-hero-caption">
                  <span style={styles.heroCaptionSmall}>The atelier</span>
                  <strong style={styles.heroCaptionTitle} className="home-artistic-hero-caption-title">A fragment of eternity</strong>
                </div>
              </div>

              <div style={styles.floatingMosaic} className="home-artistic-floating-mosaic">
                <img src={mosaicImage} alt="roman mosaic detail" style={styles.floatingImage} />
                <div style={styles.floatingLabel} className="home-artistic-floating-label">
                  <span>ROMAN STYLE</span>
                  <span>MOSAIC</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ORNAMENTAL DIVIDER */}
        <div style={styles.ornamentalDivider} className="home-artistic-divider" aria-hidden="true">
          <span style={styles.dividerLine} />
          <span style={styles.diamond}>
            <span style={styles.diamondCore} />
          </span>
          <span style={styles.dividerLine} />
        </div>

        {/* INTRO */}
        <section style={styles.introSection} className="home-artistic-intro">
          <div style={styles.introKicker}>
            <span style={styles.introNumber}>I</span>
            <span>THE ART OF THE FRAGMENT</span>
          </div>

          <div style={styles.introGrid} className="home-artistic-intro-grid">
            <h2 style={styles.introHeading} className="home-artistic-intro-heading">
              Luxury is not louder.
              <br />
              <span style={{ color: '#80091d' }}>It is more considered.</span>
            </h2>

            <div style={styles.introCopy}>
              <p>
                Every surface tells a story. Every small piece has a place. Inspired by the
                visual language of Roman style mosaic, Romana brings together
                classical memory and contemporary refinement.
              </p>
              <Link to="/history" style={styles.textLink}>
                Enter the story <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section style={styles.featureSection} className="home-artistic-feature">
          <div style={styles.sectionHeadingRow} className="home-artistic-section-heading-row">
            <div>
              <p style={styles.sectionKicker}>A language of detail</p>
              <h2 style={styles.sectionHeading} className="home-artistic-section-heading">Made to be looked at twice.</h2>
            </div>
            <p style={styles.sectionAside} className="home-artistic-section-aside">
              Three principles shape the experience: precision, heritage and quiet luxury.
            </p>
          </div>

          <div style={styles.featureGrid} className="home-artistic-feature-grid">
            {features.map((feature, index) => (
              <motion.article
                key={feature.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                style={styles.featureCard}
                className="home-artistic-feature-card"
              >
                <div style={styles.featureTop} className="home-artistic-feature-top">
                  <span style={styles.featureNumber}>{feature.number}</span>
                  <span style={styles.featureMotif} />
                </div>
                <h3 style={styles.featureTitle} className="home-artistic-feature-title">{feature.title}</h3>
                <p style={styles.featureText} className="home-artistic-feature-text">{feature.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* EDITORIAL IMAGE STORY */}
        <section style={styles.storySection} className="home-artistic-story">
          <div style={styles.storyImageWrap} className="home-artistic-story-image-wrap">
            <img src={romanWoman} alt="Romanian figure and heritage" style={styles.storyImage} className="home-artistic-story-image" />
            <div style={styles.storyImageBorder} className="home-artistic-story-image-border" />
            <div style={styles.storyImageTag} className="home-artistic-story-image-tag">HERITAGE / 01</div>
          </div>

          <div style={styles.storyContent} className="home-artistic-story-content">
            <p style={styles.sectionKicker}>An old world, carefully reimagined</p>
            <h2 style={styles.storyHeading} className="home-artistic-story-heading">
              From Roman memory to
              <span style={styles.storyHeadingAccent}> Romanian soul.</span>
            </h2>
            <p style={styles.storyText} className="home-artistic-story-text">
              The visual identity of the page follows the same principle as a mosaic:
              individual fragments become meaningful only when they are composed together.
              Burgundy carries the identity. Ivory creates silence. Images bring the history
              to life.
            </p>

            <div style={styles.storyFacts} className="home-artistic-story-facts">
              <div>
                <strong style={styles.factNumber}>01</strong>
                <span style={styles.factLabel}>Heritage</span>
              </div>
              <div>
                <strong style={styles.factNumber}>02</strong>
                <span style={styles.factLabel}>Craft</span>
              </div>
              <div>
                <strong style={styles.factNumber}>03</strong>
                <span style={styles.factLabel}>Emotion</span>
              </div>
            </div>

            <Link to="/history" style={styles.outlineButton}>
              Read the history <span>↗</span>
            </Link>
          </div>
        </section>

        {/* GALLERY */}
        <section style={styles.gallerySection} className="home-artistic-gallery">
          <div style={styles.galleryHeader} className="home-artistic-gallery-header">
            <div>
              <p style={styles.sectionKicker}>The visual archive</p>
              <h2 style={styles.sectionHeading}>Fragments of a timeless world.</h2>
            </div>
            <span style={styles.galleryIndex}>II / IV</span>
          </div>

          <div style={styles.galleryGrid} className="home-artistic-gallery-grid">
            {galleryTiles.map((tile, index) => (
              <motion.div
                key={tile.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: index * 0.07 }}
                style={{
                  ...styles.galleryTile,
                  ...(index === 1 ? styles.galleryTileRaised : {}),
                  ...(index === 2 ? styles.galleryTileWide : {}),
                }}
              >
                <img src={tile.image} alt={tile.title} style={styles.galleryImage} />
                <div style={styles.galleryOverlay} />
                <div style={styles.galleryTileMeta} className="home-artistic-gallery-meta">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', fontWeight: 500 }}>{tile.title}</strong>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CLOSING CTA */}
        <section style={styles.ctaSection} className="home-artistic-cta">
          <div style={styles.ctaPattern} aria-hidden="true" />

          <div style={styles.ctaContent}>
            <p style={styles.ctaKicker}>THE COLLECTION</p>
            <h2 style={styles.ctaTitle} className="home-artistic-cta-title">
              Own a piece of the
              <span style={{ color: '#e7b5bb', fontStyle: 'italic' }}> story.</span>
            </h2>
            <p style={styles.ctaText} className="home-artistic-cta-text">
              Discover pieces where classical imagery, Romanian heritage and meticulous
              composition meet.
            </p>

            <Link to="/contact" style={styles.ctaButton} className="home-artistic-cta-button">
              Enter the collection <span>↗</span>
            </Link>
          </div>

          <div style={styles.ctaSeal} className="home-artistic-cta-seal" aria-hidden="true">
            <div style={styles.sealOuter} className="home-artistic-seal-outer">
              <div style={styles.sealInner} className="home-artistic-seal-inner">
                <span>ROMANIAN</span>
                <strong>✦</strong>
                <span>MOSAIC</span>
              </div>
            </div>
          </div>
        </section>

        <footer style={styles.footer} className="home-artistic-footer">
          <span>Romanian mosaic</span>
          <span style={styles.footerDot}>·</span>
          <span>Heritage, composed.</span>
        </footer>
      </div>
    </main>
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  introOverlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    display: 'grid',
    placeItems: 'center',
    padding: '1.5rem',
    background:
      'radial-gradient(circle at center, rgba(128, 9, 29, 0.10), transparent 38%), ' +
      'linear-gradient(135deg, #fbf5ee 0%, #f2e7dd 52%, #ead8d0 100%)',
    overflow: 'hidden',
  },

  introCard: {
    position: 'relative',
    width: 'min(620px, 100%)',
    minHeight: '650px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4.4rem 3rem 3rem',
    textAlign: 'center',
    color: '#520814',
    background:
      'linear-gradient(145deg, rgba(255,252,248,0.94), rgba(248,239,232,0.88))',
    border: '1px solid rgba(128, 9, 29, 0.26)',
    boxShadow:
      '0 40px 100px rgba(79, 10, 22, 0.18), inset 0 0 0 8px rgba(255,255,255,0.26)',
    overflow: 'hidden',
  },

  introTopRule: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    right: '20px',
    height: '1px',
    background:
      'linear-gradient(90deg, transparent, rgba(128, 9, 29, 0.38), transparent)',
  },

  introMiniLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.7rem',
    color: 'rgba(128, 9, 29, 0.68)',
    fontSize: '0.57rem',
    letterSpacing: '0.24em',
    fontWeight: 800,
  },

  introMiniLine: {
    width: '30px',
    height: '1px',
    background: 'rgba(128, 9, 29, 0.28)',
  },

  introEmblem: {
    margin: '2.3rem 0 1.3rem',
    width: '86px',
    height: '86px',
    display: 'grid',
    placeItems: 'center',
    border: '1px solid rgba(128, 9, 29, 0.34)',
    background: 'rgba(255,251,247,0.72)',
    boxShadow: '0 15px 32px rgba(79, 10, 22, 0.09)',
    padding: '10px',
  },

  logoBadgeLarge: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
  },

  logoBadgeMedium: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
    
  },

  logoBadgeSmall: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
  },

  introEmblemOuter: {
    width: '67px',
    height: '67px',
    display: 'grid',
    placeItems: 'center',
    background: '#80091d',
    padding: '7px',
  },

  introEmblemInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    border: '1px solid rgba(255,248,241,0.38)',
    overflow: 'hidden',
  },

  introEmblemLeft: {
    position: 'absolute',
    left: '9px',
    top: '8px',
    bottom: '8px',
    width: '6px',
    background: '#f8f0e8',
  },

  introEmblemMiddle: {
    position: 'absolute',
    left: '25px',
    top: '8px',
    bottom: '8px',
    width: '6px',
    background: '#f8f0e8',
  },

  introEmblemRight: {
    position: 'absolute',
    right: '8px',
    top: '8px',
    width: '19px',
    height: '6px',
    background: '#f8f0e8',
    boxShadow: '0 17px 0 #f8f0e8, 0 34px 0 #f8f0e8',
  },

  introOverline: {
    margin: '0 0 0.25rem',
    color: '#80091d',
    fontSize: '0.62rem',
    letterSpacing: '0.3em',
    fontWeight: 900,
  },

  introBrand: {
    margin: 0,
    color: '#560916',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(4rem, 10vw, 6.5rem)',
    lineHeight: 0.92,
    letterSpacing: '-0.065em',
    fontWeight: 500,
  },

  introTagline: {
    margin: '1.2rem 0 0',
    color: 'rgba(79, 10, 22, 0.62)',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: '1rem',
    lineHeight: 1.7,
    fontStyle: 'italic',
  },

  introDivider: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    width: '180px',
    margin: '1.7rem 0 1.6rem',
  },

  introDividerLine: {
    flex: 1,
    height: '1px',
    background: 'rgba(128, 9, 29, 0.24)',
  },

  introDividerDiamond: {
    width: '8px',
    height: '8px',
    display: 'block',
    background: '#80091d',
    transform: 'rotate(45deg)',
  },

  introEnter: {
    appearance: 'none',
    border: '1px solid rgba(128, 9, 29, 0.34)',
    background: '#80091d',
    color: '#fff8f1',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.8rem',
    padding: '1rem 1.35rem',
    minWidth: '215px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '0.68rem',
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    fontWeight: 900,
    boxShadow: '0 16px 32px rgba(79, 10, 22, 0.17)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  },

  introEnterArrow: {
    fontSize: '1rem',
    lineHeight: 1,
  },

  introHint: {
    margin: '1.15rem 0 0',
    color: 'rgba(79, 10, 22, 0.38)',
    fontSize: '0.58rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    fontWeight: 700,
  },

  introBottomRule: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    right: '20px',
    height: '1px',
    background:
      'linear-gradient(90deg, transparent, rgba(128, 9, 29, 0.38), transparent)',
  },

  page: {
    minHeight: '100vh',
    background:
      'radial-gradient(circle at 8% 5%, rgba(128, 9, 29, 0.08), transparent 21%), ' +
      'radial-gradient(circle at 92% 18%, rgba(128, 9, 29, 0.06), transparent 24%), ' +
      'linear-gradient(135deg, #fcf8f2 0%, #f5eee6 52%, #ecdfd5 100%)',
    color: '#4f0a16',
    position: 'relative',
    overflowX: 'hidden',
  },

  ambientTexture: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0.42,
    backgroundImage:
      'linear-gradient(45deg, rgba(128, 9, 29, 0.025) 25%, transparent 25%, transparent 75%, rgba(128, 9, 29, 0.025) 75%), ' +
      'linear-gradient(45deg, rgba(128, 9, 29, 0.025) 25%, transparent 25%, transparent 75%, rgba(128, 9, 29, 0.025) 75%)',
    backgroundPosition: '0 0, 14px 14px',
    backgroundSize: '28px 28px',
    mixBlendMode: 'multiply',
  },

  mosaicHalo: {
    position: 'absolute',
    top: '3rem',
    right: '-8rem',
    width: '34rem',
    height: '34rem',
    borderRadius: '50%',
    pointerEvents: 'none',
    opacity: 0.55,
    background:
      'radial-gradient(circle, rgba(128, 9, 29, 0.075) 0%, rgba(128, 9, 29, 0.025) 34%, transparent 70%)',
  },

  pageShell: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1320px',
    margin: '0 auto',
    padding: '2.2rem 2.4rem 3rem',
  },

  hero: {
    minHeight: '760px',
    display: 'grid',
    gridTemplateColumns: '0.96fr 1.04fr',
    gap: '5rem',
    alignItems: 'center',
    padding: '2rem 0 3rem',
  },

  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.35rem',
  },

  eyebrowRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },

  eyebrowRule: {
    width: '2.8rem',
    height: '1px',
    background: '#80091d',
  },

  eyebrow: {
    color: '#80091d',
    fontSize: '0.68rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    fontWeight: 800,
  },

  heroMark: {
    marginTop: '0.4rem',
    marginBottom: '-0.25rem',
    width: '74px',
    height: '74px',
    padding: '8px',
    border: '1px solid rgba(128, 9, 29, 0.35)',
    background: 'rgba(255, 250, 245, 0.68)',
    boxShadow: '0 10px 30px rgba(79, 10, 22, 0.08)',
    display: 'grid',
    placeItems: 'center',
  },

  markOuter: {
    width: '74px',
    height: '74px',
    padding: '7px',
    border: '1px solid rgba(128, 9, 29, 0.35)',
    transform: 'rotate(45deg)',
    background: 'rgba(255, 250, 245, 0.68)',
    boxShadow: '0 10px 30px rgba(79, 10, 22, 0.08)',
  },

  markInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: '#80091d',
    overflow: 'hidden',
  },

  markLineLeft: {
    position: 'absolute',
    left: '10px',
    top: '10px',
    bottom: '10px',
    width: '7px',
    background: '#f8f0e8',
  },

  markLineCenter: {
    position: 'absolute',
    left: '26px',
    top: '10px',
    bottom: '10px',
    width: '7px',
    background: '#f8f0e8',
  },

  markLineRight: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    width: '22px',
    height: '7px',
    background: '#f8f0e8',
    boxShadow: '0 18px 0 #f8f0e8, 0 36px 0 #f8f0e8',
  },

  title: {
    margin: 0,
    maxWidth: '720px',
    color: '#520814',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(3.25rem, 6.1vw, 6rem)',
    lineHeight: 0.98,
    letterSpacing: '-0.055em',
    fontWeight: 500,
    textShadow: '0 2px 0 rgba(255,255,255,0.72)',
  },

  titleEmphasis: {
    color: '#80091d',
    fontStyle: 'italic',
    fontWeight: 500,
  },

  description: {
    margin: '0.15rem 0 0',
    maxWidth: '620px',
    color: 'rgba(79, 10, 22, 0.72)',
    fontSize: '1.04rem',
    lineHeight: 1.95,
    letterSpacing: '0.005em',
  },

  buttonRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.8rem',
    marginTop: '0.55rem',
  },

  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.8rem',
    padding: '1rem 1.35rem',
    borderRadius: '4px',
    background: 'linear-gradient(135deg, #690617 0%, #80091d 56%, #9c1d35 100%)',
    border: '1px solid rgba(128, 9, 29, 0.45)',
    color: '#fff9f3',
    textDecoration: 'none',
    fontWeight: 800,
    fontSize: '0.88rem',
    boxShadow: '0 18px 38px rgba(79, 10, 22, 0.18), inset 0 1px rgba(255,255,255,0.14)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  },

  buttonArrow: {
    fontSize: '1rem',
    lineHeight: 1,
  },

  secondaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '1rem 1.35rem',
    borderRadius: '4px',
    border: '1px solid rgba(128, 9, 29, 0.24)',
    background: 'rgba(255, 251, 247, 0.64)',
    color: '#5a0a17',
    textDecoration: 'none',
    fontWeight: 750,
    fontSize: '0.88rem',
    boxShadow: '0 12px 28px rgba(79, 10, 22, 0.055)',
  },

  heroSignature: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginTop: '1.2rem',
    color: 'rgba(79, 10, 22, 0.52)',
    fontSize: '0.68rem',
    letterSpacing: '0.11em',
    textTransform: 'uppercase',
  },

  signatureLine: {
    width: '2.4rem',
    height: '1px',
    background: 'rgba(128, 9, 29, 0.32)',
  },

  heroVisual: {
    position: 'relative',
    minHeight: '610px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heroFrame: {
    position: 'relative',
    width: 'min(100%, 620px)',
    height: '600px',
    padding: '16px',
    border: '1px solid rgba(128, 9, 29, 0.26)',
    background: 'rgba(255, 251, 247, 0.58)',
    boxShadow: '0 30px 80px rgba(79, 10, 22, 0.12)',
  },

  frameCornerTopLeft: {
    position: 'absolute',
    top: '-9px',
    left: '-9px',
    width: '54px',
    height: '54px',
    borderTop: '3px solid #80091d',
    borderLeft: '3px solid #80091d',
    zIndex: 3,
  },

  frameCornerBottomRight: {
    position: 'absolute',
    right: '-9px',
    bottom: '-9px',
    width: '54px',
    height: '54px',
    borderRight: '3px solid #80091d',
    borderBottom: '3px solid #80091d',
    zIndex: 3,
  },

  heroImageMain: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    right: '16px',
    bottom: '16px',
    overflow: 'hidden',
    background: '#eadfd7',
  },

  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    filter: 'saturate(0.88) contrast(1.04)',
  },

  heroImageVeil: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(180deg, rgba(79, 10, 22, 0.02) 30%, rgba(79, 10, 22, 0.12) 58%, rgba(60, 5, 15, 0.82) 100%)',
  },

  heroCaption: {
    position: 'absolute',
    left: '2rem',
    bottom: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.45rem',
    color: '#fff8f1',
  },

  heroCaptionSmall: {
    color: 'rgba(255, 248, 241, 0.76)',
    textTransform: 'uppercase',
    letterSpacing: '0.24em',
    fontSize: '0.62rem',
    fontWeight: 800,
  },

  heroCaptionTitle: {
    fontFamily: 'Georgia, serif',
    fontSize: '1.65rem',
    fontWeight: 500,
    letterSpacing: '-0.02em',
  },

  floatingMosaic: {
    position: 'absolute',
    right: '-38px',
    bottom: '42px',
    width: '190px',
    height: '220px',
    padding: '8px',
    background: '#f8f0e8',
    border: '1px solid rgba(128, 9, 29, 0.3)',
    boxShadow: '0 22px 46px rgba(79, 10, 22, 0.18)',
    transform: 'rotate(2.5deg)',
  },

  floatingImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    filter: 'saturate(0.9) contrast(1.04)',
  },

  floatingLabel: {
    position: 'absolute',
    left: '-18px',
    top: '18px',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.55rem 0.65rem',
    background: '#80091d',
    color: '#fff8f1',
    fontSize: '0.55rem',
    letterSpacing: '0.16em',
    lineHeight: 1.35,
    fontWeight: 800,
    boxShadow: '0 8px 18px rgba(79, 10, 22, 0.18)',
  },

  ornamentalDivider: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.1rem',
    width: '100%',
    margin: '1.2rem 0 6rem',
  },

  dividerLine: {
    flex: 1,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(128, 9, 29, 0.28), transparent)',
  },

  diamond: {
    width: '22px',
    height: '22px',
    transform: 'rotate(45deg)',
    border: '1px solid rgba(128, 9, 29, 0.4)',
    background: '#f8f0e8',
    display: 'grid',
    placeItems: 'center',
  },

  diamondCore: {
    width: '7px',
    height: '7px',
    background: '#80091d',
  },

  introSection: {
    marginBottom: '7rem',
  },

  introKicker: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    marginBottom: '2.1rem',
    color: '#80091d',
    fontSize: '0.68rem',
    letterSpacing: '0.24em',
    textTransform: 'uppercase',
    fontWeight: 800,
  },

  introNumber: {
    display: 'grid',
    placeItems: 'center',
    width: '30px',
    height: '30px',
    border: '1px solid rgba(128, 9, 29, 0.3)',
    color: '#80091d',
    fontFamily: 'Georgia, serif',
    fontSize: '0.8rem',
  },

  introGrid: {
    display: 'grid',
    gridTemplateColumns: '1.15fr 0.85fr',
    gap: '5rem',
    alignItems: 'end',
  },

  introHeading: {
    margin: 0,
    color: '#560916',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(2.5rem, 4.7vw, 4.7rem)',
    lineHeight: 1.02,
    letterSpacing: '-0.045em',
    fontWeight: 500,
  },

  introHeadingSpan: {
    color: '#80091d',
  },

  introCopy: {
    maxWidth: '500px',
    paddingBottom: '0.25rem',
  },

  introCopyP: {
    margin: 0,
    color: 'rgba(79, 10, 22, 0.68)',
    fontSize: '1rem',
    lineHeight: 1.95,
  },

  textLink: {
    display: 'inline-flex',
    gap: '0.7rem',
    marginTop: '1.5rem',
    color: '#80091d',
    textDecoration: 'none',
    borderBottom: '1px solid rgba(128, 9, 29, 0.32)',
    paddingBottom: '0.35rem',
    fontSize: '0.8rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    fontWeight: 800,
  },

  featureSection: {
    marginBottom: '8rem',
  },

  sectionHeadingRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    gap: '2rem',
    marginBottom: '2.3rem',
  },

  sectionKicker: {
    margin: '0 0 0.8rem',
    color: '#80091d',
    textTransform: 'uppercase',
    letterSpacing: '0.22em',
    fontSize: '0.68rem',
    fontWeight: 800,
  },

  sectionHeading: {
    margin: 0,
    color: '#560916',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(2rem, 3.8vw, 3.5rem)',
    lineHeight: 1.04,
    letterSpacing: '-0.035em',
    fontWeight: 500,
  },

  sectionAside: {
    maxWidth: '330px',
    margin: 0,
    color: 'rgba(79, 10, 22, 0.56)',
    fontSize: '0.88rem',
    lineHeight: 1.8,
    textAlign: 'right',
  },

  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '1px',
    background: 'rgba(128, 9, 29, 0.18)',
    border: '1px solid rgba(128, 9, 29, 0.18)',
  },

  featureCard: {
    position: 'relative',
    minHeight: '270px',
    padding: '2rem',
    background:
      'linear-gradient(135deg, rgba(255,252,248,0.96), rgba(245,237,229,0.92))',
    overflow: 'hidden',
  },

  featureTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '4rem',
  },

  featureNumber: {
    color: '#80091d',
    fontFamily: 'Georgia, serif',
    fontSize: '0.82rem',
    letterSpacing: '0.08em',
  },

  featureMotif: {
    width: '30px',
    height: '30px',
    border: '1px solid rgba(128, 9, 29, 0.3)',
    transform: 'rotate(45deg)',
    background:
      'linear-gradient(45deg, transparent 44%, rgba(128, 9, 29, 0.18) 45%, rgba(128, 9, 29, 0.18) 55%, transparent 56%)',
  },

  featureTitle: {
    margin: '0 0 0.9rem',
    maxWidth: '300px',
    color: '#5a0a17',
    fontFamily: 'Georgia, serif',
    fontSize: '1.45rem',
    lineHeight: 1.15,
    fontWeight: 500,
    letterSpacing: '-0.02em',
  },

  featureText: {
    margin: 0,
    maxWidth: '330px',
    color: 'rgba(79, 10, 22, 0.64)',
    lineHeight: 1.85,
    fontSize: '0.9rem',
  },

  storySection: {
    display: 'grid',
    gridTemplateColumns: '0.95fr 1.05fr',
    gap: '6rem',
    alignItems: 'center',
    marginBottom: '8rem',
  },

  storyImageWrap: {
    position: 'relative',
    minHeight: '600px',
    padding: '14px',
    border: '1px solid rgba(128, 9, 29, 0.26)',
    background: 'rgba(255, 251, 247, 0.62)',
  },

  storyImage: {
    width: '100%',
    height: '570px',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    filter: 'saturate(0.86) contrast(1.05)',
  },

  storyImageBorder: {
    position: 'absolute',
    inset: '34px',
    border: '1px solid rgba(255, 249, 243, 0.55)',
    pointerEvents: 'none',
  },

  storyImageTag: {
    position: 'absolute',
    left: '-1px',
    bottom: '42px',
    padding: '0.7rem 1rem',
    background: '#80091d',
    color: '#fff8f1',
    fontSize: '0.6rem',
    letterSpacing: '0.18em',
    fontWeight: 800,
  },

  storyContent: {
    maxWidth: '610px',
  },

  storyHeading: {
    margin: '0 0 1.5rem',
    color: '#560916',
    fontFamily: 'Georgia, serif',
    fontSize: 'clamp(2.5rem, 4.4vw, 4.3rem)',
    lineHeight: 1.01,
    letterSpacing: '-0.045em',
    fontWeight: 500,
  },

  storyHeadingAccent: {
    color: '#80091d',
    fontStyle: 'italic',
  },

  storyText: {
    maxWidth: '530px',
    margin: 0,
    color: 'rgba(79, 10, 22, 0.68)',
    fontSize: '1rem',
    lineHeight: 1.95,
  },

  storyFacts: {
    display: 'flex',
    gap: '2.4rem',
    margin: '2.3rem 0',
    padding: '1.5rem 0',
    borderTop: '1px solid rgba(128, 9, 29, 0.18)',
    borderBottom: '1px solid rgba(128, 9, 29, 0.18)',
  },

  factNumber: {
    display: 'block',
    color: '#80091d',
    fontFamily: 'Georgia, serif',
    fontSize: '1.35rem',
    fontWeight: 500,
  },

  factLabel: {
    display: 'block',
    marginTop: '0.2rem',
    color: 'rgba(79, 10, 22, 0.52)',
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    fontSize: '0.58rem',
    fontWeight: 800,
  },

  outlineButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.95rem 1.2rem',
    border: '1px solid rgba(128, 9, 29, 0.28)',
    color: '#80091d',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    fontSize: '0.68rem',
    fontWeight: 800,
    background: 'rgba(255,251,247,0.42)',
  },

  gallerySection: {
    marginBottom: '8rem',
  },

  galleryHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    marginBottom: '2.3rem',
  },

  galleryIndex: {
    color: 'rgba(128, 9, 29, 0.58)',
    fontSize: '0.65rem',
    letterSpacing: '0.18em',
    fontWeight: 800,
  },

  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gridAutoRows: '280px',
    gap: '12px',
  },

  galleryTile: {
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(128, 9, 29, 0.2)',
    background: '#eadfd7',
    boxShadow: '0 20px 45px rgba(79, 10, 22, 0.1)',
  },

  galleryTileRaised: {
    transform: 'translateY(-34px)',
  },

  galleryTileWide: {
    gridColumn: 'span 2',
  },

  galleryImage: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    filter: 'saturate(0.86) contrast(1.04)',
    transition: 'transform 0.6s ease',
  },

  galleryOverlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(180deg, transparent 20%, rgba(52, 4, 13, 0.06) 42%, rgba(52, 4, 13, 0.78) 100%)',
  },

  galleryTileMeta: {
    position: 'absolute',
    left: '1.2rem',
    right: '1.2rem',
    bottom: '1.1rem',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    gap: '1rem',
    color: '#fff8f1',
  },

  galleryTileMetaSpan: {
    fontSize: '0.58rem',
    letterSpacing: '0.16em',
    opacity: 0.7,
  },

  galleryTileMetaStrong: {
    fontFamily: 'Georgia, serif',
    fontSize: '1rem',
    fontWeight: 500,
  },

  ctaSection: {
    position: 'relative',
    minHeight: '440px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '3rem',
    overflow: 'hidden',
    padding: '4rem 5rem',
    background:
      'linear-gradient(120deg, #650617 0%, #80091d 55%, #691020 100%)',
    boxShadow: '0 30px 70px rgba(79, 10, 22, 0.18)',
  },

  ctaPattern: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0.24,
    backgroundImage:
      'linear-gradient(45deg, transparent 42%, rgba(255,255,255,0.24) 43%, rgba(255,255,255,0.24) 47%, transparent 48%, transparent 92%, rgba(255,255,255,0.14) 93%, transparent 94%), ' +
      'linear-gradient(-45deg, transparent 42%, rgba(255,255,255,0.16) 43%, rgba(255,255,255,0.16) 47%, transparent 48%)',
    backgroundSize: '54px 54px',
  },

  ctaContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '650px',
  },

  ctaKicker: {
    margin: '0 0 1rem',
    color: 'rgba(255,248,241,0.72)',
    letterSpacing: '0.25em',
    fontSize: '0.65rem',
    fontWeight: 800,
  },

  ctaTitle: {
    margin: 0,
    color: '#fff8f1',
    fontFamily: 'Georgia, serif',
    fontSize: 'clamp(2.8rem, 5vw, 5rem)',
    lineHeight: 0.98,
    letterSpacing: '-0.045em',
    fontWeight: 500,
  },

  ctaTitleSpan: {
    color: '#e7b5bb',
    fontStyle: 'italic',
  },

  ctaText: {
    maxWidth: '520px',
    margin: '1.4rem 0 1.8rem',
    color: 'rgba(255,248,241,0.76)',
    fontSize: '0.98rem',
    lineHeight: 1.85,
  },

  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.8rem',
    padding: '1rem 1.25rem',
    background: '#f8f0e8',
    color: '#700719',
    textDecoration: 'none',
    fontSize: '0.72rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontWeight: 900,
    boxShadow: '0 14px 30px rgba(39, 2, 10, 0.18)',
  },

  ctaSeal: {
    position: 'relative',
    zIndex: 2,
    width: '230px',
    height: '230px',
    flex: '0 0 auto',
    display: 'grid',
    placeItems: 'center',
    border: '1px solid rgba(255,248,241,0.36)',
    transform: 'rotate(45deg)',
    background: 'rgba(255,248,241,0.045)',
  },

  sealOuter: {
    width: '180px',
    height: '180px',
    border: '1px solid rgba(255,248,241,0.42)',
    display: 'grid',
    placeItems: 'center',
  },

  sealInner: {
    width: '130px',
    height: '130px',
    transform: 'rotate(-45deg)',
    border: '1px solid rgba(255,248,241,0.24)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#fff8f1',
    textAlign: 'center',
  },

  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.8rem',
    padding: '2rem 0 0.5rem',
    color: 'rgba(79, 10, 22, 0.44)',
    textTransform: 'uppercase',
    letterSpacing: '0.17em',
    fontSize: '0.58rem',
    fontWeight: 800,
  },

  footerDot: {
    color: '#80091d',
  },

  pageHeader: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    margin: 0,
    padding: '2rem 1.5rem',
    boxSizing: 'border-box',
    background:
      'radial-gradient(circle at 50% 40%, rgba(196, 30, 58, 0.06), transparent 55%), ' +
      'linear-gradient(160deg, #ffffff 0%, #fff7f8 45%, #ffeef0 100%)',
  },

  headerInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.6rem',
    textAlign: 'center',
    maxWidth: '640px',
    width: '100%',
  },

  headerEmblem: {
    width: '90px',
    height: '90px',
    display: 'grid',
    placeItems: 'center',
    border: '1px solid rgba(196, 30, 58, 0.28)',
    background: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 14px 32px rgba(196, 30, 58, 0.08)',
    marginBottom: '0.4rem',
    padding: '10px',
  },

  headerEmblemOuter: {
    width: '56px',
    height: '56px',
    display: 'grid',
    placeItems: 'center',
    background: '#c41e3a',
    padding: '6px',
  },

headerEmblemInner: {
  position: 'relative',
  width: '100%',
  height: '100%',
  border: '1px solid rgba(255, 255, 255, 0.45)',
  overflow: 'hidden',
},

headerEmblemLeft: {
  position: 'absolute',
  left: '7px',
  top: '6px',
  bottom: '6px',
  width: '5px',
  background: '#ffffff',
},

headerEmblemMiddle: {
  position: 'absolute',
  left: '20px',
  top: '6px',
  bottom: '6px',
  width: '5px',
  background: '#ffffff',
},

headerEmblemRight: {
  position: 'absolute',
  right: '6px',
  top: '6px',
  width: '16px',
  height: '5px',
  background: '#ffffff',
  boxShadow: '0 14px 0 #ffffff, 0 28px 0 #ffffff',
},

headerBrandBlock: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.35rem',
},

headerOverline: {
  margin: 0,
  color: '#c41e3a',
  fontSize: '0.62rem',
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  fontWeight: 800,
},

headerBrand: {
  margin: 0,
  color: '#9e1830',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: 'clamp(3.4rem, 9vw, 5.8rem)',
  lineHeight: 0.92,
  letterSpacing: '-0.06em',
  fontWeight: 500,
},

headerTagline: {
  margin: '0.9rem 0 0',
  color: 'rgba(158, 24, 48, 0.55)',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: '1.05rem',
  lineHeight: 1.7,
  fontStyle: 'italic',
},

headerNav: {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginTop: '0.35rem',
},

headerNavLink: {
  color: 'rgba(158, 24, 48, 0.75)',
  textDecoration: 'none',
  fontSize: '0.66rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  fontWeight: 800,
  transition: 'color 0.2s ease',
},

headerNavDot: {
  color: 'rgba(196, 30, 58, 0.4)',
  fontSize: '0.75rem',
},

headerRule: {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  width: 'min(200px, 50vw)',
  marginTop: '0.5rem',
},

headerRuleLine: {
  flex: 1,
  height: '1px',
  background: 'linear-gradient(90deg, transparent, rgba(196, 30, 58, 0.3), transparent)',
},

headerRuleDiamond: {
  width: '8px',
  height: '8px',
  display: 'block',
  background: '#c41e3a',
  transform: 'rotate(45deg)',
},

headerHint: {
  margin: '1.4rem 0 0',
  color: 'rgba(158, 24, 48, 0.32)',
  fontSize: '0.58rem',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  fontWeight: 700,
},
};
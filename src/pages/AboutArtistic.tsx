import { type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { FaArrowRight, FaGem, FaCube, FaHistory } from 'react-icons/fa';
import aboutImage from '../assets/usable/oval like figures.jpg';

export default function About() {
  return (
    <div style={page}>
      <AnimatedSection style={heroSection} className="romana-hero">
        <div style={heroMosaic} aria-hidden="true" />
        <div style={heroOverlay} aria-hidden="true" />
        <div style={heroFrame} aria-hidden="true">
          <span style={frameCornerTL} />
          <span style={frameCornerBR} />
        </div>

        <div style={heroContent}>
          <div style={eyebrowRow}>
            <span style={eyebrowDot} />
            <p style={eyebrow}>ROMANA ATELIER · OUR STORY</p>
          </div>

          <h1 style={title}>
            From the
            <br />
            Blockchain to
            <br />
            <em style={titleAccent}>Timeless Stone.</em>
          </h1>

          <div style={heroRule} />

          <p style={heroDescription}>
            Romana transforms digital collectibles into physical works of art —
            handcrafted Roman-style mosaics created by master artisans using
            techniques that have endured for millennia.
          </p>

          <div style={buttonRow}>
            <Link to="/contact" style={primaryButton}>
              Start a Collection
              <FaArrowRight style={{ marginLeft: '.7rem' }} />
            </Link>
            <Link to="/" style={secondaryButton}>
              Explore Romana
            </Link>
          </div>
        </div>

        <div style={heroArtifact} className="romana-artifact">
          <div style={artifactFrame}>
            <img
              src={aboutImage}
              alt="Roman-style mosaic artwork"
              style={artifactImage}
            />
            <div style={artifactSheen} aria-hidden="true" />
            <span style={artifactLabel}>DIGITAL ART · REBORN</span>
          </div>
          <div style={artifactCaption}>
            <span>ROMANA</span>
            <span>ATELIER</span>
          </div>
        </div>

        <div style={heroBottomMosaic} aria-hidden="true">
          {tileStyles.concat(tileStyles.slice(0, 2)).map((tile, index) => (
            <span key={index} style={{ ...bottomTile, ...tile }} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection style={manifestoSection}>
        <div style={sectionKicker}>
          <span style={sectionNumber}>01</span>
          <span style={sectionLine} />
          <span>THE IDEA</span>
        </div>

        <div style={manifestoGrid} className="romana-manifesto">
          <div>
            <h2 style={sectionTitle}>
              A new home for
              <br />
              <em>digital art.</em>
            </h2>
          </div>

          <div>
            <p style={bodyText}>
              The NFT space has evolved far beyond its early days. On-chain
              technology and digital art have opened new possibilities, while
              collectors have increasingly become the heart of the ecosystem.
            </p>
            <p style={bodyText}>
              But one question remains: <strong>how do you actually display
              the art you own?</strong>
            </p>
            <p style={bodyText}>
              Romana was created to answer that question. We take a digital
              collectible and translate it into a tangible statement piece —
              not as a print or a screen, but as a handcrafted mosaic designed
              to live in the physical world.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection style={quoteSection}>
        <div style={quoteMosaic} aria-hidden="true" />
        <div style={quoteCard}>
          <span style={quoteMark}>“</span>
          <p style={quote}>
            Would you rather keep your digital collectible on a screen —
            or give it a place in the real world?
          </p>
          <span style={quoteAuthor}>— Romana Atelier</span>
        </div>
      </AnimatedSection>

      <AnimatedSection style={craftSection}>
        <div style={craftHeader}>
          <div style={sectionKicker}>
            <span style={sectionNumber}>02</span>
            <span style={sectionLine} />
            <span>THE CRAFT</span>
          </div>
          <h2 style={sectionTitle}>
            Ancient technique.
            <br />
            <em>Contemporary subject.</em>
          </h2>
          <p style={sectionIntro}>
            Romana brings together two worlds that were never meant to remain
            separate: the precision of digital art and the permanence of
            traditional mosaic.
          </p>
        </div>

        <div style={craftGrid} className="romana-craft">
          <article style={craftCard}>
            <div style={craftIcon}><FaCube size={22} /></div>
            <span style={cardNumber}>01</span>
            <h3 style={cardTitle}>From pixels to tesserae</h3>
            <p style={cardText}>
              A digital artwork becomes the visual blueprint. Its colors,
              shapes, character, and identity are translated into individual
              pieces of stone and arranged by hand.
            </p>
          </article>

          <article style={craftCard}>
            <div style={craftIcon}><FaHistory size={22} /></div>
            <span style={cardNumber}>02</span>
            <h3 style={cardTitle}>A Roman visual language</h3>
            <p style={cardText}>
              The work draws from the visual language of ancient Roman
              mosaics: rhythmic geometry, carefully placed tesserae, depth,
              texture, and an appreciation for imperfection.
            </p>
          </article>

          <article style={craftCard}>
            <div style={craftIcon}><FaGem size={22} /></div>
            <span style={cardNumber}>03</span>
            <h3 style={cardTitle}>Made to endure</h3>
            <p style={cardText}>
              The result is intended to outlive the screen it came from — a
              physical artwork with weight, texture, craftsmanship, and a
              presence that can be experienced in person.
            </p>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection style={tunisiaSection} className="romana-tunisia">
        <div style={tunisiaImageWrap}>
          <img
            src={aboutImage}
            alt="Ancient mosaic detail"
            style={tunisiaImage}
          />
          <div style={tunisiaImageOverlay} />
          <span style={imageStamp}>TUNISIA · MOSAIC HERITAGE</span>
        </div>

        <div style={tunisiaContent}>
          <div style={sectionKicker}>
            <span style={sectionNumber}>03</span>
            <span style={sectionLine} />
            <span>THE MATERIAL</span>
          </div>

          <h2 style={sectionTitle}>
            Inspired by the
            <br />
            <em>land itself.</em>
          </h2>

          <p style={bodyText}>
            One of the reasons mosaic art flourished in Tunisia is the land
            itself: a rich, diverse palette of naturally colored stones.
          </p>

          <p style={bodyText}>
            These earthy tones gave artisans the ability to create soft
            gradients, subtle transitions, and a sense of living depth. For
            Romana, that relationship between material and image is central to
            the medium.
          </p>

          <div style={materialNote}>
            <span style={materialDiamond} />
            <div>
              <strong>STONE IS THE MEDIUM.</strong>
              <p>
                Digital art provides the image. Ancient mosaic gives it
                permanence.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection style={atelierSection}>
        <div style={atelierFrame}>
          <div style={atelierMosaic} aria-hidden="true" />
          <div style={atelierContent}>
            <div style={sectionKicker}>
              <span style={sectionNumber}>04</span>
              <span style={sectionLine} />
              <span>THE ATELIER</span>
            </div>

            <h2 style={atelierTitle}>
              Handcrafted by
              <br />
              <em>master artisans.</em>
            </h2>

            <p style={atelierText}>
              We are currently creating a small number of promotional pieces
              to introduce the medium and place these works in the hands of
              collectors who understand what it means to own something made
              slowly, deliberately, and for the long term.
            </p>

            <div style={atelierMeta}>
              <span>20+ YEARS</span>
              <span>MASTER CRAFTSMANSHIP</span>
              <span>ONE-OF-ONE SPIRIT</span>
            </div>

            <Link to="/contact" style={outlineButton}>
              Talk to Romana
              <FaArrowRight style={{ marginLeft: '.7rem' }} />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection style={closingSection}>
        <div style={closingMosaic} aria-hidden="true" />
        <p style={closingEyebrow}>ROMANA ATELIER</p>
        <h2 style={closingTitle}>
          Digital ownership
          <br />
          deserves a <em>physical legacy.</em>
        </h2>
        <p style={closingText}>
          We believe the future of digital art can be displayed in a way that
          feels ancient, permanent, and profoundly human.
        </p>
        <Link to="/contact" style={primaryButton}>
          Create a Mosaic
          <FaArrowRight style={{ marginLeft: '.7rem' }} />
        </Link>
      </AnimatedSection>
      <style>{responsiveStyles}</style>
    </div>
  );
}


const responsiveStyles = `
  @media (max-width: 900px) {
    .romana-hero { grid-template-columns: 1fr !important; }
    .romana-artifact { width: min(520px, 80%) !important; }
    .romana-manifesto { grid-template-columns: 1fr !important; gap: 2rem !important; }
    .romana-craft { grid-template-columns: 1fr !important; }
    .romana-tunisia { grid-template-columns: 1fr !important; gap: 3rem !important; }
  }

  @media (max-width: 620px) {
    .romana-hero { padding: 4.5rem 7% 6rem !important; }
    .romana-artifact { width: 88% !important; }
    .romana-manifesto,
    .romana-tunisia { padding-left: 6% !important; padding-right: 6% !important; }
  }
`;

const colors = {
  burgundy: '#80091d',
  burgundyDark: '#520814',
  burgundySoft: '#9c1d35',
  ivory: '#fcf8f2',
  cream: '#f5eee6',
  creamSoft: '#eadfd7',
  white: '#fffaf5',
  stone: '#b78d56',
};

const mosaicPattern = `
  linear-gradient(45deg, transparent 42%, rgba(128,9,29,.11) 43%, rgba(128,9,29,.11) 57%, transparent 58%),
  linear-gradient(-45deg, transparent 42%, rgba(255,250,245,.72) 43%, rgba(255,250,245,.72) 57%, transparent 58%),
  linear-gradient(90deg, transparent 48%, rgba(128,9,29,.055) 49%, rgba(128,9,29,.055) 51%, transparent 52%),
  linear-gradient(0deg, transparent 48%, rgba(128,9,29,.055) 49%, rgba(128,9,29,.055) 51%, transparent 52%)
`;

const page: CSSProperties = {
  minHeight: '100vh',
  paddingTop: '5rem',
  overflow: 'hidden',
  boxSizing: 'border-box',
  color: colors.burgundyDark,
  background: `
    radial-gradient(circle at 10% 8%, rgba(128,9,29,.075), transparent 24%),
    radial-gradient(circle at 90% 45%, rgba(183,141,86,.065), transparent 26%),
    linear-gradient(180deg, ${colors.cream} 0%, ${colors.ivory} 100%)
  `,
};

const heroSection: CSSProperties = {
  position: 'relative',
  minHeight: '84vh',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.05fr) minmax(320px, .75fr)',
  alignItems: 'center',
  gap: '3rem',
  padding: '5.5rem 8% 7rem',
  overflow: 'hidden',
  background: `
    linear-gradient(90deg, rgba(252,248,242,.97) 0%, rgba(252,248,242,.90) 47%, rgba(252,248,242,.30) 100%),
    url(${aboutImage})
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const heroMosaic: CSSProperties = {
  position: 'absolute',
  inset: 0,
  opacity: .4,
  backgroundImage: mosaicPattern,
  backgroundSize: '42px 42px',
  mixBlendMode: 'multiply',
  pointerEvents: 'none',
};

const heroOverlay: CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: `
    radial-gradient(circle at 84% 16%, rgba(128,9,29,.18), transparent 23%),
    linear-gradient(180deg, transparent 72%, rgba(82,8,20,.16) 100%)
  `,
  pointerEvents: 'none',
};

const heroFrame: CSSProperties = {
  position: 'absolute',
  inset: '2rem 3%',
  border: '1px solid rgba(128,9,29,.19)',
  boxShadow: 'inset 0 0 0 1px rgba(128,9,29,.06)',
  pointerEvents: 'none',
};

const frameCornerTL: CSSProperties = {
  position: 'absolute',
  top: -1,
  left: -1,
  width: 90,
  height: 90,
  borderTop: '2px solid rgba(128,9,29,.38)',
  borderLeft: '2px solid rgba(128,9,29,.38)',
};

const frameCornerBR: CSSProperties = {
  position: 'absolute',
  right: -1,
  bottom: -1,
  width: 90,
  height: 90,
  borderRight: '2px solid rgba(128,9,29,.38)',
  borderBottom: '2px solid rgba(128,9,29,.38)',
};

const heroContent: CSSProperties = {
  position: 'relative',
  zIndex: 3,
  maxWidth: 720,
};

const eyebrowRow: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '.65rem',
};

const eyebrowDot: CSSProperties = {
  width: 8,
  height: 8,
  transform: 'rotate(45deg)',
  border: `1px solid ${colors.burgundy}`,
  background: 'rgba(128,9,29,.08)',
};

const eyebrow: CSSProperties = {
  margin: 0,
  color: colors.burgundy,
  fontSize: '.68rem',
  fontWeight: 800,
  letterSpacing: '.3em',
};

const title: CSSProperties = {
  margin: '1.5rem 0 1.65rem',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: 'clamp(3.4rem, 6.6vw, 6.6rem)',
  lineHeight: .91,
  letterSpacing: '-.06em',
  fontWeight: 500,
  color: colors.burgundyDark,
  textShadow: '0 2px 0 rgba(255,255,255,.75)',
};

const titleAccent: CSSProperties = {
  color: colors.burgundy,
  fontStyle: 'italic',
  fontWeight: 400,
};

const heroRule: CSSProperties = {
  width: 130,
  height: 2,
  background: `linear-gradient(90deg, ${colors.burgundy}, transparent)`,
  marginBottom: '1.7rem',
};

const heroDescription: CSSProperties = {
  maxWidth: 650,
  margin: 0,
  color: 'rgba(79,10,22,.61)',
  fontSize: 'clamp(1rem, 1.45vw, 1.14rem)',
  lineHeight: 1.95,
};

const buttonRow: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '.85rem',
  marginTop: '2.25rem',
};

const primaryButton: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 1.55rem',
  borderRadius: 3,
  color: colors.white,
  background: `linear-gradient(135deg, ${colors.burgundy}, ${colors.burgundySoft})`,
  textDecoration: 'none',
  fontWeight: 800,
  boxShadow: '0 18px 38px rgba(79,10,22,.16)',
};

const secondaryButton: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 1.55rem',
  borderRadius: 3,
  color: colors.burgundyDark,
  border: '1px solid rgba(128,9,29,.24)',
  background: 'rgba(255,250,245,.68)',
  textDecoration: 'none',
  fontWeight: 700,
};

const heroArtifact: CSSProperties = {
  position: 'relative',
  zIndex: 3,
  justifySelf: 'center',
  width: 'min(430px, 90%)',
  transform: 'rotate(2deg)',
};

const artifactFrame: CSSProperties = {
  position: 'relative',
  padding: '1rem',
  background: colors.ivory,
  border: '1px solid rgba(128,9,29,.24)',
  boxShadow: '0 35px 80px rgba(79,10,22,.20)',
};

const artifactImage: CSSProperties = {
  display: 'block',
  width: '100%',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
  filter: 'saturate(.88) contrast(1.04)',
};

const artifactSheen: CSSProperties = {
  position: 'absolute',
  inset: '1rem',
  border: '1px solid rgba(255,255,255,.65)',
  pointerEvents: 'none',
};

const artifactLabel: CSSProperties = {
  position: 'absolute',
  left: '1.65rem',
  bottom: '1.6rem',
  padding: '.45rem .55rem',
  background: 'rgba(82,8,20,.82)',
  color: colors.white,
  fontSize: '.48rem',
  fontWeight: 800,
  letterSpacing: '.18em',
};

const artifactCaption: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '.75rem',
  color: colors.burgundy,
  fontSize: '.55rem',
  letterSpacing: '.22em',
  fontWeight: 800,
};

const heroBottomMosaic: CSSProperties = {
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 5,
  zIndex: 5,
};

const manifestoSection: CSSProperties = {
  maxWidth: 1180,
  margin: '0 auto',
  padding: '7rem 7% 6rem',
};

const sectionKicker: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '.75rem',
  color: colors.burgundy,
  fontSize: '.62rem',
  fontWeight: 800,
  letterSpacing: '.22em',
};

const sectionNumber: CSSProperties = {
  fontFamily: 'Georgia, serif',
  fontSize: '.8rem',
};

const sectionLine: CSSProperties = {
  width: 52,
  height: 1,
  background: 'rgba(128,9,29,.28)',
};

const manifestoGrid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1.1fr',
  gap: '5rem',
  marginTop: '2rem',
};

const sectionTitle: CSSProperties = {
  margin: 0,
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontWeight: 500,
  fontSize: 'clamp(2.45rem, 4.5vw, 4.3rem)',
  lineHeight: .98,
  letterSpacing: '-.045em',
  color: colors.burgundyDark,
};

const sectionIntro: CSSProperties = {
  maxWidth: 620,
  margin: '1.4rem 0 0',
  color: 'rgba(79,10,22,.56)',
  lineHeight: 1.9,
};

const bodyText: CSSProperties = {
  margin: '0 0 1.25rem',
  color: 'rgba(79,10,22,.60)',
  fontSize: '1rem',
  lineHeight: 1.95,
};

const quoteSection: CSSProperties = {
  position: 'relative',
  padding: '0 6% 7rem',
};

const quoteMosaic: CSSProperties = {
  height: 16,
  maxWidth: 280,
  margin: '0 auto 1.25rem',
  backgroundImage: mosaicPattern,
  backgroundSize: '26px 26px',
  opacity: .62,
};

const quoteCard: CSSProperties = {
  position: 'relative',
  maxWidth: 940,
  margin: '0 auto',
  padding: '4.4rem 8%',
  textAlign: 'center',
  border: '1px solid rgba(128,9,29,.17)',
  background: `
    radial-gradient(circle at center, rgba(183,141,86,.10), transparent 48%),
    linear-gradient(145deg, rgba(255,252,248,.9), rgba(245,238,230,.75))
  `,
  boxShadow: '0 28px 70px rgba(79,10,22,.09)',
};

const quoteMark: CSSProperties = {
  display: 'block',
  color: colors.burgundy,
  fontFamily: 'Georgia, serif',
  fontSize: '4.5rem',
  lineHeight: .5,
  opacity: .7,
};

const quote: CSSProperties = {
  margin: '1.25rem 0',
  color: colors.burgundyDark,
  fontFamily: 'Georgia, serif',
  fontSize: 'clamp(1.55rem, 3vw, 2.45rem)',
  lineHeight: 1.45,
  fontStyle: 'italic',
};

const quoteAuthor: CSSProperties = {
  color: colors.burgundy,
  fontSize: '.65rem',
  fontWeight: 800,
  letterSpacing: '.25em',
  textTransform: 'uppercase',
};

const craftSection: CSSProperties = {
  padding: '6.5rem 7% 7rem',
  background: 'rgba(82,8,20,.035)',
  borderTop: '1px solid rgba(128,9,29,.08)',
  borderBottom: '1px solid rgba(128,9,29,.08)',
};

const craftHeader: CSSProperties = {
  maxWidth: 1180,
  margin: '0 auto',
};

const craftGrid: CSSProperties = {
  maxWidth: 1180,
  margin: '3rem auto 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '1rem',
};

const craftCard: CSSProperties = {
  position: 'relative',
  minHeight: 320,
  padding: '2rem',
  overflow: 'hidden',
  background: 'linear-gradient(145deg, rgba(255,252,248,.94), rgba(245,238,230,.76))',
  border: '1px solid rgba(128,9,29,.13)',
  boxShadow: '0 20px 48px rgba(79,10,22,.07)',
};

const craftIcon: CSSProperties = {
  width: 54,
  height: 54,
  display: 'grid',
  placeItems: 'center',
  color: colors.burgundy,
  border: '1px solid rgba(128,9,29,.20)',
  borderRadius: '50%',
  background: 'rgba(128,9,29,.035)',
  marginBottom: '3rem',
};

const cardNumber: CSSProperties = {
  position: 'absolute',
  top: '1.7rem',
  right: '1.7rem',
  color: 'rgba(128,9,29,.24)',
  fontFamily: 'Georgia, serif',
  fontSize: '1.8rem',
};

const cardTitle: CSSProperties = {
  margin: '0 0 1rem',
  color: colors.burgundyDark,
  fontFamily: 'Georgia, serif',
  fontSize: '1.45rem',
  fontWeight: 500,
};

const cardText: CSSProperties = {
  margin: 0,
  color: 'rgba(79,10,22,.56)',
  lineHeight: 1.85,
};

const tunisiaSection: CSSProperties = {
  maxWidth: 1180,
  margin: '0 auto',
  padding: '8rem 7%',
  display: 'grid',
  gridTemplateColumns: 'minmax(280px, .85fr) minmax(0, 1fr)',
  gap: '5rem',
  alignItems: 'center',
};

const tunisiaImageWrap: CSSProperties = {
  position: 'relative',
  padding: '.75rem',
  background: colors.ivory,
  border: '1px solid rgba(128,9,29,.20)',
  boxShadow: '0 30px 70px rgba(79,10,22,.13)',
  transform: 'rotate(-2deg)',
};

const tunisiaImage: CSSProperties = {
  display: 'block',
  width: '100%',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
  filter: 'sepia(.08) saturate(.86)',
};

const tunisiaImageOverlay: CSSProperties = {
  position: 'absolute',
  inset: '.75rem',
  background: 'linear-gradient(135deg, rgba(128,9,29,.10), transparent 55%)',
  pointerEvents: 'none',
};

const imageStamp: CSSProperties = {
  position: 'absolute',
  bottom: '1.45rem',
  left: '1.45rem',
  padding: '.48rem .6rem',
  background: 'rgba(82,8,20,.82)',
  color: colors.white,
  fontSize: '.47rem',
  fontWeight: 800,
  letterSpacing: '.17em',
};

const tunisiaContent: CSSProperties = {
  maxWidth: 620,
};

const materialNote: CSSProperties = {
  display: 'flex',
  gap: '1rem',
  alignItems: 'flex-start',
  marginTop: '2rem',
  padding: '1.25rem',
  borderLeft: `2px solid ${colors.burgundy}`,
  background: 'rgba(128,9,29,.035)',
};

const materialDiamond: CSSProperties = {
  width: 10,
  height: 10,
  flex: '0 0 auto',
  marginTop: '.35rem',
  transform: 'rotate(45deg)',
  background: 'rgba(128,9,29,.10)',
  border: `1px solid ${colors.burgundy}`,
};



const atelierSection: CSSProperties = {
  padding: '0 6% 8rem',
};

const atelierFrame: CSSProperties = {
  position: 'relative',
  maxWidth: 1180,
  margin: '0 auto',
  overflow: 'hidden',
  background: colors.burgundyDark,
  color: colors.ivory,
  boxShadow: '0 35px 90px rgba(79,10,22,.18)',
};

const atelierMosaic: CSSProperties = {
  position: 'absolute',
  inset: 0,
  opacity: .22,
  backgroundImage: `
    linear-gradient(45deg, transparent 42%, rgba(255,250,245,.28) 43%, rgba(255,250,245,.28) 57%, transparent 58%),
    linear-gradient(-45deg, transparent 42%, rgba(255,250,245,.13) 43%, rgba(255,250,245,.13) 57%, transparent 58%)
  `,
  backgroundSize: '38px 38px',
};

const atelierContent: CSSProperties = {
  position: 'relative',
  zIndex: 2,
  maxWidth: 700,
  padding: '5rem 7%',
};

const atelierTitle: CSSProperties = {
  margin: '1.6rem 0',
  fontFamily: 'Georgia, serif',
  fontWeight: 500,
  fontSize: 'clamp(2.5rem, 5vw, 4.8rem)',
  lineHeight: 1,
  letterSpacing: '-.045em',
  color: colors.ivory,
};

const atelierText: CSSProperties = {
  maxWidth: 620,
  color: 'rgba(252,248,242,.68)',
  lineHeight: 1.9,
};

const atelierMeta: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem 1.6rem',
  margin: '2rem 0',
  color: 'rgba(252,248,242,.62)',
  fontSize: '.56rem',
  fontWeight: 800,
  letterSpacing: '.18em',
};

const outlineButton: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  color: colors.ivory,
  textDecoration: 'none',
  border: '1px solid rgba(252,248,242,.35)',
  padding: '1rem 1.4rem',
  fontWeight: 800,
};

const closingSection: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  padding: '8rem 7%',
  textAlign: 'center',
  background: colors.cream,
  borderTop: '1px solid rgba(128,9,29,.09)',
};

const closingMosaic: CSSProperties = {
  width: 250,
  height: 14,
  margin: '0 auto 2rem',
  backgroundImage: mosaicPattern,
  backgroundSize: '24px 24px',
  opacity: .62,
};

const closingEyebrow: CSSProperties = {
  margin: 0,
  color: colors.burgundy,
  fontSize: '.62rem',
  fontWeight: 800,
  letterSpacing: '.28em',
};

const closingTitle: CSSProperties = {
  margin: '1.2rem auto',
  maxWidth: 850,
  color: colors.burgundyDark,
  fontFamily: 'Georgia, serif',
  fontWeight: 500,
  fontSize: 'clamp(2.7rem, 5vw, 5rem)',
  lineHeight: 1,
  letterSpacing: '-.05em',
};

const closingText: CSSProperties = {
  maxWidth: 570,
  margin: '0 auto 2rem',
  color: 'rgba(79,10,22,.56)',
  lineHeight: 1.85,
};

const bottomTile: CSSProperties = {
  width: 10,
  height: 10,
  transform: 'rotate(45deg)',
  border: '1px solid rgba(128,9,29,.34)',
};

const tileStyles = [
  { background: 'rgba(128,9,29,.12)' },
  { background: 'rgba(183,141,86,.16)' },
  { background: 'rgba(128,9,29,.035)' },
  { background: 'rgba(183,141,86,.12)' },
  { background: 'rgba(128,9,29,.06)' },
];
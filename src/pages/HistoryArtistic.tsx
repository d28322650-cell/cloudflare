import { type CSSProperties } from 'react';
import tunisianMosaic from '../assets/usable/in a shp.jpg';
import goodEvilCarriage from '../assets/usable/good evil in a carriage.jpg';
import kidTiger from '../assets/usable/kid on a tiger.jpg';
import fishSea from '../assets/usable/fish in the sea.jpg';
import womanCastle from '../assets/usable/woman swimming in a castle.jpg';

export default function History() {
  return (
    <div style={page}>
      <div style={pageMosaic} aria-hidden="true" />
      <div style={pageGlow} aria-hidden="true" />

      <section style={heroSection}>
        <div style={heroFrame} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div style={heroMedallion} aria-hidden="true">
          <div />
          <span>AFRICA</span>
        </div>
        <div style={heroMosaic} aria-hidden="true">
          {Array.from({ length: 36 }, (_, index) => (
            <span
              key={index}
              style={{
                ...heroTile,
                opacity:
                  index % 11 === 0 ? 0.9 :
                  index % 5 === 0 ? 0.62 :
                  index % 2 === 0 ? 0.34 : 0.16,
                transform: `rotate(${index % 7 === 0 ? 2 : 0}deg)`,
              }}
            />
          ))}
        </div>

        <div style={heroContent}>
          <div style={heroKickerRow}>
            <span style={heroKicker}>ROMANA</span>
            <span style={heroKickerLine} />
            <span style={heroKickerSecondary}>TUNISIA • MOSAIC</span>
          </div>

          <h1 style={title}>
            A history written
            <br />
            <em>in stone and colour.</em>
          </h1>

          <p style={description}>
            In Tunisia, mosaic is more than decoration. It is a record of
            ancient life, belief, wealth, craft, and exchange — a visual
            language carried across Punic, Hellenistic, Roman, and Byzantine
            worlds.
          </p>

          <div style={heroSignature}>
            <span style={signatureMark}>✦</span>
            <span>CRAFT • CULTURE • MEMORY</span>
          </div>
        </div>

        <div style={heroSideNote} aria-hidden="true">
          <span>MOSAIC / TUNISIA</span>
          <span style={sideNoteLine} />
          <span>ROMAN AFRICA</span>
        </div>
      </section>

      <section style={introBand}>
        <div style={introOrnament} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <p style={introText}>
          Every tessera is small, but together they preserve an entire
          civilisation. Tunisia became one of the great centres of Roman
          mosaic production, leaving floors that still speak centuries later.
        </p>

        <div style={introOrnament} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section style={historySection}>
        <div style={sectionHeader}>
          <div>
            <p style={sectionEyebrow}>THE ART FORM</p>
            <h2 style={sectionTitle}>From small stones to living history.</h2>
            <p style={sectionText}>
              Mosaic is built from small pieces — tesserae — arranged into
              images, patterns, inscriptions, and borders. Across ancient
              Tunisia, the technique became a powerful way to transform
              architecture into a surface for storytelling.
            </p>
          </div>

          <div style={sectionEmblem} aria-hidden="true">
            <div style={emblemDiamondLarge}>
              <div style={emblemDiamondSmall}>✦</div>
            </div>
          </div>
        </div>

        <div style={storyGrid}>
          <article style={storyCard}>
            <div style={cardCorner} aria-hidden="true"><span /><span /></div>
            <span style={cardNumber}>01</span>
            <p style={cardEyebrow}>BEFORE ROME</p>
            <h3 style={cardTitle}>A Mediterranean language</h3>
            <div style={cardImageWrapper}>
              <img src={goodEvilCarriage} alt="Mediterranean cultural scene" style={cardImage} />
            </div>
            <p style={cardText}>
              Mosaic developed through long Mediterranean traditions, with
              North Africa connected to Punic, Greek, and Hellenistic artistic
              worlds. These earlier cultures helped create the visual
              environment in which Roman mosaic later flourished.
            </p>
            <div style={mosaicStrip} aria-hidden="true">
              {Array.from({ length: 12 }, (_, i) => <span key={i} />)}
            </div>
          </article>

          <article style={storyCard}>
            <div style={cardCorner} aria-hidden="true"><span /><span /></div>
            <span style={cardNumber}>02</span>
            <p style={cardEyebrow}>THE ROMAN EMPIRE</p>
            <h3 style={cardTitle}>Roman Africa in colour</h3>
            <div style={cardImageWrapper}>
              <img src={kidTiger} alt="Animal and hunting imagery from Roman mosaics" style={cardImage} />
            </div>
            <p style={cardText}>
              When Rome established its power in North Africa, mosaic became
              part of the visual culture of prosperous cities and private
              houses. Tunisia — ancient Africa Proconsularis — became
              especially rich in floors decorated with geometric patterns,
              plants, animals, mythology, and scenes of everyday life.
            </p>
            <div style={mosaicStrip} aria-hidden="true">
              {Array.from({ length: 12 }, (_, i) => <span key={i} />)}
            </div>
          </article>

          <article style={storyCard}>
            <div style={cardCorner} aria-hidden="true"><span /><span /></div>
            <span style={cardNumber}>03</span>
            <p style={cardEyebrow}>THE TUNISIAN LANDSCAPE</p>
            <h3 style={cardTitle}>Carthage, Dougga, El Jem</h3>
            <div style={cardImageWrapper}>
              <img src={fishSea} alt="Marine life imagery from Tunisian heritage" style={cardImage} />
            </div>
            <p style={cardText}>
              The archaeological record connects mosaic with many Tunisian
              sites. Carthage, Dougga, and El Jem belong to a landscape where
              Roman architecture, local traditions, trade, and agricultural
              prosperity shaped the visual arts.
            </p>
            <div style={mosaicStrip} aria-hidden="true">
              {Array.from({ length: 12 }, (_, i) => <span key={i} />)}
            </div>
          </article>

          <article style={storyCard}>
            <div style={cardCorner} aria-hidden="true"><span /><span /></div>
            <span style={cardNumber}>04</span>
            <p style={cardEyebrow}>LATE ANTIQUITY</p>
            <h3 style={cardTitle}>A tradition that continued</h3>
            <div style={cardImageWrapper}>
              <img src={womanCastle} alt="Architectural and cultural continuity" style={cardImage} />
            </div>
            <p style={cardText}>
              The story did not end with Roman rule. Tunisian cities continued
              to experience cultural change under Byzantine rule, while older
              artistic traditions remained part of the region's material
              heritage.
            </p>
            <div style={mosaicStrip} aria-hidden="true">
              {Array.from({ length: 12 }, (_, i) => <span key={i} />)}
            </div>
          </article>
        </div>
      </section>

      <section style={featureSection}>
        <div style={featureVisual} aria-hidden="true">
          <div style={featureHalo} />
          <div style={featureLabel}>TESSERAE / 01</div>
          <div style={featurePattern}>
            {Array.from({ length: 49 }, (_, i) => (
              <span key={i} style={{ opacity: i % 7 === 0 ? 0.95 : i % 3 === 0 ? 0.58 : 0.24 }} />
            ))}
          </div>
        </div>

        <div style={featureContent}>
          <p style={sectionEyebrow}>WHY TUNISIA MATTERS</p>
          <h2 style={featureTitle}>
            A mosaic is a document
            <br />
            <em>as much as it is an image.</em>
          </h2>
          <p style={featureText}>
            The subjects preserved in Tunisian mosaics reveal what ancient
            communities valued and imagined. Mythological scenes sit beside
            domestic interiors, hunting imagery, marine life, vegetation, and
            geometric ornament. The floor becomes a meeting point between
            art, architecture, economy, religion, and daily life.
          </p>
          <p style={featureText}>
            Sites such as Dougga are especially important because the ancient
            city preserves the interaction of indigenous Numidian, Punic,
            Hellenistic, and Roman cultures. This layered history is central
            to understanding Roman Tunisia not as an isolated copy of Rome,
            but as a North African culture shaped by many traditions.
          </p>
        </div>
      </section>

      <section style={legacySection}>
        <div style={legacyRule} aria-hidden="true" />
        <div style={legacyFrame}>
          <div>
            <span style={closingSmall}>A CONTINUING STORY</span>
            <h2 style={closingTitle}>
              The tesserae remain.
              <br />
              <em>The story continues.</em>
            </h2>
          </div>

          <p style={closingText}>
            Today, Tunisia's ancient mosaics remain among the clearest
            witnesses to the richness of its archaeological heritage. Their
            colours may be centuries old, but their subjects still offer a
            direct connection to the people who designed, commissioned, and
            walked across them.
          </p>

          <div style={closingMark} aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} style={closingMarkTile} />
            ))}
          </div>
        </div>
      </section>
      <style>{responsiveStyles}</style>
    </div>
  );
}

const responsiveStyles = `
  @media (max-width: 900px) {
    .history-story-grid { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 720px) {
    .history-hero-frame { inset: 1rem !important; }
  }
`;

const page: CSSProperties = {
  position: 'relative',
  background: `
    radial-gradient(circle at 8% 4%, rgba(128,9,29,0.10), transparent 22%),
    radial-gradient(circle at 92% 18%, rgba(128,9,29,0.08), transparent 24%),
    radial-gradient(circle at 50% 72%, rgba(183,122,76,0.045), transparent 28%),
    linear-gradient(180deg, #fffdf9 0%, #fff8f1 44%, #f6e9e1 100%)
  `,
  color: '#4f0a16',
  minHeight: '100vh',
  paddingTop: '5rem',
  boxSizing: 'border-box',
  width: '100%',
  overflowX: 'hidden',
  isolation: 'isolate',
};

const pageGlow: CSSProperties = {
  position: 'fixed',
  inset: '10% auto auto -14%',
  width: '34vw',
  height: '34vw',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(128,9,29,0.08), transparent 68%)',
  filter: 'blur(20px)',
  pointerEvents: 'none',
  zIndex: 0,
};

const pageMosaic: CSSProperties = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  opacity: 0.13,
  backgroundImage: `
    linear-gradient(45deg, rgba(128,9,29,0.10) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(128,9,29,0.07) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(79,10,22,0.025) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(79,10,22,0.02) 75%)
  `,
  backgroundSize: '44px 44px',
  backgroundPosition: '0 0, 0 22px, 22px -22px, -22px 0',
  maskImage: 'linear-gradient(to bottom, black, transparent 92%)',
};

const heroSection: CSSProperties = {
  position: 'relative',
  minHeight: '82vh',
  display: 'flex',
  alignItems: 'center',
  padding: '5.5rem 7% 6rem',
  overflow: 'hidden',
  borderBottom: '1px solid rgba(128,9,29,0.16)',
  background: 'linear-gradient(110deg, rgba(255,253,249,0.72), rgba(255,248,241,0.26))',
  boxShadow: '0 30px 90px rgba(79,10,22,0.07)',
};

const heroFrame: CSSProperties = {
  position: 'absolute',
  inset: '2.2rem 2.5rem',
  border: '1px solid rgba(128,9,29,0.18)',
  pointerEvents: 'none',
  zIndex: 1,
};

const heroMedallion: CSSProperties = {
  position: 'absolute',
  right: '11%',
  bottom: '10%',
  width: '132px',
  height: '132px',
  border: '1px solid rgba(128,9,29,0.28)',
  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
  transform: 'rotate(-12deg)',
  color: 'rgba(128,9,29,0.48)',
  fontSize: '0.55rem',
  letterSpacing: '0.22em',
  fontWeight: 700,
  zIndex: 2,
  boxShadow: 'inset 0 0 0 9px rgba(128,9,29,0.025), inset 0 0 0 10px rgba(128,9,29,0.12)',
};

const heroMosaic: CSSProperties = {
  position: 'absolute',
  right: '-2%',
  top: '8%',
  width: '560px',
  height: '560px',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(6, 1fr)',
  gap: '0.45rem',
  transform: 'rotate(45deg)',
  opacity: 0.72,
};

const heroTile: CSSProperties = {
  border: '1px solid rgba(128,9,29,0.42)',
  background: `
    linear-gradient(135deg, rgba(128,9,29,0.18), rgba(255,248,241,0.03)),
    rgba(128,9,29,0.035)
  `,
  boxShadow: 'inset 0 0 0 1px rgba(79,10,22,0.025), 0 0 0 1px rgba(255,255,255,0.22)',
};

const heroContent: CSSProperties = {
  position: 'relative',
  zIndex: 2,
  maxWidth: '800px',
};

const heroKickerRow: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.9rem',
  marginBottom: '1.5rem',
};

const heroKicker: CSSProperties = {
  color: '#80091d',
  fontSize: '0.68rem',
  letterSpacing: '0.28em',
  fontWeight: 700,
};

const heroKickerSecondary: CSSProperties = {
  color: 'rgba(79,10,22,0.62)',
  fontSize: '0.62rem',
  letterSpacing: '0.18em',
};

const heroKickerLine: CSSProperties = {
  width: '58px',
  height: 1,
  background: 'rgba(128,9,29,0.52)',
};

const title: CSSProperties = {
  margin: 0,
  color: '#4f0a16',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: 'clamp(3.2rem, 7vw, 6.3rem)',
  lineHeight: 0.94,
  letterSpacing: '-0.055em',
  fontWeight: 700,
  textShadow: '0 2px 0 rgba(255,255,255,0.65)',
};

const description: CSSProperties = {
  maxWidth: '660px',
  margin: '1.6rem 0 2rem',
  color: 'rgba(79,10,22,0.68)',
  fontSize: '1.1rem',
  lineHeight: 1.85,
};

const heroSignature: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginTop: '2.2rem',
  color: 'rgba(79,10,22,0.55)',
  fontSize: '0.62rem',
  letterSpacing: '0.21em',
  fontWeight: 700,
};

const signatureMark: CSSProperties = {
  color: '#80091d',
  fontSize: '0.9rem',
};

const heroSideNote: CSSProperties = {
  position: 'absolute',
  zIndex: 2,
  right: '2.5%',
  bottom: '8%',
  display: 'flex',
  alignItems: 'center',
  gap: '0.7rem',
  transform: 'rotate(90deg)',
  transformOrigin: 'right center',
  color: 'rgba(79,10,22,0.42)',
  fontSize: '0.58rem',
  letterSpacing: '0.22em',
  fontWeight: 700,
};

const sideNoteLine: CSSProperties = {
  width: '65px',
  height: 1,
  background: 'rgba(128,9,29,0.35)',
};

const introBand: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(60px, 1fr) minmax(0, 720px) minmax(60px, 1fr)',
  gap: '1rem',
  alignItems: 'center',
  maxWidth: '1220px',
  margin: '0 auto',
  padding: '3.5rem 5%',
  position: 'relative',
};

const introText: CSSProperties = {
  margin: 0,
  textAlign: 'center',
  color: '#69474e',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
  lineHeight: 1.9,
  letterSpacing: '0.015em',
};

const introOrnament: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
};

const historySection: CSSProperties = {
  maxWidth: '1200px',
  margin: '1rem auto 0',
  padding: '1rem 5% 5rem',
  position: 'relative',
};

const sectionHeader: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) auto',
  gap: '2.5rem',
  alignItems: 'end',
  padding: '1rem 0 2.2rem',
  borderBottom: '1px solid rgba(128,9,29,0.18)',
};

const sectionEyebrow: CSSProperties = {
  margin: '0 0 0.7rem',
  color: '#80091d',
  fontSize: '0.72rem',
  letterSpacing: '0.28em',
  fontWeight: 700,
};

const sectionTitle: CSSProperties = {
  margin: 0,
  color: '#4f0a16',
  fontSize: 'clamp(2.1rem, 4.3vw, 3.5rem)',
  lineHeight: 1.03,
  letterSpacing: '-0.035em',
};

const sectionText: CSSProperties = {
  maxWidth: '730px',
  margin: '1rem 0 0',
  color: '#6f4a50',
  lineHeight: 1.8,
};

const sectionEmblem: CSSProperties = {
  width: '118px',
  height: '118px',
  display: 'grid',
  placeItems: 'center',
  border: '1px solid rgba(128,9,29,0.26)',
  transform: 'rotate(45deg)',
};

const emblemDiamondLarge: CSSProperties = {
  width: '70px',
  height: '70px',
  display: 'grid',
  placeItems: 'center',
  border: '1px solid rgba(128,9,29,0.44)',
};

const emblemDiamondSmall: CSSProperties = {
  width: '34px',
  height: '34px',
  display: 'grid',
  placeItems: 'center',
  border: '1px solid rgba(128,9,29,0.55)',
  transform: 'rotate(-45deg)',
  color: '#80091d',
};

const storyGrid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '1.4rem',
  marginTop: '2.5rem',
};

const storyCard: CSSProperties = {
  position: 'relative',
  padding: '2rem 1.8rem 1.45rem',
  border: '1px solid rgba(79,10,22,0.12)',
  background: `
    linear-gradient(145deg, rgba(255,250,245,0.86), rgba(255,244,236,0.58)),
    radial-gradient(circle at 100% 0%, rgba(128,9,29,0.07), transparent 34%)
  `,
  boxShadow: '0 18px 45px rgba(79,10,22,0.07), inset 0 1px rgba(255,255,255,0.75)',
  minHeight: '300px',
  transition: 'transform .3s ease, box-shadow .3s ease, border-color .3s ease',
};

const cardCorner: CSSProperties = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  width: '28px',
  height: '28px',
  borderTop: '1px solid rgba(128,9,29,0.35)',
  borderRight: '1px solid rgba(128,9,29,0.35)',
};

const cardNumber: CSSProperties = {
  color: 'rgba(128,9,29,0.42)',
  fontSize: '0.62rem',
  letterSpacing: '0.18em',
  fontWeight: 700,
};

const cardEyebrow: CSSProperties = {
  margin: '1.1rem 0 0.55rem',
  color: '#8b6268',
  fontSize: '0.60rem',
  letterSpacing: '0.19em',
  fontWeight: 700,
};

const cardTitle: CSSProperties = {
  margin: '0 0 0.65rem',
  color: '#4f0a16',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: '1.55rem',
  lineHeight: 1.12,
};

const cardImageWrapper: CSSProperties = {
  width: '100%',
  height: '180px',
  margin: '1rem 0 1.2rem',
  border: '1px solid rgba(128,9,29,0.18)',
  borderRadius: '2px',
  overflow: 'hidden',
  background: 'rgba(255,248,241,0.4)',
  boxShadow: 'inset 0 0 0 1px rgba(128,9,29,0.08), 0 4px 12px rgba(79,10,22,0.06)',
};

const cardImage: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  opacity: 0.85,
  transition: 'opacity 0.3s ease',
};

const cardText: CSSProperties = {
  margin: 0,
  color: '#735057',
  lineHeight: 1.8,
};

const mosaicStrip: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: '0.22rem',
  marginTop: '1.35rem',
  height: '18px',
};

const featureSection: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(280px, 0.85fr) minmax(0, 1.15fr)',
  gap: '4rem',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '3rem 5% 6rem',
};

const featureVisual: CSSProperties = {
  minHeight: '470px',
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  border: '1px solid rgba(128,9,29,0.26)',
  backgroundImage: `
    linear-gradient(135deg, rgba(79,10,22,0.08), rgba(255,248,241,0.10)),
    linear-gradient(180deg, rgba(255,248,241,0.08), rgba(79,10,22,0.34)),
    url(${tunisianMosaic})
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  boxShadow: '0 24px 65px rgba(79,10,22,0.13), inset 0 0 0 10px rgba(255,255,255,0.30)',
};

const featureHalo: CSSProperties = {
  position: 'absolute',
  width: '360px',
  height: '360px',
  borderRadius: '50%',
  border: '1px solid rgba(255,248,241,0.62)',
  boxShadow: '0 0 0 18px rgba(128,9,29,0.12), 0 0 0 19px rgba(255,248,241,0.24)',
  backdropFilter: 'blur(1px)',
};

const featureLabel: CSSProperties = {
  position: 'absolute',
  top: '1.4rem',
  left: '1.5rem',
  color: '#fff8f1',
  textShadow: '0 1px 8px rgba(79,10,22,0.65)',
  fontSize: '0.56rem',
  letterSpacing: '0.22em',
  fontWeight: 700,
  zIndex: 3,
};

const featurePattern: CSSProperties = {
  width: '300px',
  height: '300px',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '0.35rem',
  transform: 'rotate(45deg)',
  opacity: 0.62,
  zIndex: 2,
  filter: 'drop-shadow(0 12px 22px rgba(79,10,22,0.22))',
};

const featureContent: CSSProperties = {
  maxWidth: '650px',
};

const featureTitle: CSSProperties = {
  margin: 0,
  color: '#4f0a16',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: 'clamp(2.3rem, 4.6vw, 4.1rem)',
  lineHeight: 1.03,
  letterSpacing: '-0.035em',
};

const featureText: CSSProperties = {
  margin: '1.25rem 0 0',
  color: '#735057',
  lineHeight: 1.85,
};

const legacySection: CSSProperties = {
  padding: '1rem 5% 7rem',
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
};

const legacyRule: CSSProperties = {
  width: '1px',
  height: '70px',
  margin: '0 auto 2rem',
  background: 'linear-gradient(180deg, transparent, rgba(128,9,29,0.42), transparent)',
};

const legacyFrame: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.25fr) minmax(280px, 0.75fr)',
  gap: '3rem',
  alignItems: 'center',
  padding: '5rem 3.5rem',
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid rgba(128,9,29,0.17)',
  background: `
    radial-gradient(circle at 20% 50%, rgba(128,9,29,0.09), transparent 38%),
    linear-gradient(145deg, rgba(79,10,22,0.045), rgba(255,255,255,0.015))
  `,
  boxShadow: '0 25px 70px rgba(0,0,0,0.12)',
};

const closingSmall: CSSProperties = {
  color: '#80091d',
  fontSize: '0.62rem',
  letterSpacing: '0.25em',
  fontWeight: 700,
};

const closingTitle: CSSProperties = {
  margin: '1rem 0',
  color: '#4f0a16',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: 'clamp(2rem, 4.2vw, 3.7rem)',
  lineHeight: 1.04,
  letterSpacing: '-0.03em',
};

const closingText: CSSProperties = {
  margin: 0,
  color: '#76545a',
  lineHeight: 1.8,
};

const closingMark: CSSProperties = {
  gridColumn: '1 / -1',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '0.35rem',
  maxWidth: '420px',
};

const closingMarkTile: CSSProperties = {
  height: '20px',
  border: '1px solid rgba(128,9,29,0.34)',
  background: 'rgba(128,9,29,0.06)',
};
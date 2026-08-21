import { motion } from 'framer-motion';

export default function TermsArtistic() {
  return (
    <div style={styles.page}>
      <div style={styles.ambientTexture} aria-hidden="true" />
      <div style={styles.mosaicHalo} aria-hidden="true" />

      <main style={styles.shell}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={styles.hero}
        >
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrowRule} />
            <span style={styles.eyebrow}>ROMANIAN MICROMOSAIC · TERMS</span>
          </div>

          <div style={styles.mark} aria-hidden="true">
            <div style={styles.markInner}>
              <span /><span /><span />
            </div>
          </div>

          <h1 style={styles.title}>Terms</h1>
          <p style={styles.lead}>Short, clear terms presented with typographic care.</p>
        </motion.div>

        <div style={styles.divider} aria-hidden="true">
          <span /><i /><span />
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          style={styles.card}
        >
          <div style={styles.cardTopline}>
            <span style={styles.cardNumber}>01</span>
            <span style={styles.miniPattern} />
          </div>
          <h2 style={styles.cardTitle}>Usage</h2>
          <p style={styles.cardText}>These terms explain how to engage with our content and services.</p>
        </motion.section>

        <footer style={styles.footer}>
          <span>Romanian micromosaic</span><span style={styles.footerDot}>·</span><span>Heritage, composed.</span>
        </footer>
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    padding: '5rem 1.25rem 3rem',
    background:
      'radial-gradient(circle at 8% 5%, rgba(128,9,29,.08), transparent 21%), radial-gradient(circle at 92% 18%, rgba(128,9,29,.06), transparent 24%), linear-gradient(135deg,#fcf8f2 0%,#f5eee6 52%,#ecdfd5 100%)',
    color: '#4f0a16',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  ambientTexture: {
    position: 'absolute', inset: 0, opacity: .42, pointerEvents: 'none',
    backgroundImage: 'linear-gradient(45deg,rgba(128,9,29,.025) 25%,transparent 25%,transparent 75%,rgba(128,9,29,.025) 75%),linear-gradient(45deg,rgba(128,9,29,.025) 25%,transparent 25%,transparent 75%,rgba(128,9,29,.025) 75%)',
    backgroundPosition: '0 0,14px 14px', backgroundSize: '28px 28px', mixBlendMode: 'multiply',
  },
  mosaicHalo: {
    position: 'absolute', top: '-8rem', right: '-8rem', width: '34rem', height: '34rem',
    borderRadius: '50%', pointerEvents: 'none', opacity: .55,
    background: 'radial-gradient(circle,rgba(128,9,29,.075) 0%,rgba(128,9,29,.025) 34%,transparent 70%)',
  },
  shell: { position: 'relative', zIndex: 1, maxWidth: '980px', margin: '0 auto', padding: '2rem 1rem 0' },
  hero: { padding: '2.5rem clamp(1rem,4vw,3rem) 2rem' },
  eyebrowRow: { display: 'flex', alignItems: 'center', gap: '.75rem', color: '#80091d', fontSize: '.68rem', letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 800 },
  eyebrowRule: { width: '2.8rem', height: '1px', background: '#80091d' },
  mark: { width: 66, height: 66, padding: 6, margin: '2rem 0 1.5rem', border: '1px solid rgba(128,9,29,.35)', transform: 'rotate(45deg)', background: 'rgba(255,250,245,.68)', boxShadow: '0 10px 30px rgba(79,10,22,.08)' },
  markInner: { width: '100%', height: '100%', position: 'relative', background: '#80091d', overflow: 'hidden' },
  title: { margin: 0, color: '#520814', fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(3rem,7vw,5.5rem)', lineHeight: .98, letterSpacing: '-.055em', fontWeight: 500 },
  lead: { maxWidth: 680, margin: '1.2rem 0 0', color: 'rgba(79,10,22,.72)', fontSize: '1.04rem', lineHeight: 1.9 },
  divider: { display: 'flex', alignItems: 'center', gap: '.75rem', padding: '1.5rem 3rem' },
  card: { margin: '1rem clamp(1rem,4vw,3rem) 0', padding: '2rem clamp(1.5rem,4vw,2.6rem)', background: 'linear-gradient(145deg,rgba(255,252,248,.94),rgba(248,239,232,.88))', border: '1px solid rgba(128,9,29,.18)', boxShadow: '0 25px 65px rgba(79,10,22,.10), inset 0 0 0 6px rgba(255,255,255,.24)' },
  cardTopline: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.4rem' },
  cardNumber: { color: '#80091d', fontSize: '.75rem', fontWeight: 800, letterSpacing: '.22em' },
  miniPattern: { width: 58, height: 16, opacity: .5, backgroundImage: 'linear-gradient(45deg,rgba(128,9,29,.5) 25%,transparent 25%,transparent 75%,rgba(128,9,29,.5) 75%),linear-gradient(45deg,rgba(128,9,29,.5) 25%,transparent 25%,transparent 75%,rgba(128,9,29,.5) 75%)', backgroundPosition: '0 0,8px 8px', backgroundSize: '16px 16px' },
  cardTitle: { margin: '0 0 .8rem', color: '#560916', fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 500 },
  cardText: { margin: 0, color: 'rgba(79,10,22,.72)', lineHeight: 1.85 },
  footer: { marginTop: '5rem', padding: '1.5rem 1rem', borderTop: '1px solid rgba(128,9,29,.16)', color: 'rgba(79,10,22,.55)', fontSize: '.68rem', letterSpacing: '.11em', textTransform: 'uppercase', textAlign: 'center' },
  footerDot: { margin: '0 .65rem', color: '#80091d' },
};
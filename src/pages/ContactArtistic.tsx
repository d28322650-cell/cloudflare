import { useState, type CSSProperties } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import aboutImage from '../assets/usable/oval like figures.jpg';
import { sendContactEmail } from '../api/sendEmail';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const isFormComplete = Boolean(name && email && subject && message);

  return (
    <div style={page} className="contact-artistic">
      <style>{`
        @media (max-width: 900px) {
          .contact-artistic .contact-hero { padding: 3rem 5% !important; min-height: 56vh !important; }
          .contact-artistic .hero-frame { max-width: 100% !important; padding: 0 !important; }
          .contact-artistic .hero-content { padding: 2rem 1.2rem !important; }
          .contact-artistic .contact-grid { grid-template-columns: 1fr !important; padding: 0 5% 3rem !important; margin: 0 auto !important; gap: 1.25rem !important; }
          .contact-artistic .contact-grid > div, .contact-artistic .contact-grid > form { padding: 1.2rem !important; }
          .contact-artistic .field-row { grid-template-columns: 1fr !important; }
          .contact-artistic .button-row { justify-content: flex-start !important; }
          .contact-artistic .closing-section { padding: 1.5rem 5% 3rem !important; }
          .contact-artistic .cardTitleAdjust { font-size: clamp(1.05rem, 3.5vw, 1.35rem) !important; }
        }
      `}</style>
      <AnimatedSection style={heroSection} className="contact-hero">
        <div style={mosaicPattern} />
        <div style={overlay} />
        <div style={heroGlowTop} />
        <div style={heroGlowBottom} />

        <div style={heroFrame} className="hero-frame">
          <div style={heroContent} className="hero-content">
            <div style={ornamentalMark} aria-hidden="true">
              <span />
              <i />
              <span />
            </div>
            <p style={eyebrow}>CONTACT US</p>
            <div style={goldLine} />
            <h1 style={title}>
              Let’s create something
              <br />
              timeless together.
            </h1>
            <p style={description}>
              Whether you are looking for a bespoke experience, a collection inquiry,
              or a private consultation, we would love to hear from you.
            </p>
            <div style={buttonRow} className="button-row">
              {/*<Link to="/products" style={primaryButton}>
                Explore products <span style={buttonArrow}>↗</span>
              </Link>
              <Link to="/about" style={secondaryButton}>
                Learn our story
              </Link>*/}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection style={contactSection} className="contact-grid">
        <div style={{ ...mosaicCard, ...infoCard }} className="info-card">
          <div style={cardTopline}>
            <span style={cardNumber}>01</span>
            <span style={miniPattern} aria-hidden="true" />
          </div>
          <h2 style={cardTitle}>Get in touch</h2>
          <p style={cardText}>
            Reach out for collaborations, private appointments, or general inquiries.
            We typically respond within one business day.
          </p>

          <div style={infoList}>
            <div style={infoItem}>
              <span style={infoLabel}>Email</span>
              <a href="mailto:contact@romana.com" style={infoValue}>contact@romana.com</a>
            </div>
            <div style={infoItem}>
              <span style={infoLabel}>Phone</span>
              <a href="tel:+21600000000" style={infoValue}>+216 00 000 000</a>
            </div>
            <div style={infoItem}>
              <span style={infoLabel}>Location</span>
              <span style={infoValue}>Tunis, Tunisia</span>
            </div>
          </div>

          <div style={ornamentDivider} aria-hidden="true">
            <span />
            <b>✦</b>
            <span />
          </div>
          <p style={signatureNote}>Thoughtfully crafted · Personally answered</p>
        </div>

        <form
          style={{ ...mosaicCard, ...formCard }}
          className="form-card"
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus('sending');
            try {
              await sendContactEmail({ name, email, subject, message });
              setStatus('sent');
              setName('');
              setEmail('');
              setSubject('');
              setMessage('');
            } catch (err) {
              // eslint-disable-next-line no-console
              console.error(err);
              setStatus('error');
            }
          }}
        >
          <div style={cardTopline}>
            <span style={cardNumber}>02</span>
            <span style={miniPattern} aria-hidden="true" />
          </div>
          <h2 style={cardTitle}>Start a conversation</h2>
          <p style={formIntro}>
            Tell us a little about what you have in mind, and we’ll take it from there.
          </p>

          <div style={fieldRow} className="field-row">
            <label style={labelStyle}>
              Name
              <input
                style={inputStyle}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </label>
            <label style={labelStyle}>
              Email
              <input
                style={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="your@email.com"
                required
              />
            </label>
          </div>

          <label style={labelStyle}>
            Subject
            <input
              style={inputStyle}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="How can we help?"
              required
            />
          </label>

          <label style={labelStyle}>
            Message
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }}
              placeholder="Tell us about your project or interest"
              required
            />
          </label>

          <div style={submitRow}>
            <button
              type="submit"
              style={{
                ...submitButton,
                ...(status === 'sending' || !isFormComplete ? disabledButton : {}),
              }}
              disabled={status === 'sending' || !isFormComplete}
              title={!isFormComplete ? 'Please complete all fields' : undefined}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
              <span style={buttonArrow}>↗</span>
            </button>
            {status === 'sent' && <span style={{ ...statusMessage, color: '#b7e7c6' }}>Message sent — thank you!</span>}
            {status === 'error' && <span style={{ ...statusMessage, color: '#ffb3b3' }}>Failed to send — please try again later.</span>}
          </div>
        </form>
      </AnimatedSection>

      <AnimatedSection style={closingSection} className="closing-section">
        <div style={closingPattern} aria-hidden="true" />
        <div style={quoteMark}>“</div>
        <p style={closingQuote}>Every conversation begins with a detail worth remembering.</p>
        <span style={quoteRule} />
        <span style={quoteCaption}>ROMANA · CRAFTED WITH INTENTION</span>
      </AnimatedSection>
    </div>
  );
}

const page: CSSProperties = {
  background:
    'radial-gradient(circle at 8% 5%, rgba(128, 9, 29, 0.08), transparent 21%), ' +
    'radial-gradient(circle at 92% 18%, rgba(128, 9, 29, 0.06), transparent 24%), ' +
    'linear-gradient(135deg, #fcf8f2 0%, #f5eee6 52%, #ecdfd5 100%)',
  color: '#4f0a16',
  minHeight: '100vh',
  paddingTop: '0',
  boxSizing: 'border-box',
  width: '100%',
  overflowX: 'hidden',
};

const heroSection: CSSProperties = {
  position: 'relative',
  minHeight: '76vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5rem 6%',
  backgroundImage: `
    linear-gradient(90deg, rgba(252,248,242,.96) 0%, rgba(252,248,242,.82) 46%, rgba(252,248,242,.38) 100%),
    url(${aboutImage})
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
};

const overlay: CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: `
    linear-gradient(135deg, transparent 0 48%, rgba(128,9,29,.045) 48% 49%, transparent 49% 100%),
    radial-gradient(circle at 85% 12%, rgba(128,9,29,.10), transparent 26%),
    radial-gradient(circle at 10% 90%, rgba(128,9,29,.08), transparent 30%)
  `,
  pointerEvents: 'none',
};

const mosaicPattern: CSSProperties = {
  position: 'absolute',
  inset: 0,
  opacity: 0.34,
  backgroundImage: `
    linear-gradient(45deg, rgba(128,9,29,.10) 1px, transparent 1px),
    linear-gradient(-45deg, rgba(128,9,29,.055) 1px, transparent 1px)
  `,
  backgroundSize: '34px 34px',
  maskImage: 'linear-gradient(to right, transparent 0%, #000 18%, #000 82%, transparent 100%)',
  pointerEvents: 'none',
  mixBlendMode: 'multiply',
};

const heroGlowTop: CSSProperties = {
  position: 'absolute',
  width: 360,
  height: 360,
  top: -180,
  right: -100,
  borderRadius: '50%',
  background: 'rgba(128,9,29,.07)',
  filter: 'blur(80px)',
  pointerEvents: 'none',
};

const heroGlowBottom: CSSProperties = {
  position: 'absolute',
  width: 300,
  height: 300,
  bottom: -180,
  left: -90,
  borderRadius: '50%',
  background: 'rgba(128,9,29,.055)',
  filter: 'blur(70px)',
  pointerEvents: 'none',
};

const heroFrame: CSSProperties = {
  position: 'relative',
  width: '100%',
  maxWidth: 1080,
  padding: '1px',
  background: 'linear-gradient(135deg, rgba(128,9,29,.42), rgba(255,255,255,.62), rgba(128,9,29,.20))',
  clipPath: 'polygon(0 18px, 18px 0, calc(100% - 18px) 0, 100% 18px, 100% calc(100% - 18px), calc(100% - 18px) 100%, 18px 100%, 0 calc(100% - 18px))',
  boxShadow: '0 35px 90px rgba(79,10,22,.14)',
  zIndex: 2,
};

const heroContent: CSSProperties = {
  position: 'relative',
  padding: '4.2rem clamp(1.8rem, 6vw, 5rem)',
  background: 'linear-gradient(135deg, rgba(255,252,248,.95), rgba(248,239,232,.90))',
  backdropFilter: 'blur(16px)',
  overflow: 'hidden',
};

const ornamentalMark: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '.45rem',
  marginBottom: '1.2rem',
};

const goldLine: CSSProperties = {
  width: 74,
  height: 1,
  margin: '0 0 1.7rem',
  background: 'linear-gradient(90deg, #80091d, rgba(128,9,29,.35))',
  boxShadow: '0 0 12px rgba(128,9,29,.10)',
};

const eyebrow: CSSProperties = {
  margin: 0,
  textTransform: 'uppercase',
  letterSpacing: '.34em',
  fontSize: '.72rem',
  color: '#80091d',
  fontWeight: 800,
};

const title: CSSProperties = {
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: 'clamp(2.8rem, 6vw, 5rem)',
  lineHeight: 0.98,
  margin: '0 0 1.5rem',
  color: '#520814',
  fontWeight: 500,
  letterSpacing: '-.045em',
  maxWidth: '860px',
  textShadow: '0 2px 0 rgba(255,255,255,.72)',
};

const description: CSSProperties = {
  fontSize: 'clamp(1rem, 1.5vw, 1.12rem)',
  lineHeight: 1.9,
  color: 'rgba(79,10,22,.72)',
  maxWidth: 680,
  marginBottom: '2.4rem',
};

const buttonRow: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
};





const buttonArrow: CSSProperties = {
  fontSize: '1rem',
  lineHeight: 1,
};

const contactSection: CSSProperties = {
  maxWidth: 1180,
  margin: '2rem auto 0',
  padding: '0 6% 5rem',
  display: 'grid',
  gridTemplateColumns: 'minmax(280px, .82fr) minmax(320px, 1.18fr)',
  gap: '2rem',
  position: 'relative',
  zIndex: 5,
};

const mosaicCard: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid rgba(128,9,29,.20)',
  background: 'linear-gradient(145deg, rgba(255,252,248,.94), rgba(244,232,222,.90))',
  boxShadow: '0 25px 65px rgba(79,10,22,.10), inset 0 0 0 1px rgba(255,255,255,.42)',
  backdropFilter: 'blur(18px)',
};

const infoCard: CSSProperties = {
  padding: '2.4rem',
  clipPath: 'polygon(0 14px, 14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px))',
};

const formCard: CSSProperties = {
  padding: '2.4rem',
  clipPath: 'polygon(0 14px, 14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px))',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.05rem',
};

const cardTopline: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1.4rem',
};

const cardNumber: CSSProperties = {
  color: '#80091d',
  fontSize: '.75rem',
  fontWeight: 800,
  letterSpacing: '.22em',
};

const miniPattern: CSSProperties = {
  width: 58,
  height: 16,
  opacity: .58,
  backgroundImage: `
    linear-gradient(45deg, rgba(128,9,29,.34) 25%, transparent 25%, transparent 75%, rgba(128,9,29,.34) 75%),
    linear-gradient(45deg, rgba(128,9,29,.34) 25%, transparent 25%, transparent 75%, rgba(128,9,29,.34) 75%)
  `,
  backgroundPosition: '0 0, 8px 8px',
  backgroundSize: '16px 16px',
};

const cardTitle: CSSProperties = {
  margin: '0 0 .8rem',
  color: '#520814',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: 'clamp(1.35rem, 2vw, 1.6rem)',
  fontWeight: 500,
  letterSpacing: '-.01em',
};

const cardText: CSSProperties = {
  margin: '0 0 1.8rem',
  color: 'rgba(79,10,22,.70)',
  lineHeight: 1.85,
};

const formIntro: CSSProperties = {
  margin: '-.15rem 0 .9rem',
  color: 'rgba(79,10,22,.56)',
  lineHeight: 1.75,
  fontSize: '.95rem',
};

const infoList: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const infoItem: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '.3rem',
  padding: '.9rem 0',
  borderBottom: '1px solid rgba(128,9,29,.12)',
};

const infoLabel: CSSProperties = {
  color: '#80091d',
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '.16em',
  fontSize: '.68rem',
};

const infoValue: CSSProperties = {
  color: '#4f0a16',
  textDecoration: 'none',
  lineHeight: 1.5,
};

const ornamentDivider: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '.75rem',
  margin: '1.5rem 0 1rem',
};

const signatureNote: CSSProperties = {
  margin: 0,
  color: 'rgba(79,10,22,.44)',
  fontSize: '.68rem',
  letterSpacing: '.12em',
  textTransform: 'uppercase',
};

const fieldRow: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '1rem',
};

const labelStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  color: 'rgba(79,10,22,.78)',
  fontWeight: 700,
  fontSize: '.92rem',
};

const inputStyle: CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '.92rem 1rem',
  borderRadius: 4,
  border: '1px solid rgba(128,9,29,.18)',
  background: 'rgba(255,251,247,.74)',
  color: '#520814',
  outline: 'none',
  fontSize: '.95rem',
  transition: 'border-color .2s ease, background .2s ease, box-shadow .2s ease',
};

const submitRow: CSSProperties = {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  flexWrap: 'wrap',
  paddingTop: '.25rem',
};

const submitButton: CSSProperties = {
  marginTop: '.4rem',
  padding: '1rem 1.35rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.45rem',
  borderRadius: 4,
  border: '1px solid rgba(128,9,29,.38)',
  background: 'linear-gradient(135deg, #690617 0%, #80091d 56%, #9c1d35 100%)',
  color: '#fff9f3',
  fontWeight: 800,
  cursor: 'pointer',
  boxShadow: '0 15px 30px rgba(79,10,22,.14)',
};

const disabledButton: CSSProperties = {
  opacity: .45,
  cursor: 'not-allowed',
  boxShadow: 'none',
};

const statusMessage: CSSProperties = {
  fontSize: '.9rem',
  lineHeight: 1.4,
};

const closingSection: CSSProperties = {
  position: 'relative',
  maxWidth: 980,
  margin: '0 auto',
  padding: '2rem 6% 6rem',
  textAlign: 'center',
  overflow: 'hidden',
};

const closingPattern: CSSProperties = {
  position: 'absolute',
  inset: '15% 15% 0',
  opacity: .22,
  backgroundImage: `
    linear-gradient(45deg, rgba(128,9,29,.20) 1px, transparent 1px),
    linear-gradient(-45deg, rgba(128,9,29,.10) 1px, transparent 1px)
  `,
  backgroundSize: '30px 30px',
  maskImage: 'radial-gradient(circle, #000 0%, transparent 68%)',
  pointerEvents: 'none',
  mixBlendMode: 'multiply',
};

const quoteMark: CSSProperties = {
  position: 'relative',
  zIndex: 1,
  fontFamily: 'Georgia, serif',
  fontSize: '4rem',
  lineHeight: .7,
  color: '#80091d',
  opacity: .72,
};

const closingQuote: CSSProperties = {
  position: 'relative',
  zIndex: 1,
  maxWidth: 720,
  margin: '.8rem auto 1.3rem',
  color: '#520814',
  fontFamily: 'Georgia, serif',
  fontStyle: 'italic',
  fontSize: 'clamp(1.35rem, 2.5vw, 2rem)',
  lineHeight: 1.5,
};

const quoteRule: CSSProperties = {
  position: 'relative',
  zIndex: 1,
  display: 'block',
  width: 58,
  height: 1,
  margin: '0 auto 1rem',
  background: '#80091d',
};

const quoteCaption: CSSProperties = {
  position: 'relative',
  zIndex: 1,
  color: 'rgba(79,10,22,.44)',
  fontSize: '.66rem',
  fontWeight: 800,
  letterSpacing: '.2em',
};
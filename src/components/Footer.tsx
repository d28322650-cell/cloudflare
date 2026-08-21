

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/romana logo png.png';

export default function Footer(): React.JSX.Element {
  return (
    <footer style={mainContainer}>
      <div style={overlay} />

      {/* MAIN CONTENT */}
      <div style={contentWrapper}>
        <div style={contentContainer}>
          {/* BRAND */}
          <div style={brandColumn}>
            <img style={logoStyle}
            src={logo}
            alt="a cultural image of a traditional woman"
            />

            <p style={description}>
              Building elegant Art experiences with ancient methods and
              premium design 
            </p>

            <div style={brandBadge}>
              Creative Design Authentic Beauty
            </div>
          </div>

          {/* LINKS */}
          

          {/* LEGAL */}
          <div style={column}>
            <h3 style={headingStyle}>Legal</h3>

            <ul style={ulStyle}>
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms & Conditions</FooterLink>
              
            </ul>
          </div>

          {/* CONTACT */}
          <div style={column}>
            <h3 style={headingStyle}>Contact</h3>

            <ul style={ulStyle}>
              <FooterLink to="/contact">+216 00 000 000</FooterLink>
              <FooterLink to="/contact">contact@romana.com</FooterLink>
              
            </ul>
          </div>

          {/* SOCIAL */}
          <div style={column}>
            <h3 style={headingStyle}>Social</h3>

            <ul style={ulStyle}>
              <FooterLink to="https://www.instagram.com/">Instagram</FooterLink>
             
              <FooterLink to="https://twitter.com/">X / Twitter</FooterLink>
             
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div style={bottomBar}>
          <span>© 2026 Romana. All rights reserved.</span>

          <span style={madeWith}>
            Designed & Developed with precision.
          </span>
        </div>
      </div>
    </footer>
  );
}

/* =========================
   MAIN CONTAINER
========================= */

const mainContainer: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  background:
  'linear-gradient(180deg, #1A1410 0%, #241B15 40%, #0f0808 100%)',
  overflow: 'hidden',
  borderTop: '1px solid rgba(255,255,255,0.06)',
};

/* =========================
   OVERLAY
========================= */

const overlay: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background:
    'radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 35%)',
  pointerEvents: 'none',
};

/* =========================
   WRAPPER
========================= */

const contentWrapper: React.CSSProperties = {
  position: 'relative',
  zIndex: 2,
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '90px 7% 35px',
  boxSizing: 'border-box',
};

/* =========================
   CONTENT
========================= */

const contentContainer: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '70px',
  marginBottom: '70px',
};

/* =========================
   COLUMNS
========================= */

const brandColumn: React.CSSProperties = {
  flex: '1.6',
  
  minWidth: '280px',
};

const column: React.CSSProperties = {
  flex: '1',
  minWidth: '170px',
};

/* =========================
   LOGO
========================= */

const logoStyle: React.CSSProperties = {
  margin :0,
  padding:0,
  width: '150px',
  height: 'auto',
  objectFit: 'contain',
  display: 'block',
  marginBottom: '28px',
  filter: 'drop-shadow(0 4px 14px rgba(0,0,0,0.35))',

};

/* =========================
   DESCRIPTION
========================= */

const description: React.CSSProperties = {
  color: '#9CA3AF',
  lineHeight: '1.9',
  fontSize: '0.97rem',
  maxWidth: '420px',
  marginBottom: '28px',
};

/* =========================
   BADGE
========================= */

const brandBadge: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '10px 18px',
  borderRadius: '999px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: '#D1D5DB',
  fontSize: '0.82rem',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
};

/* =========================
   HEADINGS
========================= */

const headingStyle: React.CSSProperties = {
  fontSize: '0.82rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.16em',
  color: '#FFFFFF',
  marginBottom: '24px',
  marginTop: 0,
};

/* =========================
   LIST
========================= */

const ulStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const linkStyle: React.CSSProperties = {
  color: '#9CA3AF',

  marginBottom: '16px',

  cursor: 'pointer',

  transition:
    'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',

  fontSize: '0.96rem',

  lineHeight: '1.6',

  width: 'fit-content',

  position: 'relative',
};

/* =========================
   BOTTOM BAR
========================= */

const bottomBar: React.CSSProperties = {
  borderTop: '1px solid rgba(255,255,255,0.08)',
  paddingTop: '26px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '14px',
  color: '#6B7280',
  fontSize: '0.88rem',
};

const madeWith: React.CSSProperties = {
  letterSpacing: '0.04em',
};
interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

function FooterLink({ to, children }: FooterLinkProps): React.JSX.Element {
  const handleClick = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };
  const isExternal = to.startsWith('http');

  return (
    <li
      style={linkStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#F5E6D3';
        e.currentTarget.style.transform = 'translateX(6px)';
        e.currentTarget.style.letterSpacing = '0.04em';
        e.currentTarget.style.textShadow =
          '0 0 18px rgba(255,255,255,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = '#9CA3AF';
        e.currentTarget.style.transform = 'translateX(0px)';
        e.currentTarget.style.letterSpacing = '0em';
        e.currentTarget.style.textShadow = 'none';
      }}
    >
      {isExternal ? (
        <a href={to} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
          {children}
        </a>
      ) : (
        <Link to={to} onClick={handleClick} style={{ color: 'inherit', textDecoration: 'none' }}>
          {children}
        </Link>
      )}
    </li>
  );
}
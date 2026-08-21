import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/romana logo png.png';

export default function Navbar(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isCompactNav, setIsCompactNav] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = (): void => {
      const compact = window.innerWidth <= 1024;
      setIsCompactNav(compact);
      if (!compact) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setIsMenuOpen(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isCompactNav ? '0.8rem 1rem' : '1rem 4rem',
          backgroundColor: isScrolled
            ? 'rgba(64, 64, 64, 0.45)'
            : 'rgba(15, 32, 23, 0)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
          borderBottom: isScrolled
            ? '1px solid rgba(255, 255, 255, 0.08)'
            : '1px solid rgba(255, 255, 255, 0)',
          boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.2)' : 'none',
          transition: 'all 0.4s ease',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        <img src={logo} alt="logo" style={logoStyle} />

        {isCompactNav ? (
          <button
            type="button"
            onClick={(): void => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            style={menuToggleStyle}
          >
            ☰
          </button>
        ) : (
          <>
            <ul
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1.5rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                flexWrap: 'wrap',
              }}
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/history">History</NavLink>
              <NavLink to="/about">Our Story</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </ul>
            <div style={{ width: '100px' }} />
          </>
        )}
      </nav>

      {isCompactNav && isMenuOpen ? (
        <>
          <div
            onClick={(): void => setIsMenuOpen(false)}
            style={overlayStyle}
          />
          <aside style={sidebarStyle}>
            <div style={sidebarHeaderStyle}>
              <span style={sidebarTitleStyle}>Menu</span>
              <button
                type="button"
                onClick={(): void => setIsMenuOpen(false)}
                aria-label="Close navigation"
                style={menuToggleStyle}
              >
                ✕
              </button>
            </div>

            <ul style={sidebarListStyle}>
              <NavLink to="/" compact onClick={handleNavClick}>
                Home
              </NavLink>
              <NavLink to="/history" compact onClick={handleNavClick}>
                History
              </NavLink>
              <NavLink to="/about" compact onClick={handleNavClick}>
                Our Story
              </NavLink>
              <NavLink to="/contact" compact onClick={handleNavClick}>
                Contact Us
              </NavLink>
            </ul>
          </aside>
        </>
      ) : null}
    </div>
  );
}

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  compact?: boolean;
  onClick?: () => void;
}

function NavLink({ to, children, compact = false, onClick }: NavLinkProps): React.JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleClick = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    onClick?.();
  };

  return (
    <li style={compact ? { width: '100%' } : undefined}>
      <Link
        to={to}
        onClick={handleClick}
        onMouseEnter={(): void => setIsHovered(true)}
        onMouseLeave={(): void => setIsHovered(false)}
        style={{
          ...(compact ? compactNavLinkStyle : navLinkStyle),
          borderRadius: compact ? '14px' : '50px',
          padding: compact ? '0.8rem 1rem' : '0.6rem 1.2rem',
          display: compact ? 'block' : 'inline-block',
          backgroundColor: isHovered
            ? compact
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(255, 255, 255, 0.07)'
            : compact
              ? 'rgba(255, 255, 255, 0.04)'
              : 'rgba(255, 255, 255, 0)',
          backdropFilter: isHovered ? 'blur(8px)' : 'blur(0px)',
          border: isHovered
            ? compact
              ? '1px solid rgba(255, 255, 255, 0.16)'
              : '1px solid rgba(255, 255, 255, 0.15)'
            : compact
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : '1px solid rgba(255, 255, 255, 0)',
          boxShadow: isHovered ? '0 4px 15px rgba(0, 0, 0, 0.1)' : 'none',
          color: isHovered ? '#8b0d1d' : '#8b0d1d',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {children}
      </Link>
    </li>
  );
}

const navLinkStyle: React.CSSProperties = {
  textDecoration: 'none',
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 500,
  fontSize: '0.9rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
};

const compactNavLinkStyle: React.CSSProperties = {
  textDecoration: 'none',
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  fontSize: '1rem',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
};

const logoStyle: React.CSSProperties = {
  width: '50px',
  height: 'auto',
  objectFit: 'contain',
  display: 'block',
  margin: 0,
  filter: 'drop-shadow(0 4px 14px rgba(0,0,0,0.35))',
};

const menuToggleStyle: React.CSSProperties = {
  border: 'none',
  background: 'rgba(255, 255, 255, 0.12)',
  color: '#ffffff',
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '1.15rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
};

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.45)',
  zIndex: 1001,
};

const sidebarStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  right: 0,
  width: 'min(82vw, 320px)',
  height: '100vh',
  background: 'rgba(16, 24, 20, 0.96)',
  backdropFilter: 'blur(18px)',
  boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.25)',
  zIndex: 1002,
  padding: '1rem 1rem 1.5rem',
  display: 'flex',
  flexDirection: 'column',
};

const sidebarHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1rem',
};

const sidebarTitleStyle: React.CSSProperties = {
  color: '#ffffff',
  fontSize: '1rem',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
};

const sidebarListStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};
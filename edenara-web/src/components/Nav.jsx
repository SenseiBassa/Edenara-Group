import { useState, useEffect } from 'react';
import { LOGOS } from '../assets/logos.js';
import { T, NAV_LINKS } from '../constants.js';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(6,15,28,.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,.05)' : 'none',
      transition: 'all .4s',
      fontFamily: T.sans,
    }}>
      <div style={{
        maxWidth: 1340, margin: '0 auto', padding: '0 5%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 74,
      }}>
        {/* Logo */}
        <a href="#top" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src={LOGOS.master}
            alt="Edenara Group"
            style={{ height: 40, width: 'auto', objectFit: 'contain',
              filter: 'brightness(0) invert(1)', opacity: .92 }}
          />
        </a>

        {/* Desktop links */}
        <div className="desk-nav" style={{ display: 'flex', alignItems: 'center', gap: 38 }}>
          {NAV_LINKS.map(l => <NavLink key={l} href={`#${l.toLowerCase()}`}>{l}</NavLink>)}
          <NavCta />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="hamburger"
          aria-label="Toggle navigation"
          style={{ background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 5, padding: 6 }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 26, height: 2, background: '#fff', borderRadius: 1,
              transform: open
                ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'scaleX(0)')
                : 'none',
              opacity: open && i === 1 ? 0 : 1,
              transition: 'all .3s',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(6,15,28,.98)',
          borderTop: '1px solid rgba(255,255,255,.06)',
          padding: '16px 5% 28px',
          display: 'flex', flexDirection: 'column',
        }}>
          {NAV_LINKS.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                padding: '14px 0', color: 'rgba(255,255,255,.8)', fontSize: 15,
                textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,.05)',
                fontFamily: T.sans,
              }}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{ marginTop: 18, color: T.goldL, fontSize: 14, textDecoration: 'none' }}
          >
            Partner With Us →
          </a>
        </div>
      )}

      <style>{`
        @media(min-width:769px) { .hamburger { display: none !important; } }
        @media(max-width:768px) { .desk-nav  { display: none !important; } }
      `}</style>
    </nav>
  );
}

function NavLink({ href, children }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        color: h ? '#fff' : 'rgba(255,255,255,.7)',
        fontSize: 13, fontWeight: 500, letterSpacing: '.06em',
        textDecoration: 'none', transition: 'color .25s',
      }}
    >
      {children}
    </a>
  );
}

function NavCta() {
  const [h, setH] = useState(false);
  return (
    <a
      href="#contact"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        border: `1px solid ${T.gold}`,
        color: h ? T.dark : T.goldL,
        background: h ? T.gold : 'transparent',
        fontSize: 12, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase',
        padding: '11px 22px', borderRadius: 2, textDecoration: 'none', transition: 'all .3s',
      }}
    >
      Partner With Us
    </a>
  );
}

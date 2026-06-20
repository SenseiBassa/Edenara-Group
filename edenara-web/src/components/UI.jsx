import { useState, useEffect, useRef } from 'react';
import { T } from '../constants.js';

/* ── Scroll-reveal hook ──────────────────────────────────── */
export function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.unobserve(el); } },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

/* ── Reveal wrapper ─────────────────────────────────────── */
export function Reveal({ children, delay = 0, style = {}, className = '' }) {
  const [ref, vis] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : 'translateY(34px)',
        transition: `opacity .85s cubic-bezier(.16,1,.3,1) ${delay}s, transform .85s cubic-bezier(.16,1,.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── Section tag pill ───────────────────────────────────── */
export function Tag({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: T.sans,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: T.goldL,
      padding: '6px 14px',
      border: '1px solid rgba(212,170,74,.3)',
      borderRadius: 2,
    }}>
      {children}
    </span>
  );
}

/* ── Gold divider bar ───────────────────────────────────── */
export function GoldBar() {
  return (
    <div style={{ width: 44, height: 1, background: T.gold, opacity: .5, margin: '18px 0 24px' }} />
  );
}

/* ── Section heading block ──────────────────────────────── */
export function SectionHead({ tag, title, sub, light = false }) {
  return (
    <div style={{ marginBottom: 72 }}>
      <Tag>{tag}</Tag>
      <GoldBar />
      <h2
        style={{
          fontFamily: T.serif,
          fontSize: 'clamp(36px,4.5vw,64px)',
          fontWeight: 500,
          lineHeight: 1.08,
          color: light ? '#fff' : T.navy,
          marginBottom: sub ? 18 : 0,
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {sub && (
        <p style={{ fontSize: 17, color: light ? T.slate : '#555', lineHeight: 1.75, maxWidth: 520 }}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* ── Primary / ghost CTA buttons ───────────────────────── */
export function Btn({ href, primary, ghost, children }) {
  const [h, setH] = useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: T.sans, fontSize: 13, fontWeight: 600,
    letterSpacing: '.09em', textTransform: 'uppercase',
    textDecoration: 'none', borderRadius: 2, transition: 'all .3s',
  };
  if (primary) return (
    <a
      href={href}
      style={{
        ...base, padding: '15px 30px',
        background: h ? T.goldL : T.gold, color: T.dark,
        transform: h ? 'translateY(-2px)' : 'none',
        boxShadow: h ? '0 10px 28px rgba(184,146,42,.3)' : 'none',
      }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    >
      {children}
    </a>
  );
  return (
    <a
      href={href}
      style={{
        ...base, padding: '15px 0', borderRadius: 0,
        color: h ? '#fff' : 'rgba(255,255,255,.65)',
        borderBottom: `1px solid ${h ? 'rgba(255,255,255,.55)' : 'rgba(255,255,255,.18)'}`,
      }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    >
      {children}
    </a>
  );
}

/* ── White / outline CTA buttons (for green band) ──────── */
export function CtaBtn({ href, white, children }) {
  const [h, setH] = useState(false);
  if (white) return (
    <a
      href={href}
      style={{
        background: '#fff', color: '#1A5235',
        fontSize: 13, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase',
        padding: '16px 38px', borderRadius: 2, textDecoration: 'none',
        transition: 'transform .3s, box-shadow .3s',
        transform: h ? 'translateY(-2px)' : 'none',
        boxShadow: h ? '0 12px 30px rgba(0,0,0,.2)' : 'none',
      }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    >
      {children}
    </a>
  );
  return (
    <a
      href={href}
      style={{
        border: `1px solid ${h ? '#fff' : 'rgba(255,255,255,.45)'}`,
        color: '#fff', background: h ? 'rgba(255,255,255,.1)' : 'transparent',
        fontSize: 13, fontWeight: 500, letterSpacing: '.08em', textTransform: 'uppercase',
        padding: '16px 38px', borderRadius: 2, textDecoration: 'none', transition: 'all .3s',
      }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    >
      {children}
    </a>
  );
}

/* ── Logo image — consistent rendering helper ───────────── */
export function LogoImg({ src, alt, height = 56, invert = false, style = {} }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        height, width: 'auto', maxWidth: '100%',
        objectFit: 'contain', objectPosition: 'center',
        display: 'block',
        filter: invert ? 'brightness(0) invert(1)' : 'none',
        ...style,
      }}
    />
  );
}

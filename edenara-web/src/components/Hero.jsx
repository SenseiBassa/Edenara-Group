import { useState, useEffect } from 'react';
import { LOGOS } from '../assets/logos.js';
import { T, TICKER_ITEMS, COMPANIES } from '../constants.js';
import { Btn, Tag } from './UI.jsx';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const anim = (d) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'none' : 'translateY(28px)',
    transition: `opacity .9s cubic-bezier(.16,1,.3,1) ${d}s, transform .9s cubic-bezier(.16,1,.3,1) ${d}s`,
  });

  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      id="top"
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        overflow: 'hidden', background: T.dark,
      }}
    >
      {/* Background layers */}
      <div style={{
        position: 'absolute', inset: 0,
        background:
          'radial-gradient(ellipse 65% 65% at 85% 50%,rgba(26,82,53,.22),transparent 65%),' +
          'radial-gradient(ellipse 55% 80% at 5% 85%,rgba(184,146,42,.1),transparent 60%),' +
          'radial-gradient(ellipse 90% 50% at 50% 10%,rgba(8,25,46,.95),transparent 80%)',
      }} />

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)',
        backgroundSize: '88px 88px',
        maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%,black 20%,transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%,black 20%,transparent 80%)',
      }} />

      {/* Orbs */}
      <div style={{
        position: 'absolute', width: 680, height: 680, borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(184,146,42,.07),transparent 70%)',
        right: -100, top: '50%', transform: 'translateY(-50%)',
        animation: 'orb 7s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 480, height: 480, borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(26,82,53,.1),transparent 70%)',
        left: -80, bottom: 60,
        animation: 'orb 9s ease-in-out infinite reverse',
      }} />

      {/* Vertical accent */}
      <div style={{
        position: 'absolute', top: 0, right: '15%', width: 1, height: '100%',
        background: 'linear-gradient(to bottom,transparent,rgba(184,146,42,.18) 30%,rgba(184,146,42,.18) 70%,transparent)',
      }} />

      {/* Content */}
      <div style={{ maxWidth: 1340, margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{ paddingTop: 150, paddingBottom: 120, maxWidth: 880 }}>

          {/* Master logo */}
          <div style={{ ...anim(0.12), marginBottom: 32 }}>
            <img
              src={LOGOS.master}
              alt="Edenara Group"
              style={{ height: 70, width: 'auto', objectFit: 'contain',
                filter: 'brightness(0) invert(1)', opacity: .9 }}
            />
          </div>

          {/* Eyebrow */}
          <div style={{ ...anim(0.28), display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <Tag>Diversified Enterprise Group</Tag>
            <span style={{ width: 40, height: 1, background: T.gold, opacity: .5 }} />
          </div>

          {/* Headline */}
          <h1 style={{
            ...anim(0.4),
            fontFamily: T.serif,
            fontSize: 'clamp(48px,7vw,96px)',
            fontWeight: 500, lineHeight: 1.02,
            color: '#fff', marginBottom: 26, letterSpacing: '-.01em',
          }}>
            Cultivating<br />
            <em style={{ fontStyle: 'italic', color: T.goldL }}>Innovation.</em><br />
            Shaping Sustainable<br />Futures.
          </h1>

          {/* Sub */}
          <p style={{
            ...anim(0.54),
            fontFamily: T.sans, fontSize: 'clamp(15px,1.2vw,18px)',
            lineHeight: 1.82, color: 'rgba(244,239,228,.6)', maxWidth: 560, marginBottom: 52,
          }}>
            A diversified holding company at the intersection of biotechnology, capital management,
            agricultural innovation, and intelligent technology — building ventures that advance
            human wellbeing and create sustainable impact.
          </p>

          {/* Buttons */}
          <div style={{ ...anim(0.66), display: 'flex', alignItems: 'center', gap: 26, flexWrap: 'wrap' }}>
            <Btn href="#companies" primary>Explore Our Companies →</Btn>
            <Btn href="#contact" ghost>Partner With Us →</Btn>
          </div>
        </div>
      </div>

      {/* Subsidiary ticker strip */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
        borderTop: '1px solid rgba(255,255,255,.07)',
        background: 'rgba(6,15,28,.65)', backdropFilter: 'blur(10px)',
        padding: '18px 0', overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', animation: 'ticker 32s linear infinite', whiteSpace: 'nowrap' }}>
          {[0, 1].flatMap(ri =>
            COMPANIES.map((c, i) => (
              <span
                key={`${ri}-${i}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 20, padding: '0 48px', flexShrink: 0 }}
              >
                <img
                  src={LOGOS[c.logo]}
                  alt={c.name}
                  style={{ height: 34, width: 'auto', objectFit: 'contain',
                    filter: 'brightness(0) invert(1)', opacity: .45 }}
                />
                <span style={{ width: 1, height: 26, background: 'rgba(255,255,255,.12)', flexShrink: 0 }} />
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { LOGOS } from '../assets/logos.js';
import { T, LEADERS, FEATURES, COMPANIES } from '../constants.js';
import { Reveal, Tag, GoldBar, CtaBtn } from './UI.jsx';

/* ══════════════════════════════════════════════════════════
   LEADERSHIP
══════════════════════════════════════════════════════════ */
export function Leadership() {
  return (
    <section
      id="leadership"
      style={{ padding: '140px 0', background: T.navy2, position: 'relative', overflow: 'hidden', fontFamily: T.sans }}
    >
      <div style={{
        position: 'absolute', bottom: -200, right: -200, width: 580, height: 580,
        borderRadius: '50%', background: 'radial-gradient(circle,rgba(184,146,42,.07),transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 1340, margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <Tag>Leadership</Tag>
          <GoldBar />
          <h2 style={{ fontFamily: T.serif, fontSize: 'clamp(36px,4.5vw,62px)', fontWeight: 500, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
            The Founding Team
          </h2>
          <p style={{ fontSize: 16, color: T.slate, lineHeight: 1.75, maxWidth: 480, marginBottom: 72 }}>
            Strategic minds driving innovation, growth, and the long-term vision of the Edenara Group.
          </p>
        </Reveal>
        <div className="leaders-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {LEADERS.map((l, i) => <LeaderCard key={l.name} leader={l} delay={i * 0.15} />)}
        </div>
      </div>
      <style>{`@media(max-width:768px){.leaders-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function LeaderCard({ leader: l, delay }) {
  const [h, setH] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          padding: '48px 42px',
          background: h ? 'rgba(184,146,42,.03)' : 'rgba(255,255,255,.03)',
          border: `1px solid ${h ? 'rgba(184,146,42,.26)' : 'rgba(255,255,255,.07)'}`,
          borderRadius: 4, position: 'relative', overflow: 'hidden', transition: 'all .4s',
        }}
      >
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg,transparent,${T.gold},transparent)`,
          opacity: h ? 1 : 0, transition: 'opacity .4s',
        }} />
        <div style={{
          width: 68, height: 68, borderRadius: '50%', background: l.grad,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: T.serif, fontSize: 26, fontWeight: 600, color: T.dark, marginBottom: 26,
        }}>
          {l.init}
        </div>
        <div style={{ fontFamily: T.serif, fontSize: 27, fontWeight: 500, color: '#fff', marginBottom: 5 }}>{l.name}</div>
        <div style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: T.goldL, marginBottom: 22 }}>{l.title}</div>
        <p style={{ fontSize: 15, color: T.slate, lineHeight: 1.78 }}>{l.bio}</p>
      </div>
    </Reveal>
  );
}

/* ══════════════════════════════════════════════════════════
   VISION
══════════════════════════════════════════════════════════ */
export function Vision() {
  const cards = [
    {
      sym: '◎', title: 'Our Vision',
      body: 'To become a globally respected enterprise group creating sustainable value through innovation, science, capital, agriculture, and technology — with Africa at the centre of our story.',
      bg: 'rgba(26,82,53,.12)', border: 'rgba(26,82,53,.3)',
    },
    {
      sym: '◈', title: 'Our Mission',
      body: 'To build and support businesses that improve lives, strengthen economies, and contribute to a more sustainable future for communities across Africa, Europe, and North America.',
      bg: 'rgba(184,146,42,.08)', border: 'rgba(184,146,42,.25)',
    },
  ];

  return (
    <section
      id="vision"
      style={{ padding: '140px 0', background: T.dark, position: 'relative', overflow: 'hidden', fontFamily: T.sans }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%,rgba(26,82,53,.07),transparent),radial-gradient(ellipse 40% 40% at 20% 80%,rgba(184,146,42,.05),transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 1340, margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 1 }}>
        <Reveal style={{ marginBottom: 72 }}>
          <Tag>Impact &amp; Vision</Tag>
          <GoldBar />
          <h2 style={{ fontFamily: T.serif, fontSize: 'clamp(36px,4.5vw,66px)', fontWeight: 500, color: '#fff', lineHeight: 1.08 }}>
            Building for the<br />
            <em style={{ fontStyle: 'italic', color: T.goldL }}>Long Term</em>
          </h2>
        </Reveal>
        <div className="vision-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.15}>
              <div style={{ padding: '50px 42px', background: c.bg, border: `1px solid ${c.border}`, borderRadius: 4 }}>
                <div style={{ fontFamily: T.serif, fontSize: 38, color: T.goldL, marginBottom: 20, lineHeight: 1 }}>{c.sym}</div>
                <h3 style={{ fontFamily: T.serif, fontSize: 29, fontWeight: 500, color: '#fff', marginBottom: 14 }}>{c.title}</h3>
                <p style={{ fontSize: 16, color: T.slate, lineHeight: 1.82 }}>{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.vision-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   FEATURES / ENGAGEMENT PATHWAYS
══════════════════════════════════════════════════════════ */
export function Features() {
  return (
    <section style={{ padding: '100px 0 140px', background: T.dark, fontFamily: T.sans }}>
      <div style={{ maxWidth: 1340, margin: '0 auto', padding: '0 5%' }}>
        <Reveal style={{ marginBottom: 72 }}>
          <Tag>What We Offer</Tag>
          <GoldBar />
          <h2 style={{ fontFamily: T.serif, fontSize: 'clamp(34px,4vw,58px)', fontWeight: 500, color: '#fff', lineHeight: 1.1, marginBottom: 14 }}>
            Engagement Pathways
          </h2>
          <p style={{ fontSize: 16, color: T.slate, lineHeight: 1.75 }}>
            Multiple ways to connect, collaborate, and grow with the Edenara ecosystem.
          </p>
        </Reveal>
        <div className="feat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {FEATURES.map(([icon, title, desc], i) => (
            <FeatCard key={title} icon={icon} title={title} desc={desc} delay={(i % 4) * 0.08} />
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1080px){.feat-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:520px){.feat-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

function FeatCard({ icon, title, desc, delay }) {
  const [h, setH] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          padding: '32px 24px',
          border: `1px solid ${h ? 'rgba(184,146,42,.24)' : 'rgba(255,255,255,.06)'}`,
          background: h ? 'rgba(184,146,42,.04)' : 'transparent',
          borderRadius: 4, transform: h ? 'translateY(-5px)' : 'none', transition: 'all .3s',
        }}
      >
        <div style={{ fontSize: 26, marginBottom: 14 }}>{icon}</div>
        <h4 style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 9 }}>{title}</h4>
        <p style={{ fontSize: 13, color: T.slate, lineHeight: 1.68 }}>{desc}</p>
      </div>
    </Reveal>
  );
}

/* ══════════════════════════════════════════════════════════
   CTA BAND
══════════════════════════════════════════════════════════ */
export function CtaBand() {
  return (
    <section
      id="contact"
      style={{ padding: '120px 0', background: T.green, position: 'relative', overflow: 'hidden', textAlign: 'center', fontFamily: T.sans }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(0,0,0,.22),transparent,rgba(0,0,0,.12))' }} />
      {[600, 920].map(s => (
        <div key={s} style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: s, height: s, borderRadius: '50%', border: '1px solid rgba(255,255,255,.05)', pointerEvents: 'none',
        }} />
      ))}
      <div style={{ maxWidth: 1340, margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <h2 style={{ fontFamily: T.serif, fontSize: 'clamp(36px,5vw,70px)', fontWeight: 500, color: '#fff', lineHeight: 1.08, marginBottom: 22 }}>
            Ready to Shape<br />
            <em style={{ fontStyle: 'italic' }}>Sustainable Futures</em> Together?
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.72)', maxWidth: 480, margin: '0 auto 50px', lineHeight: 1.75 }}>
            Whether you're an investor, researcher, institution, or potential partner — we want to hear from you.
          </p>
          <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CtaBtn href="mailto:hello@edenaragroup.com" white>Get In Touch</CtaBtn>
            <CtaBtn href="#companies">Explore Our Companies</CtaBtn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════ */
export function Footer() {
  const cols = [
    { title: 'Companies', links: COMPANIES.map(c => c.name) },
    { title: 'Group',     links: ['About Us', 'Leadership', 'Vision & Mission', 'ESG & Impact', 'Investor Relations', 'Careers'] },
    { title: 'Connect',   links: ['Partner With Us', 'News & Insights', 'Research Hub', 'Contact'] },
  ];

  return (
    <footer style={{ background: '#040B15', padding: '90px 0 0', borderTop: '1px solid rgba(255,255,255,.05)', fontFamily: T.sans }}>
      <div style={{ maxWidth: 1340, margin: '0 auto', padding: '0 5%' }}>

        {/* Master logo + tagline */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 28, marginBottom: 52,
          paddingBottom: 44, borderBottom: '1px solid rgba(255,255,255,.06)',
        }}>
          <img
            src={LOGOS.master} alt="Edenara Group"
            style={{ height: 52, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: .88 }}
          />
          <p style={{ fontFamily: T.serif, fontStyle: 'italic', fontSize: 15, color: T.goldL, opacity: .75, maxWidth: 360, textAlign: 'right' }}>
            "Cultivating Innovation. Shaping Sustainable Futures."
          </p>
        </div>

        {/* Subsidiary logo pills */}
        <div className="foot-logos" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20,
          marginBottom: 56, paddingBottom: 52, borderBottom: '1px solid rgba(255,255,255,.06)',
        }}>
          {COMPANIES.map(c => <FootLogoCard key={c.key} company={c} />)}
        </div>

        {/* Link columns */}
        <div className="foot-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 56, marginBottom: 72 }}>
          <div>
            <p style={{ fontSize: 14, color: T.slate, lineHeight: 1.78, maxWidth: 280 }}>
              A diversified enterprise building sustainable value at the intersection of biotechnology,
              capital management, agricultural innovation, and intelligent technology.
            </p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: T.goldL, marginBottom: 22 }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {col.links.map(lnk => <FootLink key={lnk}>{lnk}</FootLink>)}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,.06)', padding: '26px 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.22)' }}>© 2025 Edenara Group. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 26 }}>
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map(l => <FootLink key={l}>{l}</FootLink>)}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:1080px){.foot-grid{grid-template-columns:1fr 1fr!important}.foot-logos{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:560px){.foot-grid{grid-template-columns:1fr!important}.foot-logos{grid-template-columns:1fr 1fr!important}}
      `}</style>
    </footer>
  );
}

function FootLogoCard({ company: c }) {
  const brand = T[c.key];
  return (
    <div
      style={{
        background: '#fff', borderRadius: 8, padding: '18px 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'default', transition: 'transform .3s, box-shadow .3s', height: 110, overflow: 'hidden',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${brand.light}`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <img
        src={LOGOS[c.logo]} alt={c.name}
        style={{ maxHeight: 90, maxWidth: '100%', width: 'auto', objectFit: 'contain', display: 'block' }}
      />
    </div>
  );
}

function FootLink({ children }) {
  const [h, setH] = useState(false);
  return (
    <a href="#"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ fontSize: 14, color: h ? '#fff' : T.slate, textDecoration: 'none', transition: 'color .25s' }}
    >
      {children}
    </a>
  );
}

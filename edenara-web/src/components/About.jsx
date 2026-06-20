import { useState } from 'react';
import { T } from '../constants.js';
import { Reveal, Tag, GoldBar } from './UI.jsx';

const PILLARS = [
  { title: 'Scientific Rigour',     desc: 'Research-driven thinking across every venture and decision we make.' },
  { title: 'Financial Discipline',  desc: 'Responsible capital allocation and long-term value creation.' },
  { title: 'Sustainable Innovation',desc: 'Solutions designed for enduring impact across generations.' },
  { title: 'Global Outlook',        desc: 'Partnerships across Africa, Europe and North America.' },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: '140px 0', background: T.dark, position: 'relative', overflow: 'hidden', fontFamily: T.sans }}
    >
      {/* Top shimmer */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg,transparent,${T.gold},transparent)`, opacity: .3,
      }} />

      <div style={{ maxWidth: 1340, margin: '0 auto', padding: '0 5%' }}>
        <div
          className="about-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}
        >
          {/* Text side */}
          <Reveal>
            <Tag>About the Group</Tag>
            <GoldBar />
            <h2 style={{
              fontFamily: T.serif, fontSize: 'clamp(32px,3.8vw,56px)',
              fontWeight: 500, lineHeight: 1.08, color: '#fff', marginBottom: 26,
            }}>
              Where Science, Finance, Agriculture &amp; Technology Converge
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.82, color: T.slate, marginBottom: 18 }}>
              Edenara Group was established to build transformative businesses in sectors that define
              the future of human development and economic prosperity.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.82, color: T.slate, marginBottom: 52 }}>
              Drawing on expertise in biomedical sciences, financial stewardship, agricultural systems,
              and intelligent technology, the Group develops ventures combining innovation, operational
              excellence, and long-term sustainability.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 48, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,.07)', flexWrap: 'wrap' }}>
              {[['4', 'Portfolio Companies'], ['3', 'Continents'], ['∞', 'Growth Horizon']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: T.serif, fontSize: 46, fontWeight: 500, color: T.goldL, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: T.slate, marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Pillars card */}
          <Reveal delay={0.18}>
            <div style={{
              position: 'relative', border: '1px solid rgba(184,146,42,.18)',
              borderRadius: 6, padding: '44px 40px',
              background: 'linear-gradient(135deg,rgba(12,34,64,.88),rgba(6,15,28,.88))',
            }}>
              <div style={{
                position: 'absolute', top: -1, left: 40, right: 40, height: 2,
                background: `linear-gradient(90deg,transparent,${T.gold},transparent)`,
              }} />
              <div style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: T.goldL, marginBottom: 24 }}>
                Core Pillars
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {PILLARS.map(p => <PillarCard key={p.title} {...p} />)}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`@media(max-width:860px){.about-grid{grid-template-columns:1fr!important;gap:56px!important}}`}</style>
    </section>
  );
}

function PillarCard({ title, desc }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        padding: '24px 20px',
        background: h ? 'rgba(184,146,42,.07)' : 'rgba(255,255,255,.03)',
        border: `1px solid ${h ? 'rgba(184,146,42,.24)' : 'rgba(255,255,255,.06)'}`,
        borderRadius: 4, transition: 'all .3s', cursor: 'default',
      }}
    >
      <div style={{ width: 32, height: 2, background: T.gold, opacity: .7, marginBottom: 14 }} />
      <div style={{ fontFamily: T.serif, fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 13, color: T.slate, lineHeight: 1.65 }}>{desc}</div>
    </div>
  );
}

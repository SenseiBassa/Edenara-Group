import { useState } from 'react';
import { LOGOS } from '../assets/logos.js';
import { T, COMPANIES } from '../constants.js';
import { Reveal, Tag, GoldBar } from './UI.jsx';

export default function Companies() {
  return (
    <section
      id="companies"
      style={{
        padding: '140px 0',
        background: `linear-gradient(180deg,${T.dark} 0%,#050D19 100%)`,
        position: 'relative', fontFamily: T.sans,
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg,transparent,${T.gold},transparent)`, opacity: .25,
      }} />

      <div style={{ maxWidth: 1340, margin: '0 auto', padding: '0 5%' }}>

        {/* Header */}
        <Reveal>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            gap: 40, flexWrap: 'wrap', marginBottom: 72,
          }}>
            <div>
              <Tag>Portfolio Companies</Tag>
              <GoldBar />
              <h2 style={{
                fontFamily: T.serif, fontSize: 'clamp(36px,4.5vw,66px)',
                fontWeight: 500, lineHeight: 1.08, color: '#fff',
              }}>
                Four Ventures.<br />
                <em style={{ fontStyle: 'italic', color: T.goldL }}>One Vision.</em>
              </h2>
            </div>
            <p style={{ fontSize: 16, color: T.slate, lineHeight: 1.78, maxWidth: 380 }}>
              Specialised businesses united by a common commitment to innovation, sustainability,
              and long-term value creation.
            </p>
          </div>
        </Reveal>

        {/* Logo showcase grid */}
        <Reveal delay={0.1}>
          <div className="logo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginBottom: 80 }}>
            {COMPANIES.map(c => <LogoCard key={c.key} company={c} />)}
          </div>
        </Reveal>

        {/* Detail rows */}
        {COMPANIES.map((c, i) => (
          <CompanyRow key={c.key} company={c} delay={i * 0.1} />
        ))}
      </div>

      <style>{`
        @media(max-width:900px){.logo-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:480px){.logo-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:860px){.company-row{grid-template-columns:1fr!important;gap:24px!important}.company-row>div:last-child{display:none!important}}
      `}</style>
    </section>
  );
}

/* 4-up logo showcase card */
function LogoCard({ company: c }) {
  const [h, setH] = useState(false);
  const brand = T[c.key];
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        background: h ? brand.light : 'rgba(255,255,255,.97)',
        border: `1px solid ${h ? brand.border : 'rgba(255,255,255,.12)'}`,
        borderRadius: 10, padding: '28px 20px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        transition: 'all .35s',
        boxShadow: h ? `0 8px 32px ${brand.light}` : '0 2px 12px rgba(0,0,0,.2)',
        cursor: 'default',
      }}
    >
      <div style={{
        width: '100%', height: 160,
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      }}>
        <img
          src={LOGOS[c.logo]} alt={c.name}
          style={{
            maxHeight: 160, maxWidth: '90%', width: 'auto', height: 'auto',
            objectFit: 'contain', display: 'block',
            transition: 'transform .35s', transform: h ? 'scale(1.04)' : 'scale(1)',
          }}
        />
      </div>
      <div style={{ width: '100%', height: 1, background: h ? brand.border : 'rgba(0,0,0,.08)', margin: '16px 0 14px' }} />
      <div style={{
        fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase',
        color: h ? brand.solid : '#888', textAlign: 'center', transition: 'color .35s',
      }}>
        {c.sector.split('·')[0].trim()}
      </div>
    </div>
  );
}

/* Full detail row */
function CompanyRow({ company: c, delay }) {
  const [h, setH] = useState(false);
  const brand = T[c.key];
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        className="company-row"
        style={{
          display: 'grid', gridTemplateColumns: '260px 1fr 110px',
          gap: 56, alignItems: 'start',
          padding: '56px 40px', borderBottom: '1px solid rgba(255,255,255,.06)',
          borderRadius: 6,
          background: h ? 'rgba(255,255,255,.02)' : 'transparent',
          transition: 'background .35s',
        }}
      >
        {/* Left: white-bg logo box + meta */}
        <div>
          <div style={{
            background: '#fff', borderRadius: 8, padding: '20px 16px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: `1px solid ${h ? brand.border : 'rgba(255,255,255,.1)'}`,
            transition: 'border-color .35s', marginBottom: 20,
            height: 120, overflow: 'hidden',
          }}>
            <img
              src={LOGOS[c.logo]} alt={c.name}
              style={{ maxHeight: 110, maxWidth: '100%', width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </div>
          <div style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: T.goldL, marginBottom: 8 }}>
            {c.num}
          </div>
          <div style={{ fontFamily: T.serif, fontSize: 'clamp(20px,2.2vw,32px)', fontWeight: 500, color: '#fff', lineHeight: 1.1, marginBottom: 6 }}>
            {c.name}
          </div>
          <div style={{ fontSize: 11, color: T.slate, letterSpacing: '.05em', marginBottom: 8 }}>{c.sector}</div>
          <div style={{ fontSize: 12, fontStyle: 'italic', color: brand.solid, opacity: .9 }}>{c.tagline}</div>
        </div>

        {/* Body */}
        <div style={{ paddingTop: 4 }}>
          <p style={{ fontSize: 16, color: 'rgba(244,239,228,.72)', lineHeight: 1.78, marginBottom: 28 }}>
            {c.purpose}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {c.tags.map(t => (
              <span key={t} style={{
                fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase',
                padding: '5px 12px',
                background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)',
                borderRadius: 2, color: 'rgba(255,255,255,.48)',
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Badge */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 4 }}>
          <div style={{
            width: 90, height: 90, borderRadius: '50%', overflow: 'hidden',
            border: `1px solid ${h ? brand.border : 'rgba(255,255,255,.1)'}`,
            background: h ? brand.light : 'rgba(255,255,255,.97)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all .4s', padding: 8,
          }}>
            <img src={LOGOS[c.logo]} alt="" style={{ width: 66, height: 66, objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

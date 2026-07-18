const events = [
  { icon: '🎂', title: 'Birthday Parties', desc: 'Make your special day unforgettable with our all-inclusive birthday packages — pool access, food, and dedicated event staff.', color: '#FFB300' },
  { icon: '👨‍👩‍👧‍👦', title: 'Family Gatherings', desc: 'Bring the whole family together for a day of dining, swimming, and bonding in our beautiful park.', color: '#1B5E20' },
  { icon: '💼', title: 'Corporate Events', desc: 'Host team-building sessions, company lunches, and networking events in our spacious venue.', color: '#0288D1' },
  { icon: '💍', title: 'Wedding Receptions', desc: 'Say "I do" surrounded by lush greenery and elegant ambiance — we create magical wedding memories.', color: '#D4AF37' },
  { icon: '🎒', title: 'School Excursions', desc: 'Educational and fun outings for school groups with supervised playground and swimming activities.', color: '#7B1FA2' },
  { icon: '🧺', title: 'Weekend Picnics', desc: 'Book a shaded outdoor area for relaxed weekend picnics with family and friends.', color: '#2E7D32' },
]

export default function Events() {
  return (
    <section id="events" style={{ background: 'linear-gradient(135deg,#1B5E20 0%,#145214 100%)', padding: 'clamp(60px,8vw,100px) 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: 'radial-gradient(circle,rgba(212,175,55,0.12) 0%,transparent 70%)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 300, height: 300, background: 'radial-gradient(circle,rgba(3,169,244,0.1) 0%,transparent 70%)', borderRadius: '50%' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div className="section-observe" style={{ textAlign: 'center', marginBottom: 60 }}>
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: 4, color: '#D4AF37', textTransform: 'uppercase', marginBottom: 16, borderBottom: '2px solid rgba(212,175,55,0.5)', paddingBottom: 6 }}>Events & Occasions</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.1, color: '#fff', margin: '0 0 16px' }}>
            Celebrate Life's<br />
            <span style={{ color: '#D4AF37' }}>Best Moments Here</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(255,255,255,0.75)', maxWidth: 540, margin: '0 auto', lineHeight: 1.8 }}>
            From intimate family gatherings to grand corporate events — Rushko Park is the perfect backdrop for every occasion.
          </p>
        </div>

        {/* Events grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 24, marginBottom: 56 }}>
          {events.map((ev, i) => (
            <div
              key={ev.title}
              className="section-observe"
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 18,
                padding: '28px 26px',
                transition: 'transform 0.3s, background 0.3s',
                transitionDelay: `${i * 70}ms`,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)' }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{ev.icon}</div>
              <div style={{ width: 40, height: 3, background: ev.color, borderRadius: 2, marginBottom: 14 }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: '#fff', margin: '0 0 10px' }}>{ev.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{ev.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="section-observe" style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 20, padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: '#D4AF37', margin: '0 0 8px' }}>Ready to Plan Your Event?</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.75)', margin: 0 }}>Get in touch with our events team for a personalised quote and availability.</p>
          </div>
          <a
            href="#contact"
            style={{ display: 'inline-block', background: 'linear-gradient(135deg,#D4AF37,#F0CC55)', color: '#1B5E20', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: 1.5, padding: '16px 36px', borderRadius: 32, textDecoration: 'none', boxShadow: '0 8px 32px rgba(212,175,55,0.35)', whiteSpace: 'nowrap', flexShrink: 0, transition: 'transform 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            BOOK YOUR EVENT
          </a>
        </div>
      </div>
    </section>
  )
}

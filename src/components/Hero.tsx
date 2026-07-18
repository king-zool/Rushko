export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0d2310',
      }}
    >
      {/* Background image grid collage */}
      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
        {[
          'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=800&h=600&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop&auto=format',
          'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&auto=format',
        ].map((src, i) => (
          <div key={i} style={{ overflow: 'hidden' }}>
            <img
              src={src}
              alt="Rushko Park experience"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,40,12,0.88) 0%, rgba(10,40,12,0.72) 50%, rgba(10,40,12,0.88) 100%)' }} />

      {/* Gold radial glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)', borderRadius: '50%' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '120px 24px 60px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', borderRadius: 24, padding: '6px 18px', marginBottom: 28 }}>
          <span style={{ width: 6, height: 6, background: '#D4AF37', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#D4AF37', letterSpacing: 3, fontWeight: 500 }}>KANO, NIGERIA</span>
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(42px,8vw,88px)', lineHeight: 1.05, color: '#fff', margin: '0 0 12px', letterSpacing: -1 }}>
          Welcome to<br />
          <span style={{ background: 'linear-gradient(135deg, #D4AF37, #F0CC55, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Rushko Park</span>
        </h1>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px,2vw,19px)', color: 'rgba(255,255,255,0.8)', margin: '0 0 12px', fontWeight: 300, lineHeight: 1.7 }}>
          Home of <strong style={{ color: '#D4AF37', fontWeight: 600 }}>Rashko Restaurant</strong>
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(14px,1.6vw,17px)', color: 'rgba(255,255,255,0.65)', margin: '0 0 44px', fontWeight: 300, lineHeight: 1.8, maxWidth: 660, marginLeft: 'auto', marginRight: 'auto' }}>
          Serving authentic Arabic dishes, refreshing swimming experiences,<br className="desktop-only" /> and exciting family fun — all in one destination.
        </p>

        {/* Tagline pills */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 44 }}>
          {['🍽 Eat', '🏊 Swim', '🛝 Play', '🌿 Relax'].map((tag) => (
            <span
              key={tag}
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 20, padding: '6px 16px', fontFamily: 'var(--font-body)', fontSize: 13, color: '#fff', fontWeight: 500 }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#contact"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #F0CC55)', color: '#1B5E20', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: 1.5, padding: '16px 36px', borderRadius: 32, textDecoration: 'none', boxShadow: '0 8px 32px rgba(212,175,55,0.45)', transition: 'transform 0.2s, box-shadow 0.2s', display: 'inline-block' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(212,175,55,0.6)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(212,175,55,0.45)' }}
          >
            BOOK A TABLE
          </a>
          <a
            href="#restaurant"
            style={{ background: 'transparent', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, letterSpacing: 1.5, padding: '15px 36px', borderRadius: 32, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)', transition: 'all 0.2s', display: 'inline-block' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = '#fff' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
          >
            VIEW MENU
          </a>
          <a
            href="#pool"
            style={{ background: 'rgba(3,169,244,0.2)', color: '#03A9F4', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, letterSpacing: 1.5, padding: '15px 36px', borderRadius: 32, textDecoration: 'none', border: '2px solid rgba(3,169,244,0.5)', transition: 'all 0.2s', display: 'inline-block' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(3,169,244,0.3)'; e.currentTarget.style.borderColor = '#03A9F4' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(3,169,244,0.2)'; e.currentTarget.style.borderColor = 'rgba(3,169,244,0.5)' }}
          >
            BOOK A VISIT
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.5 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#fff', letterSpacing: 2 }}>SCROLL TO EXPLORE</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(180deg, rgba(255,255,255,0.6), transparent)' }} />
        </div>
      </div>
    </section>
  )
}

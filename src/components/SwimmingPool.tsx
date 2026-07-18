const features = [
  { icon: '🏊', title: 'Adult Pool', desc: 'Full-depth swimming pool for adults, perfect for laps or leisurely relaxation.' },
  { icon: '👶', title: 'Kids Pool', desc: 'Shallow, safe, and fun — designed specifically for children with colourful decor.' },
  { icon: '☀️', title: 'Poolside Seating', desc: 'Comfortable sunbeds and shaded seating areas where you can unwind and order food.' },
  { icon: '🚿', title: 'Clean Facilities', desc: 'Modern changing rooms, showers, and lockers for a comfortable experience.' },
  { icon: '👁', title: 'Lifeguard on Duty', desc: 'Certified lifeguards ensure safety for all swimmers at all times.' },
  { icon: '🌅', title: 'Weekend Specials', desc: 'Special family packages and weekend deals for group bookings.' },
]

export default function SwimmingPool() {
  return (
    <section id="pool" style={{ background: 'linear-gradient(180deg, #e8f5e9 0%, #FDFBF5 100%)', padding: 'clamp(60px,8vw,100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 64, alignItems: 'center' }}>
          {/* Image collage */}
          <div className="section-observe" style={{ position: 'relative', height: 520 }}>
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=560&h=420&fit=crop&auto=format"
              alt="Swimming pool"
              style={{ position: 'absolute', top: 0, left: 0, width: '80%', height: 380, objectFit: 'cover', borderRadius: 20, boxShadow: '0 24px 64px rgba(3,169,244,0.2)' }}
            />
            <img
              src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=280&fit=crop&auto=format"
              alt="Kids pool"
              style={{ position: 'absolute', bottom: 0, right: 0, width: '55%', height: 250, objectFit: 'cover', borderRadius: 16, boxShadow: '0 16px 48px rgba(0,0,0,0.14)', border: '4px solid #fff' }}
            />
            {/* Badge */}
            <div style={{ position: 'absolute', top: 260, left: '60%', background: 'linear-gradient(135deg,#03A9F4,#0288D1)', borderRadius: 14, padding: '14px 20px', boxShadow: '0 8px 32px rgba(3,169,244,0.4)', zIndex: 2, transform: 'translateX(-50%)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#fff', textAlign: 'center' }}>Open Daily</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(255,255,255,0.85)', textAlign: 'center', marginTop: 2 }}>8 AM – 8 PM</div>
            </div>
          </div>

          {/* Content */}
          <div className="section-observe">
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: 4, color: '#0288D1', textTransform: 'uppercase', marginBottom: 16, borderBottom: '2px solid #03A9F4', paddingBottom: 6 }}>Swimming Pool</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(30px,4vw,48px)', lineHeight: 1.1, color: '#1A1A1A', margin: '0 0 20px' }}>
              Dive Into Pure<br />
              <span style={{ color: '#0288D1' }}>Refreshment</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#666', lineHeight: 1.9, margin: '0 0 36px' }}>
              Escape the Kano heat in our sparkling pools. With dedicated sections for adults and children, pristine facilities, and poolside dining, your swim day is everything you need it to be.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 36 }}>
              {features.map((f) => (
                <div key={f.title} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: '#1A1A1A', marginBottom: 3 }}>{f.title}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#888', lineHeight: 1.6 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              style={{ display: 'inline-block', background: 'linear-gradient(135deg,#03A9F4,#0288D1)', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: 1.5, padding: '16px 36px', borderRadius: 32, textDecoration: 'none', boxShadow: '0 8px 32px rgba(3,169,244,0.35)', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(3,169,244,0.5)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(3,169,244,0.35)' }}
            >
              BOOK SWIMMING SESSION
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

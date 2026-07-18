const features = [
  { icon: '🍽', title: 'Authentic Arabic Cuisine', desc: 'Savour traditional Mandi, Kabuli, BBQ, and more — prepared with premium ingredients and time-honoured recipes.' },
  { icon: '🏊', title: 'Swimming Pool', desc: 'Relax in our crystal-clear pools — adult and kids sections, poolside seating, and professional lifeguard supervision.' },
  { icon: '🛝', title: "Kids Playground", desc: 'Safe, colourful, and fully supervised — slides, swings, climbing frames, and bouncing castles for endless fun.' },
  { icon: '🎉', title: 'Events & Parties', desc: 'Host unforgettable birthday parties, corporate events, weddings, and family gatherings in our beautiful venue.' },
  { icon: '🌿', title: 'Beautiful Gardens', desc: 'Lush green surroundings perfect for picnics, outdoor dining, and peaceful family relaxation.' },
  { icon: '📍', title: 'Prime Location', desc: 'Conveniently located inside Kano Club, Murtala Muhammad Way — Kano\'s premier recreation address.' },
]

export default function About() {
  return (
    <section id="about" style={{ background: '#FDFBF5', padding: 'clamp(60px,8vw,100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 64, alignItems: 'center', marginBottom: 80 }}>
          {/* Text */}
          <div className="section-observe">
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: 4, color: '#1B5E20', textTransform: 'uppercase', marginBottom: 16, borderBottom: '2px solid #D4AF37', paddingBottom: 6 }}>About Us</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.1, color: '#1A1A1A', margin: '0 0 24px' }}>
              Kano's Premier<br />
              <span style={{ color: '#1B5E20' }}>Family Destination</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#555', lineHeight: 1.9, margin: '0 0 16px' }}>
              Rushko Park is more than a place — it's an experience. Nestled inside the iconic Kano Club, we bring together the finest Arabic culinary traditions with world-class recreational facilities, all in one beautifully designed destination.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#555', lineHeight: 1.9, margin: '0 0 32px' }}>
              Whether you're here for a family outing, a romantic dinner, a birthday celebration, or simply to unwind by the pool — Rushko Park offers an escape from the ordinary in the heart of Kano.
            </p>
            <div style={{ display: 'flex', gap: 32 }}>
              {[['5+', 'Years of Excellence'], ['10k+', 'Happy Families'], ['50+', 'Menu Items']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 36, color: '#1B5E20', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#888', marginTop: 4, letterSpacing: 0.5 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <div className="section-observe" style={{ position: 'relative', height: 480 }}>
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=560&fit=crop&auto=format"
              alt="Rashko Restaurant interior"
              style={{ position: 'absolute', top: 0, left: 0, width: '75%', height: 380, objectFit: 'cover', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
            />
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=320&fit=crop&auto=format"
              alt="Delicious Arabic food"
              style={{ position: 'absolute', bottom: 0, right: 0, width: '60%', height: 280, objectFit: 'cover', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,0.15)', border: '4px solid #FDFBF5' }}
            />
            <div style={{ position: 'absolute', top: 180, right: '18%', background: 'linear-gradient(135deg,#1B5E20,#2E7D32)', borderRadius: 12, padding: '14px 20px', boxShadow: '0 8px 32px rgba(27,94,32,0.3)', zIndex: 2 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: '#D4AF37' }}>₦400–₦9,500</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(255,255,255,0.8)', marginTop: 2 }}>Menu prices from</div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className="section-observe"
              style={{
                background: '#fff',
                borderRadius: 16,
                padding: '28px 28px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                border: '1px solid rgba(27,94,32,0.08)',
                transitionDelay: `${i * 80}ms`,
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)' }}
            >
              <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: '#1A1A1A', margin: '0 0 8px' }}>{f.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#777', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

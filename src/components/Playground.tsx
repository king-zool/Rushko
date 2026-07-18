const playFeatures = [
  { icon: '🛝', label: 'Slides' },
  { icon: '🎠', label: 'Swings' },
  { icon: '🧗', label: 'Climbing Frames' },
  { icon: '🏀', label: 'Bouncing Castle' },
  { icon: '🧸', label: 'Soft Play Area' },
  { icon: '🛡', label: 'Safe Flooring' },
  { icon: '👀', label: 'Supervision' },
  { icon: '🌈', label: 'Colourful Decor' },
]

const images = [
  { src: 'https://images.unsplash.com/photo-1587653915936-5b47b64fcde5?w=500&h=400&fit=crop&auto=format', alt: 'Kids slides', span: 2 },
  { src: 'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?w=400&h=300&fit=crop&auto=format', alt: 'Swings' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format', alt: 'Playground equipment' },
  { src: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=400&h=300&fit=crop&auto=format', alt: 'Bouncing castle' },
]

export default function Playground() {
  return (
    <section id="playground" style={{ background: '#fff', padding: 'clamp(60px,8vw,100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div className="section-observe" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: 4, color: '#1B5E20', textTransform: 'uppercase', marginBottom: 16, borderBottom: '2px solid #D4AF37', paddingBottom: 6 }}>Kids Playground</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.1, color: '#1A1A1A', margin: '0 0 16px' }}>
            Where Little Ones<br />
            <span style={{ color: '#1B5E20' }}>Create Big Memories</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#777', maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}>
            A safe, colourful, and fully supervised playground designed to spark joy and adventure in every child.
          </p>
        </div>

        {/* Grid layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 32, alignItems: 'start' }}>
          {/* Image mosaic */}
          <div className="section-observe" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {images.map((img, i) => (
              <div
                key={i}
                style={{ gridColumn: img.span ? `span ${img.span}` : undefined, borderRadius: 14, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: '100%', height: img.span ? 220 : 170, objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                  loading="lazy"
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.07)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="section-observe">
            <div style={{ background: 'linear-gradient(135deg,#1B5E20,#2E7D32)', borderRadius: 20, padding: '36px 32px', color: '#fff', marginBottom: 24 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: '#D4AF37', marginBottom: 8 }}>Safe & Supervised</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, margin: '0 0 24px' }}>
                Our playground is designed to the highest safety standards with soft flooring, rounded edges, and attentive staff always present — so parents can relax while kids play freely.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {playFeatures.map((f) => (
                  <div key={f.label} style={{ display: 'flex', gap: 8, alignItems: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: 10, padding: '8px 12px' }}>
                    <span style={{ fontSize: 18 }}>{f.icon}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, color: '#fff' }}>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Age groups */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { age: '2–5 yrs', label: 'Toddler Zone', desc: 'Soft play, low slides, gentle swings' },
                { age: '6–12 yrs', label: 'Adventure Zone', desc: 'Climbing frames, slides, castle' },
              ].map((z) => (
                <div key={z.age} style={{ background: '#FDFBF5', borderRadius: 14, padding: '18px 16px', border: '1px solid rgba(27,94,32,0.1)' }}>
                  <div style={{ background: '#D4AF37', display: 'inline-block', borderRadius: 6, padding: '3px 10px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, color: '#1B5E20', marginBottom: 8 }}>{z.age}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#1A1A1A', marginBottom: 4 }}>{z.label}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#888', lineHeight: 1.6 }}>{z.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

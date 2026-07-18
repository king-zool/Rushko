import { useState } from 'react'

const categories = ['All', 'Restaurant', 'Arabic Food', 'Swimming Pool', 'Playground', 'Events', 'Families']

const photos = [
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=500&fit=crop&auto=format', alt: 'Restaurant interior', cat: 'Restaurant', wide: true },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop&auto=format', alt: 'Dining area', cat: 'Restaurant' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop&auto=format', alt: 'Arabic food spread', cat: 'Arabic Food', wide: true },
  { src: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=400&fit=crop&auto=format', alt: 'Mandi rice dish', cat: 'Arabic Food' },
  { src: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&h=400&fit=crop&auto=format', alt: 'Grilled fish', cat: 'Arabic Food' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=500&fit=crop&auto=format', alt: 'Swimming pool view', cat: 'Swimming Pool', wide: true },
  { src: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=400&fit=crop&auto=format', alt: 'Pool relaxation', cat: 'Swimming Pool' },
  { src: 'https://images.unsplash.com/photo-1587653915936-5b47b64fcde5?w=500&h=400&fit=crop&auto=format', alt: 'Kids playground', cat: 'Playground', wide: true },
  { src: 'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?w=400&h=400&fit=crop&auto=format', alt: 'Swings', cat: 'Playground' },
  { src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=500&fit=crop&auto=format', alt: 'Birthday party event', cat: 'Events', wide: true },
  { src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=400&fit=crop&auto=format', alt: 'Family celebration', cat: 'Events' },
  { src: 'https://images.unsplash.com/photo-1529686342540-1b43aec0df75?w=500&h=400&fit=crop&auto=format', alt: 'Happy family', cat: 'Families', wide: true },
  { src: 'https://images.unsplash.com/photo-1511895426328-dc8714191011?w=400&h=400&fit=crop&auto=format', alt: 'Family fun', cat: 'Families' },
]

export default function Gallery() {
  const [activecat, setActivecat] = useState('All')
  const [lightbox, setLightbox] = useState<string | null>(null)

  const filtered = activecat === 'All' ? photos : photos.filter((p) => p.cat === activecat)

  return (
    <section id="gallery" style={{ background: '#FDFBF5', padding: 'clamp(60px,8vw,100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div className="section-observe" style={{ textAlign: 'center', marginBottom: 44 }}>
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: 4, color: '#1B5E20', textTransform: 'uppercase', marginBottom: 16, borderBottom: '2px solid #D4AF37', paddingBottom: 6 }}>Photo Gallery</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.1, color: '#1A1A1A', margin: '0 0 16px' }}>
            Moments at<br /><span style={{ color: '#1B5E20' }}>Rushko Park</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="section-observe" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 36 }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActivecat(c)}
              style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, padding: '8px 18px', borderRadius: 20, border: activecat === c ? 'none' : '2px solid rgba(27,94,32,0.2)', background: activecat === c ? 'linear-gradient(135deg,#1B5E20,#2E7D32)' : 'transparent', color: activecat === c ? '#fff' : '#1B5E20', cursor: 'pointer', transition: 'all 0.25s' }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div style={{ columns: 3, columnGap: 16 }} className="gallery-grid">
          {filtered.map((p) => (
            <div
              key={p.src}
              onClick={() => setLightbox(p.src)}
              style={{ breakInside: 'avoid', marginBottom: 16, borderRadius: 14, overflow: 'hidden', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', position: 'relative' }}
            >
              <img
                src={p.src}
                alt={p.alt}
                style={{ width: '100%', display: 'block', transition: 'transform 0.5s' }}
                loading="lazy"
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(27,94,32,0.8)', color: '#fff', borderRadius: 10, padding: '3px 10px', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500 }}>{p.cat}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
        >
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: 24, right: 32, background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
          <img src={lightbox} alt="Gallery" style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 16, objectFit: 'contain', boxShadow: '0 0 80px rgba(0,0,0,0.5)' }} />
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .gallery-grid { columns: 2 !important; } }
        @media (max-width: 480px) { .gallery-grid { columns: 1 !important; } }
      `}</style>
    </section>
  )
}

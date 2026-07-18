import { useState, useEffect } from 'react'

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 200, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
      {/* WhatsApp */}
      <a
        href="https://wa.me/2348066224249?text=Hello%20Rushko%20Park%2C%20I%20would%20like%20to%20make%20a%20booking."
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
        style={{ width: 52, height: 52, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, boxShadow: '0 4px 20px rgba(37,211,102,0.45)', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,0.6)' }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.45)' }}
      >
        💬
      </a>

      {/* Call */}
      <a
        href="tel:+2348066224249"
        title="Call us"
        style={{ width: 52, height: 52, background: 'linear-gradient(135deg,#1B5E20,#2E7D32)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, boxShadow: '0 4px 20px rgba(27,94,32,0.4)', textDecoration: 'none', transition: 'transform 0.2s' }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        📞
      </a>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={scrollTop}
          title="Back to top"
          style={{ width: 44, height: 44, background: 'rgba(212,175,55,0.9)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#1B5E20', border: 'none', cursor: 'pointer', boxShadow: '0 4px 16px rgba(212,175,55,0.4)', transition: 'transform 0.2s', fontWeight: 700 }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          ↑
        </button>
      )}
    </div>
  )
}

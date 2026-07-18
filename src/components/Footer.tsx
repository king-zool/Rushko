const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#restaurant', label: 'Restaurant & Menu' },
  { href: '#pool', label: 'Swimming Pool' },
  { href: '#playground', label: 'Kids Playground' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#events', label: 'Events' },
  { href: '#contact', label: 'Contact' },
]

const hours = [
  { day: 'Monday – Friday', time: '10:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 11:00 PM' },
  { day: 'Sunday', time: '9:00 AM – 10:00 PM' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a1f0b', color: '#fff', padding: 'clamp(48px,6vw,80px) 24px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 48, paddingBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 26, color: '#D4AF37', letterSpacing: 1, marginBottom: 4 }}>RUSHKO PARK</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: 4, marginBottom: 20 }}>RELAX • EAT • SWIM • PLAY</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 24 }}>
              Home of Rashko Restaurant — Kano's premier destination for authentic Arabic dining, family recreation, and unforgettable events.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: 12 }}>
              <a
                href="https://instagram.com/rashko_restaurant"
                target="_blank"
                rel="noreferrer"
                style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 16, transition: 'background 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(212,175,55,0.3)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                title="Instagram"
              >
                📸
              </a>
              <a
                href="https://wa.me/2348066224249"
                target="_blank"
                rel="noreferrer"
                style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 16, transition: 'background 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(37,211,102,0.3)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                title="WhatsApp"
              >
                💬
              </a>
              <a
                href="tel:+2348066224249"
                style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 16, transition: 'background 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(3,169,244,0.3)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                title="Phone"
              >
                📞
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: '#D4AF37', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, marginTop: 0 }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: '#D4AF37', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, marginTop: 0 }}>Opening Hours</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {hours.map((h) => (
                <div key={h.day}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{h.day}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: '#fff' }}>{h.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: '#D4AF37', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, marginTop: 0 }}>Find Us</h4>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: 16 }}>
              Inside Kano Club,<br />
              Murtala Muhammad Way,<br />
              Kano, Nigeria
            </p>
            <a
              href="tel:+2348066224249"
              style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: '#D4AF37', textDecoration: 'none', marginBottom: 6 }}
            >
              08066224249
            </a>
            <a
              href="https://instagram.com/rashko_restaurant"
              target="_blank"
              rel="noreferrer"
              style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
            >
              @rashko_restaurant
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} Rushko Park & Rashko Restaurant. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ width: 6, height: 6, background: '#D4AF37', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Kano, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

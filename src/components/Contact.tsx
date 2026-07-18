import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', type: 'Table Reservation' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" style={{ background: '#FDFBF5', padding: 'clamp(60px,8vw,100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div className="section-observe" style={{ textAlign: 'center', marginBottom: 60 }}>
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: 4, color: '#1B5E20', textTransform: 'uppercase', marginBottom: 16, borderBottom: '2px solid #D4AF37', paddingBottom: 6 }}>Get In Touch</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.1, color: '#1A1A1A', margin: '0 0 16px' }}>
            Visit Us or <span style={{ color: '#1B5E20' }}>Make a Booking</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#777', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>
            Reserve a table, book a swimming session, or enquire about event packages — we'd love to hear from you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48 }}>
          {/* Contact info */}
          <div className="section-observe">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
              {[
                { icon: '📞', label: 'Phone / WhatsApp', value: '08066224249', href: 'tel:+2348066224249' },
                { icon: '📸', label: 'Instagram', value: '@rashko_restaurant', href: 'https://instagram.com/rashko_restaurant' },
                { icon: '📍', label: 'Address', value: 'Inside Kano Club, Murtala Muhammad Way, Kano, Nigeria', href: undefined },
                { icon: '🕐', label: 'Opening Hours', value: 'Monday – Sunday: 10 AM – 10 PM', href: undefined },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fff', borderRadius: 14, padding: '18px 20px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid rgba(27,94,32,0.07)' }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: '#1B5E20', textDecoration: 'none' }}>{item.value}</a>
                    ) : (
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: '#1A1A1A', lineHeight: 1.5 }}>{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/2348066224249"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, padding: '14px 24px', borderRadius: 28, textDecoration: 'none', boxShadow: '0 6px 24px rgba(37,211,102,0.35)', transition: 'transform 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <span style={{ fontSize: 18 }}>💬</span> WhatsApp Us
              </a>
              <a
                href="tel:+2348066224249"
                style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#1B5E20,#2E7D32)', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, padding: '14px 24px', borderRadius: 28, textDecoration: 'none', boxShadow: '0 6px 24px rgba(27,94,32,0.3)', transition: 'transform 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <span style={{ fontSize: 18 }}>📞</span> Call Now
              </a>
            </div>

            {/* Map embed */}
            <div style={{ marginTop: 28, borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
              <iframe
                src="https://maps.google.com/maps?q=Kano+Club,+Murtala+Muhammad+Way,+Kano,+Nigeria&output=embed"
                width="100%"
                height="220"
                style={{ border: 'none', display: 'block' }}
                loading="lazy"
                title="Rushko Park Location"
              />
            </div>
          </div>

          {/* Booking form */}
          <div className="section-observe">
            <div style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', boxShadow: '0 8px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(27,94,32,0.08)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: '#1A1A1A', margin: '0 0 24px' }}>Make a Reservation</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '080XXXXXXXX' },
                ].map((field) => (
                  <div key={field.id}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: '#555', marginBottom: 6, letterSpacing: 0.5 }}>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid rgba(27,94,32,0.2)', fontFamily: 'var(--font-body)', fontSize: 14, color: '#1A1A1A', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box', background: '#FDFBF5' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#1B5E20')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(27,94,32,0.2)')}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: '#555', marginBottom: 6 }}>Booking Type</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid rgba(27,94,32,0.2)', fontFamily: 'var(--font-body)', fontSize: 14, color: '#1A1A1A', outline: 'none', background: '#FDFBF5', boxSizing: 'border-box' }}
                  >
                    {['Table Reservation', 'Swimming Session', 'Birthday Party', 'Corporate Event', 'Wedding Reception', 'General Enquiry'].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: '#555', marginBottom: 6 }}>Message</label>
                  <textarea
                    placeholder="Tell us about your plans, number of guests, preferred date..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid rgba(27,94,32,0.2)', fontFamily: 'var(--font-body)', fontSize: 14, color: '#1A1A1A', outline: 'none', resize: 'vertical', boxSizing: 'border-box', background: '#FDFBF5' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#1B5E20')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(27,94,32,0.2)')}
                  />
                </div>

                <button
                  type="submit"
                  style={{ background: sent ? 'linear-gradient(135deg,#2E7D32,#4CAF50)' : 'linear-gradient(135deg,#1B5E20,#2E7D32)', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: 1.5, padding: '16px 32px', borderRadius: 28, border: 'none', cursor: 'pointer', boxShadow: '0 6px 24px rgba(27,94,32,0.3)', transition: 'all 0.2s' }}
                >
                  {sent ? '✓ MESSAGE SENT!' : 'SEND BOOKING REQUEST'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

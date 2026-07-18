import { useState } from 'react'

const testimonials = [
  { name: 'Fatima Al-Hassan', role: 'Mother of 3, Kano', rating: 5, text: 'Rushko Park is our family\'s favourite weekend spot. The kids love the playground and pool, and the Mandi chicken is absolutely divine. We\'ve been coming every month for over a year!' },
  { name: 'Ibrahim Musa', role: 'Corporate Executive, Kano', rating: 5, text: 'We hosted our company anniversary dinner here and it was a resounding success. The Arabic food was exceptional, the service was impeccable, and the ambiance is unlike anything else in Kano.' },
  { name: 'Aisha Mohammed', role: 'Birthday Party Host', rating: 5, text: 'I organised my daughter\'s 7th birthday at Rushko Park and it was a dream come true. The staff were so helpful with the arrangements and the kids had a blast in both the playground and the pool.' },
  { name: 'Dr. Yusuf Garba', role: 'Regular Visitor, Kano', rating: 5, text: 'The Kabuli meat rice is the best I\'ve had outside of the Middle East. This place has the authentic touch that most restaurants in Nigeria completely miss. Highly recommended!' },
  { name: 'Bilkisu Sani', role: 'Food Blogger', rating: 5, text: 'As someone who reviews restaurants for a living, I can confidently say Rashko Restaurant stands out. The BBQ chicken with rice is a must-try. The entire park experience is 10/10.' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const t = testimonials[current]

  return (
    <section style={{ background: '#fff', padding: 'clamp(60px,8vw,100px) 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="section-observe" style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: 4, color: '#1B5E20', textTransform: 'uppercase', marginBottom: 16, borderBottom: '2px solid #D4AF37', paddingBottom: 6 }}>Testimonials</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(32px,4vw,50px)', lineHeight: 1.1, color: '#1A1A1A', margin: '0 0 12px' }}>
            What Our <span style={{ color: '#1B5E20' }}>Guests Say</span>
          </h2>
        </div>

        <div className="section-observe" style={{ position: 'relative' }}>
          {/* Card */}
          <div
            style={{
              background: 'linear-gradient(135deg,#FDFBF5,#f5f0e8)',
              borderRadius: 24,
              padding: 'clamp(32px,5vw,56px)',
              border: '1px solid rgba(212,175,55,0.2)',
              boxShadow: '0 12px 48px rgba(0,0,0,0.08)',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
            }}
          >
            {/* Quote mark */}
            <div style={{ position: 'absolute', top: 24, left: 32, fontFamily: 'Georgia,serif', fontSize: 120, color: 'rgba(212,175,55,0.12)', lineHeight: 1 }}>"</div>

            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 24 }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} style={{ color: '#D4AF37', fontSize: 20 }}>★</span>
              ))}
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px,2vw,18px)', color: '#444', lineHeight: 1.9, margin: '0 0 32px', position: 'relative', zIndex: 1, fontStyle: 'italic' }}>
              "{t.text}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
              <div style={{ width: 48, height: 48, background: 'linear-gradient(135deg,#1B5E20,#2E7D32)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: '#D4AF37' }}>
                {t.name.charAt(0)}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#1A1A1A' }}>{t.name}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#999' }}>{t.role}</div>
              </div>
            </div>
          </div>

          {/* Nav buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 28 }}>
            <button
              onClick={prev}
              style={{ width: 44, height: 44, background: '#fff', border: '2px solid rgba(27,94,32,0.2)', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#1B5E20', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#1B5E20'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).style.color = '#1B5E20' }}
            >
              ←
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{ width: i === current ? 32 : 10, height: 10, borderRadius: 5, border: 'none', background: i === current ? '#1B5E20' : 'rgba(27,94,32,0.2)', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}
              />
            ))}
            <button
              onClick={next}
              style={{ width: 44, height: 44, background: '#fff', border: '2px solid rgba(27,94,32,0.2)', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#1B5E20', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#1B5E20'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).style.color = '#1B5E20' }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

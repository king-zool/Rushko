import { useState } from 'react'

type MenuItem = { name: string; price: string; img: string; desc?: string }
type MenuCategory = { id: string; label: string; items: MenuItem[] }

const categories: MenuCategory[] = [
  {
    id: 'arabic',
    label: '🥘 Arabic Dishes',
    items: [
      { name: 'Mandi Chicken', price: '₦5,500', img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop&auto=format', desc: 'Slow-cooked spiced chicken over fragrant rice' },
      { name: 'Mandi Meat', price: '₦6,500', img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop&auto=format', desc: 'Tender slow-roasted lamb over aromatic basmati' },
      { name: 'Kabuli Chicken', price: '₦5,500', img: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&h=300&fit=crop&auto=format', desc: 'Afghan-style rice with raisins, carrots & chicken' },
      { name: 'Kabuli Meat', price: '₦6,500', img: 'https://images.unsplash.com/photo-1545247181-516773cae754?w=400&h=300&fit=crop&auto=format', desc: 'Layered lamb and rice with sweet caramelised carrots' },
      { name: 'Kaintchkee with Rice', price: '₦6,500', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop&auto=format', desc: 'House-style braised meat served with rice' },
      { name: 'Kaintchkee (No Rice)', price: '₦5,000', img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop&auto=format', desc: 'Braised meat alone — intensely flavoured' },
      { name: 'Rice Only', price: '₦4,000', img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop&auto=format', desc: 'Fragrant spiced Arabic basmati rice' },
      { name: 'Chicken Only', price: '₦3,500', img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c5?w=400&h=300&fit=crop&auto=format', desc: 'Perfectly seasoned whole roasted chicken' },
      { name: 'Meat Only', price: '₦4,500', img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop&auto=format', desc: 'Premium lamb — slow-cooked to perfection' },
      { name: 'Fish with Rice', price: '₦8,500', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&auto=format', desc: 'Grilled whole fish served on fragrant rice' },
      { name: 'Fish Only', price: '₦5,500', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&auto=format', desc: 'Fresh grilled fish with Arabic spices' },
    ],
  },
  {
    id: 'kfc',
    label: '🍗 Rushko KFC Specials',
    items: [
      { name: 'Rushko KFC (No Rice)', price: '₦7,000', img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop&auto=format', desc: 'Our signature crispy fried chicken — juicy inside, golden outside' },
      { name: 'Rushko KFC (With Rice)', price: '₦9,500', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop&auto=format', desc: 'Signature fried chicken served with our aromatic rice' },
    ],
  },
  {
    id: 'bbq',
    label: '🔥 BBQ Specials',
    items: [
      { name: 'BBQ Chicken (No Rice)', price: '₦7,000', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&auto=format', desc: 'Charcoal-grilled chicken marinated in Arabic spices' },
      { name: 'BBQ Chicken (With Rice)', price: '₦9,500', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format', desc: 'Grilled chicken with fragrant rice — the full experience' },
    ],
  },
  {
    id: 'appetizers',
    label: '🥐 Appetizers',
    items: [
      { name: 'Masoub with Milk', price: '₦3,500', img: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?w=400&h=300&fit=crop&auto=format', desc: 'Traditional Arabic bread dessert with honey, banana & milk' },
      { name: 'Plain Fatayer', price: '₦500', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop&auto=format', desc: 'Soft baked Arabic pastry pockets' },
      { name: 'Fatayer with Eggs', price: '₦1,000', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop&auto=format', desc: 'Pastry pockets filled with seasoned eggs' },
      { name: 'Cupcake', price: '₦400', img: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=400&h=300&fit=crop&auto=format', desc: 'Freshly baked sweet cupcake' },
      { name: 'Samosa with Beef', price: '₦500', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop&auto=format', desc: 'Crispy fried pastry stuffed with spiced ground beef' },
    ],
  },
]

export default function Restaurant() {
  const [active, setActive] = useState('arabic')
  const current = categories.find((c) => c.id === active)!

  return (
    <section id="restaurant" style={{ background: '#fff', padding: 'clamp(60px,8vw,100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div className="section-observe" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: 4, color: '#1B5E20', textTransform: 'uppercase', marginBottom: 16, borderBottom: '2px solid #D4AF37', paddingBottom: 6 }}>Rashko Restaurant</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.1, color: '#1A1A1A', margin: '0 0 16px' }}>
            Authentic Arabic<br />
            <span style={{ color: '#1B5E20' }}>Culinary Experience</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#777', maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}>
            Every dish tells a story — prepared with premium ingredients, traditional Arabic methods, and passion for flavour.
          </p>
        </div>

        {/* Category tabs */}
        <div className="section-observe" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 44 }}>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                fontWeight: 600,
                padding: '10px 22px',
                borderRadius: 24,
                border: active === c.id ? 'none' : '2px solid rgba(27,94,32,0.2)',
                background: active === c.id ? 'linear-gradient(135deg,#1B5E20,#2E7D32)' : 'transparent',
                color: active === c.id ? '#fff' : '#1B5E20',
                cursor: 'pointer',
                transition: 'all 0.25s',
                boxShadow: active === c.id ? '0 4px 16px rgba(27,94,32,0.3)' : 'none',
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 24 }}>
          {current.items.map((item, i) => (
            <div
              key={item.name}
              style={{
                background: '#FDFBF5',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                border: '1px solid rgba(27,94,32,0.07)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                animationDelay: `${i * 60}ms`,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.14)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)' }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', height: 180 }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                  loading="lazy"
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', top: 12, right: 12, background: 'linear-gradient(135deg,#D4AF37,#F0CC55)', borderRadius: 20, padding: '4px 12px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: '#1B5E20' }}>
                  {item.price}
                </div>
              </div>
              <div style={{ padding: '16px 18px 18px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#1A1A1A', margin: '0 0 6px' }}>{item.name}</h3>
                {item.desc && <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#888', margin: '0 0 14px', lineHeight: 1.6 }}>{item.desc}</p>}
                <a
                  href="#contact"
                  style={{ display: 'inline-block', background: 'linear-gradient(135deg,#1B5E20,#2E7D32)', color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 11, letterSpacing: 1, padding: '8px 18px', borderRadius: 20, textDecoration: 'none', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  ORDER NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '96px', backgroundColor: '#0f0a08', color: '#ffffff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderRadius: '9999px', padding: '0.375rem 1rem', marginBottom: '1.5rem', background: 'linear-gradient(to right, #ff6b35, #dc2626)' }}>
          <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#84cc16' }} />
          <span style={{ fontSize: '0.875rem', letterSpacing: '0.1em', color: '#ffffff', fontWeight: 'bold' }}>⭐ 5.0 RATED · RAIPUR</span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.75rem, 5vw, 6rem)', lineHeight: '0.95', color: '#ffffff', fontWeight: 'bold' }}>
          Best Burritos in <br />
          <span style={{ background: 'linear-gradient(135deg, #dc2626, #ff6b35, #eab308)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Raipur</span>
          <span style={{ display: 'inline-block', marginLeft: '0.5rem' }}>🌯</span>
          <span style={{ display: 'inline-block', marginLeft: '0.25rem' }}>🔥</span>
        </h1>

        <p style={{ marginTop: '1.5rem', fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', maxWidth: '36rem', color: '#a8a29e' }}>
          Fresh • Fast • Authentic Mexican Taste — hand-rolled, fire-basted, and served with soul at <span style={{ fontWeight: 600, color: '#ffffff' }}>Basted Burritos</span>.
        </p>

        <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a href="#menu" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.125rem', letterSpacing: '0.05em', padding: '1rem 1.75rem', borderRadius: '1rem', background: 'linear-gradient(to right, #ff6b35, #dc2626)', color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>
            View Menu →
          </a>
          <a href="https://wa.me/918359055505?text=Hi!%20I%27d%20like%20to%20order%20from%20Basted%20Burritos" target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.125rem', letterSpacing: '0.05em', padding: '1rem 1.75rem', borderRadius: '1rem', border: '1px solid #44403c', backgroundColor: '#1c1917', color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>
            Order on WhatsApp
          </a>
        </div>

        <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '0.875rem', color: '#a8a29e' }}>
          <div><div style={{ fontSize: '1.875rem', color: '#ffffff', fontWeight: 'bold' }}>10K+</div>Happy Foodies</div>
          <div style={{ width: '1px', height: '2.5rem', backgroundColor: '#44403c' }} />
          <div><div style={{ fontSize: '1.875rem', color: '#ffffff', fontWeight: 'bold' }}>5.0★</div>Google Rating</div>
          <div style={{ width: '1px', height: '2.5rem', backgroundColor: '#44403c' }} />
          <div><div style={{ fontSize: '1.875rem', color: '#ffffff', fontWeight: 'bold' }}>25min</div>Avg. Delivery</div>
        </div>
      </div>
    </section>
  );
};

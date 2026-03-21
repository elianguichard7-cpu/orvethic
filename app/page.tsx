export default function Home() {
  return (
    <main style={{
      backgroundColor: '#0B0B0F',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#C6A15B',
      fontFamily: 'sans-serif',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <h1 style={{ fontSize: '48px', fontWeight: '600', margin: 0 }}>
        Orvethic
      </h1>
      <p style={{ color: '#8E8A83', margin: 0 }}>
        Engineered for trust. Positioned for growth.
      </p>
      <span style={{
        border: '1px solid rgba(198,161,91,0.3)',
        borderRadius: '999px',
        padding: '4px 12px',
        fontSize: '12px'
      }}>
        ORVX
      </span>
    </main>
  );
}
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0B0B0F', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', border: '1px solid rgba(198,161,91,0.3)', borderRadius: '6px', background: 'rgba(198,161,91,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C6A15B', fontSize: '11px', fontWeight: 'bold' }}>OV</div>
          <span style={{ color: '#F3EEE7', fontSize: '13px', fontWeight: '500', letterSpacing: '3px', textTransform: 'uppercase' }}>Orvethic</span>
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['Tokenomics', 'Roadmap', 'FAQ'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#8E8A83', fontSize: '13px', textDecoration: 'none' }}>{item}</a>
          ))}
        </div>
        <a href="https://twitter.com/orvethic" target="_blank" style={{ background: '#C6A15B', color: '#0B0B0F', borderRadius: '8px', padding: '10px 20px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
          Follow @orvethic
        </a>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '120px 40px 80px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(198,161,91,0.25)', borderRadius: '999px', padding: '6px 14px', marginBottom: '32px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C6A15B' }}></div>
          <span style={{ color: '#C6A15B', fontSize: '11px', fontWeight: '500' }}>ORVX — Testnet phase · Mainnet coming soon</span>
        </div>
        
        <h1 style={{ fontSize: '64px', fontWeight: '600', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-2px' }}>
          <span style={{ color: '#F3EEE7' }}>Engineered for trust.</span>
          <br />
          <span style={{ background: 'linear-gradient(135deg, #C6A15B, #DFC28A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Positioned for growth.</span>
        </h1>
        
        <p style={{ color: '#8E8A83', fontSize: '18px', maxWidth: '520px', margin: '0 auto 48px', lineHeight: '1.6' }}>
          Orvethic is a premium Web3 platform built around ORVX — a utility token designed for long-term value and real on-chain utility.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://twitter.com/orvethic" target="_blank" style={{ background: '#C6A15B', color: '#0B0B0F', border: 'none', borderRadius: '8px', padding: '14px 28px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
            Join the Community →
          </a>
          <a href="#tokenomics" style={{ border: '1px solid rgba(198,161,91,0.3)', color: '#C6A15B', borderRadius: '8px', padding: '14px 28px', fontSize: '14px', textDecoration: 'none' }}>
            View Tokenomics
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: '600px', margin: '64px auto 0', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
          {[
            { label: 'Total Supply', value: '500M ORVX' },
            { label: 'Staking APR', value: 'Up to 14%' },
            { label: 'Staking Pool', value: '150M ORVX' },
          ].map((stat, i) => (
            <div key={i} style={{ padding: '24px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <p style={{ color: '#C6A15B', fontSize: '20px', fontWeight: '600', margin: '0 0 4px' }}>{stat.value}</p>
              <p style={{ color: '#8E8A83', fontSize: '12px', margin: 0 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Staking */}
      <section style={{ padding: '80px 40px', maxWidth: '800px', margin: '0 auto' }} id="staking">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#8E8A83', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Staking</p>
          <h2 style={{ color: '#F3EEE7', fontSize: '36px', fontWeight: '600', margin: '0 0 16px' }}>Your ORVX works while you rest.</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '28px', background: 'rgba(255,255,255,0.02)' }}>
            <p style={{ color: '#8E8A83', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Flexible</p>
            <p style={{ color: '#F3EEE7', fontSize: '42px', fontWeight: '600', margin: '0 0 4px' }}>12% <span style={{ fontSize: '16px', color: '#8E8A83', fontWeight: '400' }}>APR</span></p>
            <p style={{ color: '#8E8A83', fontSize: '13px', marginTop: '16px' }}>· Unstake anytime</p>
            <p style={{ color: '#8E8A83', fontSize: '13px' }}>· Rewards claimable anytime</p>
            <p style={{ color: '#8E8A83', fontSize: '13px' }}>· Min. 100 ORVX</p>
          </div>
          
          <div style={{ border: '1px solid rgba(198,161,91,0.2)', borderRadius: '12px', padding: '28px', background: 'rgba(198,161,91,0.04)' }}>
            <p style={{ color: '#C6A15B', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>90-Day Lock</p>
            <p style={{ fontSize: '42px', fontWeight: '600', margin: '0 0 4px', background: 'linear-gradient(135deg, #C6A15B, #DFC28A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>14% <span style={{ fontSize: '16px', fontWeight: '400' }}>APR</span></p>
            <p style={{ color: '#8E8A83', fontSize: '13px', marginTop: '16px' }}>· +2% bonus yield</p>
            <p style={{ color: '#8E8A83', fontSize: '13px' }}>· Rewards claimable anytime</p>
            <p style={{ color: '#8E8A83', fontSize: '13px' }}>· 90-day commitment</p>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section style={{ padding: '80px 40px', maxWidth: '800px', margin: '0 auto' }} id="tokenomics">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#8E8A83', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Tokenomics</p>
          <h2 style={{ color: '#F3EEE7', fontSize: '36px', fontWeight: '600', margin: '0 0 16px' }}>Transparent by design.</h2>
          <p style={{ color: '#8E8A83', fontSize: '16px' }}>500,000,000 ORVX · Fixed supply · No future minting.</p>
        </div>
        
        {[
          { label: 'Staking Rewards', percent: 30, color: '#C6A15B' },
          { label: 'Ecosystem Reserve', percent: 20, color: '#8E8A83' },
          { label: 'Team & Advisors', percent: 15, color: '#3E2F1C' },
          { label: 'Liquidity', percent: 15, color: '#A8813A' },
          { label: 'Growth & Marketing', percent: 12, color: '#6B4D18' },
          { label: 'Community Rewards', percent: 8, color: '#604828' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            <span style={{ color: '#F3EEE7', fontSize: '14px', fontWeight: '600', width: '40px', textAlign: 'right' }}>{item.percent}%</span>
            <div style={{ flex: 1, height: '32px', borderRadius: '6px', background: 'rgba(255,255,255,0.04)', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${item.percent * 3.3}%`, background: item.color, opacity: 0.8, borderRadius: '6px' }}></div>
            </div>
            <span style={{ color: '#8E8A83', fontSize: '13px', width: '160px' }}>{item.label}</span>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px', textAlign: 'center', marginTop: '80px' }}>
        <p style={{ color: '#C6A15B', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>Orvethic</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px' }}>
          <a href="https://twitter.com/orvethic" target="_blank" style={{ color: '#8E8A83', fontSize: '13px', textDecoration: 'none' }}>X (Twitter)</a>
          <span style={{ color: '#3E2F1C' }}>·</span>
          <a href="#tokenomics" style={{ color: '#8E8A83', fontSize: '13px', textDecoration: 'none' }}>Tokenomics</a>
          <span style={{ color: '#3E2F1C' }}>·</span>
          <a href="#staking" style={{ color: '#8E8A83', fontSize: '13px', textDecoration: 'none' }}>Staking</a>
        </div>
        <p style={{ color: '#5a5751', fontSize: '11px' }}>ORVX is a utility token. Not financial advice. Always do your own research.</p>
      </footer>

    </main>
  );
}
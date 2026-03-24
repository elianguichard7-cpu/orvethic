export default function Home() {
  return (
    <main style={{ backgroundColor: '#0B0B0F', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(11,11,15,0.9)', backdropFilter: 'blur(10px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', border: '1px solid rgba(198,161,91,0.3)', borderRadius: '6px', background: 'rgba(198,161,91,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C6A15B', fontSize: '11px', fontWeight: 'bold' }}>OV</div>
          <span style={{ color: '#F3EEE7', fontSize: '13px', fontWeight: '500', letterSpacing: '3px', textTransform: 'uppercase' }}>Orvethic</span>
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {[['Staking', '#staking'], ['Tokenomics', '#tokenomics'], ['Roadmap', '#roadmap'], ['FAQ', '#faq']].map(([label, href]) => (
            <a key={href} href={href} style={{ color: '#8E8A83', fontSize: '13px', textDecoration: 'none' }}>{label}</a>
          ))}
        </div>
        <a href="https://x.com/orvethic" target="_blank" style={{ background: '#C6A15B', color: '#0B0B0F', borderRadius: '8px', padding: '10px 20px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
          Follow @orvethic
        </a>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '120px 40px 80px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(198,161,91,0.25)', borderRadius: '999px', padding: '6px 14px', marginBottom: '32px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C6A15B' }}></div>
          <span style={{ color: '#C6A15B', fontSize: '11px', fontWeight: '500' }}>ORVX — Testnet phase · Mainnet coming September 2026</span>
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
          <a href="https://t.me/orvethic_official" target="_blank" style={{ background: '#C6A15B', color: '#0B0B0F', borderRadius: '8px', padding: '14px 28px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
            Join the Community →
          </a>
          <a href="#tokenomics" style={{ border: '1px solid rgba(198,161,91,0.3)', color: '#C6A15B', borderRadius: '8px', padding: '14px 28px', fontSize: '14px', textDecoration: 'none' }}>
            View Tokenomics
          </a>
          <a href="/orvethic-whitepaper.pdf" target="_blank" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#8E8A83', borderRadius: '8px', padding: '14px 28px', fontSize: '14px', textDecoration: 'none' }}>
            Download Whitepaper
          </a>
        </div>
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
          <p style={{ color: '#8E8A83', fontSize: '16px' }}>Stake your tokens and earn continuous rewards. No complicated setup.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '28px', background: 'rgba(255,255,255,0.02)' }}>
            <p style={{ color: '#8E8A83', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Flexible</p>
            <p style={{ color: '#F3EEE7', fontSize: '42px', fontWeight: '600', margin: '0 0 4px' }}>12% <span style={{ fontSize: '16px', color: '#8E8A83', fontWeight: '400' }}>APR</span></p>
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '16px 0' }}></div>
            <p style={{ color: '#8E8A83', fontSize: '13px', marginBottom: '8px' }}>· Unstake anytime</p>
            <p style={{ color: '#8E8A83', fontSize: '13px', marginBottom: '8px' }}>· Rewards claimable anytime</p>
            <p style={{ color: '#8E8A83', fontSize: '13px' }}>· Min. 100 ORVX</p>
          </div>
          <div style={{ border: '1px solid rgba(198,161,91,0.2)', borderRadius: '12px', padding: '28px', background: 'rgba(198,161,91,0.04)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(198,161,91,0.15)', border: '1px solid rgba(198,161,91,0.3)', borderRadius: '999px', padding: '3px 10px', fontSize: '10px', color: '#C6A15B' }}>Recommended</div>
            <p style={{ color: '#C6A15B', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>90-Day Lock</p>
            <p style={{ fontSize: '42px', fontWeight: '600', margin: '0 0 4px', background: 'linear-gradient(135deg, #C6A15B, #DFC28A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>14% <span style={{ fontSize: '16px', fontWeight: '400' }}>APR</span></p>
            <div style={{ height: '1px', background: 'rgba(198,161,91,0.1)', margin: '16px 0' }}></div>
            <p style={{ color: '#8E8A83', fontSize: '13px', marginBottom: '8px' }}>· +2% bonus yield</p>
            <p style={{ color: '#8E8A83', fontSize: '13px', marginBottom: '8px' }}>· Rewards claimable anytime</p>
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
          { label: 'Staking Rewards', percent: 30, tokens: '150,000,000', color: '#C6A15B' },
          { label: 'Ecosystem Reserve', percent: 20, tokens: '100,000,000', color: '#8E8A83' },
          { label: 'Team & Advisors', percent: 15, tokens: '75,000,000', color: '#604828' },
          { label: 'Liquidity', percent: 15, tokens: '75,000,000', color: '#A8813A' },
          { label: 'Growth & Marketing', percent: 12, tokens: '60,000,000', color: '#6B4D18' },
          { label: 'Community Rewards', percent: 8, tokens: '40,000,000', color: '#3E2F1C' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            <span style={{ color: '#F3EEE7', fontSize: '14px', fontWeight: '600', width: '40px', textAlign: 'right' }}>{item.percent}%</span>
            <div style={{ flex: 1, height: '32px', borderRadius: '6px', background: 'rgba(255,255,255,0.04)', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${item.percent * 3.3}%`, background: item.color, opacity: 0.8, borderRadius: '6px' }}></div>
            </div>
            <div style={{ width: '200px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#8E8A83', fontSize: '13px' }}>{item.label}</span>
              <span style={{ color: '#5a5751', fontSize: '11px' }}>{item.tokens} ORVX</span>
            </div>
          </div>
        ))}
      </section>

      {/* Roadmap */}
      <section style={{ padding: '80px 40px', maxWidth: '800px', margin: '0 auto' }} id="roadmap">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#8E8A83', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Roadmap</p>
          <h2 style={{ color: '#F3EEE7', fontSize: '36px', fontWeight: '600', margin: '0 0 16px' }}>A clear path forward.</h2>
          <p style={{ color: '#8E8A83', fontSize: '16px' }}>Built slowly. Built surely. Built to last.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { phase: 'Phase 1', period: 'Mar – Apr 2026', title: 'Foundations', items: ['Site, smart contracts, whitepaper', 'Brand identity, community launch'], status: 'active' },
            { phase: 'Phase 2', period: 'May – Jun 2026', title: 'Growth', items: ['Community building, CoinGecko listing', 'Social media presence, private presale'], status: 'upcoming' },
            { phase: 'Phase 3', period: 'Jul – Aug 2026', title: 'Security & Audit', items: ['Third-party security audit', 'Mainnet preparation, liquidity planning'], status: 'upcoming' },
            { phase: 'Phase 4', period: 'Sep 2026', title: 'Mainnet Launch', items: ['Mainnet deployment, Uniswap liquidity', 'Public token launch, staking activation'], status: 'upcoming' },
            { phase: 'Phase 5', period: 'Oct – Dec 2026', title: 'Expansion', items: ['CEX listings, partnerships', 'Ambassador program, ecosystem growth'], status: 'upcoming' },
            { phase: 'Phase 6', period: '2027', title: 'Governance', items: ['On-chain governance, cross-chain', 'Developer SDK, community treasury'], status: 'upcoming' },
          ].map((item, i) => (
            <div key={i} style={{ border: item.status === 'active' ? '1px solid rgba(198,161,91,0.3)' : '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '20px 24px', background: item.status === 'active' ? 'rgba(198,161,91,0.04)' : 'rgba(255,255,255,0.01)', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <div style={{ minWidth: '100px' }}>
                <p style={{ color: item.status === 'active' ? '#C6A15B' : '#5a5751', fontSize: '11px', margin: '0 0 4px', fontWeight: '600' }}>{item.phase}</p>
                <p style={{ color: '#5a5751', fontSize: '11px', margin: 0 }}>{item.period}</p>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.status === 'active' ? '#C6A15B' : '#3a3a3a' }}></div>
                  <p style={{ color: item.status === 'active' ? '#F3EEE7' : '#8E8A83', fontSize: '14px', fontWeight: '600', margin: 0 }}>{item.title}</p>
                  {item.status === 'active' && <span style={{ background: 'rgba(198,161,91,0.15)', border: '1px solid rgba(198,161,91,0.3)', borderRadius: '999px', padding: '2px 8px', fontSize: '10px', color: '#C6A15B' }}>Current</span>}
                </div>
                {item.items.map((it, j) => (
                  <p key={j} style={{ color: '#5a5751', fontSize: '12px', margin: '2px 0' }}>· {it}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 40px', maxWidth: '700px', margin: '0 auto' }} id="faq">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#8E8A83', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>FAQ</p>
          <h2 style={{ color: '#F3EEE7', fontSize: '36px', fontWeight: '600', margin: 0 }}>Common questions.</h2>
        </div>
        {[
          { q: "What is Orvethic?", a: "Orvethic is a premium Web3 platform built around ORVX, a utility token designed for long-term value creation, staking rewards, and real on-chain utility." },
          { q: "What is ORVX used for?", a: "ORVX is used to stake and earn passive rewards (12-14% APR), access premium platform features, and will power on-chain governance in Phase 6." },
          { q: "How does staking work?", a: "You deposit your ORVX tokens on the platform. In return, you earn between 12% and 14% APR annually. Rewards accumulate continuously and can be claimed at any time." },
          { q: "Is ORVX audited?", a: "Our contracts are built on OpenZeppelin audited libraries. A formal third-party security audit is planned for July-August 2026 before mainnet launch." },
          { q: "When is the mainnet launch?", a: "Mainnet launch is planned for September 2026 following the security audit in Phase 3." },
          { q: "How can I stay updated?", a: "Follow us on X (@orvethic) and join our Telegram (t.me/orvethic_official) for all announcements." },
        ].map((item, i) => (
          <div key={i} style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '20px 24px', marginBottom: '8px', background: 'rgba(255,255,255,0.01)' }}>
            <p style={{ color: '#F3EEE7', fontSize: '14px', fontWeight: '600', margin: '0 0 8px' }}>{item.q}</p>
            <p style={{ color: '#8E8A83', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>{item.a}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ border: '1px solid rgba(198,161,91,0.2)', borderRadius: '16px', padding: '60px 40px', background: 'rgba(198,161,91,0.03)' }}>
          <p style={{ color: '#8E8A83', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>Get Started</p>
          <h2 style={{ color: '#F3EEE7', fontSize: '32px', fontWeight: '600', margin: '0 0 16px' }}>Ready to take your position?</h2>
          <p style={{ color: '#8E8A83', fontSize: '16px', marginBottom: '32px', lineHeight: '1.6' }}>Join the community and stay updated on the Orvethic mainnet launch.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://t.me/orvethic_official" target="_blank" style={{ background: '#C6A15B', color: '#0B0B0F', borderRadius: '8px', padding: '14px 28px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>Join Telegram</a>
            <a href="https://x.com/orvethic" target="_blank" style={{ border: '1px solid rgba(198,161,91,0.3)', color: '#C6A15B', borderRadius: '8px', padding: '14px 28px', fontSize: '14px', textDecoration: 'none' }}>Follow on X</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px', textAlign: 'center', marginTop: '40px' }}>
        <p style={{ color: '#C6A15B', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>Orvethic</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <a href="https://x.com/orvethic" target="_blank" style={{ color: '#8E8A83', fontSize: '13px', textDecoration: 'none' }}>X (Twitter)</a>
          <span style={{ color: '#3E2F1C' }}>·</span>
          <a href="https://t.me/orvethic_official" target="_blank" style={{ color: '#8E8A83', fontSize: '13px', textDecoration: 'none' }}>Telegram</a>
          <span style={{ color: '#3E2F1C' }}>·</span>
          <a href="#tokenomics" style={{ color: '#8E8A83', fontSize: '13px', textDecoration: 'none' }}>Tokenomics</a>
          <span style={{ color: '#3E2F1C' }}>·</span>
          <a href="#roadmap" style={{ color: '#8E8A83', fontSize: '13px', textDecoration: 'none' }}>Roadmap</a>
          <span style={{ color: '#3E2F1C' }}>·</span>
          <a href="/orvethic-whitepaper.pdf" target="_blank" style={{ color: '#8E8A83', fontSize: '13px', textDecoration: 'none' }}>Whitepaper</a>
        </div>
        <p style={{ color: '#5a5751', fontSize: '11px' }}>ORVX is a utility token. Not financial advice. Always do your own research.</p>
      </footer>

    </main>
  );
}
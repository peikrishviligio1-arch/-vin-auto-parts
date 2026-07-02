import Link from 'next/link';

export function Header(){
  return <header className="topbar">
    <div className="nav">
      <Link href="/" className="brand">
        <div className="brand-logo">VIN</div>
        <div className="brand-text"><strong>AUTO PARTS</strong><span>ავტონაწილების პლატფორმა</span></div>
      </Link>
      <div className="nav-search"><span>🔍</span><input placeholder="VIN, OEM ან ნაწილის ძებნა..." /></div>
      <div className="nav-actions">
        <Link className="btn ghost" href="/search">ძებნა</Link>
        <Link className="btn ghost" href="/profile">პროფილი</Link>
        <Link className="btn" href="/add-part">+ განცხადება</Link>
      </div>
    </div>
  </header>
}

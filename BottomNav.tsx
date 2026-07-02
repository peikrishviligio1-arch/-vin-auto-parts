import Link from 'next/link';
export function BottomNav(){
  return <nav className="bottomnav">
    <Link href="/">🏠<br/>მთავარი</Link>
    <Link href="/search">🔍<br/>ძებნა</Link>
    <Link href="/add-part" className="plus">+</Link>
    <Link href="/search">❤️<br/>რჩეული</Link>
    <Link href="/profile">👤<br/>პროფილი</Link>
  </nav>
}

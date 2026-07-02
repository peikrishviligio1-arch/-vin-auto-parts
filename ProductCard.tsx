type ProductCardProps = { title:string; subtitle:string; city:string; price:string; vip?:boolean };
export function ProductCard({title, subtitle, city, price, vip}: ProductCardProps){
  return <article className="card">
    <div className="img">{vip && <span className="badge" style={{position:'absolute',top:10,left:10}}>VIP</span>}</div>
    <div className="card-body">
      <h3>{title}</h3>
      <div className="muted">{subtitle}</div>
      <div className="muted">📍 {city}</div>
      <div className="price">{price}</div>
    </div>
  </article>
}

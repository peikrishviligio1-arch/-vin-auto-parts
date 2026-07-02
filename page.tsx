import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { ProductCard } from '@/components/ProductCard';
const items = [
 ['Mercedes CLS W218 LED ფარი','Mercedes-Benz CLS400 2015','თბილისი','1,250 ₾'],
 ['M276 3.0 Biturbo ძრავი','Mercedes CLS400','რუსთავი','7,800 ₾'],
 ['AMG დისკები R19','Mercedes-Benz Original','ბათუმი','2,400 ₾'],
 ['CLS W218 უკანა ფარი LED','Mercedes-Benz CLS400','თბილისი','850 ₾'],
 ['გენერატორი','Mercedes W212','ქუთაისი','450 ₾'],
 ['BMW N57 ძრავი','3.0 diesel','გორი','6,000 ₾'],
];
export default function Search(){
 return <><Header/><main className="section"><h1>ძებნა</h1><div className="panel"><div className="searchline"><input placeholder="VIN / OEM / ნაწილის სახელი"/><button className="btn">ძებნა</button></div><div className="filter-grid"><select className="field"><option>მარკა</option></select><select className="field"><option>მოდელი</option></select><select className="field"><option>წელი</option></select><select className="field"><option>კატეგორია</option></select><select className="field"><option>ფასი</option></select><select className="field"><option>ქალაქი</option></select></div></div><div className="title-row"><h2>შედეგები</h2><span className="muted">6 განცხადება</span></div><div className="cards">{items.map(i=><ProductCard key={i[0]} title={i[0]} subtitle={i[1]} city={i[2]} price={i[3]}/>)}</div></main><BottomNav/></>
}

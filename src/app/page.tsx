export default function Home() {
  let name = 'park'

  return (
    <div>
      <h4 style={{color:'red', fontSize:'30px'}}>애플후레시</h4> {/*style 속성 하려면 이렇게*/}
      <p className="title-sub">by dev { name }</p>
    </div>
  );
}
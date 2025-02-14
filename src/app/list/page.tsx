import Image from "next/image"; //최적화된 이미지 넣으려면
//이렇게 하면 layout shift 방지, lazy loding, 사이즈 최적화

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut'] // DB에서 가져온 데이터라고 치자
    
    return (
      <div>
        <h4 className="title">상품목록</h4>
        {
            상품.map((a, i)=>{
                return (
                    <div className="food" key={i}> {/* key에 유니크한 값 */}
                      <Image src={'/food'+i+'.png'} className="food-img" 
                      width={500} height={400} alt="토마토"/> {/* width, height 지정해줘야함 */}
                      {/* {`/food${i}.png`} 이렇게 해도 됨 */}
                        <h4>{상품[i]} $40</h4> {/* i 넣어야 0부터 2까지 돌아감 */}
                    </div>
                )
            })
        }
      </div>
    );
  }
  

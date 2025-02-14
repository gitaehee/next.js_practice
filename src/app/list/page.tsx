export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut'] // DB에서 가져온 데이터라고 치자
    
    return (
      <div>
        <h4 className="title">상품목록</h4>
        {
            상품.map((a, i)=>{
                return (
                    <div className="food" key={i}> {/* key에 유니크한 값 */}
                      <img src="/tomato.png" alt="토마토" className="food-img"/>
                        <h4>{상품[i]} $40</h4> {/* i 넣어야 0부터 2까지 돌아감 */}
                    </div>
                )
            })
        }
      </div>
    );
  }
  

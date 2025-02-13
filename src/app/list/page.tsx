export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut'] // DB에서 가져온 데이터라고 치자
    let 어레이 = [2,3,4]

    어레이.map((a, i) => {
        console.log(i); // log에 a 넣으면 2,3,4 나오고
        // log에 i 넣으면 0,1,2 나옴
    });

    let b = 어레이.map((a)=>{
        return 10 // return에 적은 걸 array로 담아줌 -> [10,10,10]
    })
    console.log(b)

    return (
      <div>
        <h4 className="title">상품목록</h4>
        <div className="food">
            <h4>{상품[0]} $40</h4>
        </div>
        <div className="food">
            <h4>{상품[1]} $40</h4>
        </div>
        <div className="food">
            <h4>{상품[2]} $40</h4>
        </div>
      </div>
    );
  }
  

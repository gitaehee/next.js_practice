import { useEffect } from "react";


export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut'] // DB에서 가져온 데이터라고 치자
    let 어레이 = [2,3,4]

    useEffect(() => {
        어레이.map(() => {
            console.log('안녕'); // 이러면 어레이 수 많큼 안녕이 출력됨
        });
    }, []);

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
  

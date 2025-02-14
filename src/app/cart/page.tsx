import {age, name} from './data' // data.tsx에서 불러오기
// './../data'면 상위 폴더, './폴더명/data'면 하위 폴더

'use component' // 이거 하면 client component

export default function Cart() {
    return (
        <div>
            <h4 className="title">Cart (이름: {name}, 나이: {age})</h4>
            <div className="cart-item">
                <p>상품명</p>
                <p>$40</p>
                <p>1개</p>
            </div>
            <CartItem></CartItem> {/* <CartItem/>로 해도 됨 */}
            <CartItem/>
        </div>
    )
}

function CartItem (){ // server component
    return (
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}
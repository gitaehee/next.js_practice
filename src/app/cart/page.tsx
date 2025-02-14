// 'use component' 하면 client component

export default function Cart() {
    return (
        <div>
            <h4 className="title">Cart</h4>
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
import './OrderSheetContentsContainer.css';

import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";
import OrderSheetBox from "../OrderSheetBox/OrderSheetBox";

export default function OrderSheetContentsContainer(props) {
    let totalPrice = 0;
    props.items.map((item) => {
        totalPrice = totalPrice + item.price * item.quantity;
    })

    return (
        <div className="order-sheet-contents-container">
            <UnitContentsContainer title='주문서'>
            <OrderSheetBox items={props.items}/>
            </UnitContentsContainer>
            <div className='order-sheet-contents-container-row total-price'>
                <h2 className='order-sheet-contents-text'>총 {totalPrice.toLocaleString()}원</h2>
            </div>
        </div>
    )
}

OrderSheetContentsContainer.defaultProps = {
    items: [
        {name: '상품명1', price: 5500, quantity: 1},
        {name: '상품명2', price: 2500, quantity: 3},
        {name: '상품명3', price: 3500, quantity: 2},
        {name: '상품명4', price: 1500, quantity: 4},
    ]
}
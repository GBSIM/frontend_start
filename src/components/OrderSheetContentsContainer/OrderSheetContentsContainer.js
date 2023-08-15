import './OrderSheetContentsContainer.css';

import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";
import OrderSheetBox from "../OrderSheetBox/OrderSheetBox";

export default function OrderSheetContentsContainer(props) {
    let totalPrice = 0;
    props.items.map((item) => {
        if (item.isChecked) {
            if (item.option.name) {
                totalPrice = totalPrice + item.option.price * item.quantity;    
            } else {
                totalPrice = totalPrice + item.price * item.quantity;
            }
        }
    })
    if (props.status === '배송주문') totalPrice = totalPrice + 4000;
    if (props.status === '선물주문') totalPrice = totalPrice + 70000;    

    return (
        <div className="order-sheet-contents-container">
            <UnitContentsContainer title='주문서'>
            <OrderSheetBox items={props.items} status={props.status}/>
            </UnitContentsContainer>
            <div className='order-sheet-contents-container-row total-price'>
                <h2 className='order-sheet-contents-text'>총 {totalPrice.toLocaleString()}원</h2>
            </div>
        </div>
    )
}

OrderSheetContentsContainer.defaultProps = {
    items: [
        {name: '상품명1', price: 5500, quantity: 1, isChecked: true,},
        {name: '상품명2', price: 2500, quantity: 3, isChecked: true,},
        {name: '상품명3', price: 3500, quantity: 2, isChecked: true,},
        {name: '상품명4', price: 1500, quantity: 4, isChecked: true,},
    ],
    status: '배송주문',
}
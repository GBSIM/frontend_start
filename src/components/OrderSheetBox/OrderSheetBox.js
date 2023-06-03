import './OrderSheetBox.css';

import UnitBoxContainer from '../UnitBoxContainer/UnitBoxContainer';

export default function OrderSheetBox(props) {
    const Items = props.items.map((item,index) => {
        return (
            <div className='order-sheet-item-container'>
                <span className='order-sheet-item-text'>{item.name} x {item.quantity}</span>
                <span className='order-sheet-item-text'>{(item.price*item.quantity).toLocaleString()}원</span>
            </div>
        )
    })

    return (
        <UnitBoxContainer>
            <div className='order-sheet'>
                {Items}
            </div>
        </UnitBoxContainer>
    )
}

OrderSheetBox.defaultProps = {
    items: [
        {name: '상품명1', price: 5500, quantity: 1},
        {name: '상품명2', price: 2500, quantity: 3},
        {name: '상품명3', price: 3500, quantity: 2},
        {name: '상품명4', price: 1500, quantity: 4},
    ]
}
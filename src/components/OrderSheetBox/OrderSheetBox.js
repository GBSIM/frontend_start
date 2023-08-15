import './OrderSheetBox.css';

import UnitBoxContainer from '../UnitBoxContainer/UnitBoxContainer';

export default function OrderSheetBox(props) {
    const Items = props.items.map((item,index) => {
        if (item.isChecked) {
            if (item.option.name) {
                return (
                    <div className='order-sheet-item-container' key={'order-sheet-item-'+index}>
                        <span className='order-sheet-item-text'>{item.name} {item.option.name} x {item.quantity}</span>
                        <span className='order-sheet-item-text'>{(item.option.price*item.quantity).toLocaleString()}원</span>
                    </div>
                )
            } else {
                return (
                    <div className='order-sheet-item-container' key={'order-sheet-item-'+index}>
                        <span className='order-sheet-item-text'>{item.name} x {item.quantity}</span>
                        <span className='order-sheet-item-text'>{(item.price*item.quantity).toLocaleString()}원</span>
                    </div>
                )
            }
        }
    })

    if (props.status === '배송주문') {
        Items.push(
            <div className='order-sheet-item-container' key={'order-sheet-item-shipping-fee'}>
                <span className='order-sheet-item-text'>배송비</span>
                <span className='order-sheet-item-text'>{(4000).toLocaleString()}원</span>
            </div>
        )
    } else if (props.status === '선물주문') {
        Items.push(
            <div className='order-sheet-item-container' key={'order-sheet-item-shipping-fee'}>
                <span className='order-sheet-item-text'>퀵 배송비</span>
                <span className='order-sheet-item-text'>{(70000).toLocaleString()}원</span>
            </div>
        )
    }
    

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
        {name: '상품명1', price: 5500, quantity: 1, isChecked: true,},
        {name: '상품명2', price: 2500, quantity: 3, isChecked: true,},
        {name: '상품명3', price: 3500, quantity: 2, isChecked: true,},
        {name: '상품명4', price: 1500, quantity: 4, isChecked: true,},
    ],
    status: '배송주문'
}
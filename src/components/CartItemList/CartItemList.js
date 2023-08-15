import './CartItemList.css';

import CartItem from '../CartItem/CartItem';

export default function CartItemList(props) {
    let CartItems;
    let CartAddGuide;

    if (props.cartItemList) {
        if (props.cartItemList.length > 0) {
            CartItems = props.cartItemList.map((cartItem) => (
                <CartItem
                    id={cartItem.id}
                    isChecked={cartItem.isChecked}
                    name={cartItem.name}
                    checkedImage=''
                    uncheckedImage=''
                    price={cartItem.price}
                    count={cartItem.count}
                    key={'cart-item-'+cartItem.id}/>
            ))
        } else {
            CartAddGuide =
                <div className='cart-item-list-add-guide'>
                    <h3 className='cart-item-list-add-guide-text'>장바구니에 상품을 추가해주세요.</h3>
                </div>
        }
    } else {
        CartAddGuide =
            <div className='cart-item-list-add-guide'>
                <h3 className='cart-item-list-add-guide-text'>장바구니에 상품을 추가해주세요.</h3>
            </div>
    }

    return (
        <div className='cart-item-list'>
            {CartItems}
            {CartAddGuide}
        </div>
    )
}

CartItemList.defaultProps = {
    cartItemList: [
        {id: '000', isChecked: true, name: '상품명1', price: 2500, count: 1},
        {id: '001', isChecked: true, name: '상품명2', price: 3000, count: 1},
        {id: '002', isChecked: true, name: '상품명3', price: 2100, count: 3},
        {id: '003', isChecked: true, name: '상품명4', price: 2800, count: 1},
        {id: '004', isChecked: true, name: '상품명5', price: 32000, count: 2},
    ]
}
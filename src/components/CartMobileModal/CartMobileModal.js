import './CartMobileModal.css';

import { useState } from 'react';

import MobileModal from '../MobileModal/MobileModal';
import Counter from '../Counter/Counter';
import CartAddButton from '../CartAddButton/CartAddButton';

export default function CartMobileModal(props) {
    const [count, setCount] = useState(1);

    if (props.minimumQuantity > 1) {
        setCount(props.minimumQuantity);
    }

    const increaseCount = () => {
        console.log("+")
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count !== props.minimumQuantity) {
            console.log("-")
            setCount(count - 1);
        }
    }

    const totalPrice = count * props.price;
    
    return (
        <MobileModal id='mobile-cart-modal' isOn={props.isOn} closeEvent={props.closeEvent}>
            <div className='mobile-cart-modal-row top'>
                <h3 className='mobile-cart-modal-item-name'>{props.name}</h3>
                <h3 className='mobile-cart-modal-item-price'>{props.price.toLocaleString()}</h3>
            </div>
            <div className='mobile-cart-modal-row middle'>
                <Counter 
                    minimumCount={props.minimumQuantity}
                    count={count}
                    increaseEvent={increaseCount}
                    decreaseEvent={decreaseCount}/>
            </div>
            <div className='mobile-cart-modal-row bottom'>
                <h2 className='mobile-cart-modal-total-price'>{totalPrice.toLocaleString()}원</h2>
            </div>
            <CartAddButton
                paddingTop={8} paddingBottom={8}/>
            <div className='mobile-cart-modal-row-spacer'></div>
        </MobileModal>
    )
}

CartMobileModal.defaultProps = {
    name: "상품명",
    price: 2500,
    minimumQuantity: 1,
    isOn: false,
}
import './CartModal.css';

import { useState } from 'react';

import Modal from '../Modal/Modal';
import Counter from '../Counter/Counter';
import CartAddButton from '../CartAddButton/CartAddButton';

export default function CartModal(props) {
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
        <Modal id='cart-modal'>
            <div className='cart-modal-row top'>
                <span className='cart-modal-item-name'>{props.name}</span>
                <span className='cart-modal-item-price'>{props.price.toLocaleString()}</span>
            </div>
            <div className='cart-modal-row middle'>
                <Counter 
                    minimumCount={props.minimumQuantity}
                    count={count}
                    increaseEvent={increaseCount}
                    decreaseEvent={decreaseCount}/>
            </div>
            <div className='cart-modal-row bottom'>
                <h2 className='cart-modal-total-price'>{totalPrice.toLocaleString()}원</h2>
            </div>
            <CartAddButton/>
            <div className='cart-modal-row-spacer'></div>
        </Modal>
    )
}

CartModal.defaultProps = {
    name: "상품명",
    price: 2500,
    minimumQuantity: 1,
}
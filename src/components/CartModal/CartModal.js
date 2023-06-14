import './CartModal.css';

import { useState } from 'react';

import Modal from '../Modal/Modal';
import Counter from '../Counter/Counter';
import CartAddButton from '../CartAddButton/CartAddButton';

export default function CartModal(props) {
    const [count, setCount] = useState(props.minimumQuantity);
    const [option, setOption] = useState({"name":"option","price":0});
    const [price, setPrice] = useState(props.price);

    const increaseCount = () => {
        console.log("+")
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count > props.minimumQuantity) {
            console.log("-")
            setCount(count - 1);
        }
    }

    const totalPrice = count * price;

    const initializeCount = () => {
        setCount(props.minimumQuantity);
    }

    const AddItemToCart = () => {
        initializeCount();
    }

    const selectOption = (e) => {
        setOption(
            {"name":props.options[e.target.selectedIndex]["name"],
             "price":props.options[e.target.selectedIndex]["price"]});
        setPrice(props.options[e.target.selectedIndex]["price"]);
    }

    const isOptionItem = Array.isArray(props.options) && (props.options.length > 0);
    let optionsContainer;
    if (isOptionItem) {
        const Options = props.options.map((option) => (
            <option 
                className='cart-modal-option'
                value={option["name"]} 
                key={option["name"]}>
                {option["name"]} - - -  {option["price"].toLocaleString()}원
            </option>
        ))
        optionsContainer =
            <select name='option' className='cart-modal-option-container' onChange={selectOption}>
                {Options}
            </select>
    }
    
    return (
        <Modal id={'cart-modal'+(props.id)} closeEvent={initializeCount}>
            {optionsContainer}
            <div className='cart-modal-row top'>
                <h3 className='cart-modal-item-name'>{props.name}</h3>
                <h3 className='cart-modal-item-price'>{price.toLocaleString()}</h3>
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
            <form method="dialog" className='modal-close-button-container'>
                <CartAddButton clickEvent={AddItemToCart}/>
            </form>
            <div className='cart-modal-row-spacer'></div>
        </Modal>
    )
}

CartModal.defaultProps = {
    name: "상품명",
    price: 2500,
    minimumQuantity: 1,
    options: [],
    id: '000'
}
import './CartMobileModal.css';

import { useState } from 'react';

import MobileModal from '../MobileModal/MobileModal';
import Counter from '../Counter/Counter';
import CartAddButton from '../CartAddButton/CartAddButton';

export default function CartMobileModal(props) {
    const [count, setCount] = useState(props.minimumQuantity);
    const [option, setOption] = useState({"name":"option","price":0});
    const [price, setPrice] = useState(props.price);

    const addItemToCart = () => {
        props.closeEvent();
    }

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
                className='mobile-cart-modal-option'
                value={option["name"]} 
                key={option["name"]}>
                {option["name"]} - - -  {option["price"].toLocaleString()}원
            </option>
        ))
        optionsContainer =
            <select name='option' className='mobile-cart-modal-option-container' onChange={selectOption}>
                {Options}
            </select>
    }
    
    return (
        <MobileModal id={'mobile-cart-modal-'+props.id} isOn={props.isOn} closeEvent={props.closeEvent}>
            {optionsContainer}
            <div className='mobile-cart-modal-row top'>
                <h2 className='mobile-cart-modal-item-name'>{props.name}</h2>
                <h2 className='mobile-cart-modal-item-price'>{price.toLocaleString()}원</h2>
            </div>
            <div className='mobile-cart-modal-row middle'>
                <Counter 
                    minimumCount={props.minimumQuantity}
                    count={count}
                    increaseEvent={increaseCount}
                    decreaseEvent={decreaseCount}/>
            </div>
            <div className='mobile-cart-modal-row bottom'>
                <h1 className='mobile-cart-modal-total-price'>{totalPrice.toLocaleString()}원</h1>
            </div>
            <CartAddButton
                paddingTop={7} paddingBottom={7} textType='h3' cartAddAction={addItemToCart}/>
            <div className='mobile-cart-modal-row-spacer'></div>
        </MobileModal>
    )
}

CartMobileModal.defaultProps = {
    name: "상품명",
    price: 2500,
    minimumQuantity: 1,
    id: '000',
    options: [],
    isOn: false,
}
import './CartItem.css';

import UnitBoxContainer from "../UnitBoxContainer/UnitBoxContainer";
import Counter from '../Counter/Counter';

export default function CartItem(props) {
    let CheckButton;
    if (props.isChecked) {
        CheckButton = 
            <button className='cart-item-check-button'>
                <img src={props.checkedImage} className='cart-item-check-image' alt='O'></img>
            </button>
    } else {
        CheckButton = 
        <button className='cart-item-check-button'>
            <img src={props.uncheckedImage} className='cart-item-check-image' alt='X'></img>
        </button>
    }

    return (
        <UnitBoxContainer>
            <div className="cart-item">
                {CheckButton}
                <img src={props.itemImage} className='cart-item-image'></img>
                <h3 className='cart-item-name'>{props.name}</h3>
                <div className='cart-item-spacer'></div>
                <div className='cart-item-right-contents'>
                    <Counter count={props.count} increaseEvent={props.addQuantity} decreaseEvent={props.subtractQuantity}></Counter>
                    <h2 className='cart-item-price'>{props.price.toLocaleString()}원</h2>
                </div>
                <button className='cart-item-delete-button' onClick={() => props.deleteEvent()}>
                    <span className='cart-item-delete-button-text'>삭제하기</span>
                </button>
            </div>
        </UnitBoxContainer>
    )
}

const defaultClickEvent = () => {
    
}

CartItem.defaultProps = {
    name: "상품명",
    checkedImage: '',
    uncheckedImage: '',
    price: 5000,
    count: 1,
    addQuantity: defaultClickEvent,
    subtractQuantity: defaultClickEvent,
    deleteEvent: defaultClickEvent
}
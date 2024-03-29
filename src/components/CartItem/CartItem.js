import './CartItem.css';

import UnitBoxContainer from "../UnitBoxContainer/UnitBoxContainer";
import Counter from '../Counter/Counter';
import CheckButton from '../CheckButton/CheckButton';
import DeleteCheckModal from '../DeleteCheckModal/DeleteCheckModal';

export default function CartItem(props) {
    const openDeleteCheckModal = () => {
        const CartDeleteCheckModal = document.getElementById('cart-item-delete-modal-' + props.id);
        CartDeleteCheckModal.showModal();
    }

    let itemName;
    let itemPrice;
    if (props.option) {
        if (props.option.name && props.option.price) {
            itemName = props.name + ' ' + props.option.name;
            itemPrice = props.option.price;
        } else {
            itemName = props.name;
            itemPrice = props.price;
        }
    } else {
        itemName = props.name;
        itemPrice = props.price;
    }

    return (
        <UnitBoxContainer>
            <div className="cart-item">
                <CheckButton size={24} isOn={props.isChecked}/>
                <img src={props.itemImage} className='cart-item-image' alt='item'></img>
                <h3 className='cart-item-name'>{itemName}</h3>
                <div className='cart-item-spacer'></div>
                <div className='cart-item-right-contents'>
                    <Counter count={props.count} increaseEvent={props.addQuantity} decreaseEvent={props.subtractQuantity}/>
                    <h2 className='cart-item-price'>{itemPrice.toLocaleString()}원</h2>
                </div>
                <button className='cart-item-delete-button' onClick={() => openDeleteCheckModal()}>
                    <span className='cart-item-delete-button-text'>삭제하기</span>
                </button>
                <DeleteCheckModal 
                    id={'cart-item-delete-modal-' + props.id}
                    deleteEvent={props.deleteEvent}/>
            </div>
        </UnitBoxContainer>
    )
}

const defaultClickEvent = () => {
    
}

CartItem.defaultProps = {
    id: '000',
    isChecked: false,
    name: "상품명",
    checkedImage: '',
    uncheckedImage: '',
    price: 5000,
    count: 1,
    addQuantity: defaultClickEvent,
    subtractQuantity: defaultClickEvent,
    deleteEvent: defaultClickEvent,
    option: {},
}
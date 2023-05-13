import './Item.css';

import CartButton from '../CartButton/CartButton';

export default function Item(props) {
    return (
        <div className='item'>
            <button className='item-image-button'>
                <img className='item-image' src={props.image} alt='thumbnail'></img>
                <dv className='item-cart-button-container'>
                    <CartButton></CartButton>
                </dv>
            </button>
            <span className='item-text name'>{props.name}</span>
            <span className='item-text price'>{props.price.toLocaleString()}원</span>
        </div>
    )
}

Item.defaultProps = {
    image: "",
    name: "상품명",
    price: 10000
}
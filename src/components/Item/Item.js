import './Item.css';

import CartButton from '../CartButton/CartButton';
import CartMobileButton from '../CartMobileButton/CartMobileButton';

export default function Item(props) {
    return (
        <div className='item'>
            <a className='item-image-link' href='/'>
                <img className='item-image' src={props.image} alt='thumbnail'></img>
            </a>
            <div className='item-cart-button-container widescreen'>
                <CartButton/>
            </div>
            <div className='item-cart-button-container mobile'>
                <CartMobileButton/>
            </div>
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
import './Item.css';

export default function Item(props) {
    return (
        <div className='item'>
            <button className='item-image-button'>
                <img className='item-image' src={props.image} alt='thumbnail'></img>
                <button className='item-cart-button'>
                    <img className='item-cart-button-image' src={''} alt='cart'></img>
                </button>
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
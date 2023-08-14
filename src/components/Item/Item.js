import './Item.css';

import CartButton from '../CartButton/CartButton';
import CartMobileButton from '../CartMobileButton/CartMobileButton';

export default function Item(props) {
    const isOptionItem = Array.isArray(props.options) && (props.options.length > 0);

    let priceText;
    if (isOptionItem) {
        const maximumOptionPriceItem = props.options.reduce((prev,value) => {
            return prev.price >= value.price ? prev : value
        });
        const minimumOptionPriceItem = props.options.reduce((prev,value) => {
            return prev.price <= value.price ? prev : value
        });
        priceText = String(minimumOptionPriceItem.price.toLocaleString()) + ' ~ ' + String(maximumOptionPriceItem.price.toLocaleString()) + '원';
    } else {
        priceText = String(props.price.toLocaleString()) + '원'
    }

    return (
        <div className='item'>
            <a className='item-image-link' href={'/item/'+props.id}>
                <img className='item-image' src={props.image} alt='thumbnail'></img>
            </a>
            <div className='item-cart-button-container widescreen'>
                <CartButton
                    name={props.name}
                    price={props.price}
                    minimumQuantity={props.minimumQuantity}
                    options={props.options}
                    id={props.id}
                    />
            </div>
            <div className='item-cart-button-container mobile'>
                <CartMobileButton
                    name={props.name}
                    price={props.price}
                    minimumQuantity={props.minimumQuantity}
                    options={props.options}
                    id={props.id}
                    />
            </div>
            <span className='item-text name'>{props.name}</span>
            <span className='item-text price'>{priceText}</span>
        </div>
    )
}

Item.defaultProps = {
    image: "",
    name: "상품명",
    price: 10000,
    minimumQuantity: 1,
    id: '000',
    options: [],
}
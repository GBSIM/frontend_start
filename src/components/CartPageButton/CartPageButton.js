import './CartPageButton.css';

import IconButton from "../IconButton/IconButton";

export default function CartPageButton(props) {
    const clickEvent = () => {
        window.location.href = '/cart';
    }

    let ItemNumber;
    if (props.itemNumber) {
        ItemNumber =
            <button className="cart-page-button-item-number" style={{'background':props.itemNumberColor}} onClick={() => clickEvent()}>
                <span className="cart-page-button-item-number-text">
                    {props.itemNumber}
                </span>
            </button>
    }
    return (
        <div className="cart-page-button">
            <IconButton
                image={require('../../icons/cart_grey.png')}
                backgroundColor='#fff'
                clickEvent={clickEvent}/>
            {ItemNumber}
        </div>
    )
}

CartPageButton.defaultProps = {
    itemNumber: 10,
    itemNumberColor: '#eb5c2e'
}
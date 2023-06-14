import './CartButton.css';

import CartModal from '../CartModal/CartModal';

import IconButton from '../IconButton/IconButton';

export default function CartButton(props) {
    const showCartModal = () => {
        const CartModal = document.getElementById("cart-modal"+props.id);
        CartModal.showModal();
    }

    return (
        <div>
            <IconButton
                width={props.width}
                height={props.height}
                clickEvent={showCartModal}
                image={require('../../icons/cart_white.png')}
                iconWidth='60%'
                iconHeight='60%'/>
            <CartModal
                name={props.name}
                price={props.price}
                minimumQuantity={props.minimumQuantity}
                id={props.id}/>
        </div>        
    )
}

CartButton.defaultProps = {
    width: 34,
    height: 34,
    name: "상품명",
    price: 2500,
    minimumQuantity: 1,
    id: '000'
}


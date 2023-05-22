import './CartButton.css';

import CartModal from '../CartModal/CartModal';

import IconButton from '../IconButton/IconButton';

export default function CartButton(props) {
    const showCartModal = () => {
        const CartModal = document.getElementById("cart-modal");
        CartModal.showModal();
    }

    return (
        <div>
            <IconButton
                width={props.width}
                height={props.height}
                clickEvent={showCartModal} />
            <CartModal />
        </div>        
    )
}

CartButton.defaultProps = {
    width: 34,
    height: 34,
}


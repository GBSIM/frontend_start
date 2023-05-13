import './CartButton.css';

import CartModal from '../CartModel/CartModal';

import IconButton from '../IconButton/IconButton';

export default function CartButton() {
    const showCartModal = () => {
        const CartModal = document.getElementById("cart-modal");
        CartModal.showModal();
    }

    return (
        <div>
            <IconButton
                width={34}
                heigth={34}
                clickEvent={showCartModal} />
            <CartModal />
        </div>
        
    )
}
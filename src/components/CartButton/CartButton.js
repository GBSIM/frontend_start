import './CartButton.css';

import CartModal from '../CartModal/CartModal';

import IconButton from '../IconButton/IconButton';
import Notification from '../Notification/Notification';

export default function CartButton(props) {
    const showCartModal = () => {
        const CartModal = document.getElementById("cart-modal"+props.id);
        CartModal.showModal();
    }

    const notiText = props.name + "를 담았어요."

    const showPopupNotification = () => {
        const notification = document.getElementById("notification-"+props.id);
        notification.style.display = "flex";
        setTimeout(() => notification.style.display = "none", 2000);
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
                minimumOrderQuantity={props.minimumOrderQuantity}
                options={props.options}
                id={props.id}
                popupEvent={showPopupNotification}/>
            <Notification 
                text={notiText} 
                id={props.id}/>
        </div>        
    )
}

CartButton.defaultProps = {
    width: 34,
    height: 34,
    name: "상품명",
    price: 2500,
    minimumOrderQuantity: 1,
    options: [],
    id: '000'
}


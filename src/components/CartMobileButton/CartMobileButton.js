import './CartMobileButton.css';

import { useState } from 'react';

import CartMobileModal from '../CartMobileModal/CartMobileModal';
import IconButton from '../IconButton/IconButton';
import Notification from '../Notification/Notification';

export default function CartMobileButton(props) {
    const [isMobileCartModalOn,setMobileCartModalOn] = useState(false);

    const showMobileCartModal = () => {
        setMobileCartModalOn(true);
    }

    const hideMobileCartModal = () => {
        setMobileCartModalOn(false);
    }

    const notiText = props.name + "를 담았어요.";

    const showPopupNotification = () => {
        const notification = document.getElementById("notification-mobile-"+props.id);
        notification.style.display = "flex";
        setTimeout(() => notification.style.display = "none", 2000);
    }

    if (props.isPurchaseable) {
        return (
            <div>
                <IconButton
                    width={props.width}
                    height={props.height}
                    clickEvent={showMobileCartModal}
                    image={require('../../icons/cart_white.png')}
                    iconWidth='60%'
                    iconHeight='60%'/>
                <CartMobileModal 
                    isOn={isMobileCartModalOn}
                    closeEvent={hideMobileCartModal}
                    name={props.name}
                    price={props.price}
                    minimumOrderQuantity={props.minimumOrderQuantity}
                    options={props.options}
                    id={props.id}
                    popupEvent={showPopupNotification}/>
                <Notification 
                    text={notiText} 
                    id={"mobile-"+props.id}/>
            </div>
        )
    } else {
        return (
            <div>
                <IconButton
                    width={props.width}
                    height={props.height}
                    image={require('../../icons/cart_white.png')}
                    iconWidth='60%'
                    iconHeight='60%'
                    backgroundColor='#aaa'/>
            </div> 
        )
    }
}

const defaultClickEvent = () => {
    
}

CartMobileButton.defaultProps = {
    width: 34,
    height: 34,
    name: "상품명",
    price: 2500,
    minimumOrderQuantity: 1,
    options: [],
    id: '000',
    popupEvent: defaultClickEvent,
    isPurchaseable: true,
}
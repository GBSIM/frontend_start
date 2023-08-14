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

    const notiText = props.name + " " + 1 +"개를 담았어요.";

    const showPopupNotification = () => {
        const notification = document.getElementById("notification-mobile-"+props.id);
        notification.style.display = "flex";
        setTimeout(() => notification.style.display = "none", 2000);
    }

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
                minimumQuantity={props.minimumQuantity}
                options={props.options}
                id={props.id}
                popupEvent={showPopupNotification}/>
            <Notification 
                text={notiText} 
                id={"mobile-"+props.id}/>
        </div>
    )
}

const defaultClickEvent = () => {
    
}

CartMobileButton.defaultProps = {
    width: 34,
    height: 34,
    name: "상품명",
    price: 2500,
    minimumQuantity: 1,
    options: [],
    id: '000',
    popupEvent: defaultClickEvent,
}
import './CartMobileButton.css';

import { useState } from 'react';

import CartMobileModal from '../CartMobileModal/CartMobileModal';
import IconButton from '../IconButton/IconButton';

export default function CartMobileButton(props) {
    const [isMobileCartModalOn,setMobileCartModalOn] = useState(false);

    const showMobileCartModal = () => {
        setMobileCartModalOn(true);
    }

    const hideMobileCartModal = () => {
        setMobileCartModalOn(false);
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
                id={props.id}/>
        </div>
    )
}

CartMobileButton.defaultProps = {
    width: 34,
    height: 34,
    name: "상품명",
    price: 2500,
    minimumQuantity: 1,
    id: '000',
}
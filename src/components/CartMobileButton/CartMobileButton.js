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
                clickEvent={showMobileCartModal} />
            <CartMobileModal 
                isOn={isMobileCartModalOn}
                closeEvent={hideMobileCartModal}/>
        </div>
    )
}

CartMobileButton.defaultProps = {
    width: 34,
    height: 34,
}
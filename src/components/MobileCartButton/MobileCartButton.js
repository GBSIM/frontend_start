import './MobileCartButton.css';

import { useState } from 'react';

import CartMobileModal from '../CartMobileModal/CartMobileModal';
import IconButton from '../IconButton/IconButton';
import SocialLoginMobileModal from '../SocialLoginMobileModal/SocialLoginMobileModal';

export default function MobileCartButton() {
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
                width={34}
                heigth={34}
                clickEvent={showMobileCartModal} />
            <CartMobileModal 
                isOn={isMobileCartModalOn}
                closeEvent={hideMobileCartModal}/>
        </div>
        
    )
}
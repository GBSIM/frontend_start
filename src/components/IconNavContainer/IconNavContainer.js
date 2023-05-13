import './IconNavContainer.css';

import { useState } from 'react';

import IconNavButton from '../IconNavButton/IconNavButton';
import SocialLoginMobileModal from '../SocialLoginMobileModal/SocialLoginMobileModal';

export default function IconNavContainer() {
    const [isSocialLoginMobileModalOn,setSocialLoginMobileModalOn] = useState(false);

    const openSocialLoginMobileModal = () => {
        setSocialLoginMobileModalOn(true);
    }

    const closeSocialLoginMobileModal = () => {
        setSocialLoginMobileModalOn(false);
    }

    return (
        <div className="icon-nav-container">
            <IconNavButton/>
            <IconNavButton />
            <IconNavButton />
            <IconNavButton altText='user' clickEvent={openSocialLoginMobileModal}/>
            <SocialLoginMobileModal
                isOn={isSocialLoginMobileModalOn}
                closeEvent={closeSocialLoginMobileModal}></SocialLoginMobileModal>
        </div>
    )
}
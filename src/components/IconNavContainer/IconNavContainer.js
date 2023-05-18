import './IconNavContainer.css';

import { useState } from 'react';

import IconNavButton from '../IconNavButton/IconNavButton';
import SocialLoginMobileModal from '../SocialLoginMobileModal/SocialLoginMobileModal';

export default function IconNavContainer() {
    const showSocialLoginMobileModal = () => {
        const SocialLoginModal = document.getElementById("social-login-mobile-modal");
        SocialLoginModal.showModal();
    }

    return (
        <div className="icon-nav-container">
            <IconNavButton/>
            <IconNavButton />
            <IconNavButton />
            <IconNavButton altText='user' clickEvent={showSocialLoginMobileModal}/>
            <SocialLoginMobileModal></SocialLoginMobileModal>
        </div>
    )
}
import './IconNavContainer.css';

import IconNavButton from '../IconNavButton/IconNavButton';
import SocialLoginMobileModal from '../SocialLoginMobileModal/SocialLoginMobileModal';

export default function IconNavContainer(props) {
    const showSocialLoginMobileModal = () => {
        const SocialLoginModal = document.getElementById("social-login-mobile-modal");
        SocialLoginModal.showModal();
    }

    let userButtonClickEvent = () => {
        if (props.isLogined) {
            window.location.href = '/user/orderhistory';
        } else {
            showSocialLoginMobileModal();
        }
    }

    return (
        <div className="icon-nav-container">
            <IconNavButton/>
            <IconNavButton />
            <IconNavButton />
            <IconNavButton 
                altText='user' 
                clickEvent={userButtonClickEvent} 
                deactivatedImage={require('../../icons/user_grey.png')}
                activatedImage={require('../../icons/user_orange.png')}
                isOn={window.location.pathname.includes('user')}/>
            <SocialLoginMobileModal></SocialLoginMobileModal>
        </div>
    )
}

IconNavContainer.defaultProps = {
    isLogined: true,
}
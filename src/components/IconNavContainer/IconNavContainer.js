import './IconNavContainer.css';

import IconNavButton from '../IconNavButton/IconNavButton';
import SocialLoginMobileModal from '../SocialLoginMobileModal/SocialLoginMobileModal';

export default function IconNavContainer(props) {
    const showSocialLoginMobileModal = () => {
        const SocialLoginModal = document.getElementById("social-login-mobile-modal");
        SocialLoginModal.showModal();
    }

    const userButtonClickEvent = () => {
        if (props.isLogined) {
            window.location.href = '/user/orderhistory';
        } else {
            showSocialLoginMobileModal();
        }
    }

    const moveToDelivery = () => {
        window.location.href = '/delivery'
    }

    const moveToPickup = () => {
        window.location.href = '/pickup'
    }

    const moveToPresent = () => {
        window.location.href = '/present'
    }

    return (
        <div className="icon-nav-container">
            <IconNavButton
                altText='Delivery'
                clickEvent={moveToDelivery}
                deactivatedImage={require('../../icons/delivery_grey.png')}
                activatedImage={require('../../icons/delivery_orange.png')}
                isOn={window.location.pathname.includes('delivery') || window.location.pathname === '/'}/>
            <IconNavButton
                altText='Present'
                clickEvent={moveToPresent}
                deactivatedImage={require('../../icons/present_grey.png')}
                activatedImage={require('../../icons/present_orange.png')}
                isOn={window.location.pathname.includes('present')}/>
            <IconNavButton
                altText='Pickup'
                clickEvent={moveToPickup}
                deactivatedImage={require('../../icons/pickup_grey.png')}
                activatedImage={require('../../icons/pickup_orange.png')}
                isOn={window.location.pathname.includes('pickup')}/>
            <IconNavButton 
                altText='My' 
                clickEvent={userButtonClickEvent} 
                deactivatedImage={require('../../icons/user_grey.png')}
                activatedImage={require('../../icons/user_orange.png')}
                isOn={window.location.pathname.includes('user')}/>
            <SocialLoginMobileModal></SocialLoginMobileModal>
        </div>
    )
}

IconNavContainer.defaultProps = {
    isLogined: false,
}
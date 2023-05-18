import './SocialLoginMobileModal.css';

import Modal from "../Modal/Modal"

import SocialLoginButton from "../SocialLoginButton/SocialLoginButton"

export default function SocialLoginMobileModal() {
    return (
        <Modal id='social-login-mobile-modal' minWidth='75vw'>
            <div className="social-login-mobile-modal-buttons">
                <SocialLoginButton></SocialLoginButton>
                <SocialLoginButton></SocialLoginButton>
            </div>
        </Modal>
    )
}
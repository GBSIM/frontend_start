import './SocialLoginModal.css';

import Modal from "../Modal/Modal";

import SocialLoginButton from "../SocialLoginButton/SocialLoginButton";

export default function SocialLoginModal() {
    return (
        <Modal id='social-login-modal'>
            <div className="social-login-modal-buttons">
                <SocialLoginButton></SocialLoginButton>
                <SocialLoginButton></SocialLoginButton>
            </div>
        </Modal>
    )
}
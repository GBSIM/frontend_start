import './SocialLoginModal.css';

import Modal from "../Modal/Modal";

import SocialLoginButton from "../SocialLoginButton/SocialLoginButton";

export default function SocialLoginModal() {
    return (
        <Modal id='social-login-modal'>
            <div className="social-login-modal-buttons">
                <SocialLoginButton text='카카오 로그인' backgroundColor='#FEE500' color='#141414'></SocialLoginButton>
                <SocialLoginButton text='네이버 로그인' backgroundColor='#03C75A' color='#fff'></SocialLoginButton>
            </div>
        </Modal>
    )
}
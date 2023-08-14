import './SocialLoginMobileModal.css';

import Modal from "../Modal/Modal"

import SocialLoginButton from "../SocialLoginButton/SocialLoginButton"

export default function SocialLoginMobileModal() {
    return (
        <Modal id='social-login-mobile-modal' minWidth='75vw'>
            <div style={{'minHeight':'20px'}}></div>
            <span className='social-login-mobile-modal-guide'>
                소셜 로그인으로 간편하게 로그인하세요.
            </span>
            <div style={{'minHeight':'20px'}}></div>
            <div className="social-login-mobile-modal-buttons">
                <SocialLoginButton 
                    text='카카오 로그인' 
                    backgroundColor='#FEE500' 
                    color='#141414' 
                    image={require('../../icons/kakao.png')} 
                    iconHeight={20} 
                    iconWidth={20}></SocialLoginButton>
                <SocialLoginButton 
                    text='네이버 로그인' 
                    backgroundColor='#03C75A' 
                    color='#fff' 
                    image={require('../../icons/naver.png')} 
                    iconHeight={20} 
                    iconWidth={20}></SocialLoginButton>
            </div>
        </Modal>
    )
}
import QuadrangleButton from "../QuadrangleButton/QuadrangleButton";
import SocialLoginModal from "../SocialLoginModal/SocialLoginModal";

export default function LoginButton(props) {
    const showSocialLoginModal = () => {
        const SocialLoginModal = document.getElementById("social-login-modal");
        SocialLoginModal.showModal();
    }

    return (
        <div>
            <QuadrangleButton
                paddingTop={5}
                paddingBottom={5}
                paddingRight={20}
                paddingLeft={20}
                text='로그인'
                clickEvent={showSocialLoginModal}></QuadrangleButton>
            <SocialLoginModal></SocialLoginModal>
        </div>
    )
}
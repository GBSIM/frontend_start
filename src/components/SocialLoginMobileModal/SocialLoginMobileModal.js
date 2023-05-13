import MobileModal from "../MobileModal/MobileModal";

export default function SocialLoginMobileModal(props) {
    return (
        <MobileModal 
            isOn={props.isOn} 
            closeEvent={props.closeEvent}/>
    )
}

const defaultCloseEvent = () => {
    
}

SocialLoginMobileModal.defaultProps = {
    isOn: false,
    closeEvent: defaultCloseEvent,
}
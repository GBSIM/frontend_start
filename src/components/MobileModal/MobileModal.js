import './MobileModal.css';

import BorderBoxButton from '../BorderBoxButton/BorderBoxButton';

export default function MobileModal(props) {
    if (props.isOn) {
        return (
            <div className='mobile-modal on'>
                <div className='mobile-modal-contents'>
                    {props.children}
                    <div className='mobile-modal-spacer'></div>
                    <div className='mobile-modal-close-button-container'>
                        <BorderBoxButton
                            paddingTop={7}
                            paddingBottom={7}
                            text={props.closeText}
                            width='100%'
                            minWidth={300} 
                            clickEvent={props.closeEvent} />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='mobile-modal off'>
                <div className='mobile-modal-contents'>
                    {props.children}
                    <div className='mobile-modal-spacer'></div>
                    <div className='mobile-modal-close-button-container'>
                        <BorderBoxButton
                            paddingTop={7}
                            paddingBottom={7}
                            text={props.closeText}
                            width='100%'
                            minWidth={300}
                            clickEvent={props.closeEvent} />
                    </div>
                </div>
            </div>
        )
    }
}

const defaultClickEvent = () => {
    
}

MobileModal.defaultProps = {
    isOn: false,
    closeText: "닫기",
    closeEvent: defaultClickEvent,
}
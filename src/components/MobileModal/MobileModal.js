import './MobileModal.css';

import BorderBoxButton from '../BorderBoxButton/BorderBoxButton';

export default function MobileModal(props) {
    const disableScroll = () => {
        document.querySelector('body').style.overflow = 'hidden';
    }

    const enableScroll = () => {
        document.querySelector('body').style.overflow = 'auto';
    }

    if (props.isOn) {
        disableScroll();
        return (
            <div className='mobile-modal-container on'>
                <div className='mobile-modal on' style={{'height': props.height}}>
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
            </div>   
        )
    } else {
        enableScroll();
        return (
            <div className='mobile-modal-container off'>
                <div className='mobile-modal off' style={{'height': props.height}}>
                    <div className='mobile-modal-contents'>
                        {props.children}
                        <div className='mobile-modal-spacer'></div>
                        <div className='mobile-modal-close-button-container'>
                            <BorderBoxButton
                                paddingTop={9}
                                paddingBottom={9}
                                text={props.closeText}
                                width='100%'
                                minWidth={300}
                                clickEvent={props.closeEvent} />
                        </div>
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
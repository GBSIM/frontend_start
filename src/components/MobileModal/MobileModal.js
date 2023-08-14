import './MobileModal.css';

import BorderBoxButton from '../BorderBoxButton/BorderBoxButton';
import QuadrangleButton from '../QuadrangleButton/QuadrangleButton';

export default function MobileModal(props) {
    const disableScroll = () => {
        document.querySelector('body').style.overflow = 'hidden';
    }

    const enableScroll = () => {
        document.querySelector('body').style.overflow = 'auto';
    }

    let CompleteButton;
    if (props.isCompleteButtonNeeded) {
        CompleteButton =
            <div className='mobile-modal-complete-button-container'>
                <QuadrangleButton
                    textType='h3'
                    paddingTop={7}
                    paddingBottom={7}
                    text={props.completeText}
                    width='100%'
                    clickEvent={props.completeEvent}/>
            </div>
    }

    const CloseButton =
        <div className='mobile-modal-close-button-container'>
            <button className='mobile-modal-close-button' onClick={() => props.closeEvent()}>
                <span className='mobile-modal-close-button-text'>{props.closeText}</span>
            </button>
        </div>

    if (props.isOn) {
        disableScroll();
        return (
            <div className='mobile-modal-container on'>
                <div className='mobile-modal on' style={{'height': props.height}}>
                    <div className='mobile-modal-contents'>
                        <div className='mobile-modal-children'>
                            {props.children}
                        </div>
                        <div className='mobile-modal-spacer'></div>
                        {CompleteButton}
                        {CloseButton}
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
                        <div className='mobile-modal-children'>
                            {props.children}
                        </div>
                        <div className='mobile-modal-spacer'></div>
                        {CompleteButton}
                        {CloseButton}
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
    isCompleteButtonNeeded: false,
    completeText: '텍스트를 입력해주세요.'
}
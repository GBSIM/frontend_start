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
                    paddingTop={8}
                    paddingBottom={8}
                    text={props.completeText}
                    width='100%'
                    clickEvent={props.completeEvent}/>
            </div>
    }

    if (props.isOn) {
        disableScroll();
        return (
            <div className='mobile-modal-container on'>
                <div className='mobile-modal on' style={{'height': props.height}}>
                    <div className='mobile-modal-contents'>
                        {props.children}
                        <div className='mobile-modal-spacer'></div>
                        {CompleteButton}
                        <div className='mobile-modal-close-button-container'>
                            <BorderBoxButton
                                paddingTop={8}
                                paddingBottom={8}
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
                        {CompleteButton}
                        <div className='mobile-modal-close-button-container'>
                            <BorderBoxButton
                                paddingTop={8}
                                paddingBottom={8}
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
    isCompleteButtonNeeded: false,
    completeText: '텍스트를 입력해주세요.'
}
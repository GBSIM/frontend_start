import './Modal.css';

import BorderBoxButton from '../BorderBoxButton/BorderBoxButton';

export default function Modal(props) {
    const disableScroll = () => {
        document.querySelector('body').style.overflow = 'hidden';
    }

    const enableScroll = () => {
        document.querySelector('body').style.overflow = 'auto';
    }

    return (
        <dialog 
            className='modal' 
            id={props.id} 
            onClose={() => enableScroll()}
            onFocus={() => disableScroll()}>
            <div className='modal-contents' style={{'minWidth':props.minWidth}}>
                {props.children}
                <div className='modal-spacer'></div>
                <form method="dialog" className='modal-close-button-container'>
                    <BorderBoxButton
                        text={props.closeText}
                        width='100%'
                        minWidth={300}
                        paddingTop={7}
                        paddingBottom={7}
                        clickEvent={props.closeEvent}/>
                </form>
            </div>
        </dialog>
    )
}

const defaultClickEvent = () => {
    
}

Modal.defaultProps = {
    id: 'modal',
    closeText: '닫기',
    closeEvent: defaultClickEvent,
}
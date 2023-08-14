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
                {/* <div className='modal-spacer'></div> */}
                <form method="dialog" className='modal-close-button-container'>
                    <button className='modal-close-button'>
                        <span className='modal-close-button-text'>{props.closeText}</span>
                    </button>
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
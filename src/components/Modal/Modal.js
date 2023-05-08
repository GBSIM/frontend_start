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
            <div className='modal-contents'>
                {props.children}
                <div style={{'flex':'1'}}></div>
                <form method="dialog">
                    <BorderBoxButton
                        text={props.closeText}
                        width='100%'
                        minWidth={300} />
                </form>
            </div>
        </dialog>
    )
}

Modal.defaultProps = {
    id: 'modal',
    closeText: '닫기',
}
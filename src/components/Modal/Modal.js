import './Modal.css';

import BorderBoxButton from '../BorderBoxButton/BorderBoxButton';

export default function Modal(props) {
    return (
        <dialog className='modal' id={props.id}>
            {props.children}
            <form method="dialog">
                <BorderBoxButton
                    text={props.closeText}
                    width='100%'
                    minWidth={300} />
            </form>
        </dialog>
    )
}

Modal.defaultProps = {
    id: 'modal',
    closeText: '닫기',
}
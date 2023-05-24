import './DeleteCheckModal.css';

export default function DeleteCheckModal(props) {
    const disableScroll = () => {
        document.querySelector('body').style.overflow = 'hidden';
    }

    const enableScroll = () => {
        document.querySelector('body').style.overflow = 'auto';
    }

    return (
        <dialog 
            className='delete-check-modal' 
            id={props.id} 
            onClose={() => enableScroll()}
            onFocus={() => disableScroll()}>
            <div className='delete-check-modal-contents'>
                <span className='delete-check-modal-guide'>삭제하시겠습니까?</span>
                <div className='delete-check-modal-buttons'>
                    <form method="dialog" className='modal-close-button-container'>
                        <button className='delete-check-modal-button cancel'>
                            <span className='delete-check-modal-button-text cancel'>취소</span>
                        </button>
                    </form>
                    <form method="dialog" className='modal-close-button-container' onClick={() => props.deleteEvent()}>
                        <button className='delete-check-modal-button delete'>
                            <span className='delete-check-modal-button-text delete'>삭제</span>
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

const defaultClickEvent = () => {
    
}

DeleteCheckModal.defaultProps = {
    deleteEvent: defaultClickEvent,
}
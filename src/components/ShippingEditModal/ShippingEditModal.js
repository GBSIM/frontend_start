import './ShippingEditModal.css';

import Modal from "../Modal/Modal";
import QuadrangleButton from '../QuadrangleButton/QuadrangleButton';

export default function ShippingEditModal(props) {
    const componentsId = 'shipping-edit-modal-' + props.id

    return (
        <Modal id={componentsId}>
            <div className='shipping-edit-modal'>
                <span className='shipping-edit-modal-title'>주소</span>
                <input className='shipping-edit-modal-input disabled address' value={props.basicAddress} disabled></input>
                <input className='shipping-edit-modal-input disabled' value={props.detailAddress} disabled></input>

                <span className='shipping-edit-modal-title'>받는 사람</span>
                <input className='shipping-edit-modal-input' value={props.receiver}></input>

                <span className='shipping-edit-modal-title'>연락처</span>
                <input className='shipping-edit-modal-input' value={props.phone}></input>

                <span className='shipping-edit-modal-title'>주소 별명</span>
                <input className='shipping-edit-modal-input' value={props.tag}></input>

                <span className='shipping-edit-modal-title'>요청 사항</span>
                <input className='shipping-edit-modal-input' value={props.request}></input>

                <form method="dialog" className='shipping-edit-modal-close-button-container'>
                    <QuadrangleButton
                        paddingTop={7}
                        paddingBottom={7}
                        text='수정하기'
                        ></QuadrangleButton>
                </form>
            </div>
        </Modal>
    )
}

ShippingEditModal.defaultProps = {
    id: '000',
    basicAddress: '경기도 화성시 시청로 102번길 11',
    detailAddress: '101동 1001호',
    receiver: "크리스",
    phone: '010-0000-0000',
    tag: '배송지',
    request: '',
}
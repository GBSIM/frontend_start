import './ShippingEditMobileModal.css';

import MobileModal from '../MobileModal/MobileModal';

export default function ShippingEditMobileModal(props) {
    return (
        <MobileModal isOn = {props.isOn} closeEvent = {props.closeEvent} height='95vh'>
            <div className='shipping-edit-mobile-modal'>
                <span className='shipping-edit-mobile-modal-title'>받는 사람</span>
                <input className='shipping-edit-mobile-modal-input' value={props.receiver}></input>

                <span className='shipping-edit-mobile-modal-title'>연락처</span>
                <input className='shipping-edit-mobile-modal-input' value={props.phone}></input>

                <span className='shipping-edit-mobile-modal-title'>주소 별명</span>
                <input className='shipping-edit-mobile-modal-input' value={props.tag}></input>

                <span className='shipping-edit-mobile-modal-title'>요청 사항</span>
                <input className='shipping-edit-mobile-modal-input' value={props.request}></input>
            </div>
        </MobileModal>
    )
}

ShippingEditMobileModal.defaultProps = {
    isOn: false,
    id: '000',
    basicAddress: '경기도 화성시 시청로 102번길 11',
    detailAddress: '101동 1001호',
    receiver: "크리스",
    phone: '010-0000-0000',
    tag: '배송지',
    request: '',
}
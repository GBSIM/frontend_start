import './ShippingEditMobileModal.css';

import { useState } from 'react';

import MobileModal from '../MobileModal/MobileModal';

export default function ShippingEditMobileModal(props) {
    const [receiver,setReceiver] = useState(props.receiver);
    const [phone,setPhone] = useState(props.phone);
    const [tag,setTag] = useState(props.tag);
    const [request,setRequest] = useState(props.request);

    const initializeInput = () => {
        setReceiver(props.receiver);
        setPhone(props.phone);
        setTag(props.tag);
        setRequest(props.request);
    }

    const updatePhone = (e) => {
        if (!isNaN(e.nativeEvent.data)) {
            const phoneNumberInput = e.target.value.replace(/-/g,'');
            if (phoneNumberInput.length < 12) {
                console.log(phoneNumberInput);
                if (phoneNumberInput.length < 3) {
                    setPhone(e.target.value);
                } else {
                    if (phoneNumberInput.length < 4) {
                        setPhone(e.target.value+'-');
                    } else {
                        if (phoneNumberInput.length < 7) {
                            setPhone(phoneNumberInput.substring(0,3) + '-' + phoneNumberInput.substring(3));
                        } else {
                            setPhone(phoneNumberInput.substring(0,3) + '-' + phoneNumberInput.substring(3,7) + '-' + phoneNumberInput.substring(7));
                        }
                    } 
                } 
            }
        }
        if (e.nativeEvent.data === null) setPhone(e.target.value);
    }

    const closeEvent = () => {
        props.closeEvent();
        initializeInput();
    }
    const updateShipping = () => {
        props.closeEvent();
    }

    return (
        <MobileModal isOn={props.isOn} 
                     closeEvent={closeEvent} 
                     height='95vh'
                     isCompleteButtonNeeded={true}
                     completeEvent={updateShipping}
                     completeText='수정하기'>
            <div className='shipping-edit-mobile-modal'>
                <span className='shipping-edit-mobile-modal-title'>받는 사람</span>
                <input className='shipping-edit-mobile-modal-input' value={receiver} onChange={(e) => setReceiver(e.target.value)}></input>

                <span className='shipping-edit-mobile-modal-title'>연락처</span>
                <input className='shipping-edit-mobile-modal-input' value={phone} onChange={(e)=>updatePhone(e)}></input>

                <span className='shipping-edit-mobile-modal-title'>주소 별명</span>
                <input className='shipping-edit-mobile-modal-input' value={tag} onChange={(e)=>setTag(e.target.value)}></input>

                <span className='shipping-edit-mobile-modal-title'>요청 사항</span>
                <input className='shipping-edit-mobile-modal-input' value={request} onChange={(e)=>setRequest(e.target.value)}></input>
            </div>
        </MobileModal>
    )
}

ShippingEditMobileModal.defaultProps = {
    isOn: false,
    basicAddress: '경기도 화성시 시청로 102번길 11',
    detailAddress: '101동 1001호',
    receiver: "크리스",
    phone: '010-0000-0000',
    tag: '배송지',
    request: '',
}
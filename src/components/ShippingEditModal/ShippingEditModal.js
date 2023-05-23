import './ShippingEditModal.css';

import { useState } from 'react';

import Modal from "../Modal/Modal";
import QuadrangleButton from '../QuadrangleButton/QuadrangleButton';

export default function ShippingEditModal(props) {
    const componentsId = 'shipping-edit-modal-' + props.id

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

    return (
        <Modal id={componentsId} closeEvent={initializeInput}>
            <div className='shipping-edit-modal'>
                <span className='shipping-edit-modal-title'>주소</span>
                <input className='shipping-edit-modal-input disabled address' value={props.basicAddress} disabled></input>
                <input className='shipping-edit-modal-input disabled' value={props.detailAddress} disabled></input>

                <span className='shipping-edit-modal-title'>받는 사람</span>
                <input className='shipping-edit-modal-input' value={receiver} onChange={(e) => setReceiver(e.target.value)}></input>

                <span className='shipping-edit-modal-title'>연락처</span>
                <input className='shipping-edit-modal-input' value={phone} onChange={(e) => updatePhone(e)}></input>

                <span className='shipping-edit-modal-title'>주소 별명</span>
                <input className='shipping-edit-modal-input' value={tag} onChange={(e) => setTag(e.target.value)}></input>

                <span className='shipping-edit-modal-title'>요청 사항</span>
                <input className='shipping-edit-modal-input' value={request} onChange={(e) => setRequest(e.target.value)}></input>

                <form method="dialog" className='shipping-edit-modal-close-button-container'>
                    <QuadrangleButton
                        paddingTop={7}
                        paddingBottom={7}
                        text='수정하기'
                        clickEvent={initializeInput}/>
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
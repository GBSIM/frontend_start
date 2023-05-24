import './ShippingAddModal.css';

import DaumPostCode from 'react-daum-postcode';
import { useState } from 'react';

import Modal from "../Modal/Modal";
import QuadrangleButton from '../QuadrangleButton/QuadrangleButton';

export default function ShippingAddModal() {
    const [isBasicAddressEntered,setBasicAddressEntered] = useState(false);
    const [isDetailAddressEntered,setDetailAddressEntered] = useState(false);
    const [basicAddress,setBasicAddress] = useState('');
    const [detailAddress,setDetailAddress] = useState('');
    const [postalCode,setPostalCode] = useState('');
    const [receiver,setReceiver] = useState('');
    const [phone,setPhone] = useState('');

    const enterBasicAddress = (data) => {
        setBasicAddress(data.address);
        setPostalCode(data.zonecode);
        setBasicAddressEntered(true);
    }

    const enterDetailAddress = () => {
        setDetailAddressEntered(true);
    }

    const initializeShippingInput = () => {
        setBasicAddressEntered(false);
        setDetailAddressEntered(false);
        setBasicAddress('');
        setDetailAddress('');
        setPostalCode('');
        setReceiver('');
        setPhone('');
    }

    const completeAddShipping = () => {
        initializeShippingInput();
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

    let DaumAddressApiUi;
    if (!isBasicAddressEntered) {
        DaumAddressApiUi = <DaumPostCode onComplete={enterBasicAddress} autoClose={false}></DaumPostCode>
    }

    let DetailAddressEnterUi;
    let DetailAddressEnterButton;
    if (detailAddress) {
        DetailAddressEnterButton = 
            <QuadrangleButton
                paddingTop={7} paddingBottom={7}
                text='다음'
                clickEvent={enterDetailAddress}/>
    }
    if (isBasicAddressEntered && !isDetailAddressEntered) {
        DetailAddressEnterUi = 
            <div className='shipping-add-modal-detail-address-enter-ui'>
                <span className='shipping-add-modal-title'>기본 주소</span>
                <input className='shipping-add-modal-input disabled' value={basicAddress} disabled></input>
                <span className='shipping-add-modal-title'>상세 주소</span>
                <input className='shipping-add-modal-input' 
                       value={detailAddress} 
                       placeholder='나머지 주소를 입력해주세요.' 
                       onChange={(e) => setDetailAddress(e.target.value)}></input>
                <div className='shipping-add-modal-detail-address-enter-ui-spacer'></div>
                {DetailAddressEnterButton}
            </div>
    }

    let ReceiverEnterButton;
    if (receiver && phone) {
        ReceiverEnterButton = 
            <form method="dialog" className='shipping-add-modal-close-button-container'>
                <QuadrangleButton
                    paddingTop={7} paddingBottom={7}
                    text='완료'
                    clickEvent={completeAddShipping}/>
            </form>
    } else {
        ReceiverEnterButton = 
            <form method="dialog" className='shipping-add-modal-close-button-container off'>
                <QuadrangleButton
                    paddingTop={7} paddingBottom={7}
                    text='완료'
                    clickEvent={completeAddShipping}/>
            </form>
    }

    let ReceiverEnterUi;
    if (isBasicAddressEntered && isDetailAddressEntered) {
        ReceiverEnterUi =
            <div className='shipping-add-modal-receiver-enter-ui'>
                <span className='shipping-add-modal-title'>주소</span>
                <input className='shipping-add-modal-input disabled' value={basicAddress} disabled></input>
                <input className='shipping-add-modal-input disabled' value={detailAddress} disabled></input>

                <span className='shipping-add-modal-title'>받는 사람</span>
                <input className='shipping-add-modal-input' value={receiver} onChange={(e)=>setReceiver(e.target.value)}></input>

                <span className='shipping-add-modal-title'>전화번호</span>
                <input className='shipping-add-modal-input' value={phone} onChange={(e)=>updatePhone(e)}></input>

                <div className='shipping-add-modal-receiver-enter-ui-spacer'></div>
            </div>
    }

    return (
        <Modal id='shipping-add-modal' minWidth={400} closeEvent={initializeShippingInput}>
            <div className="shipping-add-modal">
                {DaumAddressApiUi}
                {DetailAddressEnterUi}
                {ReceiverEnterUi}
            </div>
            {ReceiverEnterButton}
        </Modal>
    )
}
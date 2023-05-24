import './ShippingAddMobileModal.css';

import DaumPostCode from 'react-daum-postcode';
import { useState } from 'react';

import MobileModal from '../MobileModal/MobileModal';
import QuadrangleButton from '../QuadrangleButton/QuadrangleButton';

export default function ShippingAddMobileModal(props) {
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
        props.closeEvent();
        initializeShippingInput();
    }

    const closeEvent = () => {
        props.closeEvent();
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
                textType='h3'
                clickEvent={enterDetailAddress}/>
    }
    if (isBasicAddressEntered && !isDetailAddressEntered) {
        DetailAddressEnterUi = 
            <div className='shipping-add-mobile-modal-detail-address-enter-ui'>
                <span className='shipping-add-mobile-modal-title'>기본 주소</span>
                <input className='shipping-add-mobile-modal-input disabled' value={basicAddress} disabled></input>
                <span className='shipping-add-mobile-modal-title'>상세 주소</span>
                <input className='shipping-add-mobile-modal-input' 
                       value={detailAddress} 
                       placeholder='나머지 주소를 입력해주세요.' 
                       onChange={(e) => setDetailAddress(e.target.value)}></input>
                <div className='shipping-add-mobile-modal-detail-address-enter-ui-spacer'></div>
                {DetailAddressEnterButton}
            </div>
    }

    let ReceiverEnterUi;
    let ReceiverEnterButton;
    if (receiver && phone) {
        ReceiverEnterButton = 
            <QuadrangleButton
                paddingTop={7} paddingBottom={7}
                text='완료'
                textType='h3'
                clickEvent={completeAddShipping}/>
    }
    if (isBasicAddressEntered && isDetailAddressEntered) {
        ReceiverEnterUi =
            <div className='shipping-add-mobile-modal-receiver-enter-ui'>
                <span className='shipping-add-mobile-modal-title'>주소</span>
                <input className='shipping-add-mobile-modal-input disabled' value={basicAddress} disabled></input>
                <input className='shipping-add-mobile-modal-input disabled' value={detailAddress} disabled></input>

                <span className='shipping-add-mobile-modal-title'>받는 사람</span>
                <input className='shipping-add-mobile-modal-input' value={receiver} onChange={(e)=>setReceiver(e.target.value)}></input>

                <span className='shipping-add-mobile-modal-title'>전화번호</span>
                <input className='shipping-add-mobile-modal-input' value={phone} onChange={(e)=>updatePhone(e)}></input>

                <div className='shipping-add-mobile-modal-receiver-enter-ui-spacer'></div>
                {ReceiverEnterButton}
            </div>
    }

    return (
        <MobileModal isOn={props.isOn} 
                     closeEvent={closeEvent} 
                     height='95vh'
                     isCompleteButtonNeeded={false}>
            <div className='shipping-add-mobile-modal'>
                {DaumAddressApiUi}
                {DetailAddressEnterUi}
                {ReceiverEnterUi}
            </div>
        </MobileModal>
    )
}

const defaultClickEvent = () => {
    
}

ShippingAddMobileModal.defaultProps = {
    isOn: false,
    closeEvent: defaultClickEvent,
}
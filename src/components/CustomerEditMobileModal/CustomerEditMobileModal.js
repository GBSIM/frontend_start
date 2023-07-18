import './CustomerEditMobileModal.css';

import { useState } from 'react';

import MobileModal from '../MobileModal/MobileModal';

export default function CustomerEditMobileModal(props) {
    const [name,setName] = useState(props.name);
    const [phone,setPhone] = useState(props.phone);
    const [email,setEmail] = useState(props.email);

    const initializeInput = () => {
        setName(props.name);
        setPhone(props.phone);
        setEmail(props.email);
    }

    const isEditable = (name && phone && email);

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
    const updateCustomer = () => {
        props.closeEvent();
    }

    return (
        <MobileModal isOn={props.isOn} 
                     closeEvent={closeEvent} 
                     height='95vh'
                     isCompleteButtonNeeded={isEditable}
                     completeEvent={updateCustomer}
                     completeText='수정하기'>
            <div className='customer-edit-mobile-modal'>
                <span className='customer-edit-mobile-modal-title'>보내는 사람</span>
                <input className='customer-edit-mobile-modal-input' value={name} onChange={(e) => setName(e.target.value)}></input>

                <span className='customer-edit-mobile-modal-title'>연락처</span>
                <input className='customer-edit-mobile-modal-input' value={phone} onChange={(e)=>updatePhone(e)}></input>

                <span className='customer-edit-mobile-modal-title'>이메일</span>
                <input className='customer-edit-mobile-modal-input' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
        </MobileModal>
    )
}

const defaultClickEvent = () => {
    
}

CustomerEditMobileModal.defaultProps = {
    name: "이름",
    phone: '010-0000-0000',
    email: 'abcd@gmail.com',
    closeEvent: defaultClickEvent,
}
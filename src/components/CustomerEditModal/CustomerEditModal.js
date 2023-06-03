import './CustomerEditModal.css';

import { useState } from 'react';

import Modal from '../Modal/Modal';
import QuadrangleButton from '../QuadrangleButton/QuadrangleButton';

export default function CustomerEditModal(props) {
    const componentId = 'customer-edit-modal'

    const [name, setName] = useState(props.name);
    const [phone, setPhone] = useState(props.phone);
    const [email, setEmail] = useState(props.email);

    const initializeInput = () => {
        setName(props.name);
        setPhone(props.phone);
        setEmail(props.email);
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
        <Modal id={componentId} closeEvent={initializeInput}>
            <div className='customer-edit-modal'>
                <span className='customer-edit-modal-title'>보내는 사람</span>
                <input className='customer-edit-modal-input' value={name} onChange={(e) => setName(e.target.value)}></input>

                <span className='customer-edit-modal-title'>연락처</span>
                <input className='customer-edit-modal-input' value={phone} onChange={(e) => updatePhone(e)}></input>

                <span className='customer-edit-modal-title'>이메일</span>
                <input className='customer-edit-modal-input' value={email} onChange={(e) => setEmail(e.target.value)}></input>

                <div style={{'minHeight':'50px'}}></div>

                <form method="dialog" className='customer-edit-modal-close-button-container'>
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

CustomerEditModal.defaultProps = {
    name: "이름",
    phone: '010-0000-0000',
    email: 'abcd@gmail.com',
}
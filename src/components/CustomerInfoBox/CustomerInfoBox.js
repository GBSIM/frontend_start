import './CustomerInfoBox.css';

import { useState } from 'react';

import UnitBoxContainer from '../UnitBoxContainer/UnitBoxContainer';
import CustomerEditModal from '../CustomerEditModal/CustomerEditModal';
import CustomerEditMobileModal from '../CustomerEditMobileModal/CustomerEditMobileModal';

export default function CustomerInfoBox(props) {
    const [isMobileModalOn, setMobileModalOn] = useState(false);

    const openMobileModal = () => {
        setMobileModalOn(true);
    }

    const closeMobileModal = () => {
        setMobileModalOn(false);
    }

    const showCustomerEditModal = () => {
        if (window.innerWidth > 700) {
            const ShippingEditModal = document.getElementById('customer-edit-modal');
            ShippingEditModal.showModal();
        } else {
            openMobileModal();
        }
    }

    let CustomerEditButton;
    let CustomerInfoBoxSpacer;
    if (props.editable) {
        CustomerEditButton =
            <div className='customer-info-box-row edit-button' onClick={() => showCustomerEditModal()}>
                <button className='customer-info-box-edit-button'>
                    <span className='customer-info-box-edit-button-text'>수정하기</span>
                </button>
            </div>
        CustomerInfoBoxSpacer = <div style={{'minHeight':'5px'}}></div>
    }

    return (
        <UnitBoxContainer>
            <div className='customer-info-box'>
                <div className='customer-info-box-row'>
                    <span className='customer-info-box-text'>보내는 사람</span>
                    <span className='customer-info-box-text'>{props.name}</span>
                </div>
                <div className='customer-info-box-row'>
                    <span className='customer-info-box-text'>연락처</span>
                    <span className='customer-info-box-text'>{props.phone}</span>
                </div>
                <div className='customer-info-box-row'>
                    <span className='customer-info-box-text'>이메일</span>
                    <span className='customer-info-box-text'>{props.email}</span>
                </div>
                {CustomerEditButton}
                {CustomerInfoBoxSpacer}
            </div>
            <CustomerEditModal
                name={props.name}
                phone={props.phone}
                email={props.email} />
            <CustomerEditMobileModal
                name={props.name}
                phone={props.phone}
                email={props.email}
                isOn={isMobileModalOn}
                closeEvent={closeMobileModal}/>
        </UnitBoxContainer>
    )
}

CustomerInfoBox.defaultProps = {
    name: '이름',
    phone: '010-0000-0000',
    email: 'aaa@gmail.com',
    editable: true,
}
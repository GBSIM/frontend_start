import './ShippingBox.css';

import { useState } from 'react';

import UnitBoxContainer from '../UnitBoxContainer/UnitBoxContainer';
import CheckButton from '../CheckButton/CheckButton';
import ShippingEditModal from '../ShippingEditModal/ShippingEditModal';
import ShippingEditMobileModal from '../ShippingEditMobileModal/ShippingEditMobileModal';
import DeleteCheckModal from '../DeleteCheckModal/DeleteCheckModal';

export default function ShippingBox(props) {
    const [isMobileModalOn, setMobileModalOn] = useState(false);

    const openDeleteCheckModal = () => {
        const ShippingDeleteCheckModal = document.getElementById('shipping-box-delete-modal-' + props.id);
        ShippingDeleteCheckModal.showModal();
    }

    const openMobileModal = () => {
        setMobileModalOn(true);
    }

    const closeMobileModal = () => {
        setMobileModalOn(false);
    }

    const showShippingEditModal = () => {
        if (window.innerWidth > 700) {
            const ShippingEditModal = document.getElementById('shipping-edit-modal-' + props.id);
            ShippingEditModal.showModal();
        } else {
            openMobileModal();
        }
    }

    return (
        <UnitBoxContainer>
            <div className='shipping-box'>
                <div className='shipping-box-tag'>
                    <span className='shipping-box-tag-text'>
                        {props.tag}
                    </span>
                </div>
                <div className='shipping-box-text-container'>
                    <span className='shipping-box-text'>
                        {props.basicAddress} {props.detailAddress}
                    </span>
                    <span className='shipping-box-text'>
                        {props.name}, {props.phone}
                    </span>
                </div>
            </div>
            <div className='shipping-box-check-button-container'>
                <CheckButton size={30}></CheckButton>
            </div>
            <div className='shipping-box-button-container'>
                <button className='shipping-box-button' onClick={() => showShippingEditModal()}>
                    <span className='shipping-box-button-text'>편집하기</span>
                </button>
                <button className='shipping-box-button' onClick={() => openDeleteCheckModal()}>
                    <span className='shipping-box-button-text'>삭제하기</span>
                </button>
            </div>
            <ShippingEditModal 
                receiver={props.name} 
                phone={props.phone} 
                basicAddress={props.basicAddress} 
                detailAddress={props.detailAddress} 
                id={props.id}
                tag={props.tag}/>
            <ShippingEditMobileModal 
                isOn={isMobileModalOn} 
                closeEvent={closeMobileModal}
                receiver={props.name} 
                phone={props.phone} 
                basicAddress={props.basicAddress} 
                detailAddress={props.detailAddress} 
                id={props.id}
                tag={props.tag}/>
            <DeleteCheckModal id={'shipping-box-delete-modal-' + props.id}/>
        </UnitBoxContainer>
    )
}

ShippingBox.defaultProps = {
    tag: '배송지',
    basicAddress: '도로명 주소',
    detailAddress: '상세 주소',
    name: '이름',
    phone: '010-0000-0000',
    id: '000'
}
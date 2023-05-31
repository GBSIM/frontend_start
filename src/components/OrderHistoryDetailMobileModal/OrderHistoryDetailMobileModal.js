import './OrderHistoryDetailMobileModal.css';

import { useState } from 'react';

import MobileModal from '../MobileModal/MobileModal';

export default function OrderHistoryDetailMobileModal(props) {
    const Items = props.items.map((item,index) => {
        return (
            <div className='order-history-detail-mobile-modal-row' key={'order-history-detail-mobile-item-'+index}>
                <img className='order-history-detail-mobile-modal-image' src={item.image}></img>
                <div className='order-history-detail-mobile-modal-text-container'>
                    <h3 className='order-history-detail-mobile-modal-text name'>{item.name}</h3>
                    <h3 className='order-history-detail-mobile-modal-text price'>{(item.price).toLocaleString()}</h3>
                </div>
                <div style={{'flex':1}}></div>
                <h3 className='order-history-detail-mobile-modal-text quantity'>{(item.quantity).toLocaleString()}개</h3>
            </div>
        )
    })

    return (
        <MobileModal
            isOn={props.isOn} 
            closeEvent={props.closeEvent} 
            height='95vh'>
            <div className='order-history-detail-mobile-modal-contents'>
                <div className='order-history-detail-mobile-modal-title-row'>
                    <h2 className='order-history-detail-mobiel-modal-title'>주문 상품 상세</h2>
                </div>
                {Items}
            </div>
        </MobileModal>
    )
}

const defaultClickEvent = () => {
    
}

OrderHistoryDetailMobileModal.defaultProps = {
    isOn: false,
    closeEvent: defaultClickEvent,
    items: [
        {name: "상품명1", quantity: 1, price: 2500},
        {name: "상품명2", quantity: 2, price: 3500},
        {name: "상품명3", quantity: 3, price: 4500},
    ],
}
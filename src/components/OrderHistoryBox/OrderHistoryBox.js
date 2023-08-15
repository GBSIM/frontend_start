import './OrderHistoryBox.css';

import { useState } from 'react';

import UnitBoxContainer from '../UnitBoxContainer/UnitBoxContainer';
import OrderHistoryDetailModal from '../OrderHistoryDetailModal/OrderHistoryDetailModal';
import OrderHistoryDetailMobileModal from '../OrderHistoryDetailMobileModal/OrderHistoryDetailMobileModal';

export default function OrderHistoryBox(props) {
    const [isMobileModalOn, setMobileModalOn] = useState(false);

    let PickupDate;
    if (props.orderType === 'pickup') {
        PickupDate = 
            <div className='order-history-box-info'>
                <span className='order-history-box-info-title'>픽업 날짜</span>
                <span className='order-history-box-info-value'>{props.pickupDate} {props.pickupTime}</span>
            </div>
    }

    let itemSummary;
    if (props.menus) {
        if (props.menus.length) {
            let representativeName;
            if (props.menus.option) {
                if (props.menus.option.name) {
                    representativeName = props.menus[0].name + ' ' + props.menus[0].option.name;
                } else {
                    representativeName = props.menus[0].name
                }
            } else {
                representativeName = props.menus[0].name
            }
        }
    }    

    const [orderTime, ] = props.createdAt.split('T');
    const [orderYear, orderMonth, orderDate] = orderTime.split('-');

    if (props.menus.length > 1) {
        itemSummary = props.menus[0].name + ' 외 ' + String(props.menus.length - 1) + '건';
    } else {
        itemSummary = props.menus[0].name;
    }

    const openMobileModal = () => {
        setMobileModalOn(true);
    }

    const closeMobileModal = () => {
        setMobileModalOn(false);
    }

    const showOrderHistoryDetailModal = () => {
        if (window.innerWidth > 700) {
            const OrderHistoryDetailModal = document.getElementById('order-history-detail-modal-' + props.id);
            OrderHistoryDetailModal.showModal();
        } else {
            openMobileModal();
        }
    }
    
    return (
        <UnitBoxContainer>
            <div className='order-history-box'>
                <img className='order-history-box-image'
                     src={props.image}
                     alt='thumbnail'></img>
                <div className='order-history-box-infos'>
                    <div className='order-history-box-info'>
                        <span className='order-history-box-info-title'>주문한 날짜</span>
                        <span className='order-history-box-info-value'>{orderYear}.{orderMonth}.{orderDate}</span>
                    </div>
                    <div className='order-history-box-info'>
                        <span className='order-history-box-info-title'>주문한 상품</span>
                        <span className='order-history-box-info-value'>{itemSummary}</span>
                    </div>
                    <div className='order-history-box-info'>
                        <span className='order-history-box-info-title'>결제 금액</span>
                        <span className='order-history-box-info-value'>{props.payedMoney.toLocaleString()}원</span>
                    </div>
                    {PickupDate}
                    <div className='order-history-box-info'>
                        <span className='order-history-box-info-title'>주문 상태</span>
                        <span className='order-history-box-info-value'>{props.orderStatus}</span>
                    </div>
                </div>
            </div>
            <button className='order-history-box-detail-button' onClick={() => showOrderHistoryDetailModal()}>
                <span className='order-history-box-detail-button-text'>상세보기</span>
            </button>
            <OrderHistoryDetailModal
                id={props.id}
                items={props.items}/>
            <OrderHistoryDetailMobileModal
                isOn={isMobileModalOn}
                closeEvent={closeMobileModal}
                items={props.items}/>
        </UnitBoxContainer>
    )
}

OrderHistoryBox.defaultProps = {
    id: '000',
    orderType: 'pickup',
    menus: [{name:'바스크치즈케이크',price:42000,quantity:1},{name:'골드키위요거트생크림케이크',price:45000,quantity:2}],
    payedMoney: 42000,
    pickupDate: '2023.12.31',
    pickupTime: '15:00',
    orderStatus: '결제완료',
    createdAt: '2023-08-15T15:00:33'
}
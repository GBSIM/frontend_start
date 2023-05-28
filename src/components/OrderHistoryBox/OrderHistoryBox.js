import './OrderHistoryBox.css';

import UnitBoxContainer from '../UnitBoxContainer/UnitBoxContainer';

export default function OrderHistoryBox(props) {
    let PickupDate;
    if (props.orderType === 'pickup') {
        PickupDate = 
            <div className='order-history-box-info'>
                <span className='order-history-box-info-title'>픽업 날짜</span>
                <span className='order-history-box-info-value'>{props.pickupDate} {props.pickupTime}</span>
            </div>
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
                        <span className='order-history-box-info-value'>{props.orderDate}</span>
                    </div>
                    <div className='order-history-box-info'>
                        <span className='order-history-box-info-title'>주문한 상품</span>
                        <span className='order-history-box-info-value'>{props.items}</span>
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
            <button className='order-history-box-detail-button'>
                <span className='order-history-box-detail-button-text'>상세보기</span>
            </button>
        </UnitBoxContainer>
    )
}

OrderHistoryBox.defaultProps = {
    orderType: 'pickup',
    orderDate: '2023.12.31',
    items: '바스크치즈케이크',
    payedMoney: 42000,
    pickupDate: '2023.12.31',
    pickupTime: '15:00',
    orderStatus: '결제완료',
}
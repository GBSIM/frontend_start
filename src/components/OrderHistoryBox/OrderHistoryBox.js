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
    let itemSummary;
    if (props.items.length > 1) {
        itemSummary = props.items[0].name + '외 ' + String(props.items.length - 1) + '건';
    } else {
        itemSummary = props.items[0].name;
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
            <button className='order-history-box-detail-button'>
                <span className='order-history-box-detail-button-text'>상세보기</span>
            </button>
        </UnitBoxContainer>
    )
}

OrderHistoryBox.defaultProps = {
    orderType: 'pickup',
    orderDate: '2023.12.31',
    items: [{name:'바스크치즈케이크',price:42000},{name:'골드키위요거트생크림케이크',price:45000}],
    payedMoney: 42000,
    pickupDate: '2023.12.31',
    pickupTime: '15:00',
    orderStatus: '결제완료',
}
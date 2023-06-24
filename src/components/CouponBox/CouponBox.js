import './CouponBox.css';

import UnitBoxContainer from '../UnitBoxContainer/UnitBoxContainer';

export default function CouponBox(props) {
    if (!props.name) {
        return (
            <UnitBoxContainer>
                <div className='coupon'>
                    <span className='coupon-text'>사용 가능한 쿠폰이 없어요.</span>
                </div>
            </UnitBoxContainer>
        )
    } else {
        return (
            <UnitBoxContainer>
                <div className='coupon'>
                    <h3 className='coupon-title'>{props.name}</h3>
                    <span className='coupon-text description'>{props.description}</span>
                    <span className='coupon-text minimumOrderPrice'>최소주문금액: {props.minimumOrderPrice.toLocaleString()}원</span>
                    <span className='coupon-text period'>사용기간: {props.startDate} ~ {props.endDate}</span>
                </div>
            </UnitBoxContainer>
        )
    }
}

CouponBox.defaultProps = {
    name: '쿠폰이름',
    description: '쿠폰 설명을 적어주세요.',
    minimumOrderPrice: 6000,
    startDate: '2023-06-30',
    endDate: '2023-12-31',
}
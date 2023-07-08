import './CouponContentsContainer.css';

import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";
import CouponBox from "../CouponBox/CouponBox";

export default function CouponContentsContainer(props) {
    const CouponList = props.couponList.map((coupon,index) => {
        return (
            <CouponBox
                name={coupon.name}
                description={coupon.description}
                minimumOrderPrice={coupon.minimumOrderPrice}
                startDate={coupon.startDate}
                endDate={coupon.endDate}
                key={['coupon-box-'+index]}/>
        )
    })

    if (props.couponList && Array.isArray(props.couponList) && (props.couponList.length > 0)) {
        return (
            <UnitContentsContainer title='쿠폰'>
                {CouponList}
            </UnitContentsContainer>
        )
    } else {
        return (
            <UnitContentsContainer title='쿠폰'>
                <div className="coupon-none-guide-container">
                    <span className="coupon-none-guide">
                        보유하신 쿠폰이 없습니다.
                    </span>
                </div>
            </UnitContentsContainer>
        )
    }
}

CouponContentsContainer.defaultProps = {
    couponList: [
        {name: '쿠폰이름',
         description: '쿠폰 설명을 적어주세요.',
         minimumOrderPrice: 6000,
         startDate: '2023-06-30',
         endDate: '2023-12-31',},
        {name: '쿠폰이름',
         description: '쿠폰 설명을 적어주세요.',
         minimumOrderPrice: 6000,
         startDate: '2023-06-30',
         endDate: '2023-12-31',},
        {name: '쿠폰이름',
         description: '쿠폰 설명을 적어주세요.',
         minimumOrderPrice: 6000,
         startDate: '2023-06-30',
         endDate: '2023-12-31',}
    ]
}
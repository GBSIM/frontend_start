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

    return (
        <UnitContentsContainer title='쿠폰'>
            {CouponList}
        </UnitContentsContainer>
    )
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
import '../default.css';

import Header from "../components/Header/Header"
import UnderlineNavContainer from '../components/UnderlineNavContainer/UnderlineNavContainer';
import OrderHistoryContentsContainer from '../components/OrderHistoryContentsContainer/OrderHistoryContentsContainer';
import ShippingContentsContainer from '../components/ShippingContentsContainer/ShippingContentsContainer';
import CouponContentsContainer from '../components/CouponContentsContainer/CouponContentsContainer';
import UserClass from '../components/UserClass/UserClass';
import Footer from '../components/Footer/Footer';

export default function UserView(props) {
    let Contents;
    switch (props.status) {
        case '주문내역':
            Contents = <OrderHistoryContentsContainer/>
            break;
        case '배송지관리':
            Contents = <ShippingContentsContainer/>
            break;
        case '쿠폰':
            Contents = <CouponContentsContainer/>
            break;
        default:
            Contents = <OrderHistoryContentsContainer/>
            break;
    }

    return (
        <div className="page">
            <Header/>
            <div className='contents-container'>
                <div className='contents'>
                    <div style={{'minHeight':'30px'}}></div>
                    <UserClass/>
                </div>
                <div className='contents-spacer cart'/>
                <UnderlineNavContainer navTextList={['주문내역','배송지관리','쿠폰']} linkList={['/user/orderhistory','/user/shippings','/user/coupons']} status={props.status}/>
                <div className='contents'>
                    <div style={{'minHeight':'20px'}}></div>
                    {Contents}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

UserView.defaultProps = {
    status: '주문내역',
}
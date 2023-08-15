import '../default.css';

import { useSelector } from 'react-redux';

import Header from "../components/Header/Header"
import UnderlineNavContainer from '../components/UnderlineNavContainer/UnderlineNavContainer';
import CartItemContentsContainer from '../components/CartItemContentsContainer/CartItemContentsContainer';
import OrderButton from '../components/OrderButton/OrderButton';

export default function CartView(props) {
    const user = useSelector(state => state.user);

    const moveToOrderPage = () => {
        let orderPage;
        switch (props.status) {
            case "배송주문":
                orderPage = '/order/delivery';
                break;
            case "선물주문":
                orderPage = '/order/present';
                break;
            case "픽업주문":
                orderPage = '/order/pickup';
                break;
            default:
                orderPage = '/order/delivery';
        }
        window.location.href = orderPage;
    }

    return (
        <div className="page">
            <Header isLogined={user.isLogined} name={user.name}/>
            <div className='contents-container'>
                <div className='contents-spacer cart'/>
                <UnderlineNavContainer navTextList={['배송주문','선물주문','픽업주문']} linkList={['/cart/delivery','/cart/present','/cart/pickup']} status={props.status}/>
                <div className='contents'>
                    <div style={{'minHeight':'20px'}}></div>
                    <CartItemContentsContainer cartItemList={user.deliveryCart}/>
                    <div className='contents-spacer'/>
                    <OrderButton clickEvent={moveToOrderPage}/>
                </div>
            </div>
        </div>
    )
}

CartView.defaultProps = {
    status: '배송주문',
}
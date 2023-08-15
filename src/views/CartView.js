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

    let cartItemList;
        switch (props.status) {
            case "배송주문":
                cartItemList = user.deliveryCart;
                break;
            case "선물주문":                
                cartItemList = user.presentCart;
                break;
            case "픽업주문":
                cartItemList = user.pickupCart;
                break;
            default:                
                cartItemList = user.deliveryCart;
        }

    let orderButton;
    if (cartItemList) {
        if (cartItemList.length > 0) {
            orderButton = <OrderButton clickEvent={moveToOrderPage}/>
        }
    }

    return (
        <div className="page">
            <Header isLogined={user.isLogined} name={user.name} cartItemNumber={user.deliveryCart.length+user.pickupCart.length+user.presentCart}/>
            <div className='contents-container'>
                <div className='contents-spacer cart'/>
                <UnderlineNavContainer navTextList={['배송주문','선물주문','픽업주문']} linkList={['/cart/delivery','/cart/present','/cart/pickup']} status={props.status}/>
                <div className='contents'>
                    <div style={{'minHeight':'20px'}}></div>
                    <CartItemContentsContainer cartItemList={cartItemList}/>
                    <div className='contents-spacer'/>
                </div>
                {orderButton}
            </div>
        </div>
    )
}

CartView.defaultProps = {
    status: '배송주문',
}
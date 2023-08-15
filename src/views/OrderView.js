import '../default.css';

import { useSelector } from 'react-redux';

import Header from "../components/Header/Header";
import OrderSheetContentsContainer from '../components/OrderSheetContentsContainer/OrderSheetContentsContainer';
import CustomerInfoContentsContainer from '../components/CustomerInfoContentsContainer/CustomerInfoContentsContainer';
import ShippingContentsContainer from '../components/ShippingContentsContainer/ShippingContentsContainer';
import OrderCalendarContetnsContainer from '../components/OrderCalendarContentsContainer/OrderCalendarContentsContainer';
import OrderButton from '../components/OrderButton/OrderButton';

export default function OrderView(props) {
    const user = useSelector(state => state.user);

    let CalendarBox;
    if (props.status === '픽업주문') {
        CalendarBox =
            <OrderCalendarContetnsContainer
                title='픽업날짜'
                isTimeNeeded={true}
                isStoreVisitNeeded={true}
                startDate={String(new Date().getFullYear())+'-'+String(new Date().getMonth()+1)+'-'+String(new Date().getDate() + 2)}
                endDate={String(new Date().getFullYear())+'-'+String(new Date().getMonth()+1)+'-'+String(new Date().getDate() + 21)}
                unselectableDayList={[1,4]}/>
    } else if (props.status === '선물주문') {
        CalendarBox =
            <OrderCalendarContetnsContainer
                title='퀵 배송 날짜'
                isTimeNeeded={true}
                isStoreVisitNeeded={false}
                startDate={String(new Date().getFullYear())+'-'+String(new Date().getMonth()+1)+'-'+String(new Date().getDate() + 7)}
                endDate={String(new Date().getFullYear())+'-'+String(new Date().getMonth()+1)+'-'+String(new Date().getDate() + 21)}
                unselectableDayList={[]}/>
    }

    let cart;
    switch (props.status) {
        case '배송주문':
            cart = user.deliveryCart;
            break;
        case '선물주문':
            cart = user.presentCart;
            break;
        case '픽업주문':
            cart = user.pickupCart;
            break;
        default:
            cart = user.deliveryCart;
            break;
    }

    let totalPrice = 0;
    cart.map((item) => {
        if (item.isChecked) {
            if (item.option.name) {
                totalPrice = totalPrice + item.option.price * item.quantity;    
            } else {
                totalPrice = totalPrice + item.price * item.quantity;
            }
        }
    })
    if (props.status === '배송주문') totalPrice = totalPrice + 4000;
    if (props.status === '선물주문') totalPrice = totalPrice + 70000;
    const orderButtonText = totalPrice.toLocaleString() + '원 결제하기'

    return (
        <div className="page">
            <Header isLogined={user.isLogined} name={user.name} cartItemNumber={user.deliveryCart.length+user.pickupCart.length+user.presentCart} userClass={user.class}/>
            <div className='contents-container'>
                <div className='contents'>
                    <div style={{'minHeight':'30px'}}></div>
                    <OrderSheetContentsContainer items={cart} status={props.status}/>
                    <div style={{'minHeight':'30px'}}></div>
                    <CustomerInfoContentsContainer name={user.name} phone={user.phone} email={user.email}/>
                    <div style={{'minHeight':'30px'}}></div>
                    <ShippingContentsContainer shippingList={user.shippings} activatedIndex={user.shippingIndex}/>
                    <div style={{'minHeight':'30px'}}></div>
                    {CalendarBox}
                    <div style={{'minHeight':'30px'}}></div>
                    <OrderButton text={orderButtonText}/>
                </div>
            </div>
        </div>
    )
}

OrderView.defaultProps = {
    status: '배송주문',
}
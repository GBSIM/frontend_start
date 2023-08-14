import '../default.css';

import Header from "../components/Header/Header";
import OrderSheetContentsContainer from '../components/OrderSheetContentsContainer/OrderSheetContentsContainer';
import CustomerInfoContentsContainer from '../components/CustomerInfoContentsContainer/CustomerInfoContentsContainer';
import ShippingContentsContainer from '../components/ShippingContentsContainer/ShippingContentsContainer';
import OrderCalendarContetnsContainer from '../components/OrderCalendarContentsContainer/OrderCalendarContentsContainer';
import OrderButton from '../components/OrderButton/OrderButton';

export default function OrderView(props) {
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

    const totalPrice = 20000
    const orderButtonText = totalPrice.toLocaleString() + '원 결제하기'

    return (
        <div className="page">
            <Header/>
            <div className='contents-container'>
                <div className='contents'>
                    <div style={{'minHeight':'30px'}}></div>
                    <OrderSheetContentsContainer/>
                    <div style={{'minHeight':'30px'}}></div>
                    <CustomerInfoContentsContainer/>
                    <div style={{'minHeight':'30px'}}></div>
                    <ShippingContentsContainer/>
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
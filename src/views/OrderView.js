import '../default.css';

import Header from "../components/Header/Header";
import OrderSheetContentsContainer from '../components/OrderSheetContentsContainer/OrderSheetContentsContainer';
import CustomerInfoContentsContainer from '../components/CustomerInfoContentsContainer/CustomerInfoContentsContainer';
import ShippingContentsContainer from '../components/ShippingContentsContainer/ShippingContentsContainer';
import CalendarContetnsContainer from '../components/CalendarContentsContainer/CalendarContentsContainer';
import OrderButton from '../components/OrderButton/OrderButton';

export default function OrderView(props) {
    let CalendarBox;
    if (props.status === '픽업주문') {
        CalendarBox =
            <CalendarContetnsContainer
                title='픽업날짜'
                isTimeNeeded={true}/>
    } else if (props.status === '선물주문') {
        CalendarBox =
            <CalendarContetnsContainer
                title='퀵 배송 날짜'
                isTimeNeeded={false}/>
    }

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
                    <OrderButton/>
                </div>
            </div>
        </div>
    )
}

OrderView.defaultProps = {
    status: '배송주문',
}
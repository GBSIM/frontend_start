import '../default.css';

import Header from "../components/Header/Header";
import OrderSheetContentsContainer from '../components/OrderSheetContentsContainer/OrderSheetContentsContainer';
import CustomerInfoContentsContainer from '../components/CustomerInfoContentsContainer/CustomerInfoContentsContainer';
import Calendar from '../components/Calendar/Calendar';

export default function OrderView(props) {
    let CalendarBox;
    if (props.status === '픽업주문') {
        CalendarBox =
            <div style={{'width': '100%','display':'flex','flexDirection':'column','alignItems':'center'}}>
                <div style={{'width': '100%','display':'flex','flexDirection':'row','alignItems':'center','justifyContent':'center'}}>
                    <h1 style={{'color':'#bbb'}}>
                        픽업날짜
                    </h1>
                </div>
                <div style={{'minHeight':'30px'}}></div>
                <Calendar/>
                <div style={{'minHeight':'30px'}}></div>
                <div style={{'width': '100%','display':'flex','flexDirection':'row','alignItems':'center','justifyContent':'center'}}>
                    <span style={{'color':'#666'}}>
                        2023년 7월 31일을 선택하셨어요.
                    </span>
                </div>
                <div style={{'minHeight':'5px'}}></div>
                <div style={{'width': '100%','display':'flex','flexDirection':'row','alignItems':'center','justifyContent':'center'}}>
                    <span style={{'color':'#666'}}>
                        매장에 14:00에 방문해주세요.
                    </span>
                </div>
            </div>
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
                    {CalendarBox}
                </div>
            </div>
        </div>
    )
}

OrderView.defaultProps = {
    status: '배송주문',
}
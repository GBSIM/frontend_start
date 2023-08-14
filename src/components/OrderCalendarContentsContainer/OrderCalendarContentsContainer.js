import './OrderCalendarContentsContainer.css';

import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";
import Calendar from "../Calendar/Calendar";
import TimeSelector from '../TimeSelector/TimeSelector';

export default function OrderCalendarContetnsContainer(props) {
    let timeSelector;
    if (props.isTimeNeeded) {
        timeSelector = 
            <div className='order-calendar-contents-container-time-selector-container'>
                <TimeSelector/>
            </div>
    }

    const dateGuide = 
        <div className="order-calendar-contents-container-date-guide">
            <h3 className="order-calendar-contents-container-date">
                {props.year}년 {props.month}월 {props.day}일을 선택하셨어요.
            </h3>
        </div>

    let timeGuide;
    if (props.isTimeNeeded) {
        if (props.minute > 0) {
            if (props.isStoreVisitNeeded) {
                timeGuide = 
                <div className="order-calendar-contents-container-time-guide">
                    <h3 className="order-calendar-contents-container-time">
                        {props.hour}시에 {props.minute}분에 방문해주세요.
                    </h3>
                </div>
            } else {
                timeGuide = 
                <div className="order-calendar-contents-container-time-guide">
                    <h3 className="order-calendar-contents-container-time">
                        {props.hour}시에 {props.minute}분에 맞춰 배송해드릴게요.
                    </h3>
                </div>
            }
        } else {
            if (props.isStoreVisitNeeded) {
                timeGuide = 
                <div className="order-calendar-contents-container-time-guide">
                    <h3 className="order-calendar-contents-container-time">
                        {props.hour}시에 방문해주세요.
                    </h3>
                </div>
            } else {
                timeGuide = 
                <div className="order-calendar-contents-container-time-guide">
                    <h3 className="order-calendar-contents-container-time">
                        {props.hour}시에 맞춰 배송해드릴게요.
                    </h3>
                </div>
            }
        } 
    }

    return (
        <UnitContentsContainer title={props.title}>
            <div style={{'minHeight':'30px'}}></div>
            <Calendar startDate={props.startDate} endDate={props.endDate} unselectableDayList={props.unselectableDayList}/>
            {timeSelector}
            <div style={{'minHeight':'20px'}}></div>
            {dateGuide}
            <div style={{'minHeight':'5px'}}></div>
            {timeGuide}
            <div style={{'minHeight':'30px'}}></div>
            <div style={{'width':'100%','minHeight':'1px','backgroundColor':'#eee'}}></div>
        </UnitContentsContainer>
    )
}

OrderCalendarContetnsContainer.defaultProps = {
    title: '픽업날짜',
    year: 2023,
    month: 8,
    day: 15,
    hour: 15,
    minute: 0,
    startDate: String(new Date().getFullYear())+'-'+String(new Date().getMonth()+1)+'-'+String(new Date().getDate()),
    endDate: String(new Date().getFullYear())+'-'+String(new Date().getMonth()+1)+'-'+String(new Date().getDate() + 7),
    unselectableDayList: [1,4],
    isTimeNeeded: true,
    isStoreVisitNeeded: false,
}
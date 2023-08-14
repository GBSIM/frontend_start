import './OrderCalendarContentsContainer.css';

import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";

import Calendar from "../Calendar/Calendar";

export default function OrderCalendarContetnsContainer(props) {
    const DateGuide = 
        <div className="calendar-contents-container-date-guide">
            <h3 className="calendar-contents-container-date">
                {props.year}년 {props.month}월 {props.day}일을 선택하셨어요.
            </h3>
        </div>

    let TimeGuide;
    if (props.isTimeNeeded) {
        if (props.minute > 0) {
            TimeGuide = 
                <div className="calendar-contents-container-time-guide">
                    <h3 className="calendar-contents-container-time">
                        {props.hour}시에 {props.minute}분에 방문해주세요.
                    </h3>
                </div>
        } else {
            TimeGuide = 
                <div className="calendar-contents-container-time-guide">
                    <h3 className="calendar-contents-container-time">
                        {props.hour}시에 매장으로 방문해주세요.
                    </h3>
                </div>
        }   
    }

    return (
        <UnitContentsContainer title={props.title}>
            <div style={{'minHeight':'30px'}}></div>
            <Calendar/>
            <div style={{'minHeight':'20px'}}></div>
            {DateGuide}
            <div style={{'minHeight':'5px'}}></div>
            {TimeGuide}
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
    isTimeNeeded: true,
}
import './Calendar.css';

import { useState } from 'react';

export default function Calendar(props) {
    const today = new Date();
    const [selectedYear, setYear] = useState(today.getFullYear());
    const [selectedMonth, setMonth] = useState(today.getMonth() + 1);
    const [selectedDate, setDate] = useState(today.getDate());

    const ChangeDate = (date) => {
        setDate(date);
        props.clickEvent(selectedYear,selectedMonth,date);
    }

    const currentDate = new Date(selectedYear,selectedMonth-1,selectedDate);
    let dateList = Array.from({length: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()}, () => 0);
    for (var dateStep = 1; dateStep <= new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); dateStep++) {
        dateList.push(dateStep);
    }
    console.log((new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay()));
    for (var dayStep = (new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay());dayStep < 6;dayStep++) {
        dateList.push(0);
    }

    const CalendarDays = dateList.map((date,index) => {
        let startDate = new Date(props.startDate.split('-')[0],props.startDate.split('-')[1],props.startDate.split('-')[2]);
        let endDate = new Date(props.endDate.split('-')[0],props.endDate.split('-')[1],props.endDate.split('-')[2]);
        let standardDate = new Date(selectedYear,selectedMonth,date);
        let dayOfStandardDate = standardDate.getDay();
        return (
            <CalendarDay 
                date={date} 
                isOn={date===selectedDate}
                clickEvent={ChangeDate}
                key={'calendar-day-'+index}
                isSelectable={(startDate <= standardDate) && (standardDate <= endDate) && (!props.unselectableDayList.includes(dayOfStandardDate))}/>
        )
    })

    const moveToPreviousMonth = () => {
        if (selectedMonth === 1) {
            setMonth(12);
            setYear(selectedYear-1);
        } else {
            setMonth(selectedMonth - 1);
        }
    }

    const moveToNextMonth = () => {
        if (selectedMonth === 12) {
            setMonth(1);
            setYear(selectedYear + 1);
        } else {
            setMonth(selectedMonth + 1);
        }
    }

    const dayOfWeekList = ['일','월','화','수','목','금','토'];
    const DayOfWeeks = dayOfWeekList.map((dayName) => {
        return (
            <DayOfWeek
                dayName={dayName}
                key={'caledar-day-'+dayName}/>
        )
    })

    return (
        <div className='calendar'>
            <div className='calendar-row'>
                <h3 className='calendar-year'>
                    {selectedYear}
                </h3>
            </div>
            <div style={{'minHeight':'4px'}}></div>
            <div className='calendar-row'>
                <button className='calendar-month-arrow-button' onClick={() => moveToPreviousMonth()}>
                    <img className='calendar-month-arrow-button-image' 
                         alt='left-arrow'
                         src={require('../../icons/inequity_left_white.png')}/>
                </button>
                <h2 className='calendar-month'>
                    {selectedMonth}월
                </h2>
                <button className='calendar-month-arrow-button' onClick={() => moveToNextMonth()}>
                    <img className='calendar-month-arrow-button-image' 
                         alt='right-arrow'
                         src={require('../../icons/inequity_right_white.png')}/>
                </button>
            </div>
            <div style={{'minHeight':'20px'}}></div>
            <div className='calendar-days-container'>
                {DayOfWeeks}
                {CalendarDays}
            </div>
        </div>
    )
}

function DayOfWeek(props) {
    return (
        <div className='calendar-day-of-week'>
            <span className='calendar-day-of-week-text'>
                {props.dayName}
            </span>
        </div>
    )
}

function CalendarDay(props) {
    if (props.date > 0) {
        if (props.isSelectable) {
            if (props.isOn) {
                return (
                    <div className='calendar-day'>
                        <button className='calendar-day-button on'>
                            <span className='calendar-day-text on'>
                                {props.date}
                            </span>
                        </button>
                    </div>
                    )
            } else {
                return (
                    <div className='calendar-day'>
                        <button className='calendar-day-button' onClick={() => props.clickEvent(props.date)}>
                            <span className='calendar-day-text'>
                                {props.date}
                            </span>
                        </button>
                    </div>
                )
            }
        } else {
            return (
                <div className='calendar-day'>
                    <button className='calendar-day-button' disabled>
                        <span className='calendar-day-text deactivated'>
                            {props.date}
                        </span>
                    </button>
                </div>
            )
        }
        
    } else {
        return (
            <div className='calendar-day'>

            </div>
        )
    }    
}

const defaultClickEvent = () => {
    
}

Calendar.defaultProps = {
    startDate: String(new Date().getFullYear())+'-'+String(new Date().getMonth()+1)+'-'+String(new Date().getDate()),
    endDate: String(new Date().getFullYear())+'-'+String(new Date().getMonth()+1)+'-'+String(new Date().getDate() + 7),
    unselectableDayList: [1,4],
    clickEvent: defaultClickEvent,
}

CalendarDay.defaultProps = {
    date: 1,
    isOn: false,
    isSelectable: true,
}
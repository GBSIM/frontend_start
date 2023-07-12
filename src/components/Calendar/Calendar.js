import './Calendar.css';

import { useState } from 'react';

export default function Calendar(props) {
    const today = new Date();
    const [selectedYear, setYear] = useState(today.getFullYear());
    const [selectedMonth, setMonth] = useState(today.getMonth() + 1);
    const [selectedDate, setDate] = useState(today.getDate());

    const ChangeDate = (date) => {
        setDate(date);
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
        return (
            <CalendarDay 
                date={date} 
                isOn={date===selectedDate}
                clickEvent={ChangeDate}
                key={'calendar-day-'+index}/>
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

    return (
        <div className='calendar'>
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
                {CalendarDays}
            </div>
        </div>
    )
}

function CalendarDay(props) {
    if (props.date > 0) {
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

            </div>
        )
    }    
}

CalendarDay.defaultProps = {
    date: 1,
    isOn: false,
}
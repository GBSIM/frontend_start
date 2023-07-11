import './Calendar.css';

import { useState } from 'react';

export default function Calendar(props) {
    const today = new Date();
    const [selectedYear, setYear] = useState(today.getFullYear());
    const [selectedMonth, setMonth] = useState(today.getMonth() + 1);
    const [selectedDate, setDate] = useState(today.getDate());

    const currentDate = new Date(selectedYear,selectedMonth-1,selectedDate);
    let dateList = Array.from({length: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() - 1}, () => 0);
    for (var dateStep = 1; dateStep <= new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); dateStep++) {
        dateList.push(dateStep);
    }
    for (var dayStep = (new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay() - 1);dayStep < 6;dayStep++) {
        dateList.push(0);
    }

    const CalendarDays = dateList.map((date) => {
        return (
            <CalendarDay date={date} isOn={date===selectedDate}/>
        )
    })

    return (
        <div className='calendar'>
            <div className='calendar-row'>
                <h2 className='calendar-month'>
                    {selectedMonth}월
                </h2>
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
                    <button className='calendar-day-button'>
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
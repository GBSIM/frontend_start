import './TimeSelector.css';

import { useState } from 'react';

export default function TimeSelector(props) {
    const [selectedTime, setSelectedTime] = useState('12:00');

    const timeArray = ['12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00'];
    const timeOptions = timeArray.map((time) => (
        <option 
            className='time-selector-option'
            value={time} 
            key={time}>
            {time}
        </option>
    ))
    const selectTimeOption = async(e) => {
        setSelectedTime(timeArray[e.target.selectedIndex]);
    }

    return (
        <div className='time-selector'>
            <h3 className='time-selector-title'>{props.title}</h3>
            <select name='option' className='time-selector-options' onChange={selectTimeOption}>
                {timeOptions}
            </select>
        </div>
    )
}

TimeSelector.defaultProps = {
    title: '픽업 시간',
}
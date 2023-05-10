import './Counter.css';

import { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(1);

    const increaseCount = () => {
        setCount(count + 1);
        props.increaseEvent(count);
    }

    const decreaseCount = () => {
        if (count > 1) setCount(count - 1);
        props.decreaseEvent(count);
    }

    let MinusButtonImage;
    if (count === props.minimumCount) {
        MinusButtonImage =
            <img src={''} alt='-' className='counter-button-image'></img>
    } else {
        MinusButtonImage =
            <img src={''} alt='-' className='counter-button-image'></img>
    }

    if (count < props.minimumCount) {
        setCount(props.minimumCount);
    }

    return (
        <div className='counter'>
            <button className='counter-button' onClick={() => decreaseCount()}>
                {MinusButtonImage}
            </button>
            <span className='counter-count'>{count}</span>
            <button className='counter-button' onClick={() => increaseCount()}>
                <img src={''} alt='+' className='counter-button-image'></img>
            </button>
        </div>
    )
}

const defaultClickEvent = () => {
    
}

Counter.defaultProps = {
    minimumCount: 1,
    increaseEvent: defaultClickEvent,
    decreaseEvent: defaultClickEvent
}
import './Counter.css';

export default function Counter(props) {
    let MinusButtonImage;
    if (props.count === props.minimumCount) {
        MinusButtonImage =
            <img src={require('../../icons/minus_grey.png')} alt='-' className='counter-button-image'></img>
    } else {
        MinusButtonImage =
            <img src={require('../../icons/minus_black.png')} alt='-' className='counter-button-image'></img>
    }
    
    return (
        <div className='counter'>
            <button className='counter-button' onClick={() => props.decreaseEvent()}>
                {MinusButtonImage}
            </button>
            <span className='counter-count'>{props.count}</span>
            <button className='counter-button' onClick={() => props.increaseEvent()}>
                <img src={require('../../icons/plus_black.png')} alt='+' className='counter-button-image'></img>
            </button>
        </div>
    )
}

const defaultClickEvent = () => {
    
}

Counter.defaultProps = {
    count: 1,
    minimumCount: 1,
    increaseEvent: defaultClickEvent,
    decreaseEvent: defaultClickEvent
}
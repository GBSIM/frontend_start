import './CheckButton.css';

export default function CheckButton(props) {
    if (props.isOn) {
        return (
            <button className='check-button' style={{'width':props.size,'height':props.size}}>
                <img src={require('../../icons/check_orange.png')} className='check-button-image' alt='O'></img>
            </button>
        )
    } else {
        return (
            <button className='check-button' style={{'width':props.size,'height':props.size}} onClick={() => props.clickEvent()}>
                <img src={require('../../icons/check_grey.png')} className='check-button-image' alt='X'></img>
            </button>
        )
    }
}

const defaultClickEvent = () => {
    
}

CheckButton.defaultProps = {
    size: 20,
    clickEvent: defaultClickEvent
}
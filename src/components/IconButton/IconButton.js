import './IconButton.css';

export default function IconButton(props) {
    return (
        <button className='icon-button' 
                style={{'width':props.width,'height':props.height,'background':props.backgroundColor}} 
                onClick={() => props.clickEvent()}>
            <img src={(props.image)} className='icon-button-image' alt='icon'
                 style={{'width':props.iconWidth, 'height':props.iconHeight}}></img>
        </button>
    )
}


const defaultClickEvent = () => {
    
}

IconButton.defaultProps = {
    image: '',
    width: 34,
    height: 34,
    iconWidth: '80%',
    iconHeight: '80%',
    clickEvent: defaultClickEvent,
    backgroundColor: '#EB5C2E'
}
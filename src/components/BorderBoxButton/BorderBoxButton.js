import './BorderBoxButton.css';

export default function BorderBoxButton(props) {
    let Text
    switch(props.textType) {
        case 'span':
            Text = 
                <span className='border-box-button-text'>
                    {props.text}
                </span>
            break;
        case 'h1':
            Text = 
                <h1 className='border-box-button-text'>
                    {props.text}
                </h1>
            break;
        case 'h2':
            Text = 
                <h2 className='border-box-button-text'>
                    {props.text}
                </h2>
            break;
        case 'h3':
            Text = 
                <h3 className='border-box-button-text'>
                    {props.text}
                </h3>
            break;
        default:
            Text = 
                <span className='border-box-button-text'>
                    {props.text}
                </span>
            break;
    }

    return (
        <button 
            className='border-box-button'
            style={{
                'borderRadius':props.borderRadius,
                'borderWidth':props.borderWidth,
                'width':props.width,
                'paddingLeft':props.paddingLeft,
                'paddingRight':props.paddingRight,
                'paddingTop':props.paddingTop,
                'paddingBottom':props.paddingBottom}}
            onClick={() => props.clickEvent()}>
            {Text}
        </button>
    )
}

const defaultClickEvent = () => {
    
}

BorderBoxButton.defaultProps = {
    borderRadius: 7,
    borderWidth: 1,
    width: 'auto',
    clickEvent: defaultClickEvent,
    paddingLeft: 20,
    paddingTop: 5,
    paddingRight: 20,
    paddingBottom: 5
}
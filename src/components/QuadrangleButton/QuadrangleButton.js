import './QuadrangleButton.css';

export default function QuadrangleButton(props) {
    let Text
    switch(props.textType) {
        case 'span':
            Text = 
                <span className='quadrangle-button-text'>
                    {props.text}
                </span>
            break;
        case 'h1':
            Text = 
                <h1 className='quadrangle-button-text'>
                    {props.text}
                </h1>
            break;
        case 'h2':
            Text = 
                <h2 className='quadrangle-button-text'>
                    {props.text}
                </h2>
            break;
        case 'h3':
            Text = 
                <h3 className='quadrangle-button-text'>
                    {props.text}
                </h3>
            break;
        default:
            Text = 
                <span className='quadrangle-button-text'>
                    {props.text}
                </span>
            break;
    }

    return (
        <button 
            className='quadrangle-button' 
            onClick={() => props.clickEvent()}
            style={{
                "paddingTop": props.paddingTop,
                "paddingBottom": props.paddingBottom,
                "paddingRight": props.paddingRight,
                "paddingLeft": props.paddingLeft,
                "borderRadius": props.borderRadius,
                "width": props.width,
                "backgroundColor": props.backgroundColor,
                "borderColor": props.borderColor
            }}>
            {Text}
        </button>
    )
}

const defaultClickEvent = () => {
    
}

QuadrangleButton.defaultProps = {
    clickEvent: defaultClickEvent,
    textType: 'span',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 8,
    paddingLeft: 8,
    borderRadius: 6,
    text: "텍스트를 입력해주세요.",
    width: '100%',
    backgroundColor: 'rgba(235,92,46,1)',
    borderColor: 'rgba(235,92,46,1)',
}
import './TextIconButton.css';

export default function TextIconButton(props) {
    let Text;
    switch(props.textType) {
        case 'span':
            Text = 
                <span 
                    className='text-icon-button-text'
                    style={{'color':props.color,'fontWeight':500}}>
                    {props.text}
                </span>
            break;
        case 'h1':
            Text = 
                <h1 
                    className='text-icon-button-text'
                    style={{'color':props.color}}>
                    {props.text}
                </h1>
            break;
        case 'h2':
            Text = 
                <h2 
                    className='text-icon-button-text'
                    style={{'color':props.color}}>
                    {props.text}
                </h2>
            break;
        case 'h3':
            Text = 
                <h3 
                    className='text-icon-button-text'
                    style={{'color':props.color}}>
                    {props.text}
                </h3>
            break;
        default: 
            Text = 
                <span 
                    className='text-icon-button-text'
                    style={{'color':props.color}}>
                    {props.text}
                </span>
            break;
    }

    return (
        <button className='text-icon-button' onClick={() => props.clickEvent()}>
            {Text}
            <img src={props.image}
                 className='icon-text-button-image'
                 style={{'height':props.iconSize,'width':props.iconSize}}
                 alt='icon'></img> 
        </button>
    )
}

const defaultClickEvent = () => {
    
}

TextIconButton.defaultProps = {
    image: '',
    iconSize: 34,
    clickEvent: defaultClickEvent,
    textType: 'span',
    color: '#141414',
    text: '텍스트를 입력해주세요.'
}
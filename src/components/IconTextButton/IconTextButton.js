import './IconTextButton.css';

export default function IconTextButton(props) {
    let Text;
    switch(props.textType) {
        case 'span':
            Text = 
                <span 
                    className='icon-text-button-text'
                    style={{'color':props.color}}>
                    {props.text}
                </span>
            break;
        case 'h1':
            Text = 
                <h1 
                    className='icon-text-button-text'
                    style={{'color':props.color}}>
                    {props.text}
                </h1>
            break;
        case 'h2':
            Text = 
                <h2 
                    className='icon-text-button-text'
                    style={{'color':props.color}}>
                    {props.text}
                </h2>
            break;
        case 'h3':
            Text = 
                <h3 
                    className='icon-text-button-text'
                    style={{'color':props.color}}>
                    {props.text}
                </h3>
            break;
        default: 
            Text = 
                <span 
                    className='icon-text-button-text'
                    style={{'color':props.color}}>
                    {props.text}
                </span>
            break;
    }

    return (
        <button className='icon-text-button'>
            <img src={props.image}
                 className='icon-text-button-image'
                 style={{'height':props.iconSize,'width':props.iconSize}}
                 alt='icon'></img> 
            {Text}
        </button>
    )
}

const defaultClickEvent = () => {
    
}

IconTextButton.defaultProps = {
    image: '',
    iconSize: 34,
    clickEvent: defaultClickEvent,
    textType: 'span',
    color: '#141414',
    text: '텍스트를 입력해주세요.'
}
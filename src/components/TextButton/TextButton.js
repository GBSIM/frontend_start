import './TextButton.css';

export default function TextButton(props) {
    let Text;
    switch(props.textType) {
        case 'span':
            Text = 
                <span 
                    className='text-button-text'
                    style={{'color':props.color}}
                    onMouseOver={function(e){e.target.style.color=props.hoverColor}}
                    onMouseOut={function(e){e.target.style.color=props.color}}>
                    {props.text}
                </span>
            break;
        case 'h1':
            Text = 
                <h1 
                    className='text-button-text'
                    style={{'color':props.color}}
                    onMouseOver={function(e){e.target.style.color=props.hoverColor}}
                    onMouseOut={function(e){e.target.style.color=props.color}}>
                    {props.text}
                </h1>
            break;
        case 'h2':
            Text = 
                <h2 
                    className='text-button-text'
                    style={{'color':props.color}}
                    onMouseOver={function(e){e.target.style.color=props.hoverColor}}
                    onMouseOut={function(e){e.target.style.color=props.color}}>
                    {props.text}
                </h2>
            break;
        case 'h3':
            Text = 
                <h3 
                    className='text-button-text'
                    style={{'color':props.color}}
                    onMouseOver={function(e){e.target.style.color=props.hoverColor}}
                    onMouseOut={function(e){e.target.style.color=props.color}}>
                    {props.text}
                </h3>
            break;
        default: 
            Text = 
                <span 
                    className='text-button-text'
                    style={{'color':props.color}}
                    onMouseOver={function(e){e.target.style.color=props.hoverColor}}
                    onMouseOut={function(e){e.target.style.color=props.color}}>
                    {props.text}
                </span>
            break;
    }

    return (
        <button className='text-button' onClick={() => props.clickEvent()}>
            {Text}
        </button>
    )
}

const defaultClickEvent = () => {
    
}

TextButton.defaultProps = {
    textType: 'span',
    color: '#CACACA',
    hoverColor: '#CACACA',
    clickEvent: defaultClickEvent
}
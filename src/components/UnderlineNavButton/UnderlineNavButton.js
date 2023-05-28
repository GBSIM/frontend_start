import './UnderlineNavButton.css';

export default function UnderlineNavButton(props) {
    let ButtonText;
    const borderProperty = '2px solid ' + props.activatedColor;
    switch(props.textType) {
        case "span":
            if (props.isOn) {
                ButtonText = <span style={{'color':props.activatedColor,'fontWeight':'500'}}>{props.text}</span>
            } else {
                ButtonText = <span style={{'color':props.deactivatedColor,'fontWeight':'500'}}>{props.text}</span>
            }
            break;
        case "h1":
            if (props.isOn) {
                ButtonText = <h1 style={{'color':props.activatedColor}}>{props.text}</h1>
            } else {
                ButtonText = <h1 style={{'color':props.deactivatedColor}}>{props.text}</h1>
            }
            break;
        case "h2":
            if (props.isOn) {
                ButtonText = <h2 style={{'color':props.activatedColor}}>{props.text}</h2>
            } else {
                ButtonText = <h2 style={{'color':props.deactivatedColor}}>{props.text}</h2>
            }
            break;
        case "h3":
            if (props.isOn) {
                ButtonText = <h3 style={{'color':props.activatedColor}}>{props.text}</h3>
            } else {
                ButtonText = <h3 style={{'color':props.deactivatedColor}}>{props.text}</h3>
            }
            break;
        default:
            if (props.isOn) {
                ButtonText = <span style={{'color':props.activatedColor}}></span>
            } else {
                ButtonText = <span style={{'color':props.deactivatedColor}}></span>
            }
            break;
    }

    if (props.isOn) {
        return (
            <button className='underline-nav-button' 
                    style={{'borderBottom':borderProperty,'padding':props.padding,'width':props.width}}>
                {ButtonText}
            </button>
        )
    } else {
        return (
            <button className='underline-nav-button' style={{'padding':props.padding,'width':props.width}} onClick={() => props.clickEvent()}>
                {ButtonText}
            </button>
        )
    }
}

const defaultClickEvent = () => {
    
}

UnderlineNavButton.defaultProps = {
    width: 120,
    padding: 7,
    isOn: true,
    activatedColor: '#eb5c2e',
    deactivatedColor: '#CCC',
    textType: 'h3',
    text: '텍스트',
    clickEvent: defaultClickEvent,
}
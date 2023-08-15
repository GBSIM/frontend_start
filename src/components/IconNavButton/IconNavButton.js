import './IconNavButton.css';

import IconButton from '../IconButton/IconButton';

export default function IconNavButton(props) {
    if (props.isOn) {
        return (
            <div className='icon-nav-button' onClick={() => props.clickEvent()}>
                <IconButton 
                    width={40}
                    height={40}
                    backgroundColor='rgba(0,0,0,0)'
                    iconWidth='100%'
                    iconHeight='100%'
                    image={props.activatedImage}
                    altText={props.altText}
                    clickEvent={props.clickEvent}
                />
                <span className='icon-nav-button-text on'>{props.altText}</span>
            </div>
        )
    } else {
        return (
            <div className='icon-nav-button' onClick={() => props.clickEvent()}>
                <IconButton 
                    width={40}
                    height={40}
                    backgroundColor='rgba(0,0,0,0)'
                    iconWidth='100%'
                    iconHeight='100%'
                    image={props.deactivatedImage}
                    altText={props.altText}
                    clickEvent={props.clickEvent}
                />
                <span className='icon-nav-button-text off'>{props.altText}</span>
            </div>
        )
    }
   
}

IconNavButton.defaultProps = {
    pageName: '',
    image: '',
    altText: '',
}
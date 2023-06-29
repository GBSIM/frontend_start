import './IconNavButton.css';

import IconButton from '../IconButton/IconButton';

export default function IconNavButton(props) {
    if (props.isOn) {
        return (
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
        )
    } else {
        return (
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
        )
    }
   
}

IconNavButton.defaultProps = {
    pageName: '',
    image: '',
}
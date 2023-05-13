import './IconNavButton.css';

import IconButton from '../IconButton/IconButton';

export default function IconNavButton(props) {
    return (
        <IconButton 
            width={40}
            height={40}
            backgroundColor='rgba(0,0,0,0)'
            iconWidth='100%'
            iconHeight='100%'
            image=''
            altText={props.altText}
            clickEvent={props.clickEvent}
        />
    )
}

IconNavButton.defaultProps = {
    pageName: ''
}
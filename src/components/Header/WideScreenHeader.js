import './WideScreenHeader.css';

import LogoButton from '../LogoButton/LogoButton';
import TextNavContainer from '../TextNavContainer/TextNavContainer';
import LoginButton from '../LoginButton/LoginButton';

export default function WideScreenHeader(props) {
    return (
        <div 
            className="wide-screen-header" 
            style={{
                "minHeight":props.height,
                "maxHeight":props.height,
                "paddingLeft":props.paddingLeft,
                "paddingRight":props.paddingRight,}}>
            <LogoButton height='40px' width='100px'></LogoButton>
            <div style={{'minWidth':'20px'}}></div>
            <TextNavContainer></TextNavContainer>
            <div style={{'flex':1}}></div>
            <LoginButton />
        </div>
    )
}

WideScreenHeader.defaultProps = {
    height: 60
}
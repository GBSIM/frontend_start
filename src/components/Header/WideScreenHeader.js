import './WideScreenHeader.css';

import LogoButton from '../LogoButton/LogoButton';
import TextNavContainer from '../TextNavContainer/TextNavContainer';
import LoginButton from '../LoginButton/LoginButton';
import UserButton from '../UserButton/UserButton';

export default function WideScreenHeader(props) {
    let AccountButton;
    if (props.isLogined) {
        AccountButton = <UserButton name={props.name}/>
    } else {
        AccountButton = <LoginButton/>
    }

    return (
        <div 
            className="wide-screen-header" 
            style={{
                "minHeight":props.height,
                "maxHeight":props.height}}>
            <div
                className='wide-screen-header-contents'
                style={{
                    "paddingLeft":props.paddingLeft,
                    "paddingRight":props.paddingRight,}}>
                <LogoButton height='40px' width='100px'></LogoButton>
                <div style={{'minWidth':'20px'}}></div>
                <TextNavContainer></TextNavContainer>
                <div style={{'flex':1}}></div>
                {AccountButton}
            </div>
        </div>
    )
}

WideScreenHeader.defaultProps = {
    height: 60,
    name: '장원영',
    isLogined: true,
}
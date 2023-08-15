import './WideScreenHeader.css';

import LogoButton from '../LogoButton/LogoButton';
import TextNavContainer from '../TextNavContainer/TextNavContainer';
import LoginButton from '../LoginButton/LoginButton';
import UserButton from '../UserButton/UserButton';
import LikesPageButton from '../LikesPageButton/LikesPageButton';
import CartPageButton from '../CartPageButton/CartPageButton';

export default function WideScreenHeader(props) {
    let AccountButton;
    if (props.isLogined) {
        AccountButton = 
            <div className='wide-screen-header-account-buttons'>
                <LikesPageButton/>
                <div style={{'minWidth':'2px'}}></div>
                <CartPageButton itemNumber={props.cartItemNumber}/>
                <div style={{'minWidth':'25px'}}></div>
                <UserButton name={props.name} userClass={props.userClass}/>        
            </div>
        
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
    isLogined: false,
    cartItemNumber: 0,
    userClass: 0,
}
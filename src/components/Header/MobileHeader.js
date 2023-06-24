import './MobileHeader.css';

import LogoButton from '../LogoButton/LogoButton';
import LikesPageButton from '../LikesPageButton/LikesPageButton';
import CartPageButton from '../CartPageButton/CartPageButton';

export default function MobileHeader(props) {
    return (
        <div className="mobile-header" style={{"minHeight":props.height}}>
            <LogoButton height='40px' width='100px'></LogoButton>
            <div className='mobile-header-spacer'></div>
            <LikesPageButton/>
            <CartPageButton/>
        </div>
    )
}

MobileHeader.defaultProps = {
    height: 50,
    isLogined: true,
}
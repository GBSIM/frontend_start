import './MobileFooter.css';

import IconNavContainer from '../IconNavContainer/IconNavContainer';
import CartAddButton from '../CartAddButton/CartAddButton';

export default function MobileFooter(props) {
    let MobileFooterContents;
    switch(props.type) {
        case 'nav':
            MobileFooterContents =
                <div className='mobile-footer-nav-container'>
                    <IconNavContainer/>
                </div>
            break;
        case 'cart':
            MobileFooterContents =
                <div className='mobile-footer-cart-add-button-container'>
                    <CartAddButton textType='h3' paddingBottom={10} paddingTop={10}/>
                </div>
            break;
        default:
            MobileFooterContents = 
                <div className='mobile-footer-nav-container'>
                    <IconNavContainer/>
                </div>
            break;
    }

    return (
        <div className='mobile-footer'>
            {MobileFooterContents}
        </div>
    )
}
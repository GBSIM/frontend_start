import './Footer.css';

import MobileFooter from './MobileFooter';

export default function Footer(props) {
    return (
        <div className="footer">
            <MobileFooter type={props.type} isLogined={props.isLogined}></MobileFooter>
        </div>
    )
}

Footer.defaultProps = {
    type: 'nav',
    isLogined: false,
}
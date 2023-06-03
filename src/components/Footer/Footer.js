import './Footer.css';

import MobileFooter from './MobileFooter';

export default function Footer(props) {
    return (
        <div className="footer">
            <MobileFooter type={props.type}></MobileFooter>
        </div>
    )
}

Footer.defaultProps = {
    type: 'nav',
}
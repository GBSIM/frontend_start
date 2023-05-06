import './Header.css';

import WideScreenHeader from './WideScreenHeader';
import MobileHeader from './MobileHeader';

export default function Header(props) {
    return (
        <div className="header">
            <WideScreenHeader height={props.wideScreenHeaderHeight} leftPadding={30}></WideScreenHeader>
            <MobileHeader height={props.mobileHeaderHeight}></MobileHeader>
        </div>
    )
}
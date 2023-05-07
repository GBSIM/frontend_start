import './Header.css';

import WideScreenHeader from './WideScreenHeader';
import MobileHeader from './MobileHeader';

export default function Header(props) {
    return (
        <div className="header">
            <WideScreenHeader 
                height={props.wideScreenHeaderHeight} 
                paddingLeft={30}
                paddingRight={30} />
            <MobileHeader height={props.mobileHeaderHeight} />
        </div>
    )
}
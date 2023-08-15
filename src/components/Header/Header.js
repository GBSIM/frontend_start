import './Header.css';

import WideScreenHeader from './WideScreenHeader';
import MobileHeader from './MobileHeader';

export default function Header(props) {
    return (
        <div className="header">
            <WideScreenHeader 
                height={props.wideScreenHeaderHeight} 
                paddingLeft={30}
                paddingRight={30}
                isLogined={props.isLogined}
                name={props.name}/>
            <MobileHeader 
                height={props.mobileHeaderHeight}
                isLogined={props.isLogined}/>
        </div>
    )
}

Header.defaultProps = {
    isLogined: false,
    name: '이름',
}
import './Header.css';

import { useSelector } from 'react-redux';

import WideScreenHeader from './WideScreenHeader';
import MobileHeader from './MobileHeader';

export default function Header(props) {
    const { isLogined, name } = useSelector(state => state.user);

    return (
        <div className="header">
            <WideScreenHeader 
                height={props.wideScreenHeaderHeight} 
                paddingLeft={30}
                paddingRight={30}
                isLogined={isLogined}
                name={name}/>
            <MobileHeader 
                height={props.mobileHeaderHeight}
                isLogined={isLogined}/>
        </div>
    )
}
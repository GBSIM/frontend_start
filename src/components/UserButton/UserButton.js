import './UserButton.css';

import { useState } from 'react';

import TextIconButton from '../TextIconButton/TextIconButton';
import UserMenuWindow from '../UserMenuWindow/UserMenuWindow';

export default function UserButton(props) {
    const [isUserMenuWindowOn,setUserMenuWindowOn] = useState(false);

    const showUserMenuWindow = () => {
        setUserMenuWindowOn(true);
    }

    const hideUserMenuWindow = () => {
        setUserMenuWindowOn(false);
    }

    return (
        <div className='user-button' onMouseOver={() => showUserMenuWindow()} onMouseLeave={() => hideUserMenuWindow()}>
            <TextIconButton
                text={(props.name)+'님'}
                color='#666'
                image={require('../../icons/inequity_down_grey.png')}
                iconSize={16}/>
            <UserMenuWindow isOn={isUserMenuWindowOn} userClass={props.userClass}/>
        </div>
        
    )
}

UserButton.defaultProps = {
    name: '장원영',
    userClass: 0,
}
import './UserButton.css';

import { useState } from 'react';

import TextIconButton from '../TextIconButton/TextIconButton';
import UserMenuWindow from '../UserMenuWindow/UserMenuWindow';

export default function UserButton(props) {
    const [isUserMenuWindowOn,setUserMenuWindowOn] = useState(false);

    const changeUserMenuWindwowOnStatus = () => {
        if (isUserMenuWindowOn) {
            setUserMenuWindowOn(false);
        } else {
            setUserMenuWindowOn(true);
        }
    }

    return (
        <div className='user-button'>
            <TextIconButton
                text={(props.name)+'님'}
                color='#666'
                image={require('../../icons/inequity_down_grey.png')}
                iconSize={16}
                clickEvent={changeUserMenuWindwowOnStatus}/>
            <UserMenuWindow isOn={isUserMenuWindowOn}/>
        </div>
        
    )
}

UserButton.defaultProps = {
    name: '장원영',

}
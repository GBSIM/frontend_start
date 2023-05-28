import './UnderlineNavContainer.css';

import { useState } from 'react';

import UnderlineNavButton from '../UnderlineNavButton/UnderlineNavButton';

export default function UnderlineNavContainer(props) {
    const [nav, setNav] = useState(props.initialNav)

    let navButtonEvent;
    const UnderlineNavButtons = props.navTextList.map((navText) => {
        navButtonEvent = () => {
            console.log(navText);
            setNav(navText);
        }
        return (
            <UnderlineNavButton
                text={navText}
                isOn={navText === nav}
                clickEvent={navButtonEvent}/>
        )
    })

    return (
        <div className='underline-nav-container'>
            {UnderlineNavButtons}
        </div>
    )
}

UnderlineNavContainer.defaultProps = {
    initialNav: 'nav1',
    navTextList: ['nav1','nav2','nav3'],
}


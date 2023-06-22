import './UnderlineNavContainer.css';

import { useState } from 'react';

import UnderlineNavButton from '../UnderlineNavButton/UnderlineNavButton';

export default function UnderlineNavContainer(props) {

    let navButtonEvent;
    const UnderlineNavButtons = props.navTextList.map((navText,index) => {
        navButtonEvent = () => {
            window.location.href = props.linkList[index];
        }
        return (
            <UnderlineNavButton
                text={navText}
                isOn={navText === props.status}
                clickEvent={navButtonEvent}
                key={'underline-nav-'+index}/>
        )
    })

    return (
        <div className='underline-nav-container'>
            {UnderlineNavButtons}
        </div>
    )
}

UnderlineNavContainer.defaultProps = {
    status: 'nav1',
    navTextList: ['nav1','nav2','nav3'],
    linkList: ['nav1','nav2','nav3']
}


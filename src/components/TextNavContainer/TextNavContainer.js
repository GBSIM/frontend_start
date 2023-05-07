import './TextNavContainer.css';

import NavButton from '../NavButton/NavButton';

export default function TextNavContainer(props) {
    const NavButtons = props.navTextList.map((navText,index) => (
        <NavButton
            text={navText}
            key={'nav-button-'+String(index)}/>
    ))

    return (
        <div className='nav-container'>
            {NavButtons}
        </div>
    )
}

TextNavContainer.defaultProps = {
    navTextList: ['page1','page2','page3']
}
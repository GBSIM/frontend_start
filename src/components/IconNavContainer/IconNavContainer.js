import './IconNavContainer.css';

import IconNavButton from '../IconNavButton/IconNavButton';

export default function IconNavContainer() {
    return (
        <div className="icon-nav-container">
            <IconNavButton/>
            <IconNavButton />
            <IconNavButton />
            <IconNavButton altText='user'/>
        </div>
    )
}
import './MobileHeader.css';

import LogoButton from '../LogoButton/LogoButton';

export default function MobileHeader(props) {
    return (
        <div className="mobile-header" style={{"minHeight":props.height}}>
            <LogoButton height='40px' width='100px'></LogoButton>
        </div>
    )
}

MobileHeader.defaultProps = {
    height: 50
}
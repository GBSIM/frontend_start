import './WideScreenHeader.css';

import LogoButton from '../LogoButton/LogoButton';

export default function WideScreenHeader(props) {
    return (
        <div className="wide-screen-header" style={{"minHeight":props.height,"maxHeight":props.height,"paddingLeft":props.leftPadding}}>
            <LogoButton height='40px' width='100px'></LogoButton>
        </div>
    )
}

WideScreenHeader.defaultProps = {
    height: 60
}
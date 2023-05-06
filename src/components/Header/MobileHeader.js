import './MobileHeader.css';

export default function MobileHeader(props) {
    return (
        <div className="mobile-header" style={{"minHeight":props.height}}>

        </div>
    )
}

MobileHeader.defaultProps = {
    height: 50
}
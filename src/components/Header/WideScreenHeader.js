import './WideScreenHeader.css';

export default function WideScreenHeader(props) {
    return (
        <div className="wide-screen-header" style={{"minHeight":props.height}}>

        </div>
    )
}

WideScreenHeader.defaultProps = {
    height: 60
}
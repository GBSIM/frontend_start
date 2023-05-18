import './QuadrangleIconTextButton.css';

export default function QuadrangleIconTextButton(props) {
    return (
        <button className='quadrangle-icon-text-button' 
            style={{'background':props.backgroundColor,
                    'width':props.width,
                    'paddingTop':props.paddingTop,
                    'paddingBottom':props.paddingBottom,
                    'paddingLeft':props.paddingLeft,
                    'paddingRight':props.paddingRight,
                    'borderRadius':props.borderRadius,
                    'minWidth':props.minWidth}}>
            <img className='quadrangle-icon-text-button-icon' src={props.image} 
                style={{'width':props.iconWidth,'height':props.iconHeight,'left':props.iconLeft,'top':props.iconTop}} alt='O'></img>
            <span className='quadrangle-icon-text-button-text' style={{'color':props.color}}>{props.text}</span>
        </button>
    )
}

QuadrangleIconTextButton.defaultProps = {
    backgroundColor: '#EB5C2E',
    width: '100%',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    image: '',
    text: 'Test',
    borderRadius: 6,
    color: '#fff',
    iconWidth: 10,
    iconHeight: 10,
    iconLeft: 10,
}
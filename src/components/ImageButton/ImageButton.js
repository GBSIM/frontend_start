import './ImageButton.css';

export default function ImageButton(props) {
    return (
        <button 
            className='image-button' 
            onClick={() => {props.clickEvent()}}
            style={{"height":props.height,"width":props.width}}>
            <img className='image-button-image' src={props.imageUrl} alt={props.altText}></img>
        </button>
    )
}
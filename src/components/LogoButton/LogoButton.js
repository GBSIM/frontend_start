import ImageButton from "../ImageButton/ImageButton";

export default function LogoButton(props) {
    const logoButtonClickEvent = () => {
        window.location.href = '/';
    }
    return (
        <div className="logo-button">
            <ImageButton 
                width={props.width} 
                height={props.height}
                imageUrl=''
                clickEvent={logoButtonClickEvent}
                altText='brand-logo'
                ></ImageButton>
        </div>
    )
}
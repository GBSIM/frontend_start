import IconButton from "../IconButton/IconButton";

export default function LikesPageButton(props) {
    const clickEvent = () => {
        window.location.href = '/likes';
    }

    return (
        <IconButton
            image={require('../../icons/heart_grey.png')}
            backgroundColor='#fff'
            clickEvent={clickEvent}/>
    )
}
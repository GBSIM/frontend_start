import TextButton from "../TextButton/TextButton";

import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changePage } from "../../_reducers/nav";

export default function NavButton(props) {
    const dispath = useDispatch();
    const navigate = useNavigate();

    const { page } = useSelector(state => state.nav);

    let moveUrl;
    switch (props.text) {
        case '배송주문':
            moveUrl = '/delivery';
            break;
        case '선물주문':
            moveUrl = '/present';
            break;
        case '픽업주문':
            moveUrl = '/pickup';
            break;
        default:
            moveUrl = '/delivery';
            break;
    }

    const movePage = () => {
        dispath(changePage(props.text));
        navigate(moveUrl);
        window.scrollTo(0,0);
    }

    const isActivated = window.location.pathname.includes(moveUrl) || (props.text==='배송주문' && (window.location.pathname==='/' || window.location.pathname === '/cart'));

    if (isActivated) {
        return (
            <TextButton
                color='#EB5C2E'
                hoverColor='#EB5C2E'
                text={props.text} />
        )
    } else {
        return (
            <TextButton
                color='#CACACA'
                hoverColor='#EB5C2E'
                text={props.text} 
                clickEvent={movePage}/>
        )
    }
}
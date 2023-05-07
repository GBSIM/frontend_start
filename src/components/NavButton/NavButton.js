import TextButton from "../TextButton/TextButton";

import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changePage } from "../../_reducers/nav";

export default function NavButton(props) {
    const dispath = useDispatch();
    const navigate = useNavigate();

    const { page } = useSelector(state => state.nav);

    const movePage = () => {
        dispath(changePage(props.text));
        navigate('/'+props.text);
        window.scrollTo(0,0);
    }

    const isActivated = page === (props.text);

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
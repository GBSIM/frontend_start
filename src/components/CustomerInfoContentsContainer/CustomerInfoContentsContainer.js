import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";
import CustomerInfoBox from "../CustomerInfoBox/CustomerInfoBox";

export default function CustomerInfoContentsContainer(props) {
    return (
        <UnitContentsContainer title='주문자 정보'>
            <CustomerInfoBox
                name={props.name}
                phone={props.phone}
                email={props.email}/>
        </UnitContentsContainer>
    )
}

CustomerInfoContentsContainer.defaultProps = {
    name: '이름',
    phone: '010-0000-0000',
    email: 'abcd@gmail.com',
}
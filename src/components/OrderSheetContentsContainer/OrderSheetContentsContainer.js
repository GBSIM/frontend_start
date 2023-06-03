import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";
import OrderSheetBox from "../OrderSheetBox/OrderSheetBox";

export default function OrderSheetContentsContainer(props) {
    return (
        <UnitContentsContainer title='주문서'>
            <OrderSheetBox items={props.items}/>
        </UnitContentsContainer>
    )
}

OrderSheetContentsContainer.defaultProps = {
    items: [
        {name: '상품명1', price: 5500, quantity: 1},
        {name: '상품명2', price: 2500, quantity: 3},
        {name: '상품명3', price: 3500, quantity: 2},
        {name: '상품명4', price: 1500, quantity: 4},
    ]
}
import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";
import CartItemList from "../CartItemList/CartItemList";

export default function CartItemContentsContainer(props) {
    return (
        <UnitContentsContainer title='장바구니'>
            <CartItemList cartItemList={props.cartItemList}/>
        </UnitContentsContainer>
    )
}

CartItemContentsContainer.defaultProps = {
    cartItemList: [
        {id: '000', isChecked: true, name: '상품명1', price: 2500, count: 1},
        {id: '001', isChecked: true, name: '상품명2', price: 3000, count: 1},
        {id: '002', isChecked: true, name: '상품명3', price: 2100, count: 3},
        {id: '003', isChecked: true, name: '상품명4', price: 2800, count: 1},
        {id: '004', isChecked: true, name: '상품명5', price: 32000, count: 2},
    ]
}
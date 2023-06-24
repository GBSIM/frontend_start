import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";
import CartItemList from "../CartItemList/CartItemList";

export default function CartItemContentsContainer(props) {
    return (
        <UnitContentsContainer title='장바구니'>
            <CartItemList/>
        </UnitContentsContainer>
    )
}
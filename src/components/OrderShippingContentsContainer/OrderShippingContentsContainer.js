import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";
import ShippingBox from "../ShippingBox/ShippingBox";

export default function OrderShippingContentsContainer(props) {
    return (
        <UnitContentsContainer title='배송지'>
            <ShippingBox editable={false} checkable={false}/>
            <div style={{'minHeight':'15px'}}></div>
        </UnitContentsContainer>
    )
}

OrderShippingContentsContainer.defaultProps = {

}
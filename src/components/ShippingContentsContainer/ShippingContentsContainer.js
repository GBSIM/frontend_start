import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";
import ShippingList from "../ShippingList/ShippingList";
import ShippingAddButton from "../ShippingAddButton/ShippingAddButton";

export default function ShippingContentsContainer(props) {
    return (
        <UnitContentsContainer
            title='배송지'
            shippingList={props.shippingList}>
            <ShippingList/>
            <div style={{'minHeight':'15px'}}></div>
            <ShippingAddButton/>
        </UnitContentsContainer>
    )
}

ShippingContentsContainer.defaultProps = {
    shippingList: [
        {tag: "배송지1", basicAddress: "경기도 화성시 시청로 102번길11", detailAddress: "101동 1001호", name: "김미진", phone: '010-0123-1241', id: '000'},
        {tag: "배송지2", basicAddress: "경기도 화성시 시청로 102번길11", detailAddress: "101동 1002호", name: "김수창", phone: '010-5919-1241', id: '001'},
        {tag: "배송지3", basicAddress: "경기도 화성시 시청로 102번길11", detailAddress: "101동 1003호", name: "문재인", phone: '010-1241-1241', id: '002'},
        {tag: "배송지4", basicAddress: "경기도 화성시 시청로 102번길11", detailAddress: "101동 1004호", name: "윤석열", phone: '010-0123-2102', id: '003'},
    ]
}
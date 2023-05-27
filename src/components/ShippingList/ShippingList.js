import './ShippingList.css';

import ShippingBox from '../ShippingBox/ShippingBox';

export default function ShippingList(props) {
    const Shippings = props.shippingList.map((shipping,index) => (
        <ShippingBox
        tag={shipping.tag}
        basicAddress={shipping.basicAddress}
        detailAddress={shipping.detailAddress}
        name={shipping.name}
        phone={shipping.phone}
        id={shipping.id}
        key={'shipping-list-'+index}/>   
    ))

    return (
        <div className='shipping-list'>
            {Shippings}
        </div>
    )
}

ShippingList.defaultProps = {
    shippingList: [
        {tag: "배송지1", basicAddress: "경기도 화성시 시청로 102번길11", detailAddress: "101동 1001호", name: "김미진", phone: '010-0123-1241', id: '000'},
        {tag: "배송지2", basicAddress: "경기도 화성시 시청로 102번길11", detailAddress: "101동 1002호", name: "김수창", phone: '010-5919-1241', id: '001'},
        {tag: "배송지3", basicAddress: "경기도 화성시 시청로 102번길11", detailAddress: "101동 1003호", name: "문재인", phone: '010-1241-1241', id: '002'},
        {tag: "배송지4", basicAddress: "경기도 화성시 시청로 102번길11", detailAddress: "101동 1004호", name: "윤석열", phone: '010-0123-2102', id: '003'},
    ]
}
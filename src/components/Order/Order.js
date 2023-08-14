import './Order.css';

export default function Order(props) {
    const Items = props.items.map((item,index) => {
        return (
            <div className='order-contents-container'>
                <span className='order-items'>{item.name} x {item.quantity}</span>
                <span className='order-items'>{(item.price * item.quantity).toLocaleString()}원</span>
            </div>
        )
    })

    return (
        <div className='order'>
            <div className='order-id-container'>
                <span className='order-id'>주문번호 {props.id}</span>
            </div>
            <div className='order-contents-container'>
                <h3 className='order-contents'>
                    주문고객
                </h3>
                <h3 className='order-contents'>
                    {props.customer}
                </h3>
            </div>
            <div className='order-items-container'>
                <div className='order-contents-container'>
                    <h3 className='order-contents'>
                        주문한 메뉴
                    </h3>
                </div>
                {Items}
            </div>
            <div className='order-contents-container'>
                <h3 className='order-contents'>
                    총 가격
                </h3>
                <h3 className='order-contents'>
                    {props.totalPrice.toLocaleString()}원
                </h3>
            </div>
            <div className='order-items-container'>
                <div className='order-contents-container'>
                    <h3 className='order-contents'>
                        배송지
                    </h3>
                </div>
                <div className='order-contents-container'>
                    <span className='order-items'>[주소] {props.address}</span>
                </div>
                <div className='order-contents-container'>
                    <span className='order-items'>[받는사람] {props.reciever}</span>
                </div>
                <div className='order-contents-container'>
                    <span className='order-items'>[전화번호] {props.phone}</span>
                </div>
            </div>
        </div>
    )
}

Order.defaultProps = {
    id: '000',
    customer: '장원영',
    items: [
        {name: "레몬마들렌", quantity: 4, price: 2500},
    ],
    totalPrice: 14000,
    address: '경기도 화성시 시청로 102번길11 205동 1604호 (00406)',
    reciever: '장원영',
    phone: '010-0201-1102',
}
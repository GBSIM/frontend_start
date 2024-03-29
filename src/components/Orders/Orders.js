import './Orders.css';

import Order from "../Order/Order";

export default function Orders(props) {
    let OrderList;
    if (props.orders) {
        if (props.orders.length) {
            OrderList = props.orders.map((order,index) => {
                return (
                    <Order
                        id={order._id}
                        customer={order.customer}
                        items={order.menus}
                        totalPrice={order.payedMoney}
                        address={order.shipping.basicAddress + ' ' + order.shipping.detailAddress + '(' + order.shipping.postalCode + ')'}
                        reciever={order.shipping.name}
                        phone={order.customer.phone}
                        status={order.status}
                        key={'order-'+index}/>
                )
            })
        }        
    }

    return (
        <div className="orders">
            {OrderList}
        </div>
    )
}

Orders.defaultProps = {
    orders: [
        {
            menus: [
                {
                    name: '제품명1',
                    price: 30000,
                    tag: '인기',
                    menuClass: '',
                    stock: 100,
                    orderType: 'delivery',
                    quantity: 1,
                    option: {},
                    isChecked: true,
                    imageUrl: '',
                    detailImageUrl: [],
                    intro: '',
                    options: [
                        {name: '1호', price: 30000},
                        {name: '2호', price: 40000},
                    ],
                    minimumOrderQuantity: 1,
                    gradients: [],
                    detail: '',
                    purchaseable: true,
                    id: '000',
                },
                {
                    name: '제품명2',
                    price: 3000,
                    tag: '인기',
                    menuClass: '',
                    stock: 100,
                    orderType: 'delivery',
                    quantity: 1,
                    option: {},
                    isChecked: true,
                    imageUrl: '',
                    detailImageUrl: [],
                    intro: '',
                    options: [
                        {name: '1호', price: 30000},
                        {name: '2호', price: 40000},
                    ],
                    minimumOrderQuantity: 1,
                    gradients: [],
                    detail: '',
                    purchaseable: true,
                    id: '000',
                }
            ],
            customer: {
                _id: '000',
                name: '장원영',
                phone: '010-1241-1201',
                email: 'abcd@gmail.com'
            },
            shipping: {
                _id: '125125',
                name: '안유진',
                phone: '010-0125-1251',
                basicAddress: '경기도 화성시 시청로102번길 11',
                detailAddress: '205동 1102호',
                postalCode: '00406',
                request: '',
                tag: '배송지',
                userId: '0102',
            },
            mileageUse: 0,
            presentDate: '',
            presentTime: '',
            deliveryDate: '',
            pickupDate: '',
            pickupTime: '',
            type: 'delivery',
            status: '결제완료',
            orderPrice: 33000,
            payedMoney: 33000,
            orderId: '1251251251',
            receipt: '',    
            paymentKey: '',
            deliveryId: '1251251',
            _id: '01010',
        }
    ],
}

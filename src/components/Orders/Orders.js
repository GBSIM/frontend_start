import './Orders.css';

import Order from "../Order/Order";

export default function Orders(props) {
    let OrderList;
    if (props.orders) {
        if (props.orders.length) {
            OrderList = props.orders.map((order,index) => {
                return (
                    <Order
                        id={order.id}
                        customer={order.customer}
                        items={order.items}
                        totalPrice={order.totalPrice}
                        address={order.address}
                        reciever={order.reciever}
                        phone={order.phone}
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
            id: '000',
            customer: '장원영',
            items: [
                {name: "레몬마들렌", quantity: 4, price: 2500},
            ],
            totalPrice: 14000,
            address: '경기도 화성시 시청로 102번길11 205동 1604호 (00406)',
            reciever: '장원영',
            phone: '010-0201-1102',
            status: '결제완료',
        },
        {
            id: '001',
            customer: '슈화',
            items: [
                {name: "레몬마들렌", quantity: 4, price: 2500},
            ],
            totalPrice: 14000,
            address: '경기도 화성시 시청로 102번길11 205동 1201호 (00406)',
            reciever: '슈화',
            phone: '010-0211-2102',
            status: '결제완료',
        }
    ],
}

import './OrderHistoryList.css';

import OrderHistoryBox from '../OrderHistoryBox/OrderHistoryBox';

export default function OrderHistoryList(props) {
    const OrderHistorys = props.orderList.map((order,index) => {
        return (
            <OrderHistoryBox
                orderType={order.type}
                createdAt={order.createdAt}
                menus={order.menus}
                payedMoney={order.payedMoney}
                pickupDate={order.pickupDate}
                pickupTime={order.pickupTime}
                orderStatus={order.status}
                id={order.id}
                key={'order_history_'+index}/>
        )
    })
    return (
        <div className='order-history-list'>
            {OrderHistorys}
        </div>
    )
}

OrderHistoryList.defaultProps = {
    orderList: [
        {orderType:'pickup', orderDate:'2023-12-31',items:[{name:'레몬마들렌',price:2500,quantity:1},{name:'초코마들렌',price:3000,quantity:2}],
         payedMoney:5200,pickupDate:'2023-12-31',pickupTime:'17:00',orderStatus:'결제완료'},
        {orderType:'present', orderDate:'2023-09-31',items:[{name:'레몬마들렌',price:2500,quantity:1},{name:'초코마들렌',price:3000,quantity:3},{name:'말차마들렌',price:3100,quantity:1}],
         payedMoney:8000,pickupDate:'2023-12-31',pickupTime:'17:00',orderStatus:'결제완료'},
        {orderType:'pickup', orderDate:'2023-12-31',items:[{name:'레몬마들렌',price:2500,quantity:1},{name:'초코마들렌',price:3000,quantity:2}],
         payedMoney:5200,pickupDate:'2023-12-31',pickupTime:'17:00',orderStatus:'결제완료'},
        {orderType:'present', orderDate:'2023-09-31',items:[{name:'레몬마들렌',price:2500,quantity:1}],
         payedMoney:2500,pickupDate:'2023-12-31',pickupTime:'17:00',orderStatus:'결제완료'},
    ]
}
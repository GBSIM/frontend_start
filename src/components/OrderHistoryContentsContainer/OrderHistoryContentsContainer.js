import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";
import OrderHistoryList from "../OrderHistoryList/OrderHistoryList";

export default function OrderHistoryContentsContainer(props) {
    return (
        <UnitContentsContainer title='주문 내역'>
            <OrderHistoryList
                orderList={props.orderList}/>
        </UnitContentsContainer>
    )
}

OrderHistoryContentsContainer.defaultProps = {
    orderList: [
        {orderType:'pickup', orderDate:'2023-12-31',items:[{name:'레몬마들렌',price:25000},{name:'초코마들렌',price:3000}],
         payedMoney:5200,pickupDate:'2023-12-31',pickupTime:'17:00',orderStatus:'결제완료'},
        {orderType:'present', orderDate:'2023-09-31',items:[{name:'레몬마들렌',price:25000},{name:'초코마들렌',price:3000},{name:'말차마들렌',price:3100}],
         payedMoney:8000,pickupDate:'2023-12-31',pickupTime:'17:00',orderStatus:'결제완료'},
        {orderType:'pickup', orderDate:'2023-12-31',items:[{name:'레몬마들렌',price:25000},{name:'초코마들렌',price:3000}],
         payedMoney:5200,pickupDate:'2023-12-31',pickupTime:'17:00',orderStatus:'결제완료'},
        {orderType:'present', orderDate:'2023-09-31',items:[{name:'레몬마들렌',price:25000}],
         payedMoney:2500,pickupDate:'2023-12-31',pickupTime:'17:00',orderStatus:'결제완료'},
    ]
}
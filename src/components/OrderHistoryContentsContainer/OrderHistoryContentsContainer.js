import './OrderHistoryContentsContainer.css';

import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";
import OrderHistoryList from "../OrderHistoryList/OrderHistoryList";

export default function OrderHistoryContentsContainer(props) {
    if (props.orderList && Array.isArray(props.orderList) && (props.orderList.length > 0)) {
        return (
            <UnitContentsContainer title='주문 내역'>
                <OrderHistoryList
                    orderList={props.orderList}/>
            </UnitContentsContainer>
        )
    } else {
        return (
            <UnitContentsContainer title='주문 내역'>
                <div className="order-history-none-guide-container">
                    <span className="order-history-none-guide">
                        아직 주문 내역이 없어요.
                    </span>
                </div>
            </UnitContentsContainer>
        )
    }
}

OrderHistoryContentsContainer.defaultProps = {
    orderList: [
        {orderType:'pickup', orderDate:'2023-12-31',items:[{name:'레몬마들렌',price:2500,quantity:1},{name:'초코마들렌',price:3000,quantity:2},{name:'레몬마들렌',price:2500,quantity:1},{name:'초코마들렌',price:3000,quantity:2},{name:'레몬마들렌',price:2500,quantity:1},{name:'초코마들렌',price:3000,quantity:2},{name:'레몬마들렌',price:2500,quantity:1},{name:'초코마들렌',price:3000,quantity:2}],
         payedMoney:5200,pickupDate:'2023-12-31',pickupTime:'17:00',orderStatus:'결제완료',id:'000'},
        {orderType:'present', orderDate:'2023-09-31',items:[{name:'레몬마들렌',price:2500,quantity:1},{name:'초코마들렌',price:3000,quantity:3},{name:'말차마들렌',price:3100,quantity:1}],
         payedMoney:8000,pickupDate:'2023-12-31',pickupTime:'17:00',orderStatus:'결제완료',id:'001'},
        {orderType:'pickup', orderDate:'2023-12-31',items:[{name:'레몬마들렌',price:2500,quantity:1},{name:'초코마들렌',price:3000,quantity:2}],
         payedMoney:5200,pickupDate:'2023-12-31',pickupTime:'17:00',orderStatus:'결제완료',id:'002'},
        {orderType:'present', orderDate:'2023-09-31',items:[{name:'레몬마들렌',price:2500,quantity:1}],
         payedMoney:2500,pickupDate:'2023-12-31',pickupTime:'17:00',orderStatus:'결제완료',id:'003'},
    ]
}
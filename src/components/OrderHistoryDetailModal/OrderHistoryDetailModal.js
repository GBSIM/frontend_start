import './OrderHistoryDetailModal.css';

import Modal from '../Modal/Modal';

export default function OrderHistoryDetailModal(props) {
    const componentId = 'order-history-detail-modal-'+ props.id; 

    const OrderItems = props.orderItems.map((orderItem,index) => {
        return (
            <div className='order-history-detail-modal-row' key={'order-history-detail-modal-item-'+index}>
                <img className='order-history-detail-modal-image' src={orderItem.image}></img>
                <div className='order-history-detail-modal-text-container'>
                    <span className='order-history-detail-modal-text name'>{orderItem.name}</span>
                    <span className='order-history-detail-modal-text price'>{(orderItem.price).toLocaleString()}원</span>
                </div>
                
                <div style={{"flex":1}}></div>
                <span className='order-history-detail-modal-text name'>{orderItem.quantity}개</span>
            </div>
        )
    })

    return (
        <Modal id={componentId}>
            <div className='order-history-detail-modal-contents'>
                {OrderItems}
            </div>
        </Modal>
    )
}

OrderHistoryDetailModal.defaultProps = {
    id: '000',
    orderItems: [
        {name: "상품명1", quantity: 1, price: 2500},
        {name: "상품명2", quantity: 2, price: 3500},
        {name: "상품명3", quantity: 3, price: 4500},
    ]
}
import './OrderHistoryDetailModal.css';

import Modal from '../Modal/Modal';

export default function OrderHistoryDetailModal(props) {
    const componentId = 'order-history-detail-modal-'+ props.id; 

    const Items = props.items.map((item,index) => {
        return (
            <div className='order-history-detail-modal-row' key={'order-history-detail-modal-item-'+index}>
                <img className='order-history-detail-modal-image' src={item.image}></img>
                <div className='order-history-detail-modal-text-container'>
                    <span className='order-history-detail-modal-text name'>{item.name}</span>
                    <span className='order-history-detail-modal-text price'>{(item.price).toLocaleString()}원</span>
                </div>
                
                <div style={{"flex":1}}></div>
                <span className='order-history-detail-modal-text name'>{item.quantity}개</span>
            </div>
        )
    })

    return (
        <Modal id={componentId}>
            <div className='order-history-detail-modal-contents'>
                <div className='order-history-detail-modal-title-row'>
                    <h3 className='order-history-detail-modal-title'>주문 상품 상세</h3>
                </div>
                {Items}
            </div>
        </Modal>
    )
}

OrderHistoryDetailModal.defaultProps = {
    id: '000',
    items: [
        {name: "상품명1", quantity: 1, price: 2500},
        {name: "상품명2", quantity: 2, price: 3500},
        {name: "상품명3", quantity: 3, price: 4500},
    ]
}
import './ItemDetail.css';

import { useState } from 'react';

import Counter from '../Counter/Counter';
import CartAddButton from '../CartAddButton/CartAddButton';

export default function ItemDetail(props) {
    const [quantity, setQuantity] = useState(1);
    const addQuantity = () => {
        setQuantity(quantity + 1);
    }
    const subtractQuantity =() => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    let itemType;
    let typeTitle;
    let typeDetail;
    let typeDescription;
    switch (props.type) {
        case "delivery":
            itemType = '배송주문 상품';
            typeTitle = '배송';
            typeDetail = '택배 배송';
            typeDescription= "14시 이전 주문은 당일에 배송 시작됩니다. 배송은 하루 ~ 이틀 걸려요."
            break;
        case "pickup":
            itemType = '픽업주문 상품';
            typeTitle = '픽업';
            typeDetail = '매장 방문하여 픽업';
            typeDescription= '픽업 최소 이틀전에 주문하고 매장에 방문해주세요. 최대 일주일 후 날짜까지 주문 가능해요.';
            break;
        case "present":
            itemType = '선물배송 상품';
            typeTitle = '선물';
            typeDetail = '퀵 배송';
            typeDescription= '선택하신 날짜에 퀵 배송을 보내드려요. 최대 한달 후 날짜까지 주문 가능해요.';
            break;
        default:
            itemType = '배송주문 상품';
            typeTitle = '배송';
            typeDetail = '택배 배송';
            typeDescription= "14시 이전 주문은 당일에 배송 시작됩니다. 배송은 하루 ~ 이틀 걸려요."
    }

    const totalPrice = props.price * quantity;

    return (
        <div className='item-detail'>
            <img className='item-detail-thumbnail-image' src={props.image} alt='thumbnail'></img>
            <div className='item-detail-contents-rows'>
                <div className='item-detail-contents-rows top'>
                    <div className='item-detail-contents-row'>
                        <span className='item-detail-contents-text type'>{itemType}</span>
                    </div>
                    <div className='item-detail-contents-row name'>
                        <h2 className='item-detail-contents-header name'>{props.name}</h2>
                        <button className='item-detail-contents-like-button'>
                            <img className='item-detail-contents-like-button-image' src={''} alt='like'></img>
                        </button>
                    </div>
                </div>
                <div className='item-detail-contents-row'>
                    <span className='item-detail-contents-text introduction'>{props.introduction}</span>
                </div>
                <div className='item-detail-contents-row price'>
                    <h2 className='item-detail-contents-header price'>{(props.price).toLocaleString()}원</h2>
                </div>
                <div className='item-detail-contents-row type'>
                    <span className='item-detail-contents-title'>{typeTitle}</span>
                    <div className='item-detail-contents-rows'>
                        <span className='item-detail-contents-text type-detail'>{typeDetail}</span>
                        <span className='item-detail-contents-text type-description'>{typeDescription}</span>
                    </div>
                </div>
                <div className='item-detail-contents-row cart'>
                    <span className='item-detail-contents-title'>상품 담기</span>
                    <Counter 
                        count={quantity} 
                        minimumQuantity={1}
                        increaseEvent={addQuantity}
                        decreaseEvent={subtractQuantity}
                        />
                </div>
                <div className='item-detail-contents-row total-price'>
                    <h2 className='item-detail-contents-header price'>{totalPrice.toLocaleString()}원</h2>
                </div>
                <div className='item-detail-contents-row cart-add-button'>
                    <CartAddButton 
                        paddingTop={10}
                        paddingBottom={10}/>
                </div>
            </div>
        </div>
    )
}

ItemDetail.defaultProps = {
    type: 'delivery',
    name: '상품명',
    introduction: '상품 소개',
    price: 12345,
}
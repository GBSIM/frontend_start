import './ItemDetail.css';

import { useState } from 'react';

import Counter from '../Counter/Counter';
import CartAddButton from '../CartAddButton/CartAddButton';
import Notification from '../Notification/Notification';

export default function ItemDetail(props) {
    const [quantity, setQuantity] = useState(props.minimumOrderQuantity);
    const [option, setOption] = useState({"name":"option","price":0});
    const [price, setPrice] = useState(props.price);

    const addQuantity = () => {
        setQuantity(quantity + 1);
    }
    const subtractQuantity =() => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const selectOption = (e) => {
        setOption(
            {"name":props.options[e.target.selectedIndex]["name"],
             "price":props.options[e.target.selectedIndex]["price"]});
        setPrice(props.options[e.target.selectedIndex]["price"]);
    }

    const isOptionItem = Array.isArray(props.options) && (props.options.length > 0);
    let optionsContainer;
    if (isOptionItem) {
        const Options = props.options.map((option) => (
            <option 
                className='cart-modal-option'
                value={option["name"]} 
                key={option["name"]}>
                {option["name"]} - - -  {option["price"].toLocaleString()}원
            </option>
        ))
        optionsContainer =
            <select name='option' className='cart-modal-option-container' onChange={selectOption}>
                {Options}
            </select>
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
            typeDescription= "14시 이전 주문은 당일에 배송이 시작됩니다. 배송은 하루 ~ 이틀 걸려요."
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

    const totalPrice = price * quantity;

    let LikeButton;
    if (props.isLiked) {
        LikeButton =
            <button className='item-detail-contents-like-button'>
                <img className='item-detail-contents-like-button-image' src={require('../../icons/heart_red.png')} alt='like'></img>
            </button>
    } else {
        LikeButton =
            <button className='item-detail-contents-like-button'>
                <img className='item-detail-contents-like-button-image' src={require('../../icons/heart_grey.png')} alt='like'></img>
            </button>
    }

    const notiText = props.name + "를 담았어요.";
    const showPopupNotification = () => {
        const notification = document.getElementById("notification-item-detail-popup-"+props.id);        
        notification.style.display = "flex";
        setTimeout(() => notification.style.display = "none", 2000);
    }

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
                        {LikeButton}
                    </div>
                </div>
                <div className='item-detail-contents-row'>
                    <span className='item-detail-contents-text introduction'>{props.introduction}</span>
                </div>
                <div className='item-detail-contents-row price'>
                    <h2 className='item-detail-contents-header price'>{(price).toLocaleString()}원</h2>
                </div>
                <div className='item-detail-contents-row type'>
                    <span className='item-detail-contents-title'>{typeTitle}</span>
                    <div className='item-detail-contents-rows'>
                        <span className='item-detail-contents-text type-detail'>{typeDetail}</span>
                        <span className='item-detail-contents-text type-description'>{typeDescription}</span>
                    </div>
                </div>
                {optionsContainer}
                <div className='item-detail-contents-row cart'>
                    <span className='item-detail-contents-title'>상품 담기</span>
                    <Counter 
                        count={quantity} 
                        minimumQuantity={props.minimumOrderQuantity}
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
                        paddingBottom={10}
                        cartAddAction={showPopupNotification}/>
                </div>
            </div>
            <Notification 
                text={notiText} 
                id={"item-detail-popup-"+props.id}/>
        </div>
    )
}

ItemDetail.defaultProps = {
    minimumOrderQuantity: 1,
    type: 'delivery',
    name: '상품명',
    introduction: '상품 소개',
    price: 12345,
    isLiked: false,
    id: '000',
    options: [],
}
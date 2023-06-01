import './ItemDescription.css';

export default function ItemDescription(props) {
    return (
        <div className='item-description'>
            <img className='item-description-image'
                 src={props.image1}
                 alt='item1'></img>
            <div className='item-description-container name'>
                <div className='item-description-title-container name'>
                    <h2 className='item-description-title'>{props.name}</h2>
                </div>
                <div className='item-description-text-container'>
                    <span className='item-description-text'>
                        {props.description}
                    </span>
                </div>
            </div>
            <img className='item-description-image'
                 src={props.image2}
                 alt='item2'></img>
            <img className='item-description-image image3'
                 src={props.image3}
                 alt='item3'></img>
            <div className='item-description-container'>
                <div className='item-description-title-container'>
                    <h2 className='item-description-title'>맛있게 먹는 법</h2>
                </div>
                <div className='item-description-text-container'>
                    <span className='item-description-text'>
                        배송 받으신 후 바로, 또는 그 다음 날까지 먹어야 가장 맛있어요.
                    </span>
                    <span className='item-description-text'>
                    3일 이상 보관 후 드실 분들은 냉동실에 보관 후 해동해서 드세요.
                    </span>
                </div>
            </div>
            <div className='item-description-container'>
                <div className='item-description-title-container'>
                    <h2 className='item-description-title'>재료 및 성분</h2>
                </div>
                <div className='item-description-text-container'>
                    <span className='item-description-text'>
                        재료
                    </span>
                </div>
            </div>
            <div className='item-description-container'>
                <div className='item-description-title-container'>
                    <h2 className='item-description-title'>취소 및 환불 규정</h2>
                </div>
                <div className='item-description-text-container'>
                    <span className='item-description-text'>
                        취소 및 환불 규정을 입력해주세요.
                    </span>
                </div>
            </div>
            <div className='item-description-container'>
                <div className='item-description-title-container'>
                    <h2 className='item-description-title'>판매자 정보</h2>
                </div>
                <div className='item-description-text-container'>
                    <span className='item-description-text'>
                        브랜드: 브랜드를 입력해주세요.
                    </span>
                    <span className='item-description-text'>
                        원산지: 원산지를 입력해주세요.
                    </span>
                    <span className='item-description-text'>
                        영수증 발급: 신용카드 전표, 현금영수증 발급
                    </span> 
                    <span className='item-description-text'>
                        취소 및 환불 안내: 전화번호를 입력해주세요.
                    </span>
                </div>
            </div>
        </div>
    )
}

ItemDescription.defaultProps = {
    name: '상품명',
    description: '상품의 소개를 작성해주세요.',
    image1: '',
}
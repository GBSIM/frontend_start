import './ItemDescription.css';

export default function ItemDescription(props) {
    return (
        <div className='item-description'>
            <img className='item-description-image'
                 src={props.image1}
                 alt='item1'></img>
            <div className='item-description-container'>
                <div className='item-description-title-container'>
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
            
        </div>
    )
}

ItemDescription.defaultProps = {
    name: '상품명',
    description: '상품의 소개를 작성해주세요.',
    image1: '',
}
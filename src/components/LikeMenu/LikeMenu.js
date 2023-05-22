import './LikeMenu.css';

import UnitBoxContainer from '../UnitBoxContainer/UnitBoxContainer';
import CartButton from '../CartButton/CartButton';
import MobileCartButton from '../MobileCartButton/MobileCartButton';

export default function LikeMenu(props) {
    let LikeMenuCartButton;
    if (window.innerWidth > 700) {
        LikeMenuCartButton = <CartButton width={50} height={50}/>
    } else {
        LikeMenuCartButton = <MobileCartButton width={50} height={50}/>
    }

    return (
        <UnitBoxContainer>
            <div className='like-menu'>
                <img src={props.image} className='like-menu-image' alt='menu'></img>
                <h3 className='like-menu-name'>{props.name}</h3>
                <div className='like-menu-spacer'></div>
                {LikeMenuCartButton}
            </div>
            <button className='like-menu-delete-button'>
                <span className='like-menu-delete-button-text'>삭제하기</span>
            </button>
        </UnitBoxContainer>   
    )
}

LikeMenu.defaultProps = {
    image: '',
    name: '상품명',
}
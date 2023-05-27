import './LikeMenu.css';

import UnitBoxContainer from '../UnitBoxContainer/UnitBoxContainer';
import CartButton from '../CartButton/CartButton';
import CartMobileButton from '../CartMobileButton/CartMobileButton';
import DeleteCheckModal from '../DeleteCheckModal/DeleteCheckModal';

export default function LikeMenu(props) {
    let LikeMenuCartButton;
    if (window.innerWidth > 700) {
        LikeMenuCartButton = <CartButton width={50} height={50}/>
    } else {
        LikeMenuCartButton = <CartMobileButton width={50} height={50}/>
    }

    const openDeleteCheckModal = () => {
        const LikeMenuDeleteCheckModal = document.getElementById('like-menu-delete-modal-' + props.id);
        LikeMenuDeleteCheckModal.showModal();
    }

    return (
        <UnitBoxContainer>
            <div className='like-menu'>
                <img src={props.image} className='like-menu-image' alt='menu'></img>
                <h3 className='like-menu-name'>{props.name}</h3>
                <div className='like-menu-spacer'></div>
                {LikeMenuCartButton}
            </div>
            <button className='like-menu-delete-button' onClick={() => openDeleteCheckModal()}>
                <span className='like-menu-delete-button-text'>삭제하기</span>
            </button>
            <DeleteCheckModal id={'like-menu-delete-modal-' + props.id}/>
        </UnitBoxContainer>   
    )
}

LikeMenu.defaultProps = {
    image: '',
    name: '상품명',
    id: '000',
}
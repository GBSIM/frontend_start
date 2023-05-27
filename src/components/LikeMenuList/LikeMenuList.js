import './LikeMenuList.css';

import LikeMenu from '../LikeMenu/LikeMenu';

export default function LikeMenuList(props) {
    const LikeMenus = props.likeMenuList.map((likeMenu) => (
        <LikeMenu
            image={likeMenu.image}
            name={likeMenu.name}
            price={likeMenu.price}
            minimumQuantity={likeMenu.minimumQuantity}
            id={likeMenu.id}
            key={'like-menu'+likeMenu.id}
        />
    ))
    return (
        <div className='like-menu-list'>
            {LikeMenus}
        </div>
    )
}

LikeMenuList.defaultProps = {
    likeMenuList: [
        {image:'', name:'상품명1', id:'000', price: 2500, minimumQuantity:1},
        {image:'', name:'상품명2', id:'001', price: 3000, minimumQuantity:3},
        {image:'', name:'상품명3', id:'002', price: 42000, minimumQuantity:1},
    ]
}

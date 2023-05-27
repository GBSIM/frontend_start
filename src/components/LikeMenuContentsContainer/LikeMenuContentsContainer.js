import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";
import LikeMenuList from "../LikeMenuList/LikeMenuList";

export default function LikeMenuContentsContainer(props) {
    return (
        <UnitContentsContainer
            title='관심 상품'>
            <LikeMenuList
                likeMenuList={props.likeMenuList}/>
        </UnitContentsContainer>
    )
}

LikeMenuContentsContainer.defaultProps = {
    likeMenuList: [
        {image:'', name:'상품명1', id:'000', price: 2500, minimumQuantity:1},
        {image:'', name:'상품명2', id:'001', price: 3000, minimumQuantity:3},
        {image:'', name:'상품명3', id:'002', price: 42000, minimumQuantity:1},
    ]
}

import UnitContentsContainer from "../UnitContentsContainer/UnitContentsContainer";
import LikeMenuList from "../LikeMenuList/LikeMenuList";

export default function LikeMenuContentsContainer(props) {
    return (
        <UnitContentsContainer
            title='관심 상품'>
            <LikeMenuList
                likeMenuList={props.likeMenuList}
                isLogined={props.isLogined}/>
        </UnitContentsContainer>
    )
}

LikeMenuContentsContainer.defaultProps = {
    likeMenuList: [
        {image:'', name:'상품명1', id:'000', price: 2500, minimumQuantity:1, options:[]},
        {image:'', name:'상품명2', id:'001', price: 3000, minimumQuantity:3, options:[]},
        {image:'', name:'상품명3', id:'002', price: 42000, minimumQuantity:1, options:[{name:'1호',price:42000},{name:'2호',price:49000},{name:'3호',price:56000}]},
    ],
    isLogined: true,
}

import './ItemContentsContainer.css';

import ItemList from "../ItemList/ItemList";

export default function ItemContentsContainer(props) {
    return (
        <div className="item-contents-container">
            <h2 className="item-contents-container-title">{props.groupName}</h2>
            <ItemList/>
        </div>
    )
}

ItemContentsContainer.defaultProps = {
    groupName: '아이템 그룹'
}
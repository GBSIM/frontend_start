import './ItemList.css';

import Item from '../Item/Item';

export default function ItemList(props) {
    const Items = props.ItemList.map((item) => (
        <Item
            image={item.image}
            name={item.name}
            price={item.price}
            minimumQuantity={item.minimumQuantity}
            id={item.id}
            key={'item-'+item.id}/>
    ))
    return (
        <div className='item-list'>
            {Items}
        </div>
    )
}

ItemList.defaultProps = {
    ItemList: [
        {image: '', name: '상품명1', price: 2500, minimumQuantity: 2, id: '000'},
        {image: '', name: '상품명2', price: 2600, minimumQuantity: 1, id: '001'},
        {image: '', name: '상품명3', price: 2200, minimumQuantity: 5, id: '002'},
        {image: '', name: '상품명4', price: 2100, minimumQuantity: 3, id: '003'},
        {image: '', name: '상품명5', price: 2900, minimumQuantity: 10, id: '004'},
    ]
}
import './ItemList.css';

import Item from '../Item/Item';

export default function ItemList(props) {
    const Items = props.ItemList.map((item) => (
        <Item
            image={item.image}
            name={item.name}
            price={item.price}
            minimumQuantity={item.minimumQuantity}
            options={item.options}
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
        {image: '', name: '상품명1', price: 2400, minimumQuantity: 1, id: '000', options: [],},
        {image: '', name: '상품명2', price: 42000, minimumQuantity: 1, id: '001', options: [{name:'1호',price:42000},{name:'2호',price:49000},{name:'3호',price:56000}],},
        {image: '', name: '상품명3', price: 2500, minimumQuantity: 3, id: '002', options: [],},
        {image: '', name: '상품명4', price: 2900, minimumQuantity: 4, id: '003', options: [],},
        {image: '', name: '상품명5', price: 3000, minimumQuantity: 10, id: '004', options: [],},
    ]
}
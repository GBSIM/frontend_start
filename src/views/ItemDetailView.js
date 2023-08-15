import '../default.css';

import { useSelector } from 'react-redux';

import Header from "../components/Header/Header"
import ItemDetail from '../components/ItemDetail/ItemDetail';
import ItemDescription from '../components/ItemDescription/ItemDescription';

export default function ItemDetailView() {
    const user = useSelector(state => state.user);
    const item = useSelector(state => state.item);

    return (
        <div className="page">
            <Header isLogined={user.isLogined} name={user.name} cartItemNumber={user.deliveryCart.length+user.pickupCart.length+user.presentCart}/>
            <div className='contents-container'>
                <div className='contents'>
                    <div style={{'minHeight':'40px'}}></div>
                    <ItemDetail
                        type={item.type}
                        name={item.name}
                        introduction={item.intro}
                        price={item.price}
                        minimumOrderQuantity={item.minimumOrderQuantity}
                        isLiked={user.likes.includes(item._id)}
                        options={item.options}/>
                    <ItemDescription
                        name={item.name}
                        description={item.detail}
                        image1={item.imageUrl}
                        gradientList={item.gradients}
                        />
                </div>
            </div>
        </div>
    )
}

import '../default.css';

import { useSelector } from 'react-redux';

import Header from "../components/Header/Header";
import LikeMenuContentsContainer from '../components/LikeMenuContentsContainer/LikeMenuContentsContainer';

export default function LikesView() {
    const user = useSelector(state => state.user);
    
    return (
        <div className="page">
            <Header isLogined={user.isLogined} name={user.name} cartItemNumber={user.deliveryCart.length+user.pickupCart.length+user.presentCart} userClass={user.class}/>
            <div className='contents-container'>
                <div className='contents'>
                    <div className='contents-spacer'/>
                    <LikeMenuContentsContainer likeMenuList={user.likes} isLogined={user.isLogined}/>
                </div>
            </div>
        </div>
    )
}
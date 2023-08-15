import '../default.css';

import { useSelector } from 'react-redux';

import Header from "../components/Header/Header"
import UnderlineNavContainer from '../components/UnderlineNavContainer/UnderlineNavContainer';
import UserClass from '../components/UserClass/UserClass';
import ManagerCalendar from '../components/ManagerCalendar/ManagerCalendar';
import Orders from '../components/Orders/Orders';
import Footer from '../components/Footer/Footer';

export default function ManageView(props) {
    const user = useSelector(state => state.user);
    
    return (
        <div className="page">
            <Header isLogined={user.isLogined} name={user.name} cartItemNumber={user.deliveryCart.length+user.pickupCart.length+user.presentCart} userClass={user.class}/>
            <div className='contents-container'>
                <div className='contents'>
                    <div style={{'minHeight':'30px'}}></div>
                    <UserClass class={user.class} name={user.name}/>
                </div>
                <div className='contents-spacer cart'/>
                <UnderlineNavContainer navTextList={['배송주문','선물주문','픽업주문']} linkList={['/manage/delivery','/manage/present','/manage/pickup']} status={props.status}/>
                <div className='contents'>
                    <div style={{'minHeight':'20px'}}></div>
                    <ManagerCalendar/>
                    <div style={{'minHeight':'20px'}}></div>
                    <Orders/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

ManageView.defaultProps = {
    status: '배송주문',
}
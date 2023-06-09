import '../default.css';

import Header from "../components/Header/Header"
import UnderlineNavContainer from '../components/UnderlineNavContainer/UnderlineNavContainer';
import UserClass from '../components/UserClass/UserClass';
import Calendar from '../components/Calendar/Calendar';
import Footer from '../components/Footer/Footer';

export default function ManageView(props) {
    return (
        <div className="page">
            <Header/>
            <div className='contents-container'>
                <div className='contents'>
                    <div style={{'minHeight':'30px'}}></div>
                    <UserClass/>
                </div>
                <div className='contents-spacer cart'/>
                <UnderlineNavContainer navTextList={['배송주문','선물주문','픽업주문']} linkList={['/manage/delivery','/manage/present','/manage/pickup']} status={props.status}/>
                <div className='contents'>
                    <div style={{'minHeight':'20px'}}></div>
                    <Calendar/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

ManageView.defaultProps = {
    status: '배송주문',
}
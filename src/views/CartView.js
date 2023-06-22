import '../default.css';

import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer';

import UnderlineNavContainer from '../components/UnderlineNavContainer/UnderlineNavContainer';

export default function CartView() {
    return (
        <div className="page">
            <Header/>
            <div className='contents-container'>
                <div className='contents'>
                    <div className='contents-spacer'/>
                    <UnderlineNavContainer navTextList={['배송주문','선물주문','픽업주문']} linkList={['/cart/delivery','/cart/present','/cart/pickup']}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
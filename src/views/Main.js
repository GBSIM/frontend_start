import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

import CartItemList from '../components/CartItemList/CartItemList';
import UnderlineNavContainer from '../components/UnderlineNavContainer/UnderlineNavContainer';
import UserClass from '../components/UserClass/UserClass';
import LikeMenuContentsContainer from '../components/LikeMenuContentsContainer/LikeMenuContentsContainer';
import ShippingContentsContainer from '../components/ShippingContentsContainer/ShippingContentsContainer';
import ItemContentsContainer from '../components/ItemContentsContainer/ItemContentsContainer';
import OrderHistoryContentsContainer from '../components/OrderHistoryContentsContainer/OrderHistoryContentsContainer';

export default function Main() {
    return (
        <div className="page">
            <Header/>
            <Banner/>
            <div className='contents-container'>
                <UnderlineNavContainer/>
                <div className='contents'>
                    <CartItemList/>
                    <UserClass/>
                    <LikeMenuContentsContainer/>
                    <ShippingContentsContainer/>
                    <ItemContentsContainer/>
                    <OrderHistoryContentsContainer/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
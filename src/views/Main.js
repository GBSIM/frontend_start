import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Item from '../components/Item/Item';
import CartItem from '../components/CartItem/CartItem';
import ShippingBox from '../components/ShippingBox/ShippingBox';
import LikeMenu from '../components/LikeMenu/LikeMenu';
import ShippingAddButton from '../components/ShippingAddButton/ShippingAddButton';

export default function Main() {
    return (
        <div className="page">
            <Header/>
            <Banner/>
            <div className='contents-container'>
                <div className='contents'>
                    <Item></Item>
                    <CartItem></CartItem>
                    <ShippingBox></ShippingBox>
                    <LikeMenu></LikeMenu>
                    <ShippingAddButton></ShippingAddButton>
                </div>    
            </div>
            <Footer/>
        </div>
    )
}
import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

import CustomerInfoContentsContainer from '../components/CustomerInfoContentsContainer/CustomerInfoContentsContainer';
import LikeMenuContentsContainer from '../components/LikeMenuContentsContainer/LikeMenuContentsContainer';
import ItemContentsContainer from '../components/ItemContentsContainer/ItemContentsContainer';
import OrderHistoryContentsContainer from '../components/OrderHistoryContentsContainer/OrderHistoryContentsContainer';
import OrderSheetContentsContainer from '../components/OrderSheetContentsContainer/OrderSheetContentsContainer';
import ShippingContentsContainer from '../components/ShippingContentsContainer/ShippingContentsContainer';

export default function Main() {
    return (
        <div className="page">
            <Header/>
            <Banner/>
            <div className='contents-container'>
                <div className='contents'>
                    <CustomerInfoContentsContainer/>
                    <LikeMenuContentsContainer/>
                    <ItemContentsContainer/>
                    <OrderHistoryContentsContainer/>
                    <OrderSheetContentsContainer/>
                    <ShippingContentsContainer/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
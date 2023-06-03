import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

import OrderSheetContentsContainer from '../components/OrderSheetContentsContainer/OrderSheetContentsContainer';
import CustomerInfoContentsContainer from '../components/CustomerInfoContentsContainer/CustomerInfoContentsContainer';
import ShippingContentsContainer from '../components/ShippingContentsContainer/ShippingContentsContainer';

export default function Main() {
    return (
        <div className="page">
            <Header/>
            <Banner/>
            <div className='contents-container'>
                <div className='contents'>
                    <OrderSheetContentsContainer/>
                    <CustomerInfoContentsContainer/>
                    <ShippingContentsContainer/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
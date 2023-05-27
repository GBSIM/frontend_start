import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

import ItemList from '../components/ItemList/ItemList';
import LikeMenuList from '../components/LikeMenuList/LikeMenuList';
import ShippingList from '../components/ShippingList/ShippingList';

export default function Main() {
    return (
        <div className="page">
            <Header/>
            <Banner/>
            <div className='contents-container'>
                <div className='contents'>
                    <ItemList/>
                    <LikeMenuList/>
                    <ShippingList/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
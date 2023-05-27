import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

import CartItemList from '../components/CartItemList/CartItemList';

export default function Main() {
    return (
        <div className="page">
            <Header/>
            <Banner/>
            <div className='contents-container'>
                <div className='contents'>
                    <CartItemList/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
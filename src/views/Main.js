import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Item from '../components/Item/Item';
import CartItem from '../components/CartItem/CartItem';

export default function Main() {
    return (
        <div className="page">
            <Header/>
            <Banner/>
            <div className='contents-container'>
                <div className='contents'>
                    <Item></Item>
                    <CartItem></CartItem>
                </div>    
            </div>
            <Footer/>
        </div>
    )
}
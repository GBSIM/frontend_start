import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

import CartItemList from '../components/CartItemList/CartItemList';
import UnderlineNavContainer from '../components/UnderlineNavContainer/UnderlineNavContainer';
import UserClass from '../components/UserClass/UserClass';

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
                </div>
            </div>
            <Footer/>
        </div>
    )
}
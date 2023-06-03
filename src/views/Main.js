import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

import OrderSheet from '../components/OrderSheet/OrderSheet';

export default function Main() {
    return (
        <div className="page">
            <Header/>
            <Banner/>
            <div className='contents-container'>
                <div className='contents'>
                    <OrderSheet/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
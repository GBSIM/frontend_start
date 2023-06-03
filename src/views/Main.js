import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

import ItemDetail from '../components/ItemDetail/ItemDetail';
import ItemDescription from '../components/ItemDescription/ItemDescription';

export default function Main() {
    return (
        <div className="page">
            <Header/>
            <Banner/>
            <div className='contents-container'>
                <div className='contents'>
                    <ItemDetail/>
                    <ItemDescription/>
                </div>
            </div>
            <Footer type='cart'/>
        </div>
    )
}
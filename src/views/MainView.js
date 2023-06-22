import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

import ItemContentsContainer from '../components/ItemContentsContainer/ItemContentsContainer';

export default function MainView() {
    return (
        <div className="page">
            <Header/>
            <Banner/>
            <div className='contents-container'>
                <div className='contents'>
                    <ItemContentsContainer/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
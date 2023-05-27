import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

import LikeMenuList from '../components/LikeMenuList/LikeMenuList';

export default function Main() {
    return (
        <div className="page">
            <Header/>
            <Banner/>
            <div className='contents-container'>
                <div className='contents'>
                    <LikeMenuList/>
                </div>    
            </div>
            <Footer/>
        </div>
    )
}
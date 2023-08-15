import '../default.css';

import { useSelector } from 'react-redux';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import ItemContentsContainer from '../components/ItemContentsContainer/ItemContentsContainer';

export default function MainView() {
    const { isLogined, name } = useSelector(state => state.user);

    return (
        <div className="page">
            <Header isLogined={isLogined} name={name}/>
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
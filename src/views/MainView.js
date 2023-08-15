import '../default.css';

import { useSelector } from 'react-redux';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import ItemContentsContainer from '../components/ItemContentsContainer/ItemContentsContainer';

export default function MainView() {
    const user = useSelector(state => state.user);

    return (
        <div className="page">
            <Header isLogined={user.isLogined} name={user.name}/>
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
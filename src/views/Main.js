import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Item from '../components/Item/Item';

export default function Main() {
    return (
        <div className="page">
            <Header/>
            <Banner/>
            <Footer/>
            <Item></Item>
        </div>
    )
}
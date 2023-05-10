import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Counter from '../components/Counter/Counter';

export default function Main() {
    return (
        <div className="page">
            <Header/>
            <Banner/>
            <Footer/>
            <Counter/>
        </div>
    )
}
import '../default.css';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';

export default function Main() {
    return (
        <div className="page">
            <Header></Header>
            <Banner></Banner>
        </div>
    )
}
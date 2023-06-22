import '../default.css';

import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer';

import LikeMenuContentsContainer from '../components/LikeMenuContentsContainer/LikeMenuContentsContainer';

export default function LikesView() {
    return (
        <div className="page">
            <Header/>
            <div className='contents-container'>
                <div className='contents'>
                    <div className='contents-spacer'/>
                    <LikeMenuContentsContainer/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
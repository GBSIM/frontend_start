import '../default.css';

import { useSelector } from 'react-redux';

import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer';
import LikeMenuContentsContainer from '../components/LikeMenuContentsContainer/LikeMenuContentsContainer';

export default function LikesView() {
    const user = useSelector(state => state.user);
    
    return (
        <div className="page">
            <Header isLogined={user.isLogined} name={user.name}/>
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
import '../default.css';

import { useSelector } from 'react-redux';

import Header from "../components/Header/Header"
import ItemDetail from '../components/ItemDetail/ItemDetail';
import ItemDescription from '../components/ItemDescription/ItemDescription';

export default function ItemDetailView() {
    const user = useSelector(state => state.user);

    return (
        <div className="page">
            <Header isLogined={user.isLogined} name={user.name}/>
            <div className='contents-container'>
                <div className='contents'>
                    <div style={{'minHeight':'40px'}}></div>
                    <ItemDetail/>
                    <ItemDescription/>
                </div>
            </div>
        </div>
    )
}

import '../default.css';

import Header from "../components/Header/Header"
import ItemDetail from '../components/ItemDetail/ItemDetail';
import ItemDescription from '../components/ItemDescription/ItemDescription';

export default function ItemDetailView(props) {
    return (
        <div className="page">
            <Header/>
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

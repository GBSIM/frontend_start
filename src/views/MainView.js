import '../default.css';

import { useSelector } from 'react-redux';

import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import ItemContentsContainer from '../components/ItemContentsContainer/ItemContentsContainer';

export default function MainView() {
    const user = useSelector(state => state.user);
    const items = useSelector(state => state.items);
    
    let ItemClassList;
    if (items.itemList) {
        if (items.itemList.length > 0) {
            ItemClassList = items.itemList.map((itemClass,index) => {
                return (
                    <ItemContentsContainer
                        groupName={itemClass.name}
                        intro={itemClass.intro}
                        items={itemClass.menus}
                        key={'item-group'+index}/>
                )
            })
        }
    }

    return (
        <div className="page">
            <Header isLogined={user.isLogined} name={user.name} cartItemNumber={user.deliveryCart.length+user.pickupCart.length+user.presentCart}/>
            <Banner/>
            <div className='contents-container'>
                <div className='contents'>
                    {ItemClassList}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
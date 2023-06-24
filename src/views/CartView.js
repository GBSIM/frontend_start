import '../default.css';

import Header from "../components/Header/Header"
import UnderlineNavContainer from '../components/UnderlineNavContainer/UnderlineNavContainer';
import CartItemContentsContainer from '../components/CartItemContentsContainer/CartItemContentsContainer';
import OrderButton from '../components/OrderButton/OrderButton';

export default function CartView(props) {
    return (
        <div className="page">
            <Header/>
            <div className='contents-container'>
                <div className='contents-spacer cart'/>
                <UnderlineNavContainer navTextList={['배송주문','선물주문','픽업주문']} linkList={['/cart/delivery','/cart/present','/cart/pickup']} status={props.status}/>
                <div className='contents'>
                    <div style={{'minHeight':'20px'}}></div>
                    <CartItemContentsContainer/>
                    <div className='contents-spacer'/>
                    <OrderButton/>
                </div>
            </div>
        </div>
    )
}

CartView.defaultProps = {
    status: '배송주문',
}
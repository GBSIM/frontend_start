import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainView from './views/MainView';
import LikesView from './views/LikesView';
import CartView from './views/CartView';
import UserView from './views/UserView';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<MainView/>}/>
          <Route exact path="/likes" element={<LikesView/>}/>
          <Route exact path="/cart" element={<CartView/>}/>
          <Route exact path="/cart/delivery" element={<CartView status='배송주문'/>}/>
          <Route exact path="/cart/present" element={<CartView status='선물주문'/>}/>
          <Route exact path="/cart/pickup" element={<CartView status='픽업주문'/>}/>
          <Route exact path="/user/orderhistory" element={<UserView status='주문내역'/>}/>
          <Route exact path="/user/shippings" element={<UserView status='배송지관리'/>}/>
          <Route exact path="/user/coupons" element={<UserView status='쿠폰'/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

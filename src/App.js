import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainView from './views/MainView';
import LikesView from './views/LikesView';
import CartView from './views/CartView';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<MainView/>}/>
          <Route exact path="/likes" element={<LikesView/>}/>
          <Route exact path="/cart" element={<CartView/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

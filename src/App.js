import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './views/Main';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Main></Main>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

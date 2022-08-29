import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import './App.css';

const App = () => (
  <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  </>
);

export default App;

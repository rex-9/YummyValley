import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Categories from './pages/categories/Categories';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import './App.css';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/:name" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  </>
);

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Categories from './pages/categories/Categories';
import Meals from './pages/meals/Meals';
import Detail from './pages/detail/Detail';
import './App.css';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/:name" element={<Meals />} />
        <Route path="/:name/:id" element={<Detail />} />
      </Routes>
    </Router>
  </>
);

export default App;

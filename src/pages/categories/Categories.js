import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import { fetchCategories } from '../../redux/categories';
import './Categories.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, []);

  return (
    <>
      <h2>😋 Yummy Valley ✨</h2>
      <div className="categories">
        {
          categories.map((meal, index) => <Link key={meal.id} to={`/${meal.name}`}><Card index={index} id={meal.id} name={meal.name} thumb={meal.thumb} /></Link>)
        }
      </div>
    </>
  );
};

export default Categories;

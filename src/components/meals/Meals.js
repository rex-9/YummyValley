import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Meals.css';
import Meal from '../meal/Meal';
import { filterMeals } from '../../redux/meal';

const Meals = () => {
  const meals = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (meals.length === 0) {
      dispatch(filterMeals('Pork'));
    }
  }, []);

  return (
    <>
      <div>
        <header>
          Yummy Dishes
        </header>
        <div className="meals">
          {
          meals.map((meal, index) => <Link key={meal.id} to={`/detail/${meal.id}`}><Meal index={index} id={meal.id} name={meal.name} photo={meal.photo} /></Link>)
        }
        </div>
      </div>
    </>
  );
};

export default Meals;

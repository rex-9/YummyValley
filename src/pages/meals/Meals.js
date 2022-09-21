import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Highlight from '../../components/highlight/Highlight';
import Nav from '../../components/nav/Nav';
import Card from '../../components/card/Card';
import { filterMeals } from '../../redux/meals';
import './Meals.css';

const Meals = () => {
  const { name } = useParams();
  const meals = useSelector((state) => state.meals);
  const categories = useSelector((state) => state.categories);
  const category = categories.find((c) => c.name === name);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterMeals(name));
  }, []);

  return (
    <>
      <Nav navContent={name} back route="/" />
      <Highlight thumb={category.thumb} name={category.name} id={category.id} />
      <div className="meals">
        {
        meals.map((meal, index) => <Link key={meal.id} to={`/${name}/${meal.id}`}><Card type="meals" index={index} id={meal.id} name={meal.name} thumb={meal.thumb} /></Link>)
        }
      </div>
    </>
  );
};
export default Meals;

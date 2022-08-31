import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailMeal } from '../../redux/meal';
import Nav from '../../components/nav/Nav';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const meals = useSelector((state) => state.meals);
  const meal = meals.find((meal) => meal.id === id);

  useEffect(() => {
    dispatch(detailMeal(id));
  }, []);

  console.log(meals);

  return (
    <>
      <Nav navContent="BBQ" back />
      <div>Detail</div>
      <div>{ id }</div>
      <div>{ meal.detail.name }</div>
    </>
  );
};

export default Detail;

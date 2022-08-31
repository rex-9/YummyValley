import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailMeal } from '../../redux/meal';
import Nav from '../../components/nav/Nav';
import Highlight from '../../components/highlight/Highlight';
import './Detail.css';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const meal = useSelector((state) => state.meal);

  useEffect(() => {
    if (meal.id !== id) {
      dispatch(detailMeal(id));
    }
  }, []);

  console.log(meal);

  return (
    <>
      <Nav navContent={meal.name} back />
      <Highlight img={meal.photo} name={meal.name} flavour={meal.id} />
      <div className="detail">
        <header>
          How to prepare
        </header>
        <div>{ id }</div>
        <div>
          style:
          { meal.style }
        </div>
        <div>
          Instructions:
          { meal.instructions }
        </div>
        <div>
          style:
          { meal.style }
        </div>
      </div>
    </>
  );
};

export default Detail;

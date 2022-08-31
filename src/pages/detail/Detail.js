import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailMeal } from '../../redux/meal';
import Nav from '../../components/nav/Nav';
import Highlight from '../../components/highlight/Highlight';
import './Detail.css';

const Detail = () => {
  const { name, id } = useParams();
  const dispatch = useDispatch();

  const meal = useSelector((state) => state.meal);

  useEffect(() => {
    if (meal.id !== id) {
      dispatch(detailMeal(id));
    }
  }, []);

  return (
    <>
      <Nav navContent={meal.name} back route={`/${name}`} />
      <Highlight thumb={meal.photo} name={meal.name} id={meal.id} />
      <div className="detail">
        <header>
          How to prepare
        </header>
        <div>
          id:
          { meal.id }
        </div>
        <div>
          style:
          { meal.style }
        </div>
        <div>
          Category:
          { meal.category }
        </div>
        <div>
          Instructions:
          { meal.instructions }
        </div>
      </div>
    </>
  );
};

export default Detail;

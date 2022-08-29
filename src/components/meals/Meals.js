import './Meals.css';
import Meal from '../meal/Meal';

const meals = [
  {
    id: '1',
    name: 'burger',
    photo: 'https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg',
  }, {
    id: '2',
    photo: 'https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg',
    name: 'burger',
  }, {
    id: '3',
    name: 'burger',
    photo: 'https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg',
  }, {
    id: '4',
    name: 'burger',
    photo: 'https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg',
  },
];

const Meals = () => (
  <>
    <div>
      <header>
        Yummy Dishes
      </header>
      <div className="meals">
        {
          meals.map((meal, index) => <Meal key={meal.id} index={index} id={meal.id} name={meal.name} photo={meal.photo} />)
        }
      </div>
    </div>
  </>
);

export default Meals;

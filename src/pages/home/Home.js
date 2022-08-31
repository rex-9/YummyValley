import Highlight from '../../components/highlight/Highlight';
import Nav from '../../components/nav/Nav';
import Meals from '../../components/meals/Meals';

const category = {
  img: 'https://www.themealdb.com/images/category/breakfast.png',
  name: 'Breakfast',
  flavour: 1000,
};

const Home = () => (
  <>
    <div className="home">
      <Nav navContent="Seafood" back={false} />
      <Highlight img={category.img} name={category.name} flavour={category.flavour} />
      <Meals />
    </div>
  </>
);

export default Home;

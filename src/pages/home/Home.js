import Category from '../../components/category/Category';
import Nav from '../../components/nav/Nav';
import Meals from '../../components/meals/Meals';

const Home = () => (
  <>
    <Nav navContent="Seafood" back={false} />
    <Category />
    <Meals />
  </>
);

export default Home;

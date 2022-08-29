import './Category.css';

const category = {
  img: 'https://www.themealdb.com/images/category/breakfast.png',
  name: 'Breakfast',
  flavour: 1000,
};

const Category = () => (
  <>
    <div className="box">
      <img src={category.img} alt={category.name} />
      <div className="heading">
        <h1>{category.name}</h1>
        <h3>
          {category.flavour}
          {' '}
          flavours
        </h3>
      </div>
    </div>
  </>
);

export default Category;

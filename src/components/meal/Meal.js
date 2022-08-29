import PropTypes from 'prop-types';
import { useState } from 'react';
import './Meal.css';

const Meal = ({
  index, id, name, photo,
}) => {
  const [array] = useState([]);

  for (let i = 1; i < 100; i += 1) {
    array.push(i);
    i += 4;
  }
  for (let i = 2; i < 100; i += 1) {
    array.push(i);
    i += 4;
  }

  return (
    <>
      <div className="card" style={array.includes(index) ? { backgroundColor: 'var(--dark)' } : { backgroundColor: 'var(--medium)' }}>
        <img src={photo} alt={name} />
        <div>
          <div>{name}</div>
          <div>{id}</div>
        </div>
      </div>
    </>
  );
};

Meal.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Meal;

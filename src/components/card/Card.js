import PropTypes from 'prop-types';
import { useState } from 'react';
import './Card.css';
import forward from '../../assets/forward.png';

const Card = ({
  type, index, id, name, thumb,
}) => {
  let [array] = useState([]);

  if (type === 'categories') {
    for (let i = 1; i < 100; i += 1) {
      array.push(i);
      i += 3;
    }
    for (let i = 2; i < 100; i += 1) {
      array.push(i);
      i += 3;
    }
  } else {
    array = [...Array(100).keys()].filter((n) => n % 2);
  }

  return (
    <>
      <div className="card" style={array.includes(index) ? { backgroundColor: 'var(--dark)' } : { backgroundColor: 'var(--medium)' }}>
        <img className="thumb" src={thumb} alt={name} />
        <img className="forward" src={forward} alt="Forward" />
        <div>
          <div>{name}</div>
          <div>{id}</div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};

export default Card;

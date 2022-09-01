import PropTypes from 'prop-types';
import { useState } from 'react';
import './Card.css';
import forward from '../../assets/forward.png';

const Card = ({
  index, id, name, thumb,
}) => {
  const [array] = useState([]);

  for (let i = 1; i < 100; i += 1) {
    array.push(i);
    i += 3;
  }
  for (let i = 2; i < 100; i += 1) {
    array.push(i);
    i += 3;
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
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};

export default Card;

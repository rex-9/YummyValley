import PropTypes from 'prop-types';
import './Highlight.css';

const Highlight = ({ thumb, name, total }) => (
  <>
    <div className="box">
      <img src={thumb} alt={name} />
      <div className="heading">
        <h1>{name}</h1>
        <h3>
          {Number.isInteger(total) ? `${total} Dishes` : ''}
        </h3>
      </div>
    </div>
  </>
);

Highlight.propTypes = {
  thumb: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default Highlight;

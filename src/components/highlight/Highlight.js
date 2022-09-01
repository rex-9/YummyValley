import PropTypes from 'prop-types';
import './Highlight.css';

const Highlight = ({ thumb, name, id }) => (
  <>
    <div className="box">
      <img src={thumb} alt={name} />
      <div className="heading">
        <h1>{name}</h1>
        <h3>
          {id}
          {' '}
          flavours
        </h3>
      </div>
    </div>
  </>
);

Highlight.propTypes = {
  thumb: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Highlight;

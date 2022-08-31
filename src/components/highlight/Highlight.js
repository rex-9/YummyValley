import PropTypes from 'prop-types';
import './Highlight.css';

const Highlight = ({ img, name, flavour }) => (
  <>
    <div className="box">
      <img src={img} alt={name} />
      <div className="heading">
        <h1>{name}</h1>
        <h3>
          {flavour}
          {' '}
          flavours
        </h3>
      </div>
    </div>
  </>
);

Highlight.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  flavour: PropTypes.string.isRequired,
};

export default Highlight;

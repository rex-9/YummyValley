import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Nav.css';
import backArrow from '../../assets/back.png';

const Nav = ({ navContent, back, route }) => (
  <>
    <nav>
      {
        back ? <Link to={route}><img src={backArrow} alt="back arrow" /></Link> : <div />
      }
      <div>{navContent}</div>
    </nav>
  </>
);

Nav.propTypes = {
  navContent: PropTypes.string.isRequired,
  back: PropTypes.bool.isRequired,
  route: PropTypes.string.isRequired,
};

export default Nav;

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Nav.css';
import backArrow from '../../assets/back.png';
import mic from '../../assets/mic.png';
import setting from '../../assets/setting.png';

const Nav = ({ navContent, back }) => (
  <>
    <nav>
      {
        back ? <Link to="/"><img src={backArrow} alt="back arrow" /></Link> : <div />
      }
      <div>{navContent}</div>
      <div className="icons">
        <img src={mic} alt="" />
        <img src={setting} alt="" />
      </div>
    </nav>
  </>
);

Nav.propTypes = {
  navContent: PropTypes.string.isRequired,
  back: PropTypes.bool.isRequired,
};

export default Nav;

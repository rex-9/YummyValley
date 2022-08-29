import './Nav.css';
import back from '../../assets/back.png';
import mic from '../../assets/mic.png';
import setting from '../../assets/setting.png';

const Nav = () => (
  <>
    <nav>
      <img src={back} alt="" />
      <div>Nav</div>
      <div className="icons">
        <img src={mic} alt="" />
        <img src={setting} alt="" />
      </div>
    </nav>
  </>
);

export default Nav;

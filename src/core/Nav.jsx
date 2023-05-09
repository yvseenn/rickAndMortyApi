import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <div className='home__logo'>
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" alt="Rick and Morty logo" className='home__img'/>
      </Link>
    </div>
  );
};

export default Nav;

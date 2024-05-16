import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import ThemeChanger from './ThemeChanger';
import CartDropdown from './CartDropdown';
import ProfileDropdown from './ProfileDropdown';

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between'>
      <div className='navbar'>
        <div className='flex-1'>
          <Link to='/'>
            <BrandLogo />
          </Link>
        </div>
        <div className='flex-none'>
          <CartDropdown />
          <ThemeChanger />
          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

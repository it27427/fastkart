import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import ChangeTheme from './ChangeTheme';
import CartDropdown from './CartDropdown';
import ProfileDropdown from './ProfileDropdown';

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between'>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <Link to='/'>
            <BrandLogo />
          </Link>
        </div>
        <div className='flex-none'>
          <CartDropdown />
          <ChangeTheme />
          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

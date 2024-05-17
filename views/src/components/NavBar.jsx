import { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import ThemeChanger from './ThemeChanger';
import CartDropdown from './CartDropdown';
import ProfileDropdown from './ProfileDropdown';
import AuthList from './AuthList';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav className='flex items-center justify-between'>
      <div className='navbar'>
        <div className='flex-1'>
          <Link
            to='/'
            className='w-24 flex items-center justify-center lg:w-36 xxl:w-40'
          >
            <BrandLogo />
          </Link>
        </div>
        <div className='flex-none gap-1'>
          <ThemeChanger />

          {/* IF-USER-LOGGEDIN */}
          {isLoggedIn ? (
            <>
              <CartDropdown />
              <ProfileDropdown />
            </>
          ) : (
            <AuthList />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

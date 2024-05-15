import BrandLogo from './BrandLogo';
import ChangeTheme from './ChangeTheme';

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between'>
      <BrandLogo />
      <ChangeTheme />
    </nav>
  );
};

export default NavBar;

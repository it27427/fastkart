import NavBar from './NavBar';

const Header = () => {
  return (
    <header className='bg-base-100 shadow dark:bg-slate-950 sticky top-0 z-50'>
      <div className='container'>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;

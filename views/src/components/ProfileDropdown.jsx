import avatar from '../assets/images/avatar/avatar.jpg';

const ProfileDropdown = () => {
  return (
    <>
      <div className='dropdown dropdown-end'>
        <div tabIndex={0} role='button'>
          <div className='flex items-center'>
            <div className='btn btn-ghost btn-circle'>
              <img
                src={avatar}
                alt='User-Avatar'
                className='w-10 rounded-full avatar'
              />
            </div>
            <div className='hidden lg:flex flex-col'>
              <p className='text-xs font-bold'>Istiak Hossain Tushar</p>
              <p className='text-xs'>istiak.tushar.it@gmail.com</p>
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-slate-900'
        >
          <li>
            <a className='font-semibold text-xs'>Profile</a>
          </li>
          <li>
            <a className='font-semibold text-xs'>Settings</a>
          </li>
          <li>
            <a className='font-semibold text-xs'>Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileDropdown;

import { useState } from 'react';
import avatar from '../assets/images/avatar/avatar.jpg';

const ProfileDropdown = () => {
  const [showAvatar, setShowAvatar] = useState(false);

  return (
    <>
      <div className='dropdown dropdown-end'>
        <div tabIndex={0} role='button'>
          {showAvatar ? (
            <figure className='btn btn-ghost btn-circle'>
              <img
                src={avatar}
                alt='User-Avatar'
                className='w-10 rounded-full avatar'
              />
            </figure>
          ) : (
            <h2>Test</h2>
          )}
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

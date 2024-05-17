import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import AnchorLink from './AnchorLink';
import BrandLogo from './BrandLogo';
import Copyright from './Copyright';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='pt-10 bg-base-200 text-base-content dark:bg-slate-950'>
        <div className='container'>
          <div className='footer'>
            <aside className='self-center'>
              <BrandLogo />
            </aside>

            <nav>
              <h6 className='footer-title'>Company</h6>
              <Link to='/about' className='link link-hover'>
                About us
              </Link>
              <Link to='/contact' className='link link-hover'>
                Contact
              </Link>
              <Link to='/shop' className='link link-hover'>
                Shop
              </Link>
            </nav>

            <nav>
              <h6 className='footer-title'>Legal</h6>
              <Link to='/terms-of-use' className='link link-hover'>
                Terms of use
              </Link>
              <Link to='/privacy-policy' className='link link-hover'>
                Privacy policy
              </Link>
            </nav>

            <nav>
              <h6 className='footer-title'>Social</h6>
              <div className='grid grid-flow-col gap-1'>
                <AnchorLink
                  href='https://facebook.com/'
                  className='btn btn-circle'
                  dataTooltipId='fbTooltip'
                  dataTooltipContent='Follow us on facebook'
                >
                  <FaFacebookF className='text-xl text-blue-600' />
                  <Tooltip id='fbTooltip' />
                </AnchorLink>

                <AnchorLink
                  href='https://x.com/'
                  className='btn btn-circle'
                  dataTooltipId='twitTooltip'
                  dataTooltipContent='Follow us on twitter'
                >
                  <FaTwitter className='text-xl text-blue-400' />
                  <Tooltip id='twitTooltip' />
                </AnchorLink>
                <AnchorLink
                  href='https://instagram.com/'
                  className='btn btn-circle'
                  dataTooltipId='instaTooltip'
                  dataTooltipContent='Follow us on instagram'
                >
                  <FaInstagram className='text-xl text-fuchsia-700' />
                  <Tooltip id='instaTooltip' />
                </AnchorLink>
                <AnchorLink
                  href='https://linkedin.com/'
                  className='btn btn-circle'
                  dataTooltipId='linkedinTooltip'
                  dataTooltipContent='Follow us on twitter'
                >
                  <FaLinkedinIn className='text-xl text-sky-600' />
                  <Tooltip id='linkedinTooltip' />
                </AnchorLink>
              </div>
            </nav>
          </div>
        </div>

        <Copyright />
      </footer>
    </>
  );
};

export default Footer;

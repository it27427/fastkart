import AnchorLink from './AnchorLink';
import BrandLogo from './BrandLogo';
import Copyright from './Copyright';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

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
              <a className='link link-hover'>About us</a>
              <a className='link link-hover'>Contact</a>
              <a className='link link-hover'>Jobs</a>
              <a className='link link-hover'>Press kit</a>
            </nav>

            <nav>
              <h6 className='footer-title'>Legal</h6>
              <a className='link link-hover'>Terms of use</a>
              <a className='link link-hover'>Privacy policy</a>
              <a className='link link-hover'>Cookie policy</a>
            </nav>

            <nav>
              <h6 className='footer-title'>Social</h6>
              <div className='grid grid-flow-col gap-1'>
                <AnchorLink
                  href='https://facebook.com/'
                  className='btn btn-circle tooltip tooltip-top'
                  data-tip='Follow us on Facebook'
                >
                  <FaFacebookF className='text-xl text-blue-600' />
                </AnchorLink>
                <AnchorLink
                  href='https://x.com/'
                  className='btn btn-circle tooltip tooltip-top'
                  data-tip='Follow us on Twitter'
                >
                  <FaTwitter className='text-xl text-blue-400' />
                </AnchorLink>
                <AnchorLink
                  href='https://instagram.com/'
                  className='btn btn-circle tooltip tooltip-top'
                  data-tip='Follow us on Instagram'
                >
                  <FaInstagram className='text-xl text-fuchsia-700' />
                </AnchorLink>
                <AnchorLink
                  href='https://linkedin.com/'
                  className='btn btn-circle tooltip tooltip-top'
                  data-tip='Follow us on Linkedin'
                >
                  <FaLinkedinIn className='text-xl text-sky-600' />
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

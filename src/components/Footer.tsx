import assets from '../assets/assets';

type FooterProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <>
      <footer className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        {/* footer top */}
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
          <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
            <img
              src={theme === 'dark' ? assets.logo_dark : assets.logo}
              className='w-32 sm:w-44'
              alt='logo'
            />
            <p className='max-w-md'>
              From strategy to execution, we craft digital solutions that move
              your business forward.
            </p>

            <ul className='flex gap-8'>
              <li className=''>
                <a className='hover:text-primary' href='#hero'>
                  Home
                </a>
              </li>
              <li>
                <a className='hover:text-primary' href='#services'>
                  Services
                </a>
              </li>
              <li>
                <a className='hover:text-primary' href='#our-work'>
                  Our work
                </a>
              </li>
              <li>
                <a className='hover:text-primary' href='#contact-us'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className='text-gray-600 dark:text-gray-400'>
            <h3 className='text-gray-600 dark:text-gray-400'>
              Subscribe to our newsletter
            </h3>
            <p className='text-sm mt-2 mb-6'>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <div className='flex gap-2 text-sm'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'
              />
              <button className='bg-primary text-white px-6 rounded'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className='border-gray-300 dark:border-gray-600 my-6' />
        {/* footer top */}
        <div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
          <p>Copyright 2025 © agency.ai - All Right Reserved.</p>
          <div className='flex items-center justify-between gap-8'>
            <a
              className='transition duration-200 hover:scale-[1.01] hover:-translate-y-px'
              href='/facebook.com'
            >
              <img src={assets.facebook_icon} alt='facebook icon' />
            </a>
            <a
              className='transition duration-200 hover:scale-[1.01] hover:-translate-y-px'
              href='/x.com'
            >
              <img src={assets.twitter_icon} alt='x icon' />
            </a>
            <a
              className='transition duration-200 hover:scale-[1.01] hover:-translate-y-px'
              href='/instagram.com'
            >
              <img src={assets.instagram_icon} alt='instagram icon' />
            </a>
            <a
              className='transition duration-200 hover:scale-[1.01] hover:-translate-y-px'
              href=''
            >
              <img src={assets.linkedin_icon} alt='linkedin icon' />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import assets from '../assets/assets';

type NavbarProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lgx-24 lx:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        className='w-32 sm:w-40'
        alt='logo'
      />

      <div className='text-gray-700 dark:text-white sm:text-sm max-sm:w60 max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-write max-sm:pt-20 flex sm:items-center gap-5 transition-all'>
        <a href='#' className='sm:hover:border-b'>
          Home
        </a>
        <a href='#services' className='sm:hover:border-b'>
          Services
        </a>
        <a href='#our-work' className='sm:hover:border-b'>
          Our Work
        </a>
        <a href='#contact-us' className='sm:hover:border-b'>
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;

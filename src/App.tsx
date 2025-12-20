import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trusted from './components/Trusted';

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme')! : 'light'
  );

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Trusted />
    </div>
  );
};

export default App;

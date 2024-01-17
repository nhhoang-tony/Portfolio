import logoImg from '../assets/logo.jpg';
import hamburger from '../assets/hamburger.svg';
import close from '../assets/close.svg';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const buttonClasses =
    'text-lg sm:text-LG font-[Bricolage Grotesque] cursor-pointer bg-transparent border-none text-[#8feeff] ml-4 transition-colors ease duration-200 hover:text-[#406ab7] active:text-[#406ab7]';

  const navigate = useNavigate();
  const [showHamburger, setShowHambuger] = useState(false);

  function handleHamburger() {
    setShowHambuger((prevState) => !prevState);
  }

  function navToPortfolio() {
    navigate('/');
  }

  return (
    <header
      className={`py-1 ${
        showHamburger ? 'pl-4 pr-12' : 'px-4'
      } sm:px-16 flex justify-between items-center w-full top-0 z-[1] sticky bg-[#0f0e18]`}
    >
      <div className='gap-2 sm:gap-4 flex items-center'>
        <img
          className='w-14 h-14 sm:w-16 sm:h-16 cursor-pointer'
          src={logoImg}
          onClick={navToPortfolio}
          loading='lazy'
        ></img>
        <h1
          className='xl sm:text-2xl m-0 font-[Raleway] font-bold text-[#8feeff] tracking-wide uppercase cursor-pointer transition-colors ease duration-200 hover:text-[#406ab7] active:text-[#406ab7]'
          onClick={navToPortfolio}
        >
          Tony Nguyen
        </h1>
      </div>
      {!showHamburger && (
        <div onClick={handleHamburger} className='md:invisible cursor-pointer'>
          <img src={hamburger} loading='lazy' />
        </div>
      )}
      {showHamburger && (
        <div
          onClick={handleHamburger}
          className='top-4 right-0 mr-4 md:hidden absolute cursor-pointer'
        >
          <img src={close} loading='lazy' />
        </div>
      )}
      <nav className={`${showHamburger ? 'md:block' : 'hidden md:block'}`}>
        <ul className='flex flex-col md:flex-row'>
          <li>
            <div className={buttonClasses}>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'text-[#406ab7]' : '')}
                end
              >
                Software
              </NavLink>
            </div>
          </li>
          <li>
            <div className={buttonClasses}>
              <NavLink
                to='/project/resume'
                className={({ isActive }) => (isActive ? 'text-[#406ab7]' : '')}
                end
              >
                Resume
              </NavLink>
            </div>
          </li>
          <li>
            <div className={buttonClasses}>
              <NavLink
                to='/contacts'
                className={({ isActive }) => (isActive ? 'text-[#406ab7]' : '')}
                end
              >
                Contacts
              </NavLink>
            </div>
          </li>
          <li>
            <div className={buttonClasses}>
              <NavLink
                to='/meet'
                className={({ isActive }) => (isActive ? 'text-[#406ab7]' : '')}
                end
              >
                Meet
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

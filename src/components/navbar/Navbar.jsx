import React, { useState, useEffect } from 'react';
import NavbarMiddle from './NavbarMiddle';
import '../navbar/navbar.scss';
import logo from "../../img/LogoMain2.png"
import { useTranslation } from 'react-i18next';
import { BiSearch } from "react-icons/bi"
import { SlBasket } from "react-icons/sl"
import { toggleTheme } from "../../redux/themeSlice"
import globalicon from "../../assets/icons/globalicon.png"
import English from "../../assets/icons/English.png"
import Azerbaijan from "../../assets/icons/Azerbaijan.png"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import lghtmode from "../../assets/icons/light-mode-svgrepo-com.svg";
import drkmode from "../../assets/icons/dark-mode-night-moon-svgrepo-com.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const [t, i18n] = useTranslation("global");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts } = useSelector(state => state.carts);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLanguageSelectorOpen(false);
  }

  const toggleLanguageSelector = () => {
    setIsLanguageSelectorOpen(!isLanguageSelectorOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const theme = useSelector((state) => state.theme.mode)
  const themeClass = theme === 'light' ? 'bg-black text-black' : 'bg-gray-700 text-white'

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <div className={themeClass}>
      <div className={`mx-auto md:flex  items-center justify-between relative h-[100px] w-full mt-0 z-30 container  block ${isScrolled ? 'scrolled' : ''} ${themeClass}`}>
        <div onClick={() => navigate('')}>
          <div className='text-4xl w-[170px] cursor-pointer'><img src={logo} alt="Logo" title='Trend Trove' /></div>
        </div>
        <NavbarMiddle />
        <div className='flex items-center gap-8'>
          <img src={theme === 'light' ? lghtmode : drkmode} className='w-8 mr-8 cursor-pointer' onClick={() => dispatch(toggleTheme())} />
          <div onClick={() => navigate("cart")} className='relative'>
            <div className='absolute -top-3 -right-3 bg-red-700 text-white rounded-full w-5 h-5 flex items-center justify-center'>{carts?.length}</div>
            <SlBasket className='cursor-pointer text-gray-500 ml-8' size={28} />
          </div>    
        </div>

        <div
          className={`language-selector ${isLanguageSelectorOpen ? 'open' : ''}`}
          onMouseEnter={() => setIsLanguageSelectorOpen(true)}
          onMouseLeave={() => setIsLanguageSelectorOpen(false)}
        >
          <button>
            {isLanguageSelectorOpen ? (
              <div className="language-options">
                <button onClick={() => handleChangeLanguage("en")}>
                  <img className='w-[30px] mr-[10px]' src={English} alt="" />
                </button>
                <button onClick={() => handleChangeLanguage("az")}>
                  <img className='w-[30px]' src={Azerbaijan} alt="" />
                </button>
              </div>
            ) : (
              <img className='w-[45px]' src={globalicon} alt="" />
            )}
          </button>
        </div>

        {/* */}
        <button
          className="md:hidden block absolute top-[50%] right-4 transform -translate-y-1/2 text-blue-700"
          onClick={handleNavbarToggle}
        >
          <BiSearch className="text-gray-500" size={28} />
        </button>

        {/*  */}
        {isNavbarOpen && (
          <div className="md:hidden absolute top-[100px] left-0 right-0 bg-gray-800 text-white py-2 px-4">
            {/*  */}
            <div className="flex items-center justify-between">
              <div>Navbar Item 1</div>
              <div>Navbar Item 2</div>
              <div>Navbar Item 3</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

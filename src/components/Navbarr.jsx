import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import logo from "../img/LogoMain2.png";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from "../redux/themeSlice"


import { SlBasket } from "react-icons/sl"
import lghtmode from "../assets/icons/light-mode-svgrepo-com.svg";
import drkmode from "../assets/icons/dark-mode-night-moon-svgrepo-com.svg";
import globalicon from "../assets/icons/globalicon.png"
import English from "../assets/icons/English.png"
import Azerbaijan from "../assets/icons/Azerbaijan.png"

const Navbarr = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);


  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLanguageSelectorOpen(false);
  }



  const [t, i18n] = useTranslation("global");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts } = useSelector(state => state.carts);


  const handleClick = () => {
    animateScroll.scrollTo(760);
  };

  const notifyy = () => toast("Let's start shopping!", {
    position: toast.POSITION.BOTTOM_CENTER
  });

  const notifyyy = () => toast.info("Follow us on social media", {
    position: toast.POSITION.TOP_CENTER
  });

  const handleBothClickss = () => {
    handleClick();
    notifyy();
  };

  const hhandleBothClickss = () => {
    toggleMobileMenu();
    notifyyy();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  useEffect(() => {
    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };
  
    window.addEventListener("resize", closeMobileMenu);
  
    return () => {
      window.removeEventListener("resize", closeMobileMenu);
    };
  }, []);
  

  const theme = useSelector((state) => state.theme.mode)
  const themeClass = theme === 'light' ? 'bg-slate-50 text-black' : 'bg-gray-700 text-white'




  return (
    <>
      <Helmet>
        <title>Trend Trove. Home</title>
        <meta name="description" content="My website description" />
        <link rel="canonical" href="http://www.example.com/" />
      </Helmet>

      <div className={themeClass}>
        <nav className="flex h-[150px] items-center justify-around w-full z-30 container ">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 lg:block hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <NavLink to="/" onClick={toggleMobileMenu}>
                    <img className="text-4xl w-[200px] cursor-pointer" src={logo} alt="Logo" title='Trend Trove' />
                  </NavLink>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="ml-20 flex items-center space-x-4 gap-6  text-lg">
                  <NavLink exact to="/" className={(navClass) => navClass.isActive ? "text-gray-400 font-bold border-b-2 border-gray-200" : "text-lg"} onClick={toggleMobileMenu}>
                  <li className=' hover:text-gray-600 hover:font-bold list-none'>{t("home")}</li>
                  </NavLink>
                  <span className="cursor-pointer text-gray-500 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-md font-medium" onClick={handleBothClickss}>
                    {t("shop")}
                  </span>
                  <NavLink to="/aboutus" className={(navClass) => navClass.isActive ? "text-gray-400 font-bold border-b-2 border-gray-200" : "text-lg"} onClick={toggleMobileMenu}>
                  <li className=' hover:text-gray-600 hover:font-bold list-none'>{t("aboutus")}</li>
                  </NavLink>
                  <NavLink to="/blog" className={(navClass) => navClass.isActive ? "text-gray-400 font-bold border-b-2 border-gray-200" : "text-lg"} onClick={toggleMobileMenu}>
                  <li className=' hover:text-gray-600 hover:font-bold list-none'>{t("blog")}</li>
                  </NavLink>
                  <NavLink to="/contactus" className={(navClass) => navClass.isActive ? "text-gray-400 font-bold border-b-2 border-gray-200" : "text-lg"} onClick={hhandleBothClickss}>
                  <li className=' hover:text-gray-600 hover:font-bold list-none'>{t("contactus")}</li>
                  </NavLink>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                <button type="button" onClick={toggleMobileMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>


          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
            <div className="px-[5px] pt-0 pb-2 space-y-1">
              <NavLink exact to="/" activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>
                {t("home")}
              </NavLink>
              <span className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleBothClickss}>
                {t("shop")}
              </span>
              <NavLink to="/aboutus" activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>
                {t("aboutus")}
              </NavLink>
              <NavLink to="/blog" activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>
                {t("blog")}
              </NavLink>
              <NavLink to="/contactus" activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>
                {t("contactus")}
              </NavLink>


            {/* =================================================== */}
            {/* =================================================== */}
            {/* =================================================== */}

             
            </div>
          </div>


          <div className='hidden items-center gap-8 lg:flex '>
            <img src={theme === 'light' ? lghtmode : drkmode} className='w-8 mr-8 cursor-pointer' onClick={() => dispatch(toggleTheme())} />
            <div onClick={() => navigate("cart")} className='relative'>
              <div className='absolute -top-3 -right-3 bg-red-700 text-white rounded-full w-5 h-5 flex items-center justify-center'>{carts?.length}</div>
              <SlBasket className='cursor-pointer text-gray-500 ml-8' size={28} />
            </div>
          </div>

          <div
            className={`language-selector ml-20 lg:block hidden ${isLanguageSelectorOpen ? 'open' : ''}`}
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

        </nav>
      </div>

    </>
  );
};

export default Navbarr;

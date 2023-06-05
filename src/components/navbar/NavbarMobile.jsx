import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from "../../redux/themeSlice";
import { SlBasket } from "react-icons/sl";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import lghtmode from "../../assets/icons/light-mode-svgrepo-com.svg";
import drkmode from "../../assets/icons/dark-mode-night-moon-svgrepo-com.svg";
import globalicon from "../../assets/icons/globalicon.png";
import English from "../../assets/icons/English.png";
import Azerbaijan from "../../assets/icons/Azerbaijan.png";

export default function NavbarMobile() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLanguageSelectorOpen(false);
  };

  const [t, i18n] = useTranslation("global");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts } = useSelector(state => state.carts);

  const handleClick = () => {
    animateScroll.scrollTo(1370);
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

  const theme = useSelector((state) => state.theme.mode);
  const themeClass = theme === 'light' ? 'bg-slate-50 text-black' : 'bg-gray-700 text-white';

  return (
    <div className='lg:hidden bg-gray-600 h-[205px] z-30 w-full'>
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-white text-2xl">
          {isMobileMenuOpen ? (
            <HiX onClick={toggleMobileMenu} />
          ) : (
            <HiMenuAlt3 onClick={toggleMobileMenu} />
          )}
        </div>
        <div className="text-white text-2xl">
          {/*  */}
          {/*  */}
        </div>
      </div>
      {isMobileMenuOpen && (
        <ul className='text-center'>
          <div className="px-[5px] pt-0 pb-2 space-y-1">
            <NavLink
              exact
              to="/"
              className={(navClass) => navClass.isActive ? "text-gray-400 font-bold border-b-2 border-gray-200" : "text-lg"}
              onClick={toggleMobileMenu}
            >
              {t("home")}
            </NavLink>
            <span
              className="cursor-pointer bg-gray-500  text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={handleBothClickss}
            >
              {t("shop")}
            </span>
            <NavLink
              to="/aboutus"
              className={(navClass) => navClass.isActive ? "text-gray-400 font-bold border-b-2 border-gray-200" : "block text-lg"}
              onClick={toggleMobileMenu}
            >
              {t("aboutus")}
            </NavLink>
            <NavLink
              to="/blog"
              className={(navClass) => navClass.isActive ? "text-gray-400 font-bold border-b-2 border-gray-200" : " block text-lg"}
              onClick={toggleMobileMenu}
            >
              {t("blog")}
            </NavLink>
            <NavLink
              to="/contactus"
              className={(navClass) => navClass.isActive ? " text-gray-400 font-bold border-b-2 border-gray-200" : "block text-lg"}
              onClick={toggleMobileMenu}
            >
              {t("contactus")}
            </NavLink>


            <div className='items-center text-center flex justify-around pt-4'>
              <img src={theme === 'light' ? lghtmode : drkmode} className='w-8 cursor-pointer' onClick={() => dispatch(toggleTheme())} />
              <div onClick={() => navigate("cart")} className='relative'>
                <div className='absolute -top-3 -right-3 bg-red-700 text-white rounded-full w-5 h-5 flex items-center justify-center'>{carts?.length}</div>
                <SlBasket className='cursor-pointer text-gray-500 ' size={28} />
              </div>
            </div>


            <div
              className={`language-selector ml-0  ${isLanguageSelectorOpen ? 'open' : ''}`}
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
          </div>
        </ul>
      )}

    </div>
  );
}

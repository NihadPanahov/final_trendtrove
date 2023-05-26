import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const NavbarMiddle = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobil menü durumunu takip etmek için state ekledik

  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();

  const handleClick = () => {
    animateScroll.scrollTo(720);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="My website description" />
        <link rel="canonical" href="http://www.example.com/" />
      </Helmet>

      <div className='flex items-center'>
        <ul className='md:flex p-6 items-center gap-16 cursor-pointer text-lg'>
          <NavLink to="/" className={(navClass) => navClass.isActive ? "text-gray-300 font-bold border-b-2 border-gray-200" : "text-lg"}> <li className=' hover:text-gray-600 hover:font-bold'>{t("home")}</li></NavLink>
          <li onClick={handleBothClickss} className=' hover:text-gray-300 hover:font-bold'>{t("shop")}</li>
          <NavLink to="/aboutus" className={(navClass) => navClass.isActive ? "text-gray-300 font-bold border-b-2 border-gray-200" : "text-lg"}> <li className=' hover:text-gray-600 hover:font-bold'>{t("aboutus")}</li></NavLink>
          <NavLink to="/blog" className={(navClass) => navClass.isActive ? "text-gray-300 font-bold border-b-2 border-gray-200" : "text-lg"}> <li className=' hover:text-gray-600 hover:font-bold'>{t("blog")}</li></NavLink>
          <NavLink onClick={notifyyy} to="/contactus" className={(navClass) => navClass.isActive ? "text-gray-400 font-bold border-b-2 border-gray-200" : "text-lg"}> <li className=' hover:text-gray-600 hover:font-bold'>{t("contactus")}</li></NavLink>
        </ul>
        {/* Mobil menü toogle butonu */}
        <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <div className="mobile-menu-icon"></div>
        </div>
      </div>

      
    </>
  );
};

export default NavbarMiddle;
